angular
  .module('altairApp')
  .controller(
    'LoginController',
    [
      '$scope',
      '$rootScope',
      '$state',
      '$q',
      '$timeout',
      'utils',
      'UserService',
      'BranchService',
      'authService',
      'Session',
      function($scope, $rootScope, $state, $q, $timeout, utils, UserService, BranchService, authService, Session) {
        
        if (Session.isLoginedIn() && Session.getDefaultPage() != null) {
          $state.go(Session.getDefaultPage());
        }

        $scope.user = new User();
        var $login_card = $('#login_card'),
          $login_section = $('#login_section'),
          $reset_password_section = $('#reset_password_section'),
          $login_form = $("#login_form").parsley();
        // event binding
        $scope.onSubmit = function($event) {
          if ($login_form.validate()) {
            $event.preventDefault();
            $scope.signInPromise = UserService.authenticate($scope.user.toJson()).then(function(response) {
              authService.loginConfirmed(response);
            });
          }
        };

        $scope.onUserTypeChange = function(type) {
          $scope.user.type = type;
          $scope.user.branchId = null;
        }

        $scope.branchSelect = {
          options : [],
          config : {   
            plugins : {
              'remove_button' : {
                label : ''
              }
            },
            create : false,
            maxItems : 1,
            placeholder : 'Branch Code *',
            valueField : 'id',
            labelField : 'code',
            searchField : 'code',
            render : {
              option : function(item, escape) {
                return '<div>' + '<span class="title">' + '<span class="name"><i class="uk-icon-home"></i> &nbsp;'
                  + escape(item.name)
                  + '</span>'
                  + '</span>'
                  + '<span class="description">'
                  + escape(item.code)
                  + ' </span>'
                  + '<ul class="meta">'
                  + '<li><span>'
                  + escape(item.contactDetailsId.addressLine1)
                  + ',</span></li>'
                  + ((item.contactDetailsId.addressLine2) ? ('<li><span>' + escape(item.contactDetailsId.addressLine2) + ', </span></li>')
                    : '') + '<li><span>' + escape(item.contactDetailsId.city) + ', </span></li>' + '<li><span>'
                  + escape(item.contactDetailsId.state) + ',</span></li>' + '<li><span>'
                  + escape(item.contactDetailsId.pinCode) + ',</span></li>' + '</ul>' + '</div>';
              }
            },
            onInitialize : function(selectize) {
              BranchService.findAll(1, 100, "name", "Branch.Details").then(function(response) {
                $scope.branchSelect.options = response.data.contents;
              })
            }
          }
        }

        $scope.onResetPassword = function($event) {
          $event.preventDefault();
          UserService.forgotPassword($scope.user.toJson()).then(function(response) {
            utils.card_show_hide($login_card, undefined, login_form_show, undefined);
            UIkit.notify({
              message : 'A new password has been sent to your registered Email/Mobile',
              status : 'success',
              pos : 'bottom-right',
              timeout : 1000
            });
          });
        };

        $scope.passwordReset = function($event) {
          $event.preventDefault();
          utils.card_show_hide($login_card, undefined, password_reset_show, undefined);
        };

        $scope.backToLogin = function($event) {
          $event.preventDefault();
          utils.card_show_hide($login_card, undefined, login_form_show, undefined);
        };

        // show login form (hide other forms)
        var login_form_show = function() {
          $login_section.show().siblings().hide();
        };

        // show password reset form (hide other forms)
        var password_reset_show = function() {
          $reset_password_section.show().siblings().hide();
        };

      } ])