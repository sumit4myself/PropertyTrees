angular.module('altairApp').controller('UserController',
	['$scope', '$rootScope', '$state', '$stateParams', '$timeout', '$q', 'UserService', 'RoleService', 'GroupService',
		function($scope, $rootScope, $state, $stateParams, $timeout, $q, UserService, RoleService, GroupService) {
			$scope.user = new User();
			$scope.mode = 'create';
			var $user_form = $("#user_form").parsley();

			// event binding
			$scope.onSave = function() {
				var promise = $user_form.whenValidate();
				promise.then(function() {
					$scope.savePromise = UserService.save($scope.user.toJson()).then(function(response) {
						UIkit.notify({
							message : 'User saved successfully.',
							status : 'success',
							pos : 'bottom-right',
							timeout : 1000
						});
						$state.go("restricted.admin.manageUser");
					});
				});
			}

			$scope.onUpdate = function() {
				var promise = $user_form.whenValidate();
				promise.then(function() {
					$scope.updatePromise = UserService.update($stateParams.id, $scope.user.toJson()).then(function(response) {
						UIkit.notify({
							message : 'User updated successfully.',
							status : 'success',
							pos : 'bottom-right',
							timeout : 1000
						});
						$state.go("restricted.admin.manageUser");
					});
				});
			}

			$scope.onAssignGroup = function() {
				$scope.assignGroupPromise = UserService.assignGroups($stateParams.id, $scope.user.tempGroupList.join()).then(function(response) {
					UIkit.notify({
						message : 'Group assigned successfully.',
						status : 'success',
						pos : 'bottom-right',
						timeout : 1000
					});
					$state.go("restricted.admin.manageUser");
				});
			}
			
			$scope.onAssignRole = function() {
		        $scope.assignRolePromise = UserService.assignRoles($stateParams.id, $scope.user.tempRoleList.join()).then(function(response) {
		          UIkit.notify({
		            message : 'Role assigned successfully.',
		            status : 'success',
		            pos : 'bottom-right',
		            timeout : 1000
		          });
		          $state.go("restricted.admin.manageUser");
		        });
		      }

			if ($stateParams.id != null) {
				$scope.mode = $stateParams.mode;
				UserService.find($stateParams.id, "User.Details").then(function(response) {
					$scope.user.copyProperties(response.data);
				});
			}

			$scope.onCancel = function() {
				$state.go("restricted.admin.manageUser");
			}

			$scope.onReset = function() {
				$scope.user = new User();
				if ($stateParams.id != null) {
					$scope.resetPromise = UserService.find($stateParams.id, "User.Details").then(function(response) {
						$scope.user.copyProperties(response.data);
					});
				}
			}

			$scope.roleSelect = {
				options : [],
				config : {
					plugins : {
						'remove_button' : {
							label : ''
						}
					},
					create : false,
					maxItems : 5,
					placeholder : 'Assign Roles',
					valueField : 'id',
					labelField : 'name',
					searchField : 'name',
					onInitialize : function(selectize) {
						RoleService.findByType('USER_DEFINED',"Role.NameId").then(function(response) {
							$scope.roleSelect.options = response.data.contents;
						})
					}
				}
			}

			$scope.groupSelect = {
				options : [],
				config : {
					plugins : {
						'remove_button' : {
							label : ''
						}
					},
					create : false,
					maxItems : 50,
					placeholder : 'Assign Group',
					valueField : 'id',
					labelField : 'name',
					searchField : 'name',
					onInitialize : function(selectize) {
						GroupService.findAll(1, 100, "name", "Group.NameId").then(function(response) {
							$scope.groupSelect.options = response.data.contents;
						})
					}
				}
			}

			window.Parsley.addValidator('isUserNameUnique', {
				requirementType : 'string',
				validateString : function(value, requirement) {
					var deferred = new $.Deferred(function() {
						UserService.isUnique($stateParams.id, requirement, value).then(function(response) {
							if (response.data) {
								deferred.resolve(true);
							} else {
								deferred.reject(false);
							}
						})
					})
					return deferred.promise();
				},
				messages : {
					en : 'Username already exists.',
				}
			});
		}])

	.controller('ManageUserController', ['$scope', '$rootScope', '$state', 'UserService', function($scope, $rootScope, $state, UserService) {
		$scope.selector = {
			"selectAll" : false,
			"selected" : []
		}

		$scope.sendPassword = function() {
			var selected = $scope.selector.selected;
			var selectedArray = '';
			var count=0;
			for (var i = 0; i < selected.length; i++) {
				if (typeof selected[i] != 'undefined' && selected[i]) {
					count++;
					if (i != selected.length - 1)
						selectedArray += i + ',';
					else
						selectedArray += i;
				}
			}
			if (selectedArray != '') {
				UIkit.modal.confirm('Message will be send to '+count+' users', function() {
				console.log($scope.selector.selected);
				UserService.sendPassword(selectedArray).then(function(response) {
						UIkit.notify({
	            message : 'Password has been sent to sletected user(s).',
	            status : 'success',
	            pos : 'bottom-right',
	            timeout : 1000
	          });
	          $state.reload();
					});
				

			});}
		};

		$scope.delete = function(id) {
			UIkit.modal.confirm('Are you sure?', function() {
				UserService.changeStatus(id, "D").then(function(response) {
					UIkit.notify({
						message : 'User deleted successfully.',
						status : 'success',
						pos : 'bottom-right',
						timeout : 1000
					});
					$state.reload();
				});
			});
		};
		$scope.activate = function(id) {
			UserService.changeStatus(id, "A").then(function(response) {
				UIkit.notify({
					message : 'User activated successfully.',
					status : 'success',
					pos : 'bottom-right',
					timeout : 1000
				});
			});
			$state.reload();
		};
		$scope.deactivate = function(id) {
			UIkit.modal.confirm('Are you sure?', function() {
				UserService.changeStatus(id, "I").then(function(response) {
					UIkit.notify({
						message : 'User deactivated successfully.',
						status : 'success',
						pos : 'bottom-right',
						timeout : 1000
					});
					$state.reload();
				});
			});
		};
	}])

	.controller('ManageUserTableController', function($compile, $scope, $timeout, UserService, Session, utils, DTOptionsBuilder, DTColumnBuilder) {
		var vm = this;
		vm.dt_data = [];
		vm.dtInstance = {};
		vm.dtOptions = DTOptionsBuilder
			.newOptions()
			.withFnServerData(function(sSource, aaData, fnCallback, oSettings) {
				var filter = utils.preparefilterDataFromDatatableData(aaData);
				UserService.search(filter, "User.Summary").then(function(response) {
					fnCallback(utils.prepareDatatableDataFromResponse(response));
				}, function(response) {
					fnCallback(utils.prepareDatatableDataFromResponse(null));
				});
			})
			.withOption('processing', true)
			.withOption('serverSide', true)
			.withOption('stateSave', true)
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
			})
			.withOption('fnDrawCallback', function(oSettings) {
				$timeout(function() {
					$compile($('user-permission'))($scope);
					$compile($('.icheck'))($scope);
				})
			})
			.withOption("aLengthMenu", [[5, 10, 25, 50, 100], [5, 10, 25, 50, 100]])
			.withPaginationType('full_numbers')
			.withDisplayLength(5);
		var columns = new Array();
		columns.push(DTColumnBuilder.newColumn("id").withTitle('<input type="checkbox" ng-model="selector.selectAll"  class="check_all icheck" table-check-all icheck>').notSortable().notSearchable()
			.renderWith(function(data) {
				return '<input " type="checkbox" ng-model="selector.selected[' + data + ']" class="check_row icheck" icheck table-check-row>';
			}).withClass('uk-width-1-10 small_col'));
		if (Session.isAdmin()) {
			columns.push(DTColumnBuilder.newColumn("schoolName").withTitle('School Name').notSortable().notSearchable());
			columns.push(DTColumnBuilder.newColumn("branchName").withTitle('Branch Name').notSortable().notSearchable());
		}
		if (Session.isSchoolAdmin()) {
			columns.push(DTColumnBuilder.newColumn("branchName").withTitle('Branch Name').notSortable().notSearchable());
		}
		columns.push(DTColumnBuilder.newColumn("updatedBy").withTitle('Updated By').notSortable().notSearchable());
		columns.push(DTColumnBuilder.newColumn("updatedOn").withTitle('Updated On').notSearchable());
		columns.push(DTColumnBuilder.newColumn("fullName").withTitle('Name'));
		columns.push(DTColumnBuilder.newColumn("usersServiceMap.module").withTitle('Type').notSearchable());
		columns.push(DTColumnBuilder.newColumn("userName").withTitle('User Name').withClass('uk-width-1-10'));
		columns.push(DTColumnBuilder.newColumn("mobile").withTitle('Mobile').withClass('uk-width-1-10'));
		columns.push(DTColumnBuilder.newColumn("email").withTitle('Email').withClass('uk-width-2-10')
	      .renderWith(function(data, type, full) {
	        if(full.email){
	          return full.email;
	        }else{
	          return "NA";
	        }
	      }));
		
		columns.push(DTColumnBuilder.newColumn("status").withTitle('Status').withClass('uk-width-1-10 small_col').renderWith(function(data) {
			if (data == "A") {
				return "<span class='uk-badge uk-badge-success'>Active</span>";
			} else {
				return "<span class='uk-badge uk-badge-danger'>Inactive</span>";
			}
		}).notSearchable());
		columns.push(DTColumnBuilder.newColumn("id").withTitle('Action').withClass('uk-width-1-10 small_col').notSortable().notSearchable()
			.renderWith(function(data, type, full) {
				var restricted = full.systemUser;
				return '<user-permission data-permission-for="restricted.admin.manageUser" data-id-value="' + data + '" data-allowing-permissions = "ASSIGN_GROUP,ASSIGN_ROLE,VIEW" data-restricted="' + restricted + '" data-status="'
					+ full.status + '" data-id-field="id" data-permission-type="MANAGE"/>';
			}));
		vm.dtColumns = columns;
	});