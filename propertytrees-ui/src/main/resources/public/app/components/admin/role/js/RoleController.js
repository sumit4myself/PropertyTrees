angular.module('altairApp').controller(
  'RoleController',
  [ '$scope', '$rootScope', '$state', '$stateParams', 'RoleService', 'RoleHierarchyeService', 'Session',
    function($scope, $rootScope, $state, $stateParams, RoleService, RoleHierarchyeService, Session) {
      // UI Models
      var $role_form = $("#role_form");
      init();
      $scope.mode = 'create';
      // event binding
      $scope.onSave = function() {
        if ($role_form.parsley().validate()) {
          $scope.role.setPermissions($scope.tempPermissions);
          $scope.savePromise = RoleService.save($scope.role.toJson()).then(function(response) {
            UIkit.notify({
              message : 'Role saved successfully.',
              status : 'success',
              pos : 'bottom-right',
              timeout : 1000
            });
            $state.go("restricted.admin.manageRole");
          });
        }
      }
      $scope.onUpdate = function() {
        if ($role_form.parsley().validate()) {
          $scope.role.setPermissions($scope.tempPermissions);
          $scope.updatePromise = RoleService.update($stateParams.id, $scope.role.toJson()).then(function(response) {
            UIkit.notify({
              message : 'Role updated successfully.',
              status : 'success',
              pos : 'bottom-right',
              timeout : 1000
            });
            $state.go("restricted.admin.manageRole");
          });
        }
      }

      $scope.onCancel = function() {
        $state.go("restricted.admin.manageRole");
      }

      $scope.onReset = function() {
        init();
      }

      $scope.onSelectAll = function(menuId) {
        $(Session.getMenus()).each(function(key, menu) {
          if (menu.id == menuId) {
            $.each(menu.permissions, function(key, permission) {
              if ($scope.selectAll[menuId] == null) {
                $scope.tempPermissions[permission.id] = null
              } else {
                $scope.tempPermissions[permission.id] = permission.id;
              }
            });
          } else if (menu.submenu != null) {
            $(menu.submenu).each(function(key, submenu) {
              if (submenu.id == menuId) {
                $.each(submenu.permissions, function(key, permission) {
                  if ($scope.selectAll[menuId] == null) {
                    $scope.tempPermissions[permission.id] = null
                  } else {
                    $scope.tempPermissions[permission.id] = permission.id;
                  }
                });
              }
            })
          }
        });
      }

      $scope.getIndex = function() {
        return $scope.totalIndex++;
      }

      $scope.levels = {
        options : [],
        config : {
          create : false,
          maxItems : 1,
          placeholder : 'Role Level',
          valueField : 'level',
          labelField : 'level',
          searchField : 'level',
          onInitialize : function(selectize) {
            if (Session.getRoleLevel()) {
              RoleHierarchyeService.findAllSubordinate(Session.getRoleLevel()).then(function(response) {
                $scope.levels.options = response.data.contents;
              });
            }
          },
        }
      }
      function init() {
        $scope.role = new Role();
        $scope.tempPermissions = new Array();
        $scope.selectAll = new Array();
        $scope.menus = Session.getMenus();
        $scope.totalIndex = 0;


        // handling edit request
        if ($stateParams.id != null) {
          $scope.mode = $stateParams.mode;
          RoleService.find($stateParams.id, "Role.Permission").then(function(response) {
            $scope.role.copyProperties(response.data);
            $scope.tempPermissions = $scope.role.getPermissions();
          });
        }
      }
    } ]).controller('ManageRoleController', [ '$scope', '$rootScope', '$state', 'RoleService', function($scope, $rootScope, $state, RoleService) {
  $scope.delete = function(id) {
    UIkit.modal.confirm('Are you sure?', function() {
      RoleService.changeStatus(id, "D").then(function(response) {
        UIkit.notify({
          message : 'Role deleted successfully.',
          status : 'success',
          pos : 'bottom-right',
          timeout : 1000
        });
        $state.reload();
      });
    });
  };
  $scope.activate = function(id) {
    RoleService.changeStatus(id, "A").then(function(response) {
      UIkit.notify({
        message : 'Role activated successfully.',
        status : 'success',
        pos : 'bottom-right',
        timeout : 1000
      });
      $state.reload();
    });
  };
  $scope.deactivate = function(id) {
    UIkit.modal.confirm('Are you sure?', function() {
      RoleService.changeStatus(id, "I").then(function(response) {
        UIkit.notify({
          message : 'Role deactivated successfully.',
          status : 'success',
          pos : 'bottom-right',
          timeout : 1000
        });
        $state.reload();
      });
    });
  };
} ]).controller('ManageRoleTableController', function($compile, $scope, $timeout, RoleService, utils, Session, DTOptionsBuilder,
  DTColumnBuilder) {
  var vm = this;
  vm.dt_data = [];
  vm.dtInstance = {};
  vm.dtOptions = DTOptionsBuilder.newOptions().withFnServerData(function(sSource, aaData, fnCallback, oSettings) {
    var filter = utils.preparefilterDataFromDatatableData(aaData);
    RoleService.search(filter, "Role.Summary").then(function(response) {
      fnCallback(utils.prepareDatatableDataFromResponse(response));
    }, function(response) {
      fnCallback(utils.prepareDatatableDataFromResponse(null));
    });
  })
    .withOption('processing', true)
    .withOption('serverSide', true)
    .withOption('stateSave', true)
    .withOption('fnDrawCallback', function(oSettings) {
      $timeout(function() {
        $compile($('user-permission'))($scope);
      })
    })
    .withOption('initComplete', function($table) {
      $timeout(function() {

        var exclude = new Array();
        $($table.aoColumns).each(function() {
          if (this.mData != "schoolName" && this.mData != "branchName" && this.mData != "updatedBy" && this.mData != "updatedOn") {
            exclude.push(this.idx);
          }
        });
        var $dt_colVis = vm.dtInstance.dataTable;
        dt_colVis = vm.dtInstance.DataTable;

        // init colVis
        var colvis = new $.fn.dataTable.ColVis(dt_colVis, {
          buttonText : 'Select columns',
          exclude : exclude,
          showAll : "Show all",
          showNone : "Show none"
        });

        // custom colVis elements
        var _colVis_button = $(colvis.dom.button).off('click').attr('class', 'md-btn md-btn-colVis');
        var _colVis_wrapper = $('<div class="uk-button-dropdown uk-text-left" data-uk-dropdown="{mode:\'click\',pos:\'bottom-left\'}"/>').append(_colVis_button);
        var _colVis_wrapper_outer = $('<div class="md-colVis uk-text-left"/>').append(_colVis_wrapper);
        var _colVis_collection = $(colvis.dom.collection);

        // Modify colVis collection
        $(_colVis_collection).attr({
          'class' : 'md-list-inputs',
          'style' : ''
        })
          .find('input').each(function(index) {
          var inputClone = $(this).clone().hide();
          $(this).attr({
            'icheck' : '',
            'class' : 'md-icheck',
            'ng-model' : 'col_icheck_' + index,
            'ng-checked' : $table.aoColumns[index].bVisible,
            'id' : 'col_' + index
          })
            .css({
              'float' : 'left'
            }).before(inputClone)
        }).end().find('span').unwrap().each(function() {
          var thisText = $(this).text();
          var thisInputId = $(this).prev('input').attr('id');
          $(this).after('<label for="' + thisInputId + '">' + thisText + '</label>').end()
        }).remove();

        // append collection to collection wrapper
        var _colVis_collection_wrapper = $('<div class="uk-dropdown"/>').append(_colVis_collection);

        // append collection wrapper to colVis wrapper
        _colVis_wrapper.append(_colVis_collection_wrapper);

        // insert colVis elements before datatable header
        $dt_colVis.closest('.dt-uikit').find('.dt-uikit-header').before(_colVis_wrapper_outer);

        // custom events
        $dt_colVis.closest('.dt-uikit').find('.md-colVis .md-icheck').on('ifClicked', function() {
          $(this).closest('li').click();
        });

        $dt_colVis.closest('.dt-uikit').find('.md-colVis .ColVis_ShowAll').on('click', function() {
          $(this).closest('.uk-dropdown').find('.md-icheck').prop('checked', true).iCheck('update')
        });

        $dt_colVis.closest('.dt-uikit').find('.md-colVis .ColVis_ShowNone').on('click', function() {
          $(this).closest('.uk-dropdown').find('.md-icheck').prop('checked', false).iCheck('update')
        });

        // md checkboxes
        $compile($('.dt-uikit .md-icheck'))($scope);
        // md inputs
        $compile($('.dt-uikit .md-input'))($scope);
      })
    }).withOption("aLengthMenu", [ [ 5, 10, 25, 50, 100 ], [ 5, 10, 25, 50, 100 ] ])
    .withPaginationType('full_numbers')
    .withDisplayLength(5);
  var columns = new Array();
  if (Session.isAdmin()) {
    columns.push(DTColumnBuilder.newColumn("schoolName").withTitle('School Name').notSortable().notSearchable());
    columns.push(DTColumnBuilder.newColumn("branchName").withTitle('Branch Name').notSortable().notSearchable());
  } else if (Session.isSchoolAdmin()) {
    columns.push(DTColumnBuilder.newColumn("branchName").withTitle('Branch Name').notSortable().notSearchable());
  }
  columns.push(DTColumnBuilder.newColumn("updatedBy").withTitle('Updated By').notSortable().notSearchable());
  columns.push(DTColumnBuilder.newColumn("updatedOn").withTitle('Updated On').notSearchable());
  columns.push(DTColumnBuilder.newColumn("name").withTitle('Name'));
  columns.push(DTColumnBuilder.newColumn("level").withTitle('Level').notSearchable());
  columns.push(DTColumnBuilder.newColumn("status").withTitle('Status').withClass('uk-width-1-10 small_col').renderWith(function(data) {
    if (data == "A") {
      return "<span class='uk-badge uk-badge-success'>Active</span>";
    } else {
      return "<span class='uk-badge uk-badge-danger'>Inactive</span>";
    }
  }).notSearchable());
  columns.push(DTColumnBuilder.newColumn("id").withTitle('Action').withClass('uk-width-1-10 small_col').notSortable().notSearchable()
    .renderWith(
      function(data, type, full) {
        var restricted = false;
        if (Session.isSchoolAdmin()) {
          restricted = (full.schoolId || full.schoolId == null)
        } else if (Session.isBranchAdmin()) {
          restricted = (full.branchId || full.branchId == null)
        }
        return '<user-permission data-permission-for="restricted.admin.manageRole" data-id-value="' + data
          + '" data-status="' + full.status + '" data-restricted="' + restricted + '" data-allowing-permissions = "VIEW" data-id-field="id" data-permission-type="MANAGE"/>';
      }));
  vm.dtColumns = columns;
});