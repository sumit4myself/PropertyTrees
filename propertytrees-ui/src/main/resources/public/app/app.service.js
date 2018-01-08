altairApp
  .service('detectBrowser', [ '$window', function($window) {
    // http://stackoverflow.com/questions/22947535/how-to-detect-browser-using-angular
    return function() {
      var userAgent = $window.navigator.userAgent,
        browsers = {
          chrome : /chrome/i,
          safari : /safari/i,
          firefox : /firefox/i,
          ie : /internet explorer/i
        };

      for (var key in browsers) {
        if (browsers[key].test(userAgent)) {
          return key;
        }
      }
      return 'unknown';
    }
  } ])
  .service(
    'preloaders',
    [
      '$rootScope',
      '$timeout',
      'utils',
      function($rootScope, $timeout, utils) {
        $rootScope.content_preloader_show = function(style, container) {
          var $body = $('body');
          if (!$body.find('.content-preloader').length) {
            var image_density = utils.isHighDensity() ? '@2x' : '';

            var preloader_content = (typeof style !== 'undefined' && style == 'regular') ? '<img src="assets/img/spinners/spinner'
            + image_density + '.gif" alt="" width="32" height="32">'
              : '<div class="md-preloader"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" height="32" width="32" viewbox="0 0 75 75"><circle cx="37.5" cy="37.5" r="33.5" stroke-width="8"/></svg></div>';

            var thisContainer = (typeof container !== 'undefined') ? container : $body;

            thisContainer.append('<div class="content-preloader">' + preloader_content + '</div>');
            $timeout(function() {
              $('.content-preloader').addClass('preloader-active');
            });
          }
        };
        $rootScope.content_preloader_hide = function() {
          var $body = $('body');
          if ($body.find('.content-preloader').length) {
            // hide preloader
            $('.content-preloader').removeClass('preloader-active');
            // remove preloader
            $timeout(function() {
              $('.content-preloader').remove();
            }, 500);
          }
        };

      } ])

  .service('Session', [ 'variables', function(variables) {
    this.login = function(userDetails) {
      $(userDetails.menuList).each(function() {
        $(this.submenu).each(function() {
          if (this.link == 'restricted.dashboards') {
            if (userDetails.level == "SUPER_ADMIN" || userDetails.level == "ADMIN" || userDetails.level == "SCHOOL_ADMIN" || userDetails.level == "BRANCH_ADMIN") {
              this.link = "restricted.dashboards.admin";
            } else if (userDetails.level == "GUARDIAN") {
              this.link = "restricted.dashboards.guardian";
            } else if (userDetails.level == "STUDENT") {
              this.link = "restricted.dashboards.student";
            } else {
              this.link = "restricted.dashboards.staff";
            }
          }
          if (this.id == userDetails.defaultPage) {
            userDetails.defaultPage = this.link
          }
        })
      });
      this["LUSD"] = userDetails;
      localStorage.setItem("LUSD", angular.toJson(userDetails));
    };

    this.isLoginedIn = function() {
      if (this["LUSD"] != null) {
        return true;
      }
      var userDetailsJson = localStorage.getItem("LUSD");
      if (userDetailsJson != null) {
        this["LUSD"] = angular.fromJson(userDetailsJson);
        return true;
      }
      return false;
    };

    this.logout = function() {
      this["LUSD"] = null;
      localStorage.removeItem("LUSD");
    };

    this.getUserDetails = function() {
      return this["LUSD"];
    };

    this.getSessionYear = function() {
      if (this["LUSD"].sessionYear != null) {
        return this["LUSD"].sessionYear;
      }
      return null;
    };
    
    
    this.getSchoolName = function(){
    	if (this["LUSD"]) {
            return this["LUSD"].schoolName;
        }
    }
    
    this.getBranchName = function(){
    	if (this["LUSD"]) {
            return this["LUSD"].branchName;
        }
    }
    
    this.getDefaultPage = function() {
      return this["LUSD"].defaultPage;
    };

    this.setCurrentState = function(state, params) {
      localStorage.setItem("CurrentState", angular.toJson({
        "name" : state,
        "params" : params
      }));
    };

    this.getCurrentState = function(state, params) {
      return angular.fromJson(localStorage.getItem("CurrentState"));
    };

    this.getModule = function() {
      return this["LUSD"].usersServiceMap.module;
    }

    this.getUserId = function() {
      return this["LUSD"].id;
    };

    this.getRemoteId = function() {
      return this["LUSD"].usersServiceMap.remoteId;
    }

    this.getRoleLevel = function() {
      return this["LUSD"].level;
    };

    this.isAdmin = function() {
      if (this["LUSD"].level == "SUPER_ADMIN" || this["LUSD"].level == "ADMIN") {
        return true;
      }
      return false;
    };

    this.isSuperAdmin = function() {
      if (this["LUSD"].level == "SUPER_ADMIN") {
        return true;
      }
      return false;
    };

    this.isSchoolAdmin = function() {
      if (this["LUSD"].level == "SCHOOL_ADMIN") {
        return true;
      }
      return false;
    };

    this.isBranchAdmin = function() {
      if (this["LUSD"].level == "BRANCH_ADMIN") {
        return true;
      }
      return false;
    };

    this.getSchoolId = function() {
      return this["LUSD"].schoolId;
    };

    this.getBranchId = function() {
      return this["LUSD"].branchId;
    };

    this.getSessionYearId = function() {
      if (this["LUSD"].sessionYear != null) {
        return this["LUSD"].sessionYear.id;
      }
      return null;
    };

    this.isAuthorized = function(sref) {
      var granted = true;
      $(variables.publicPages).each(function() {
        if (this == sref) {
          granted = true;
          return false;
        }
      });

      $(this["LUSD"].menuList).each(function() {
        if (this.link == sref) {
          $(this.permissions).each(function() {
            if (this.link.indexOf(sref) >= 0) {
              granted = true;
              return false;
            }
          })

        } else if (this.submenu != null) {
          $(this.submenu).each(function() {
            if (this.link == sref) {
              granted = true;
              return false;
            }
            $(this.permissions).each(function() {
              if (this.link.indexOf(sref) >= 0) {
                granted = true;
                return false;
              }
            })

          })
        }
      });
      return granted;
    };

    this.getMenus = function() {
      return this["LUSD"].menuList;
    };

    this.getRoles = function() {
      return this["LUSD"].roleList;
    };

    this.getGroups = function() {
      return this["LUSD"].groupList;
    };

    this.getGroupIds = function() {
      var groupIds = new Array();
      $(this["LUSD"].groupList).each(function() {
        groupIds.push(this.id);
      });
      return groupIds;
    };

    this.getPermissions = function(menuSref) {
      var permissions = new Array();
      $(this["LUSD"].menuList).each(function() {
        if (this.link == menuSref) {
          permissions = this.permissions;
        } else if (this.submenu != null) {
          $(this.submenu).each(function() {
            if (this.link == menuSref) {
              permissions = this.permissions;
            }
          })
        }
      });
      return permissions;
    }
    return this;
  } ]);