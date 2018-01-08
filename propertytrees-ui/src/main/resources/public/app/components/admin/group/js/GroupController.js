angular.module('altairApp').controller(
	'GroupController',
	[
		'$scope',
		'$rootScope',
		'$state',
		'$stateParams',
		'Session',
		'GroupService',
		'SchoolService',
		'BranchService',
		'CourseService',
		'BatchService',
		'GuardianService',
		'StudentService',
		'DepartmentService',
		'StaffService',
		function($scope, $rootScope, $state, $stateParams, Session, GroupService, SchoolService, BranchService, CourseService,
			BatchService, GuardianService, StudentService, DepartmentService, StaffService) {
			// UI Models
			
			var $group_form = $("#group_form").parsley();
			init();
			$scope.mode = 'create';
			// event binding
			$scope.onSave = function() {
				if ($group_form.validate({
						group : "group"
					})) {
					$scope.savePromise = GroupService.save($scope.group.toJson()).then(function(response) {
						UIkit.notify({
							message : 'Group saved successfully.',
							status : 'success',
							pos : 'bottom-right',
							timeout : 1000
						});
						$state.go("restricted.admin.manageGroup");
					});
				}
			}

			$scope.onUpdate = function() {
				if ($group_form.validate({
						group : "group"
					})) {
					$scope.updatePromise = GroupService.update($stateParams.id, $scope.group.toJson()).then(function(response) {
						UIkit.notify({
							message : 'Group updated successfully.',
							status : 'success',
							pos : 'bottom-right',
							timeout : 1000
						});
						$state.go("restricted.admin.manageGroup");
					});
				}
			}

			$scope.onCancel = function() {
				$state.go("restricted.admin.manageGroup");
			}

			$scope.onReset = function() {
				init();
			}

			$scope.onAddMember = function() {
				if (!$group_form.validate({
						group : "group-type"
					})) {
					return;
				}
				var ignoredMember = [];
				var members = [];
				if ($scope.groupMember.groupType == "GUARDIAN") {
					if ($scope.students.length > 0) {
						angular.forEach($scope.guardians, function(value, key) {
							var member = new GroupMember();
							member.groupType = "GUARDIAN";
							member.memberType = "GUARDIAN";
							member.memberName = getGuardianName(value);
							member.memberId = value;
							members.push(member);
						});
					} else if ($scope.batches.length > 0) {
						angular.forEach($scope.batches, function(value, key) {
							var member = new GroupMember();
							member.groupType = "GUARDIAN";
							member.memberType = "BATCH";
							member.memberName = getBatchName(value);
							member.memberId = value;
							members.push(member);
						});
					} else if ($scope.courses.length > 0) {
						angular.forEach($scope.courses, function(value, key) {
							var member = new GroupMember();
							member.groupType = "GUARDIAN";
							member.memberType = "COURSE";
							member.memberName = getCourseName(value);
							member.memberId = value;
							members.push(member);
						});
					} else if ($scope.branches.length > 0) {
						angular.forEach($scope.branches, function(value, key) {
							var member = new GroupMember();
							member.groupType = "GUARDIAN";
							member.memberType = "BRANCH";
							member.memberName = getBranchName(value);
							member.memberId = value;
							members.push(member);
						});
					} else {
						angular.forEach($scope.schools, function(value, key) {
							var member = new GroupMember();
							member.groupType = "GUARDIAN";
							member.memberType = "SCHOOL";
							member.memberName = getSchoolName(value);
							member.memberId = value;
							members.push(member);
						});
					}
				} else if ($scope.groupMember.groupType == "STUDENT") {
					if ($scope.students.length > 0) {
						angular.forEach($scope.students, function(value, key) {
							var member = new GroupMember();
							member.groupType = "STUDENT";
							member.memberType = "STUDENT";
							member.memberName = getStudentName(value);
							member.memberId = value;
							members.push(member);
						});
					} else if ($scope.batches.length > 0) {
						angular.forEach($scope.batches, function(value, key) {
							var member = new GroupMember();
							member.groupType = "STUDENT";
							member.memberType = "BATCH";
							member.memberName = getBatchName(value);
							member.memberId = value;
							members.push(member);
						});
					} else if ($scope.courses.length > 0) {
						angular.forEach($scope.courses, function(value, key) {
							var member = new GroupMember();
							member.groupType = "STUDENT";
							member.memberType = "COURSE";
							member.memberName = getCourseName(value);
							member.memberId = value;
							members.push(member);
						});
					} else if ($scope.branches.length > 0) {
						angular.forEach($scope.branches, function(value, key) {
							var member = new GroupMember();
							member.groupType = "STUDENT";
							member.memberType = "BRANCH";
							member.memberName = getBranchName(value);
							member.memberId = value;
							members.push(member);
						});
					} else {
						angular.forEach($scope.schools, function(value, key) {
							var member = new GroupMember();
							member.groupType = "STUDENT";
							member.memberType = "SCHOOL";
							member.memberName = getSchoolName(value);
							member.memberId = value;
							members.push(member);
						});
					}
				} else if ($scope.groupMember.groupType == "STAFF") {
					if ($scope.staffs.length > 0) {
						angular.forEach($scope.staffs, function(value, key) {
							var member = new GroupMember();
							member.groupType = "STAFF";
							member.memberType = "STAFF";
							member.memberName = getStaffName(value);
							member.memberId = value;
							members.push(member);
						});
					} else if ($scope.departments.length > 0) {
						angular.forEach($scope.departments, function(value, key) {
							var member = new GroupMember();
							member.groupType = "STAFF";
							member.memberType = "DEPARTMENT";
							member.memberName = getDepartmentName(value);
							member.memberId = value;
							members.push(member);
						});
					} else if ($scope.branches.length > 0) {
						angular.forEach($scope.branches, function(value, key) {
							var member = new GroupMember();
							member.groupType = "STAFF";
							member.memberType = "BRANCH";
							member.memberName = getBranchName(value);
							member.memberId = value;
							members.push(member);
						});
					} else {
						angular.forEach($scope.schools, function(value, key) {
							var member = new GroupMember();
							member.groupType = "STAFF";
							member.memberType = "SCHOOL";
							member.memberName = getSchoolName(value);
							member.memberId = value;
							members.push(member);
						});
					}
				}
				ignoredMember = $scope.group.addMembers(members);
				if (ignoredMember.length > 0) {
					UIkit.notify({
						message : 'Following member(s) ignored [ ' + ignoredMember.join() + ' ].',
						status : 'warning',
						pos : 'bottom-right',
						timeout : 5000
					});
				}

				if (!Session.isSchoolAdmin())
					$scope.schools = new Array();

				if (!Session.isBranchAdmin())
					$scope.branches = new Array();

				$scope.departments = new Array();
				$scope.staffs = new Array();
				$scope.courses = new Array();
				$scope.batches = new Array();
				$scope.guardians = new Array();
				$scope.students = new Array();
				$scope.groupMember.groupType = "";
			}

			$scope.onDeleteMember = function($index) {
				$scope.group.groupMembers.splice($index, 1);
			}

			$scope.groupMemberSelect = {
				options : [
					// {
					// "name" : "GUARDIAN"
					// },
					{
						"name" : "STUDENT"
					}, {
						"name" : "STAFF"
					}],
				config : {
					create : false,
					maxItems : 1,
					placeholder : 'Member Type',
					valueField : 'name',
					labelField : 'name',
					searchField : 'name',
					onChange : function(id) {
						if (!Session.isSchoolAdmin())
							$scope.schools = new Array();

						if (!Session.isBranchAdmin())
							$scope.branches = new Array();

						$scope.departments = new Array();
						$scope.staffs = new Array();
						$scope.courses = new Array();
						$scope.batches = new Array();
						$scope.guardians = new Array();
						$scope.students = new Array();
					}
				}
			}

			$scope.schoolSelect = {
				options : [],
				config : {
					plugins : {
						'remove_button' : {
							label : ''
						}
					},
					create : false,
					maxItems : 5,
					placeholder : 'School *',
					valueField : 'id',
					labelField : 'name',
					searchField : 'name',
					onInitialize : function(selectize) {
						if (Session.isAdmin()) {
							SchoolService.findAll(1, 100, "name", "School.NameId").then(function(response) {
								$scope.schoolSelect.options = response.data.contents;
							});
						} else if (Session.isSchoolAdmin()) {
							SchoolService.find(Session.getSchoolId(), "School.NameId").then(function(response) {
								$scope.schoolSelect.options.push(response.data);
								$scope.schools.push(Session.getSchoolId());
							});
						}
					},
					onChange : function(id) {
						$scope.batches = new Array();
						$scope.departments = new Array();
						$scope.staffs = new Array();
						$scope.courses = new Array();
						$scope.guardians = new Array();
						$scope.students = new Array();
						BranchService.findBySchoolIds($scope.schools.join(), 1, 100, "name", "Branch.NameId").then(function(response) {
							$scope.branchSelect.options = response.data.contents;
						});
					}
				}
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
					maxItems : 50,
					placeholder : 'Section *',
					valueField : 'id',
					labelField : 'name',
					searchField : 'name',
					onInitialize : function(selectize) {
						if (Session.isSchoolAdmin()) {
							BranchService.findAll(1, 100, "name", "Branch.NameId").then(function(response) {
								$scope.branchSelect.options = response.data.contents;
							});
						} else if (Session.isBranchAdmin()) {
							BranchService.find(Session.getBranchId(), "Branch.NameId").then(function(response) {
								$scope.branchSelect.options.push(response.data);
								$scope.branches.push(Session.getBranchId());
							});
						}
					},
					onChange : function(id) {
						$scope.departments = new Array();
						$scope.staffs = new Array();
						$scope.courses = new Array();
						$scope.batches = new Array();
						$scope.guardians = new Array();
						$scope.students = new Array();
						if ($scope.groupMember.groupType == 'STUDENT' || $scope.groupMember.groupType == 'GUARDIAN') {
							if ($scope.branches.length > 0) {
								CourseService.findByBranchIds($scope.branches.join(), 1, 100, "name", "Course.NameId").then(
									function(response) {
										$scope.courseSelect.options = response.data.contents;
									});
							}
						} else {
							if ($scope.branches.length > 0) {
								DepartmentService.findByBranchIds($scope.branches.join(), 1, 100, "name", "Department.NameId").then(
									function(response) {
										$scope.departmentSelect.options = response.data.contents;
									});
							}
						}
					}
				}
			}

			$scope.courseSelect = {
				options : [],
				config : {
					plugins : {
						'remove_button' : {
							label : ''
						}
					},
					create : false,
					maxItems : 50,
					placeholder : 'Class *',
					valueField : 'id',
					labelField : 'name',
					searchField : 'name',
					onInitialize : function(selectize) {
						if (Session.isBranchAdmin()) {
							CourseService.findByBranchIds(Session.getBranchId(), 1, 100, "name", "Course.NameId").then(
								function(response) {
									$scope.courseSelect.options = response.data.contents;
								});
						}
					},
					onChange : function(id) {
						if ($scope.courses.length > 0) {
							BatchService.findByCourseIds($scope.courses.join(), 1, 100, "name", "Batch.NameId").then(function(response) {
								$scope.batchSelect.options = response.data.contents;
							});
						}
					}
				}
			}

			$scope.batchSelect = {
				options : [],
				config : {
					plugins : {
						'remove_button' : {
							label : ''
						}
					},
					create : false,
					maxItems : 50,
					placeholder : 'Batch *',
					valueField : 'id',
					labelField : 'name',
					searchField : 'name',
					onChange : function(id) {
						if ($scope.courses.length > 0) {
							StudentService.findByBatchIds($scope.batches.join(), 1, 100, "name", "Student.NameId").then(function(response) {
								$scope.studentSelect.options = response.data.contents;
							});
						}
					}
				}
			}

			$scope.guardianSelect = {
				options : [],
				config : {
					plugins : {
						'remove_button' : {
							label : ''
						}
					},
					create : false,
					maxItems : 50,
					placeholder : 'Guardian *',
					valueField : 'id',
					labelField : 'name',
					searchField : 'name',
				}
			}

			$scope.studentSelect = {
				options : [],
				config : {
					plugins : {
						'remove_button' : {
							label : ''
						}
					},
					create : false,
					maxItems : 50,
					placeholder : 'Student *',
					valueField : 'id',
					labelField : 'name',
					searchField : 'name',
				}
			}

			$scope.departmentSelect = {
				options : [],
				config : {
					plugins : {
						'remove_button' : {
							label : ''
						}
					},
					create : false,
					maxItems : 50,
					placeholder : 'Department *',
					valueField : 'id',
					labelField : 'name',
					searchField : 'name',
					onChange : function(id) {
						$scope.staffs = new Array();
						if ($scope.departments.length > 0) {
							StaffService.findByDepartmentIds($scope.departments.join(), 1, 100, "name", "Staff.NameId").then(
								function(response) {
									$scope.staffSelect.options = response.data.contents;
								});
						}
					}
				}
			}

			$scope.staffSelect = {
				options : [],
				config : {
					plugins : {
						'remove_button' : {
							label : ''
						}
					},
					create : false,
					maxItems : 50,
					placeholder : 'Staff *',
					valueField : 'id',
					labelField : 'name',
					searchField : 'name',
				}
			}

			function getSchoolName(id) {
				var name = "";
				angular.forEach($scope.schoolSelect.options, function(value, key) {
					if (value.id == id) {
						name = value.name;
					}
				});
				return name;
			}

			function getBranchName(id) {
				var name = "";
				angular.forEach($scope.branchSelect.options, function(value, key) {
					if (value.id == id) {
						name = value.name;
					}
				});
				return name;
			}

			function getCourseName(id) {
				var name = "";
				angular.forEach($scope.courseSelect.options, function(value, key) {
					if (value.id == id) {
						name = value.name;
					}
				});
				return name;
			}

			function getBatchName(id) {
				var name = "";
				angular.forEach($scope.batchSelect.options, function(value, key) {
					if (value.id == id) {
						name = value.name;
					}
				});
				return name;
			}

			function getStudentName(id) {
				var name = "";
				angular.forEach($scope.studentSelect.options, function(value, key) {
					if (value.id == id) {
						name = value.name;
					}
				});
				return name;
			}

			function getGuardianName(id) {
				var name = "";
				angular.forEach($scope.guardianSelect.options, function(value, key) {
					if (value.id == id) {
						name = value.name;
					}
				});
				return name;
			}

			function getDepartmentName(id) {
				var name = "";
				angular.forEach($scope.departmentSelect.options, function(value, key) {
					if (value.id == id) {
						name = value.name;
					}
				});
				return name;
			}

			function getStaffName(id) {
				var name = "";
				angular.forEach($scope.staffSelect.options, function(value, key) {
					if (value.id == id) {
						name = value.name;
					}
				});
				return name;
			}
			
			function init() {
				$scope.group = new Group();
				$scope.groupMember = new GroupMember();
				$scope.userType = Session.getUserDetails().level;
				$scope.schools = new Array();
				$scope.branches = new Array();
				$scope.departments = new Array();
				$scope.staffs = new Array();
				$scope.courses = new Array();
				$scope.batches = new Array();
				$scope.guardians = new Array();
				$scope.students = new Array();

				// handling edit request
				if ($stateParams.id != null) {
					$scope.mode = $stateParams.mode;
					GroupService.find($stateParams.id, "Group.Details").then(function(response) {
						$scope.group.copyProperties(response.data);
					});
				}
		      }
			
		}])

	.controller('ManageGroupController', ['$scope', '$rootScope', '$state', 'GroupService', function($scope, $rootScope, $state, GroupService) {
		$scope.delete = function(id) {
			UIkit.modal.confirm('Are you sure?', function() {
				GroupService.changeStatus(id, "D").then(function(response) {
					UIkit.notify({
						message : 'Group deleted successfully.',
						status : 'success',
						pos : 'bottom-right',
						timeout : 1000
					});
					$state.reload();
				});
			});
		};
		$scope.activate = function(id) {
			GroupService.changeStatus(id, "A").then(function(response) {
				UIkit.notify({
					message : 'Group activated successfully.',
					status : 'success',
					pos : 'bottom-right',
					timeout : 1000
				});
				$state.reload();
			});
		};
		$scope.deactivate = function(id) {
			UIkit.modal.confirm('Are you sure?', function() {
				GroupService.changeStatus(id, "I").then(function(response) {
					UIkit.notify({
						message : 'Group deactivated successfully.',
						status : 'success',
						pos : 'bottom-right',
						timeout : 1000
					});
					$state.reload();
				});
			});
		};
	}])

	.controller('ManageGroupTableController', function($compile, $scope, $timeout, GroupService, utils, Session, DTOptionsBuilder, DTColumnBuilder) {
		var vm = this;
		vm.dt_data = [];
		vm.dtInstance = {};
		vm.dtOptions = DTOptionsBuilder
			.newOptions()
			.withFnServerData(function(sSource, aaData, fnCallback, oSettings) {
				var filter = utils.preparefilterDataFromDatatableData(aaData);
				GroupService.search(filter, "Group.Summary").then(function(response) {
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
						if (this.mData != "schoolName" && this.mData != "branchName" && this.mData != "userName" && this.mData != "updatedOn") {
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
				})
			})
			.withOption("aLengthMenu", [[5, 10, 25, 50, 100], [5, 10, 25, 50, 100]])
			.withPaginationType('full_numbers')
			.withDisplayLength(5);
		var columns = new Array();
		if (Session.isAdmin()) {
			columns.push(DTColumnBuilder.newColumn("schoolName").withTitle('School Name').notSortable().notSearchable());
			columns.push(DTColumnBuilder.newColumn("branchName").withTitle('Branch Name').notSortable().notSearchable());
		}
		
		if (Session.isSchoolAdmin()) {
			columns.push(DTColumnBuilder.newColumn("branchName").withTitle('Branch Name').notSortable().notSearchable());
		}
		columns.push(DTColumnBuilder.newColumn("updatedBy").withTitle('Updated By').notSortable().notSearchable());
		columns.push(DTColumnBuilder.newColumn("updatedOn").withTitle('Updated On').notSearchable());
		columns.push(DTColumnBuilder.newColumn("name").withTitle('Name'));
		columns.push(DTColumnBuilder.newColumn("groupMembers").withTitle('Total members').notSortable().notSearchable()
			      .renderWith(function(data, type, full) {
			        return data.length
			      }));
		columns.push(DTColumnBuilder.newColumn("status").withTitle('Status').withClass('uk-width-1-10').renderWith(function(data) {
			if (data == "A") {
				return "<span class='uk-badge uk-badge-success'>Active</span>";
			} else {
				return "<span class='uk-badge uk-badge-danger'>Inactive</span>";
			}
		}).notSearchable());
		columns.push(DTColumnBuilder.newColumn("id").withTitle('Action').withClass('uk-width-1-10 small_col').notSortable().notSearchable()
			.renderWith(function(data, type, full) {
				return '<user-permission data-permission-for="restricted.admin.manageGroup" data-id-value="' + data + '" data-status="'
					+ full.status + '" data-id-field="id" data-permission-type="MANAGE"/>';
			}));
		vm.dtColumns = columns;
	});