angular.module('altairApp').controller(
    'main_sidebarCtrl',
    [
        '$timeout',
        '$scope',
        '$rootScope',
        '$state',
        'Session',
        function($timeout, $scope, $rootScope, $state, Session) {
          $scope.$on('onLastRepeat', function(scope, element, attrs) {
            $timeout(function() {
              if (!$rootScope.miniSidebarActive) {
                // activate current section
                $('#sidebar_main').find('.current_section > a').trigger('click');
              } else {
                // add tooltips to mini sidebar
                var tooltip_elem = $('#sidebar_main').find('.menu_tooltip');
                tooltip_elem.each(function() {
                  var $this = $(this);

                  $this.attr('title', $this.find('.menu_title').text());
                  UIkit.tooltip($this, {
                    pos : 'right'
                  });
                });
              }
            })
          });
          // language switcher
          $scope.langSwitcherModel = 'gb';
          var langData = $scope.langSwitcherOptions = [
            {
              id : 1,
              title : 'English',
              value : 'gb'
            }
          ];
          $scope.langSwitcherConfig = {
            maxItems : 1,
            render : {
              option : function(langData, escape) {
                return '<div class="option">' + '<i class="item-icon flag-' + escape(langData.value).toUpperCase()
                    + '"></i>' + '<span>' + escape(langData.title) + '</span>' + '</div>';
              },
              item : function(langData, escape) {
                return '<div class="item"><i class="item-icon flag-' + escape(langData.value).toUpperCase()
                    + '"></i></div>';
              }
            },
            valueField : 'value',
            labelField : 'title',
            searchField : 'title',
            create : false,
            onInitialize : function(selectize) {
              $('#lang_switcher').next().children('.selectize-input').find('input').attr('readonly', true);
            }
          };
          $scope.sections = Session.getMenus();
          $scope.hasPermission = function(menu) {
            var hasPermission = false;
            if ($state.includes(menu.link)) {
              hasPermission = true;
            }
            angular.forEach(menu.permissions, function(value, index) {
              if ($state.includes(value.link)) {
                hasPermission = true;
              }
            })
            return hasPermission;
          }

        }
    ]);