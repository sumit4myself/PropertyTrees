altairApp
  .config([
    '$stateProvider',
    '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

      // Use $urlRouterProvider to configure any redirects (when)
      // and
      // invalid urls (otherwise).
      $urlRouterProvider.when('/login', '/').otherwise('/');

      $stateProvider
        // -- ERROR PAGES --
        .state("error", {
          url : "/error",
          templateUrl : 'app/views/error.html',
          resolve : {
            deps : [ '$ocLazyLoad', function($ocLazyLoad) {
              return $ocLazyLoad.load([ 'lazy_uikit' ]);
            } ]
          }
        }).state("error.404", {
        url : "/404",
        templateUrl : 'app/components/pages/error_404View.html'
      }).state("error.403", {
        url : "/403",
        templateUrl : 'app/components/pages/error_404View.html'
      }).state("error.500", {
        url : "/500",
        templateUrl : 'app/components/pages/error_500View.html'
      })

        // -- LOGIN PAGE --
        .state(
          "login",
          {
            url : "/",
            templateUrl : 'app/components/admin/user/LoginForm.html',
            controller : 'LoginController',
            resolve : {
              deps : [
                '$ocLazyLoad',
                function($ocLazyLoad) {
                  return $ocLazyLoad.load([ 'lazy_selectizeJS', 'lazy_parsleyjs', 'lazy_uikit', 'lazy_iCheck',
                    'app/components/admin/user/js/LoginController.js',
                    'app/components/schools/branch/js/BranchService.js', 'app/components/admin/user/js/UserService.js',
                    'app/components/admin/user/js/UserModel.js' ]);
                } ]
            }
          })

        // -- RESTRICTED --
        .state(
          "restricted",
          {
            abstract : true,
            url : "",
            views : {
              'main_header' : {
                templateUrl : 'app/shared/header/headerView.html',
                controller : 'main_headerCtrl'
              },
              'main_sidebar' : {
                templateUrl : 'app/shared/main_sidebar/main_sidebarView.html',
                controller : 'main_sidebarCtrl'
              },
              '' : {
                templateUrl : 'app/views/restricted.html'
              }
            },
            resolve : {
              deps : [
                '$ocLazyLoad',
                function($ocLazyLoad) {
                  return $ocLazyLoad.load([ 'lazy_parsleyjs', 'lazy_datatables', 'lazy_uikit', 'lazy_selectizeJS',
                    'lazy_switchery', 'lazy_character_counter', 'lazy_prismJS', 'lazy_autosize', 'lazy_iCheck',
                    'lazy_themes', 'lazy_style_switcher', 'app/shared/header/headerController.js',
                    'app/shared/main_sidebar/main_sidebarController.js' ]);
                } ]
            }
          })

        .state("restricted.profile", {
          url : "/profile",
          template : '<div ui-view autoscroll="false"/>',
          abstract : true
        })

        .state(
          "restricted.profile.view",
          {
            url : "/view",
            templateUrl : 'app/components/profile/ProfileView.html',
            controller : 'ProfileViewController',
            resolve : {
              deps : [
                '$ocLazyLoad',
                function($ocLazyLoad) {
                  return $ocLazyLoad.load([ 'app/components/profile/js/ProfileModel.js',
                    'app/components/profile/js/ProfileService.js', 'app/components/profile/js/ProfileController.js' ]);
                } ]
            },
            data : {
              pageTitle : 'Profile View'
            }
          }).state(
        "restricted.profile.edit",
        {
          url : "/edit",
          templateUrl : 'app/components/profile/ProfileEdit.html',
          controller : 'ProfileEditController',
          params : {
            id : null,
            module : null
          },
          resolve : {
            deps : [
              '$ocLazyLoad',
              function($ocLazyLoad) {
                return $ocLazyLoad.load([ 'lazy_ng_dropzone', 'app/components/profile/js/ProfileModel.js',
                  'assets/js/custom/uikit_fileinput.min.js', 'app/components/profile/js/ProfileService.js',
                  'app/components/profile/js/ProfileController.js' ], {
                  serie : true
                });
              } ]
          },
          data : {
            pageTitle : 'Profile Edit'
          }
        })

        .state(
          "restricted.profile.studentEdit",
          {
            url : "/studentEdit",
            templateUrl : 'app/components/profile/ProfileEdit.html',
            controller : 'ProfileEditController',
            params : {
              id : null,
              module : null
            },
            resolve : {
              deps : [
                '$ocLazyLoad',
                function($ocLazyLoad) {
                  return $ocLazyLoad.load([ 'lazy_ng_dropzone', 'app/components/profile/js/ProfileModel.js',
                    'assets/js/custom/uikit_fileinput.min.js', 'app/components/profile/js/ProfileService.js',
                    'app/components/profile/js/ProfileController.js' ], {
                    serie : true
                  });
                } ]
            },
            data : {
              pageTitle : 'Profile Edit'
            }
          })

        .state("restricted.settings", {
          url : "/settings",
          template : '<div ui-view autoscroll="false"/>',
          abstract : true
        })


        .state(
          "restricted.settings.application",
          {
            url : "/application",
            templateUrl : 'app/components/settings/application/settingsForm.html',
            controller : 'ApplicationSettingsController',
            resolve : {
              deps : [
                '$ocLazyLoad',
                function($ocLazyLoad) {
                  return $ocLazyLoad.load([ 'lazy_ionRangeSlider', 'lazy_pwswitch',
                    'app/components/settings/application/js/SettingsController.js',
                    'app/components/settings/application/js/SettingsService.js',
                    'app/components/settings/application/js/SettingsModel.js' ]);
                } ]
            }
          })
        .state(
          "restricted.settings.environment",
          {
            url : "/environment",
            templateUrl : 'app/components/settings/environment/settingsForm.html',
            controller : 'EnvironmentSettingsController',
            resolve : {
              deps : [
                '$ocLazyLoad',
                function($ocLazyLoad) {
                  return $ocLazyLoad.load([ 'lazy_ionRangeSlider', 'lazy_pwswitch',
                    'app/components/settings/environment/js/SettingsController.js',
                    'app/components/settings/environment/js/SettingsService.js',
                    'app/components/settings/environment/js/SettingsModel.js' ]);
                } ]
            }
          })


        .state(
          "restricted.settings.eventsource",
          {
            url : "/eventsource",
            templateUrl : 'app/components/settings/eventsource/settingsForm.html',
            controller : 'EventSourceSettingsController',
            resolve : {
              deps : [
                '$ocLazyLoad',
                function($ocLazyLoad) {
                  return $ocLazyLoad.load([ 'lazy_ionRangeSlider', 'lazy_pwswitch',
                    'app/components/settings/eventsource/js/SettingsController.js',
                    'app/components/settings/eventsource/js/SettingsService.js',
                    'app/components/settings/eventsource/js/SettingsModel.js' ]);
                } ]
            }
          })

        .state(
          "restricted.settings.approval",
          {
            url : "/approval",
            templateUrl : 'app/components/settings/approval/settingsForm.html',
            controller : 'ApprovalSettingsController',
            resolve : {
              deps : [
                '$ocLazyLoad',
                function($ocLazyLoad) {
                  return $ocLazyLoad.load([ 'lazy_ionRangeSlider', 'lazy_pwswitch',
                    'app/components/settings/approval/js/SettingsController.js',
                    'app/components/settings/approval/js/SettingsService.js',
                    'app/components/settings/approval/js/SettingsModel.js',
                    'app/components/admin/role/js/RoleService.js' ]);
                } ]
            }
          })

        // inventory service ui mapping
        // ****************************************************************************************
        .state("restricted.inventory", {
          url : "/inventory",
          template : '<div ui-view autoscroll="false"/>',
          abstract : true
        })

        .state(
          "restricted.inventory.manageBook",
          {
            url : "/manageBooks",
            templateUrl : 'app/components/inventory/book/manageBook.html',
            controller : 'ManageBookTableController',
            params : {
              id : null,
              mode : null
            },
            resolve : {
              deps : [
                '$ocLazyLoad',
                function($ocLazyLoad) {
                  return $ocLazyLoad
                    .load([ 'lazy_datatables', 'app/components/inventory/book/js/BookController.js',
                      'app/components/inventory/book/js/BookService.js',
                      'app/components/schools/course/js/CourseService.js',
                      'app/components/inventory/book/js/BookModel.js' ]);
                } ]
            }
          })

        .state(
          "restricted.inventory.book",
          {
            url : "/book",
            templateUrl : 'app/components/inventory/book/bookForm.html',
            controller : 'BookController',
            params : {
              id : null,
              mode : null
            },
            resolve : {
              deps : [
                '$ocLazyLoad',
                function($ocLazyLoad) {
                  return $ocLazyLoad
                    .load([ 'lazy_datatables', 'app/components/inventory/book/js/BookController.js',
                      'app/components/inventory/book/js/BookService.js',
                      'app/components/schools/course/js/CourseService.js',
                      'app/components/inventory/book/js/BookModel.js' ]);
                } ]
            }
          })

        .state(
          "restricted.inventory.manageUniform",
          {
            url : "/manageUniform",
            templateUrl : 'app/components/inventory/uniform/manageUniform.html',
            controller : 'ManageUniformTableController',
            params : {
              id : null,
              mode : null
            },
            resolve : {
              deps : [
                '$ocLazyLoad',
                function($ocLazyLoad) {
                  return $ocLazyLoad.load([ 'lazy_datatables', 'app/components/inventory/uniform/js/UniformController.js',
                    'app/components/inventory/uniform/js/UniformService.js',
                    'app/components/inventory/uniform/js/UniformModel.js' ]);
                } ]
            }
          })

        .state(
          "restricted.inventory.uniform",
          {
            url : "/uniform",
            templateUrl : 'app/components/inventory/uniform//uniform.html',
            controller : 'UniformController',
            params : {
              id : null,
              mode : null
            },
            resolve : {
              deps : [
                '$ocLazyLoad',
                function($ocLazyLoad) {
                  return $ocLazyLoad.load([ 'lazy_datatables', 'app/components/inventory/uniform/js/UniformController.js',
                    'app/components/inventory/uniform/js/UniformService.js',
                    'app/components/inventory/uniform/js/UniformModel.js' ]);
                } ]
            }
          })

        .state(
          "restricted.inventory.manageUniformSet",
          {
            url : "/manageUniformSet",
            templateUrl : 'app/components/inventory/uniform/manageUniformSet.html',
            controller : 'ManageUniformSetTableController',
            params : {
              id : null,
              mode : null
            },
            resolve : {
              deps : [
                '$ocLazyLoad',
                function($ocLazyLoad) {
                  return $ocLazyLoad.load([ 'lazy_datatables',
                    'app/components/inventory/uniform/js/UniformSetController.js',
                    'app/components/inventory/uniform/js/UniformSetService.js',
                    'app/components/students/student/js/StudentService.js',
                    'app/components/schools/course/js/CourseService.js',
                    'app/components/inventory/uniform/js/UniformSetModel.js' ]);
                } ]
            }
          })

        .state(
          "restricted.inventory.uniformSet",
          {
            url : "/uniformSet",
            templateUrl : 'app/components/inventory/uniform/uniformSet.html',
            controller : 'UniformSetController',
            params : {
              id : null,
              mode : null
            },
            resolve : {
              deps : [
                '$ocLazyLoad',
                function($ocLazyLoad) {
                  return $ocLazyLoad.load([ 'lazy_datatables',
                    'app/components/inventory/uniform/js/UniformSetController.js',
                    'app/components/inventory/uniform/js/UniformSetService.js',
                    'app/components/inventory/uniform/js/UniformSetModel.js',
                    'app/components/students/student/js/StudentService.js',
                    'app/components/schools/course/js/CourseService.js',
                    'app/components/inventory/uniform/js/UniformService.js' ]);
                } ]
            }
          })

        .state(
          "restricted.inventory.manageBookIssue",
          {
            url : "/manageBookIssue",
            templateUrl : 'app/components/inventory/library/manageBookIssue.html',
            controller : 'ManageBookIssueController',
            params : {
              id : null,
              mode : null
            },
            resolve : {
              deps : [
                '$ocLazyLoad',
                function($ocLazyLoad) {
                  return $ocLazyLoad.load([ 'lazy_datatables',
                    'app/components/inventory/library/js/BookIssueController.js',
                    'app/components/inventory/library/js/BookIssueService.js',
                    'app/components/students/student/js/StudentService.js',
                    'app/components/schools/course/js/CourseService.js',
                    'app/components/schools/batch/js/BatchService.js',
                    'app/components/inventory/library/js/BookIssueModel.js',
                    'app/components/inventory/book/js/BookService.js'

                  ]);
                } ]
            }
          })

        .state(
          "restricted.inventory.bookIssue",
          {
            url : "/bookIssue",
            templateUrl : 'app/components/inventory/library/bookIssueForm.html',
            controller : 'BookIssueController',
            params : {
              id : null,
              mode : null
            },
            resolve : {
              deps : [
                '$ocLazyLoad',
                function($ocLazyLoad) {
                  return $ocLazyLoad
                    .load([ 'lazy_datatables', 'app/components/inventory/library/js/BookIssueController.js',
                      'app/components/inventory/library/js/BookIssueService.js',
                      'app/components/inventory/library/js/BookIssueModel.js',
                      'app/components/students/student/js/StudentService.js',
                      'app/components/schools/course/js/CourseService.js',
                      'app/components/schools/batch/js/BatchService.js',
                      'app/components/inventory/book/js/BookService.js' ]);
                } ]
            }
          })

        .state(
          "restricted.inventory.manageOrder",
          {
            url : "/manageOrder",
            templateUrl : 'app/components/inventory/order/manageOrder.html',
            controller : 'ManageOrderController',
            params : {
              id : null,
              mode : null
            },
            resolve : {
              deps : [
                '$ocLazyLoad',
                function($ocLazyLoad) {
                  return $ocLazyLoad.load([ 'lazy_datatables', 'app/components/inventory/order/js/OrderController.js',
                    'app/components/inventory/order/js/OrderService.js',
                    'app/components/schools/course/js/CourseService.js',
                    'app/components/inventory/order/js/OrderModel.js' ]);
                } ]
            }
          })

        .state(
          "restricted.inventory.order",
          {
            url : "/order",
            templateUrl : 'app/components/inventory/order/orderForm.html',
            controller : 'OrderController',
            params : {
              id : null,
              mode : null
            },
            resolve : {
              deps : [
                '$ocLazyLoad',
                function($ocLazyLoad) {
                  return $ocLazyLoad
                    .load([ 'lazy_datatables', 'app/components/inventory/order/js/OrderController.js',
                      'app/components/inventory/order/js/OrderService.js',
                      'app/components/schools/course/js/CourseService.js',
                      'app/components/inventory/order/js/OrderModel.js',
                      'app/components/inventory/book/js/BookService.js' ]);
                } ]
            }
          })

        // student service ui mapping
        // ****************************************************************************************
        .state("restricted.students", {
          url : "/students",
          template : '<div ui-view autoscroll="false"/>',
          abstract : true
        })

        .state(
          "restricted.students.manageStudent",
          {
            url : "/manageStudent",
            templateUrl : 'app/components/students/student/manageStudent.html',
            controller : 'ManageStudentController',
            params : {
              id : null,
              mode : null
            },
            resolve : {
              deps : [
                '$ocLazyLoad',
                function($ocLazyLoad) {
                  return $ocLazyLoad.load([ 'lazy_datatables', 'app/components/students/student/js/StudentController.js',
                    'app/components/students/student/js/StudentService.js',
                    'app/components/students/student/js/StudentModel.js' ]);
                } ]
            }
          })

        .state(
          "restricted.students.student",
          {
            url : "/student",
            templateUrl : 'app/components/students/student/studentForm.html',
            controller : 'StudentController',
            params : {
              id : null,
              mode : null
            },
            resolve : {
              deps : [
                '$ocLazyLoad',
                function($ocLazyLoad) {
                  return $ocLazyLoad.load([ 'lazy_parsleyjs', 'lazy_ng_dropzone', 'lazy_wizard', 'lazy_pwswitch',
                    'app/components/students/student/js/StudentController.js',
                    'app/components/students/student/js/StudentService.js',
                    'app/components/students/guardian/js/GuardianService.js',
                    'app/components/students/student/js/StudentModel.js' ]);
                } ]
            }
          })

        .state(
          "restricted.students.manageAdmissionQuota",
          {
            url : "/manageAdmissionQuota",
            templateUrl : 'app/components/students/admissionQuota/AdmissionQuotaManage.html',
            controller : 'ManageAdmissionQuotaController',
            params : {
              id : null,
              mode : null
            },
            resolve : {
              deps : [
                '$ocLazyLoad',
                function($ocLazyLoad) {
                  return $ocLazyLoad.load([ 'lazy_datatables',
                    'app/components/students/admissionQuota/js/AdmissionQuotaController.js',
                    'app/components/students/admissionQuota/js/AdmissionQuotaService.js',
                    'app/components/students/admissionQuota/js/AdmissionQuotaModel.js' ]);
                } ]
            }
          })

        .state(
          "restricted.students.admissionQuota",
          {
            url : "/admissionQuota",
            templateUrl : 'app/components/students/admissionQuota/AdmissionQuotaForm.html',
            controller : 'AdmissionQuotaController',
            params : {
              id : null,
              mode : null
            },
            resolve : {
              deps : [
                '$ocLazyLoad',
                function($ocLazyLoad) {
                  return $ocLazyLoad.load([ 'lazy_parsleyjs',
                    'app/components/students/admissionQuota/js/AdmissionQuotaController.js',
                    'app/components/students/admissionQuota/js/AdmissionQuotaService.js',
                    'app/components/students/admissionQuota/js/AdmissionQuotaModel.js' ]);
                } ]
            }
          })

        .state(
          "restricted.students.manageAdmission",
          {
            url : "/manageAdmission",
            templateUrl : 'app/components/students/admission/AdmissionManage.html',
            controller : 'ManageAdmissionController',
            params : {
              id : null,
              mode : null
            },
            resolve : {
              deps : [
                '$ocLazyLoad',
                function($ocLazyLoad) {
                  return $ocLazyLoad.load([ 'lazy_datatables',
                    'app/components/students/admission/js/AdmissionController.js',
                    'app/components/students/admission/js/AdmissionService.js',
                    'app/components/students/admission/js/AdmissionModel.js' ]);
                } ]
            }
          })

        .state(
          "restricted.students.admission",
          {
            url : "/admission",
            templateUrl : 'app/components/students/admission/AdmissionForm.html',
            controller : 'AdmissionController',
            params : {
              id : null,
              mode : null
            },
            resolve : {
              deps : [
                '$ocLazyLoad',
                function($ocLazyLoad) {
                  return $ocLazyLoad.load([ 'lazy_parsleyjs', 'lazy_wizard', 'lazy_google_maps',
                    'app/components/students/admission/js/AdmissionController.js',
                    'app/components/students/admission/js/AdmissionService.js',
                    'app/components/students/student/js/StudentService.js',
                    'app/components/students/admissionQuota/js/AdmissionQuotaService.js',
                    'app/components/students/admission/js/AdmissionModel.js',
                    'app/components/schools/course/js/CourseService.js',
                    'app/components/schools/batch/js/BatchService.js',
                    'app/components/fees/category/js/FeeCategoryService.js',
                    'app/components/fees/waiver/js/FeeWaiverService.js' ]);
                } ]
            }
          })

        .state(
          "restricted.students.assignElectiveSubject",
          {
            url : "/assignElectiveSubject",
            templateUrl : 'app/components/students/electiveSubject/AssignElectiveSubjectForm.html',
            controller : 'AssignElectiveSubjectController',
            params : {
              id : null,
              mode : null
            },
            resolve : {
              deps : [
                '$ocLazyLoad',
                function($ocLazyLoad) {
                  return $ocLazyLoad.load([ 'lazy_parsleyjs', 'app/components/students/student/js/StudentService.js',
                    'app/components/schools/course/js/CourseService.js',
                    'app/components/schools/batch/js/BatchService.js',
                    'app/components/schools/syllabus/js/SyllabusService.js',
                    'app/components/students/electiveSubject/js/ElectiveSubjectController.js',
                    'app/components/students/electiveSubject/js/ElectiveSubjectService.js',
                    'app/components/students/electiveSubject/js/ElectiveSubjectModel.js' ]);
                } ]
            }
          })

        .state("restricted.transport", {
          url : "/transport",
          template : '<div ui-view autoscroll="false"/>',
          abstract : true
        })
        .state(
          "restricted.transport.manageVehicleType",
          {
            url : "/manageVehicleType",
            templateUrl : 'app/components/transport/vehicleType/manageVehicleType.html',
            controller : 'ManageVehicleTypeController',
            params : {
              id : null,
              mode : null
            },
            resolve : {
              deps : [
                '$ocLazyLoad',
                function($ocLazyLoad) {
                  return $ocLazyLoad
                    .load([
                      'lazy_datatables',
                      'app/components/transport/vehicleType/js/VehicleTypeController.js',
                      'app/components/transport/vehicleType/js/VehicleTypeService.js',
                      'app/components/transport/vehicleType/js/VehicleTypeModel.js' ]);
                } ]
            }
          })

        .state(
          "restricted.transport.vehicleType",
          {
            url : "/vehicleType",
            templateUrl : 'app/components/transport/vehicleType/vehicleTypeForm.html',
            controller : 'VehicleTypeController',
            params : {
              id : null,
              mode : null
            },
            resolve : {
              deps : [
                '$ocLazyLoad',
                function($ocLazyLoad) {
                  return $ocLazyLoad
                    .load([
                      'lazy_datatables',
                      'app/components/transport/vehicleType/js/VehicleTypeController.js',
                      'app/components/transport/vehicleType/js/VehicleTypeService.js',
                      'app/components/transport/vehicleType/js/VehicleTypeModel.js' ]);
                } ]
            }
          })
        .state(
          "restricted.transport.manageVehicle",
          {
            url : "/manageVehicle",
            templateUrl : 'app/components/transport/vehicle/manageVehicle.html',
            controller : 'ManageVehicleController',
            params : {
              id : null,
              mode : null
            },
            resolve : {
              deps : [
                '$ocLazyLoad',
                function($ocLazyLoad) {
                  return $ocLazyLoad.load([ 'lazy_datatables', 'app/components/transport/vehicle/js/VehicleController.js',
                    'app/components/transport/vehicle/js/VehicleService.js',
                    'app/components/transport/vendor/js/VendorService.js',
                    'app/components/staffs/staff/js/StaffService.js',
                    'app/components/transport/vehicle/js/VehicleModel.js',
                    'app/components/transport/vendor/js/VendorModel.js' ]);
                } ]
            }
          })

        .state(
          "restricted.transport.vehicle",
          {
            url : "/vehicle",
            templateUrl : 'app/components/transport/vehicle/vehicleForm.html',
            controller : 'VehicleController',
            params : {
              id : null,
              mode : null
            },
            resolve : {
              deps : [
                '$ocLazyLoad',
                function($ocLazyLoad) {
                  return $ocLazyLoad.load([ 'lazy_datatables', 'app/components/transport/vehicle/js/VehicleController.js',
                    'app/components/transport/vehicle/js/VehicleService.js',
                    'app/components/transport/vehicleType/js/VehicleTypeService.js',
                    'app/components/transport/vendor/js/VendorService.js',
                    'app/components/staffs/staff/js/StaffService.js',
                    'app/components/transport/vehicle/js/VehicleModel.js',
                    'app/components/transport/vendor/js/VendorModel.js' ]);
                } ]
            }
          })

        .state(
          "restricted.transport.manageVendor",
          {
            url : "/manageVendor",
            templateUrl : 'app/components/transport/vendor/manageVendor.html',
            controller : 'ManageVendorController',
            params : {
              id : null,
              mode : null
            },
            resolve : {
              deps : [
                '$ocLazyLoad',
                function($ocLazyLoad) {
                  return $ocLazyLoad.load([ 'lazy_datatables', 'app/components/transport/vendor/js/VendorController.js',
                    'app/components/transport/vendor/js/VendorService.js',
                    'app/components/transport/vendor/js/VendorModel.js' ]);
                } ]
            }
          })

        .state(
          "restricted.transport.vendor",
          {
            url : "/Vendor",
            templateUrl : 'app/components/transport/vendor/vendorForm.html',
            controller : 'VendorController',
            params : {
              id : null,
              mode : null
            },
            resolve : {
              deps : [
                '$ocLazyLoad',
                function($ocLazyLoad) {
                  return $ocLazyLoad.load([ 'lazy_datatables', 'app/components/transport/vendor/js/VendorController.js',
                    'app/components/transport/vendor/js/VendorService.js',
                    'app/components/transport/vendor/js/VendorModel.js' ]);
                } ]
            }
          })

        .state("restricted.hostel", {
          url : "/hostels",
          template : '<div ui-view autoscroll="false"/>',
          abstract : true
        })

        .state(
          "restricted.hostel.hostel",
          {
            url : "/hostel",
            templateUrl : 'app/components/hostel/hostel/hostelForm.html',
            controller : 'HostelController',
            params : {
              id : null,
              mode : null
            },
            resolve : {
              deps : [
                '$ocLazyLoad',
                function($ocLazyLoad) {
                  return $ocLazyLoad
                    .load([ 'lazy_datatables', 'app/components/hostel/hostel/js/HostelController.js',
                      'app/components/hostel/hostel/js/HostelService.js',
                      'app/components/hostel/hostel/js/HostelModel.js',
                      'app/components/staffs/staff/js/StaffService.js',
                      'app/components/staffs/staff/js/StaffService.js', ]);
                } ]
            }
          })

        .state(
          "restricted.hostel.manageHostel",
          {
            url : "/manageHostels",
            templateUrl : 'app/components/hostel/hostel/manageHostel.html',
            controller : 'ManageHostelController',
            params : {
              id : null,
              mode : null
            },
            resolve : {
              deps : [
                '$ocLazyLoad',
                function($ocLazyLoad) {
                  return $ocLazyLoad.load([ 'lazy_datatables', 'app/components/hostel/hostel/js/HostelController.js',
                    'app/components/hostel/hostel/js/HostelService.js', 'app/components/hostel/hostel/js/HostelModel.js',
                    'app/components/staffs/staff/js/StaffService.js' ]);
                } ]
            }
          })

        .state(
          "restricted.hostel.assetCategory",
          {
            url : "/assetCategory",
            templateUrl : 'app/components/hostel/asset/assetCategoryForm.html',
            controller : 'AssetCategoryController',
            params : {
              id : null,
              mode : null
            },
            resolve : {
              deps : [
                '$ocLazyLoad',
                function($ocLazyLoad) {
                  return $ocLazyLoad.load([ 'lazy_datatables', 'app/components/hostel/asset/js/AssetCategoryController.js',
                    'app/components/hostel/asset/js/AssetCategoryService.js',
                    'app/components/hostel/asset/js/AssetCategoryModel.js' ]);
                } ]
            }
          })

        .state(
          "restricted.hostel.manageAssetCategory",
          {
            url : "/manageAssetCategory",
            templateUrl : 'app/components/hostel/asset/manageAssetCategory.html',
            controller : 'ManageAssetCategoryController',
            params : {
              id : null,
              mode : null
            },
            resolve : {
              deps : [
                '$ocLazyLoad',
                function($ocLazyLoad) {
                  return $ocLazyLoad.load([ 'lazy_datatables', 'app/components/hostel/asset/js/AssetCategoryController.js',
                    'app/components/hostel/asset/js/AssetCategoryService.js',
                    'app/components/hostel/asset/js/AssetCategoryModel.js' ]);
                } ]
            }
          })

        .state(
          "restricted.hostel.roomCategory",
          {
            url : "/roomCategory",
            templateUrl : 'app/components/hostel/room/roomCategoryForm.html',
            controller : 'RoomCategoryController',
            params : {
              id : null,
              mode : null
            },
            resolve : {
              deps : [
                '$ocLazyLoad',
                function($ocLazyLoad) {
                  return $ocLazyLoad.load([ 'lazy_datatables', 'app/components/hostel/room/js/RoomCategoryController.js',
                    'app/components/hostel/room/js/RoomCategoryService.js',
                    'app/components/hostel/room/js/RoomCategoryModel.js' ]);
                } ]
            }
          })

        .state(
          "restricted.hostel.manageRoomCategory",
          {
            url : "/manageRoomCategory",
            templateUrl : 'app/components/hostel/room/manageRoomCategory.html',
            controller : 'ManageRoomCategoryController',
            params : {
              id : null,
              mode : null
            },
            resolve : {
              deps : [
                '$ocLazyLoad',
                function($ocLazyLoad) {
                  return $ocLazyLoad.load([ 'lazy_datatables', 'app/components/hostel/room/js/RoomCategoryController.js',
                    'app/components/hostel/room/js/RoomCategoryService.js',
                    'app/components/hostel/room/js/RoomCategoryModel.js' ]);
                } ]
            }
          })

        .state(
          "restricted.hostel.asset",
          {
            url : "/asset",
            templateUrl : 'app/components/hostel/asset/assetForm.html',
            controller : 'AssetController',
            params : {
              id : null,
              mode : null
            },
            resolve : {
              deps : [
                '$ocLazyLoad',
                function($ocLazyLoad) {
                  return $ocLazyLoad.load([ 'lazy_datatables', 'app/components/hostel/asset/js/AssetController.js',
                    'app/components/hostel/asset/js/AssetService.js', 'app/components/hostel/asset/js/AssetModel.js',
                    'app/components/hostel/asset/js/AssetCategoryService.js' ]);
                } ]
            }
          })

        .state(
          "restricted.hostel.manageAsset",
          {
            url : "/manageAsset",
            templateUrl : 'app/components/hostel/asset/manageAsset.html',
            controller : 'ManageAssetController',
            params : {
              id : null,
              mode : null
            },
            resolve : {
              deps : [
                '$ocLazyLoad',
                function($ocLazyLoad) {
                  return $ocLazyLoad.load([ 'lazy_datatables', 'app/components/hostel/asset/js/AssetController.js',
                    'app/components/hostel/asset/js/AssetService.js', 'app/components/hostel/asset/js/AssetModel.js',
                    'app/components/hostel/asset/js/AssetCategoryService.js' ]);
                } ]
            }
          })

        .state(
          "restricted.hostel.room",
          {
            url : "/room",
            templateUrl : 'app/components/hostel/room/roomForm.html',
            controller : 'RoomController',
            params : {
              id : null,
              mode : null
            },
            resolve : {
              deps : [
                '$ocLazyLoad',
                function($ocLazyLoad) {
                  return $ocLazyLoad.load([ 'lazy_datatables', 'app/components/hostel/room/js/RoomController.js',
                    'app/components/hostel/room/js/RoomService.js', 'app/components/hostel/room/js/RoomModel.js',
                    'app/components/hostel/hostel/js/HostelService.js', 'app/components/hostel/asset/js/AssetService.js',
                    'app/components/hostel/room/js/RoomCategoryService.js' ]);
                } ]
            }
          })

        .state(
          "restricted.hostel.manageRoom",
          {
            url : "/manageRoom",
            templateUrl : 'app/components/hostel/room/manageRoom.html',
            controller : 'ManageRoomController',
            params : {
              id : null,
              mode : null
            },
            resolve : {
              deps : [
                '$ocLazyLoad',
                function($ocLazyLoad) {
                  return $ocLazyLoad.load([ 'lazy_datatables', 'app/components/hostel/room/js/RoomController.js',
                    'app/components/hostel/room/js/RoomService.js', 'app/components/hostel/room/js/RoomModel.js',
                    'app/components/hostel/hostel/js/HostelService.js', 'app/components/hostel/asset/js/AssetService.js',
                    'app/components/hostel/room/js/RoomCategoryService.js' ]);
                } ]
            }
          })

        .state(
          "restricted.hostel.roomAllocation",
          {
            url : "/roomAllocation",
            templateUrl : 'app/components/hostel/roomAllocation/roomAllocationForm.html',
            controller : 'RoomAllocationController',
            params : {
              id : null,
              mode : null
            },
            resolve : {
              deps : [
                '$ocLazyLoad',
                function($ocLazyLoad) {
                  return $ocLazyLoad.load([ 'lazy_datatables',
                    'app/components/hostel/roomAllocation/js/RoomAllocationController.js',
                    'app/components/hostel/roomAllocation/js/RoomAllocationService.js',
                    'app/components/hostel/roomAllocation/js/RoomAllocationModel.js',
                    'app/components/students/student/js/StudentService.js', 'app/components/hostel/room/js/RoomModel.js',
                    'app/components/hostel/room/js/RoomService.js', 'app/components/hostel/hostel/js/HostelService.js',
                    'app/components/hostel/asset/js/AssetService.js' ]);
                } ]
            }
          })

        .state(
          "restricted.hostel.manageRoomAllocation",
          {
            url : "/manageRoomAllocation",
            templateUrl : 'app/components/hostel/roomAllocation/manageRoomAllocation.html',
            controller : 'ManageRoomAllocationController',
            params : {
              id : null,
              mode : null
            },
            resolve : {
              deps : [
                '$ocLazyLoad',
                function($ocLazyLoad) {
                  return $ocLazyLoad.load([ 'lazy_datatables',
                    'app/components/hostel/roomAllocation/js/RoomAllocationController.js',
                    'app/components/hostel/roomAllocation/js/RoomAllocationService.js',
                    'app/components/hostel/roomAllocation/js/RoomAllocationModel.js',
                    'app/components/students/student/js/StudentService.js', 'app/components/hostel/room/js/RoomModel.js',
                    'app/components/hostel/room/js/RoomService.js', 'app/components/hostel/asset/js/AssetService.js',
                    'app/components/hostel/hostel/js/HostelService.js' ]);
                } ]
            }
          })

        .state("restricted.exams", {
          url : "/exams",
          template : '<div ui-view autoscroll="false"/>',
          abstract : true
        }).state(
        "restricted.exams.manageExam",
        {
          url : "/manageExam",
          templateUrl : 'app/components/results/exams/manageExam.html',
          controller : 'ManageExamController',
          params : {
            id : null,
            mode : null
          },
          resolve : {
            deps : [
              '$ocLazyLoad',
              function($ocLazyLoad) {
                return $ocLazyLoad.load([ 'lazy_datatables', 'app/components/results/exams/js/ExamController.js',
                  'app/components/results/exams/js/ExamService.js', 'app/components/results/exams/js/ExamModel.js' ]);
              } ]
          }
        })

        .state(
          "restricted.exams.exam",
          {
            url : "/exam",
            templateUrl : 'app/components/results/exams/examForm.html',
            controller : 'ExamController',
            params : {
              id : null,
              mode : null
            },
            resolve : {
              deps : [
                '$ocLazyLoad',
                function($ocLazyLoad) {
                  return $ocLazyLoad.load([ 'lazy_parsleyjs', 'lazy_datatables', 'lazy_pwswitch',
                    'app/components/results/exams/js/ExamController.js',
                    'app/components/results/exams/js/ExamService.js',
                    'app/components/schools/course/js/CourseService.js',
                    'app/components/schools/batch/js/BatchService.js',
                    'app/components/schools/syllabus/js/SyllabusService.js',
                    'app/components/schools/subject/js/SubjectService.js',
                    'app/components/results/exams/js/ExamModel.js' ]);
                } ]
            }
          })

        .state(
          "restricted.exams.viewExam",
          {
            url : "/viewExam",
            templateUrl : 'app/components/results/exams/viewExam.html',
            controller : 'ViewExamController',
            params : {
              id : null
            },
            resolve : {
              deps : [
                '$ocLazyLoad',
                function($ocLazyLoad) {
                  return $ocLazyLoad.load([ 'lazy_parsleyjs', 'lazy_datatables', 'lazy_pwswitch',
                    'app/components/results/exams/js/ExamController.js',
                    'app/components/results/exams/js/ExamService.js',
                    'app/components/schools/course/js/CourseService.js',
                    'app/components/schools/batch/js/BatchService.js',
                    'app/components/schools/syllabus/js/SyllabusService.js',
                    'app/components/results/exams/js/ExamModel.js' ]);
                } ]
            }
          })

        .state(
          "restricted.exams.manageStudentAssessment",
          {
            url : "/manageStudentAssessment",
            templateUrl : 'app/components/results/sudentAssessment/manageSudentAssessment.html',
            controller : 'ManageSudentAssessmentController',
            params : {
              id : null,
              mode : null
            },
            resolve : {
              deps : [
                '$ocLazyLoad',
                function($ocLazyLoad) {
                  return $ocLazyLoad.load([ 'lazy_datatables',
                    'app/components/results/sudentAssessment/js/SudentAssessmentController.js',
                    'app/components/results/sudentAssessment/js/SudentAssessmentService.js',
                    'app/components/results/sudentAssessment/js/SudentAssessmentModel.js' ]);
                } ]
            }
          })

        .state(
          "restricted.exams.studentAssessment",
          {
            url : "/studentAssessment",
            templateUrl : 'app/components/results/sudentAssessment/sudentAssessmentForm.html',
            controller : 'SudentAssessmentController',
            params : {
              id : null,
              mode : null
            },
            resolve : {
              deps : [
                '$ocLazyLoad',
                function($ocLazyLoad) {
                  return $ocLazyLoad.load([ 'lazy_star_rating',
                    'app/components/results/sudentAssessment/js/SudentAssessmentController.js',
                    'app/components/results/sudentAssessment/js/SudentAssessmentService.js',
                    'app/components/results/assessmentRating/js/AssessmentRatingService.js',
                    'app/components/results/sudentAssessment/js/SudentAssessmentModel.js' ]);
                } ]
            }
          })

        .state(
          "restricted.exams.assessmentRatingConfiguration",
          {
            url : "/assessmentRatingConfiguration",
            templateUrl : 'app/components/results/assessmentRating/assessmentRatingForm.html',
            controller : 'AssassmentRatingController',
            params : {
              id : null,
              mode : null
            },
            resolve : {
              deps : [
                '$ocLazyLoad',
                function($ocLazyLoad) {
                  return $ocLazyLoad.load([ 'lazy_star_rating',
                    'app/components/results/assessmentRating/js/AssessmentRatingController.js',
                    'app/components/results/assessmentRating/js/AssessmentRatingService.js',
                    'app/components/results/assessmentRating/js/AssessmentRatingModel.js' ]);
                } ]
            }
          })

        .state(
          "restricted.exams.manageAssessmentConfiguration",
          {
            url : "/manageAssessmentConfiguration",
            templateUrl : 'app/components/results/assessmentConfiguration/manageAssessmentConfiguration.html',
            controller : 'ManageAssessmentConfiguarationController',
            params : {
              id : null,
              mode : null
            },
            resolve : {
              deps : [
                '$ocLazyLoad',
                function($ocLazyLoad) {
                  return $ocLazyLoad.load([ 'lazy_datatables',
                    'app/components/results/assessmentConfiguration/js/AssessmentConfigurationController.js',
                    'app/components/results/assessmentConfiguration/js/AssessmentConfigurationService.js',
                    'app/components/results/assessmentConfiguration/js/AssessmentConfigurationModel.js' ]);
                } ]
            }
          })

        .state(
          "restricted.exams.assessmentConfiguration",
          {
            url : "/assassmentConfiguration",
            templateUrl : 'app/components/results/assessmentConfiguration/assessmentConfigurationForm.html',
            controller : 'AssessmentConfigurationController',
            params : {
              id : null,
              mode : null
            },
            resolve : {
              deps : [
                '$ocLazyLoad',
                function($ocLazyLoad) {
                  return $ocLazyLoad.load([ 'lazy_parsleyjs', 'lazy_pwswitch',
                    'app/components/results/assessmentConfiguration/js/AssessmentConfigurationController.js',
                    'app/components/results/assessmentConfiguration/js/AssessmentConfigurationService.js',
                    'app/components/results/assessmentConfiguration/js/AssessmentConfigurationModel.js',
                    'app/components/schools/course/js/CourseService.js',
                    'app/components/schools/batch/js/BatchService.js',
                    'app/components/schools/subject/js/SubjectService.js'
                  ]);
                } ]
            }
          })


        .state(
          "restricted.exams.manageResult",
          {
            url : "/manageResult",
            templateUrl : 'app/components/results/result/manageResult.html',
            controller : 'ManageResultController',
            params : {
              id : null,
              mode : null
            },
            resolve : {
              deps : [
                '$ocLazyLoad',
                function($ocLazyLoad) {
                  return $ocLazyLoad.load([ 'lazy_datatables',
                    'app/components/results/result/js/ResultController.js',
                    'app/components/results/result/js/ResultService.js',
                    'app/components/results/result/js/ResultModel.js' ]);
                } ]
            }
          })

        .state(
          "restricted.exams.result",
          {
            url : "/result",
            templateUrl : 'app/components/results/result/resultForm.html',
            controller : 'ResultController',
            params : {
              id : null,
              mode : null
            },
            resolve : {
              deps : [
                '$ocLazyLoad',
                function($ocLazyLoad) {
                  return $ocLazyLoad.load([ 'lazy_parsleyjs',
                    'app/components/results/result/js/ResultController.js',
                    'app/components/results/result/js/ResultService.js',
                    'app/components/results/result/js/ResultModel.js' ]);
                } ]
            }
          })

        .state(
          "restricted.result.viewResult",
          {
            url : "/viewResult",
            templateUrl : 'app/components/results/result/viewResult.html',
            controller : 'ResultController',
            params : {
              id : null,
              mode : null
            },
            resolve : {
              deps : [
                '$ocLazyLoad',
                function($ocLazyLoad) {
                  return $ocLazyLoad
                    .load([ 'lazy_parsleyjs', 'lazy_wizard', 'lazy_datatables', 'lazy_datatables',
                      'app/components/results/result/js/ResultController.js',
                      'app/components/results/result/js/ResultService.js',
                      'app/components/results/result/js/ResultModel.js',
                      'app/components/results/exams/js/ExamService.js', 'app/components/batch/js/BatchService.js',
                      'app/components/syllabus/js/SyllabusService.js', 'app/components/course/js/CourseService.js',
                      'app/components/students/student/js/StudentService.js' ]);
                } ]
            }
          })


        .state(
          "restricted.result.viewResult",
          {
            url : "/viewResult",
            templateUrl : 'app/components/results/result/viewResult.html',
            controller : 'ResultController',
            params : {
              id : null,
              mode : null
            },
            resolve : {
              deps : [
                '$ocLazyLoad',
                function($ocLazyLoad) {
                  return $ocLazyLoad
                    .load([ 'lazy_parsleyjs', 'lazy_wizard', 'lazy_datatables', 'lazy_datatables',
                      'app/components/results/result/js/ResultController.js',
                      'app/components/results/result/js/ResultService.js',
                      'app/components/results/result/js/ResultModel.js',
                      'app/components/results/exams/js/ExamService.js', 'app/components/batch/js/BatchService.js',
                      'app/components/syllabus/js/SyllabusService.js', 'app/components/course/js/CourseService.js',
                      'app/components/students/student/js/StudentService.js' ]);
                } ]
            }
          })

        .state("restricted.admin", {
          url : "/admin",
          template : '<div ui-view autoscroll="false"/>',
          abstract : true
        }).state(
        "restricted.admin.user",
        {
          url : "/user",
          templateUrl : 'app/components/admin/user/UserForm.html',
          controller : 'UserController',
          params : {
            id : null,
            mode : null
          },
          resolve : {
            deps : [
              '$ocLazyLoad',
              function($ocLazyLoad) {
                return $ocLazyLoad.load([ 'lazy_masked_inputs', 'lazy_parsleyjs',
                  'app/components/admin/user/js/UserController.js', 'app/components/admin/user/js/UserService.js',
                  'app/components/admin/group/js/GroupService.js', 'app/components/admin/role/js/RoleService.js',
                  'app/components/admin/user/js/UserModel.js' ]);
              } ]
          }
        })

        .state(
          "restricted.admin.manageUser",
          {
            url : "/manageUser",
            templateUrl : 'app/components/admin/user/UserManage.html',
            controller : 'ManageUserController',
            params : {
              id : null,
              mode : null
            },
            resolve : {
              deps : [
                '$ocLazyLoad',
                function($ocLazyLoad) {
                  return $ocLazyLoad.load([ 'lazy_datatables', 'lazy_iCheck',
                    'app/components/admin/user/js/UserController.js', 'app/components/admin/user/js/UserService.js',
                    'app/components/admin/user/js/UserModel.js' ]);
                } ]
            }
          })

        .state(
          "restricted.admin.group",
          {
            url : "/group",
            templateUrl : 'app/components/admin/group/GroupForm.html',
            controller : 'GroupController',
            params : {
              id : null,
              mode : null
            },
            resolve : {
              deps : [
                '$ocLazyLoad',
                function($ocLazyLoad) {
                  return $ocLazyLoad.load([ 'lazy_parsleyjs', 'app/components/admin/group/js/GroupController.js',
                    'app/components/admin/group/js/GroupService.js', 'app/components/schools/school/js/SchoolService.js',
                    'app/components/schools/branch/js/BranchService.js',
                    'app/components/schools/course/js/CourseService.js',
                    'app/components/schools/batch/js/BatchService.js',
                    'app/components/students/guardian/js/GuardianService.js',
                    'app/components/students/student/js/StudentService.js',
                    'app/components/staffs/department/js/DepartmentService.js',
                    'app/components/staffs/staff/js/StaffService.js', 'app/components/admin/group/js/GroupModel.js' ]);
                } ]
            }
          })

        .state(
          "restricted.admin.manageGroup",
          {
            url : "/manageGroup",
            templateUrl : 'app/components/admin/group/GroupManage.html',
            controller : 'ManageGroupController',
            params : {
              id : null,
              mode : null
            },
            resolve : {
              deps : [
                '$ocLazyLoad',
                function($ocLazyLoad) {
                  return $ocLazyLoad.load([ 'lazy_datatables', 'app/components/admin/group/js/GroupController.js',
                    'app/components/admin/group/js/GroupService.js', 'app/components/admin/group/js/GroupModel.js' ]);
                } ]
            }
          })

        .state(
          "restricted.admin.role",
          {
            url : "/role",
            templateUrl : 'app/components/admin/role/RoleForm.html',
            controller : 'RoleController',
            params : {
              id : null,
              mode : null
            },
            resolve : {
              deps : [
                '$ocLazyLoad',
                function($ocLazyLoad) {
                  return $ocLazyLoad.load([ 'lazy_parsleyjs', 'lazy_pwswitch',
                    'app/components/admin/role/js/RoleController.js', 'app/components/admin/role/js/RoleService.js',
                    'app/components/admin/roleHierarchy/js/RoleHierarchyeService.js',
                    'app/components/admin/role/js/RoleModel.js' ]);
                } ]
            }
          })

        .state(
          "restricted.admin.manageRole",
          {
            url : "/manageRole",
            templateUrl : 'app/components/admin/role/RoleManage.html',
            controller : 'ManageRoleController',
            params : {
              id : null,
              mode : null
            },
            resolve : {
              deps : [
                '$ocLazyLoad',
                function($ocLazyLoad) {
                  return $ocLazyLoad.load([ 'lazy_datatables', 'app/components/admin/role/js/RoleController.js',
                    'app/components/admin/role/js/RoleService.js', 'app/components/admin/role/js/RoleModel.js' ]);
                } ]
            }
          }).state("restricted.schools", {
        url : "/schools",
        template : '<div ui-view autoscroll="false"/>',
        abstract : true
      })

        .state(
          "restricted.schools.school",
          {
            url : "/school",
            templateUrl : 'app/components/schools/school/SchoolForm.html',
            controller : 'SchoolController',
            params : {
              id : null,
              mode : null
            },
            resolve : {
              deps : [
                '$ocLazyLoad',
                function($ocLazyLoad) {
                  return $ocLazyLoad.load([ 'app/components/schools/school/js/SchoolController.js',
                    'app/components/schools/school/js/SchoolService.js',
                    'app/components/transport/state/js/StateService.js',
                    'app/components/transport/city/js/CityService.js',
                    'app/components/transport/pincode/js/PincodeService.js',
                    'app/components/schools/school/js/SchoolModel.js', 'lazy_parsleyjs' ], {
                    serie : true
                  });
                } ]
            }
          })

        .state(
          "restricted.schools.manageSchool",
          {
            url : "/manageSchool",
            templateUrl : 'app/components/schools/school/SchoolManage.html',
            controller : 'ManageSchoolController',
            params : {
              id : null,
              mode : null
            },
            resolve : {
              deps : [
                '$ocLazyLoad',
                function($ocLazyLoad) {
                  return $ocLazyLoad.load([ 'lazy_datatables', 'app/components/schools/school/js/SchoolController.js',
                    'app/components/schools/school/js/SchoolService.js',
                    'app/components/schools/school/js/SchoolModel.js' ]);
                } ]
            }
          })

        .state(
          "restricted.schools.branch",
          {
            url : "/branch",
            templateUrl : 'app/components/schools/branch/BranchForm.html',
            controller : 'BranchController',
            params : {
              id : null,
              mode : null
            },
            resolve : {
              deps : [
                '$ocLazyLoad',
                function($ocLazyLoad) {
                  return $ocLazyLoad.load([ 'app/components/schools/branch/js/BranchController.js',
                    'app/components/schools/branch/js/BranchService.js',
                    'app/components/staffs/staff/js/StaffService.js', 'app/components/schools/branch/js/BranchModel.js',
                    'lazy_parsleyjs' ]);
                } ]
            }
          })

        .state(
          "restricted.schools.manageBranch",
          {
            url : "/manageBranch",
            templateUrl : 'app/components/schools/branch/BranchManage.html',
            controller : 'ManageBranchController',
            params : {
              id : null,
              mode : null
            },
            resolve : {
              deps : [
                '$ocLazyLoad',
                function($ocLazyLoad) {
                  return $ocLazyLoad
                    .load([ 'lazy_datatables', 'app/components/schools/branch/js/BranchController.js',
                      'app/components/schools/branch/js/BranchService.js',
                      'app/components/staffs/staff/js/StaffService.js',
                      'app/components/schools/branch/js/BranchModel.js' ]);
                } ]
            }
          }).state(
        "restricted.schools.sessionYear",
        {
          url : "/sessionYear",
          templateUrl : 'app/components/schools/SessionYear/SessionYearForm.html',
          controller : 'SessionYearController',
          params : {
            id : null,
            mode : null
          },
          resolve : {
            deps : [
              '$ocLazyLoad',
              function($ocLazyLoad) {
                return $ocLazyLoad.load([ 'app/components/schools/SessionYear/js/SessionYearController.js',
                  'app/components/schools/SessionYear/js/SessionYearService.js',
                  'app/components/schools/SessionYear/js/SessionYearModel.js', 'lazy_parsleyjs' ], {
                  serie : true
                });
              } ]
          }
        }).state(
        "restricted.schools.manageSessionYear",
        {
          url : "/manageSessionYear",
          templateUrl : 'app/components/schools/SessionYear/SessionYearManage.html',
          controller : 'ManageSessionYearController',
          params : {
            id : null,
            mode : null
          },
          resolve : {
            deps : [
              '$ocLazyLoad',
              function($ocLazyLoad) {
                return $ocLazyLoad.load([ 'lazy_datatables',
                  'app/components/schools/SessionYear/js/SessionYearController.js',
                  'app/components/schools/SessionYear/js/SessionYearService.js',
                  'app/components/schools/SessionYear/js/SessionYearModel.js' ]);
              } ]
          }
        }).state(
        "restricted.schools.termDetails",
        {
          url : "/termDetails",
          templateUrl : 'app/components/schools/termDetails/TermDetailsForm.html',
          controller : 'TermDetailsController',
          params : {
            id : null,
            mode : null
          },
          resolve : {
            deps : [
              '$ocLazyLoad',
              function($ocLazyLoad) {
                return $ocLazyLoad.load([ 'app/components/schools/termDetails/js/TermDetailsController.js',
                  'app/components/schools/termDetails/js/TermDetailsService.js',
                  'app/components/schools/termDetails/js/TermDetailsModel.js', 'lazy_parsleyjs' ], {
                  serie : true
                });
              } ]
          }
        }).state(
        "restricted.schools.manageTermDetails",
        {
          url : "/manageTermDetails",
          templateUrl : 'app/components/schools/termDetails/TermDetailsManage.html',
          controller : 'ManageTermDetailsController',
          params : {
            id : null,
            mode : null
          },
          resolve : {
            deps : [
              '$ocLazyLoad',
              function($ocLazyLoad) {
                return $ocLazyLoad.load([ 'lazy_datatables',
                  'app/components/schools/termDetails/js/TermDetailsController.js',
                  'app/components/schools/termDetails/js/TermDetailsService.js',
                  'app/components/schools/termDetails/js/TermDetailsModel.js' ]);
              } ]
          }
        }).state(
        "restricted.schools.subject",
        {
          url : "/subject",
          templateUrl : 'app/components/schools/subject/SubjectForm.html',
          controller : 'SubjectController',
          params : {
            id : null,
            mode : null
          },
          resolve : {
            deps : [
              '$ocLazyLoad',
              function($ocLazyLoad) {
                return $ocLazyLoad.load([ 'app/components/schools/subject/js/SubjectController.js',
                  'app/components/schools/subject/js/SubjectService.js',
                  'app/components/schools/subject/js/SubjectModel.js', 'lazy_pwswitch' ]);
              } ]
          }
        })

        .state(
          "restricted.schools.manageSubject",
          {
            url : "/manageSubject",
            templateUrl : 'app/components/schools/subject/SubjectManage.html',
            controller : 'ManageSubjectController',
            params : {
              id : null,
              mode : null
            },
            resolve : {
              deps : [
                '$ocLazyLoad',
                function($ocLazyLoad) {
                  return $ocLazyLoad.load([ 'lazy_datatables', 'app/components/schools/subject/js/SubjectController.js',
                    'app/components/schools/subject/js/SubjectService.js',
                    'app/components/schools/subject/js/SubjectModel.js' ]);
                } ]
            }
          })

        .state(
          "restricted.schools.batch",
          {
            url : "/batch",
            templateUrl : 'app/components/schools/batch/BatchForm.html',
            controller : 'BatchController',
            params : {
              id : null,
              mode : null
            },
            resolve : {
              deps : [
                '$ocLazyLoad',
                function($ocLazyLoad) {
                  return $ocLazyLoad
                    .load([ 'app/components/schools/batch/js/BatchController.js',
                      'app/components/schools/batch/js/BatchService.js',
                      'app/components/schools/batch/js/BatchModel.js',
                      'app/components/schools/course/js/CourseService.js',
                      'app/components/staffs/staff/js/StaffService.js' ]);
                } ]
            }
          })

        .state(
          "restricted.schools.manageBatch",
          {
            url : "/manageBatch",
            templateUrl : 'app/components/schools/batch/BatchManage.html',
            controller : 'ManageBatchController',
            params : {
              id : null,
              mode : null
            },
            resolve : {
              deps : [
                '$ocLazyLoad',
                function($ocLazyLoad) {
                  return $ocLazyLoad.load([ 'lazy_datatables', 'app/components/schools/batch/js/BatchController.js',
                    'app/components/schools/batch/js/BatchService.js', 'app/components/schools/batch/js/BatchModel.js',
                    'app/components/staffs/staff/js/StaffService.js' ]);
                } ]
            }
          })

        .state(
          "restricted.schools.batchTimetable",
          {
            url : "/batchTimetable",
            templateUrl : 'app/components/schools/batchTimetable/BatchTimetableForm.html',
            controller : 'BatchTimetableController',
            params : {
              id : null,
              mode : null
            },
            resolve : {
              deps : [
                '$ocLazyLoad',
                function($ocLazyLoad) {
                  return $ocLazyLoad.load([ 'app/components/schools/batchTimetable/css/batchTimetable.css',
                    'app/components/schools/batchTimetable/js/BatchTimetableController.js',
                    'app/components/schools/batchTimetable/js/BatchTimetableService.js',
                    'app/components/schools/batchTimetable/js/BatchTimetableModel.js',
                    'app/components/schools/course/js/CourseService.js',
                    'app/components/schools/batch/js/BatchService.js',
                    'app/components/schools/syllabus/js/SyllabusService.js',
                    'app/components/staffs/staff/js/StaffService.js', 'lazy_dragdrop', 'lazy_ionRangeSlider',
                    'lazy_fullcalendar' ]);
                } ]
            }
          })

        .state(
          "restricted.schools.manageBatchTimetable",
          {
            url : "/manageBatchTimetable",
            templateUrl : 'app/components/schools/batchTimetable/BatchTimetableManage.html',
            controller : 'ManageBatchTimetableController',
            params : {
              id : null,
              mode : null
            },
            resolve : {
              deps : [
                '$ocLazyLoad',
                function($ocLazyLoad) {
                  return $ocLazyLoad.load([ 'lazy_datatables',
                    'app/components/schools/batchTimetable/js/BatchTimetableController.js',
                    'app/components/schools/batchTimetable/js/BatchTimetableService.js',
                    'app/components/schools/batchTimetable/js/BatchTimetableModel.js' ]);
                } ]
            }
          })

        .state(
          "restricted.schools.course",
          {
            url : "/course",
            templateUrl : 'app/components/schools/course/CourseForm.html',
            controller : 'CourseController',
            params : {
              id : null,
              mode : null
            },
            resolve : {
              deps : [
                '$ocLazyLoad',
                function($ocLazyLoad) {
                  return $ocLazyLoad.load([ 'app/components/schools/course/js/CourseController.js',
                    'app/components/schools/course/js/CourseService.js',
                    'app/components/schools/course/js/CourseModel.js',
                    'app/components/schools/syllabus/js/SyllabusService.js', 'lazy_masked_inputs', 'lazy_parsleyjs' ]);
                } ]
            }
          })

        .state(
          "restricted.schools.manageCourse",
          {
            url : "/manageCourse",
            templateUrl : 'app/components/schools/course/CourseManage.html',
            controller : 'ManageCourseController',
            params : {
              id : null,
              mode : null
            },
            resolve : {
              deps : [
                '$ocLazyLoad',
                function($ocLazyLoad) {
                  return $ocLazyLoad.load([ 'lazy_datatables', 'app/components/schools/course/js/CourseController.js',
                    'app/components/schools/course/js/CourseService.js',
                    'app/components/schools/course/js/CourseModel.js' ]);
                } ]
            }
          })

        .state(
          "restricted.schools.syllabus",
          {
            url : "/syllabus",
            templateUrl : 'app/components/schools/syllabus/SyllabusForm.html',
            controller : 'SyllabusController',
            params : {
              id : null,
              mode : null
            },
            resolve : {
              deps : [
                '$ocLazyLoad',
                function($ocLazyLoad) {
                  return $ocLazyLoad.load([ 'lazy_pwswitch',
                    'app/components/schools/syllabus/js/SyllabusController.js',
                    'app/components/schools/syllabus/js/SyllabusService.js',
                    'app/components/schools/syllabus/js/SyllabusModel.js',
                    'app/components/schools/subject/js/SubjectService.js',
                    'app/components/schools/course/js/CourseService.js',
                    'app/components/schools/batch/js/BatchService.js' ]);
                } ]
            }
          })

        .state(
          "restricted.schools.manageSyllabus",
          {
            url : "/manageSyllabus",
            templateUrl : 'app/components/schools/syllabus/SyllabusManage.html',
            controller : 'ManageSyllabusController',
            params : {
              id : null,
              mode : null
            },
            resolve : {
              deps : [
                '$ocLazyLoad',
                function($ocLazyLoad) {
                  return $ocLazyLoad.load([ 'lazy_datatables', 'app/components/schools/syllabus/js/SyllabusController.js',
                    'app/components/schools/syllabus/js/SyllabusService.js',
                    'app/components/schools/syllabus/js/SyllabusModel.js',
                    'app/components/schools/course/js/CourseService.js' ]);
                } ]
            }
          })

        .state(
          "restricted.schools.event",
          {
            url : "/event",
            templateUrl : 'app/components/schools/event/EventForm.html',
            controller : 'EventController',
            params : {
              id : null,
              mode : null
            },
            resolve : {
              deps : [
                '$ocLazyLoad',
                function($ocLazyLoad) {
                  return $ocLazyLoad.load([ 'app/components/schools/event/js/EventController.js',
                    'app/components/schools/event/js/EventService.js', 'app/components/schools/event/js/EventModel.js',
                    'app/components/schools/course/js/CourseService.js',
                    'app/components/schools/department/js/DepartemtService.js'

                  ]);
                } ]
            }
          })

        .state(
          "restricted.schools.manageEvent",
          {
            url : "/manageEvent",
            templateUrl : 'app/components/schools/event/EventManage.html',
            controller : 'ManageEventController',
            params : {
              id : null,
              mode : null
            },
            resolve : {
              deps : [
                '$ocLazyLoad',
                function($ocLazyLoad) {
                  return $ocLazyLoad.load([ 'lazy_datatables', 'app/components/schools/event/js/EventController.js',
                    'app/components/schools/event/js/EventService.js',
                    'app/components/schools/event/js/EventModel.js' ]);
                } ]
            }
          })

        .state("restricted.attendances", {
          url : "/attendances",
          template : '<div ui-view autoscroll="false"/>',
          resolve : {
            deps : [
              '$ocLazyLoad',
              function($ocLazyLoad) {
                return $ocLazyLoad.load([ 'lazy_moment' ]);
              } ]
          },
          abstract : true
        })

        .state(
          "restricted.attendances.leaveType",
          {
            url : "/leaveType",
            templateUrl : 'app/components/attendances/leaveType/leaveTypeForm.html',
            controller : 'LeaveTypeController',
            params : {
              id : null,
              mode : null
            },
            resolve : {
              deps : [
                '$ocLazyLoad',
                function($ocLazyLoad) {
                  return $ocLazyLoad.load([ 'lazy_ionRangeSlider',
                    'app/components/attendances/leaveType/js/leaveTypeController.js',
                    'app/components/attendances/leaveType/js/leaveTypeService.js',
                    'app/components/attendances/leaveType/js/leaveTypeModel.js' ]);
                } ]
            }
          })

        .state(
          "restricted.attendances.manageLeaveType",
          {
            url : "/manageLeaveType",
            templateUrl : 'app/components/attendances/leaveType/LeaveTypeManage.html',
            controller : 'ManageLeaveTypeController',
            params : {
              id : null,
              mode : null
            },
            resolve : {
              deps : [
                '$ocLazyLoad',
                function($ocLazyLoad) {
                  return $ocLazyLoad.load([
                    'app/components/attendances/leaveType/js/leaveTypeController.js',
                    'app/components/attendances/leaveType/js/leaveTypeService.js',
                    'app/components/attendances/leaveType/js/leaveTypeModel.js'
                  ]);
                } ]
            }
          })

        .state(
          "restricted.attendances.staffLeaveDefinition",
          {
            url : "/staffLeaveDefinition",
            templateUrl : 'app/components/attendances/staffLeaveDefinition/StaffLeaveDefinitionForm.html',
            controller : 'StaffLeaveDefinitionController',
            params : {
              id : null,
              mode : null
            },
            resolve : {
              deps : [
                '$ocLazyLoad',
                function($ocLazyLoad) {
                  return $ocLazyLoad.load([ 'lazy_ionRangeSlider',
                    'app/components/attendances/staffLeaveDefinition/js/StaffLeaveDefinitionController.js',
                    'app/components/attendances/staffLeaveDefinition/js/StaffLeaveDefinitionService.js',
                    'app/components/attendances/staffLeaveDefinition/js/StaffLeaveDefinitionModel.js',
                    'app/components/staffs/designation/js/DesignationService.js' ]);
                } ]
            }
          })

        .state(
          "restricted.attendances.manageStaffLeaveDefinition",
          {
            url : "/manageStaffLeaveDefinition",
            templateUrl : 'app/components/attendances/staffLeaveDefinition/StaffLeaveDefinitionManage.html',
            controller : 'ManageStaffLeaveDefinitionController',
            params : {
              id : null,
              mode : null
            },
            resolve : {
              deps : [
                '$ocLazyLoad',
                function($ocLazyLoad) {
                  return $ocLazyLoad.load([
                    'app/components/attendances/staffLeaveDefinition/js/StaffLeaveDefinitionController.js',
                    'app/components/attendances/staffLeaveDefinition/js/StaffLeaveDefinitionService.js',
                    'app/components/attendances/staffLeaveDefinition/js/StaffLeaveDefinitionModel.js'
                  ]);
                } ]
            }
          })

        .state(
          "restricted.attendances.staffLeaveApply",
          {
            url : "/staffLeaveApply",
            templateUrl : 'app/components/attendances/staffLeaveApply/StaffLeaveApplyForm.html',
            controller : 'StaffLeaveApplyController',
            params : {
              id : null,
              mode : null
            },
            resolve : {
              deps : [
                '$ocLazyLoad',
                function($ocLazyLoad) {
                  return $ocLazyLoad.load([
                    'app/components/attendances/staffLeaveApply/js/StaffLeaveApplyController.js',
                    'app/components/attendances/staffLeaveApply/js/StaffLeaveApplyService.js',
                    'app/components/attendances/staffLeaveApply/js/StaffLeaveApplyModel.js'
                  ]);
                } ]
            }
          })

        .state(
          "restricted.attendances.manageStaffLeaveApply",
          {
            url : "/manageStaffLeaveApply",
            templateUrl : 'app/components/attendances/staffLeaveApply/StaffLeaveApplyManage.html',
            controller : 'ManageStaffLeaveApplyController',
            params : {
              id : null,
              mode : null
            },
            resolve : {
              deps : [
                '$ocLazyLoad',
                function($ocLazyLoad) {
                  return $ocLazyLoad.load([
                    'app/components/attendances/staffLeaveApply/js/StaffLeaveApplyController.js',
                    'app/components/attendances/staffLeaveApply/js/StaffLeaveApplyService.js',
                    'app/components/attendances/staffLeaveApply/js/StaffLeaveApplyModel.js' ]);
                } ]
            }
          })


        .state(
          "restricted.attendances.studentLeaveApply",
          {
            url : "/studentLeaveApply",
            templateUrl : 'app/components/attendances/studentLeaveApply/StudentLeaveApplyForm.html',
            controller : 'StudentLeaveApplyController',
            params : {
              id : null,
              mode : null
            },
            resolve : {
              deps : [
                '$ocLazyLoad',
                function($ocLazyLoad) {
                  return $ocLazyLoad.load([
                    'app/components/attendances/studentLeaveApply/js/StudentLeaveApplyController.js',
                    'app/components/attendances/studentLeaveApply/js/StudentLeaveApplyService.js',
                    'app/components/attendances/studentLeaveApply/js/StudentLeaveApplyModel.js',
                    'app/components/students/student/js/StudentService.js'
                  ]);
                } ]
            }
          })

        .state(
          "restricted.attendances.manageStudentLeaveApply",
          {
            url : "/manageStudentLeaveApply",
            templateUrl : 'app/components/attendances/studentLeaveApply/StudentLeaveApplyManage.html',
            controller : 'ManageStudentLeaveApplyController',
            params : {
              id : null,
              mode : null
            },
            resolve : {
              deps : [
                '$ocLazyLoad',
                function($ocLazyLoad) {
                  return $ocLazyLoad.load([
                    'app/components/attendances/studentLeaveApply/js/StudentLeaveApplyController.js',
                    'app/components/attendances/studentLeaveApply/js/StudentLeaveApplyService.js',
                    'app/components/attendances/studentLeaveApply/js/StudentLeaveApplyModel.js' ]);
                } ]
            }
          })

        .state(
          "restricted.attendances.staffIdentityCard",
          {
            url : "/staffIdentityCard",
            templateUrl : 'app/components/attendances/staffIdentityCard/StaffIdentityCardForm.html',
            controller : 'StaffIdentityCardController',
            params : {
              id : null,
              mode : null
            },
            resolve : {
              deps : [
                '$ocLazyLoad',
                function($ocLazyLoad) {
                  return $ocLazyLoad.load([
                    'app/components/attendances/staffIdentityCard/js/StaffIdentityCardController.js',
                    'app/components/attendances/staffIdentityCard/js/StaffIdentityCardService.js',
                    'app/components/attendances/staffIdentityCard/js/StaffIdentityCardModel.js',
                    'app/components/staffs/staff/js/StaffService.js',
                    'app/components/staffs/department/js/DepartmentService.js' ]);
                } ]
            }
          })

        .state(
          "restricted.attendances.manageStaffIdentityCard",
          {
            url : "/manageStaffIdentityCard",
            templateUrl : 'app/components/attendances/staffIdentityCard/StaffIdentityCardManage.html',
            controller : 'ManageStaffIdentityCardController',
            params : {
              id : null,
              mode : null
            },
            resolve : {
              deps : [
                '$ocLazyLoad',
                function($ocLazyLoad) {
                  return $ocLazyLoad.load([
                    'app/components/attendances/staffIdentityCard/js/StaffIdentityCardController.js',
                    'app/components/attendances/staffIdentityCard/js/StaffIdentityCardService.js',
                    'app/components/attendances/staffIdentityCard/js/StaffIdentityCardModel.js' ]);
                } ]
            }
          })



        .state(
          "restricted.attendances.markAttendance",
          {
            url : "/markAttendance",
            templateUrl : 'app/components/attendances/markAttendance/MarkAttendanceForm.html',
            controller : 'MarkAttendanceController',
            params : {
              id : null,
              mode : null
            },
            resolve : {
              deps : [
                '$ocLazyLoad',
                function($ocLazyLoad) {
                  return $ocLazyLoad.load([
                    'app/components/attendances/markAttendance/js/MarkAttendanceController.js',
                    'app/components/attendances/markAttendance/js/MarkAttendanceService.js',
                    'app/components/attendances/markAttendance/js/MarkAttendanceModel.js' ]);
                } ]
            }
          })

        .state(
          "restricted.attendances.manageMarkAttendance",
          {
            url : "/manageMarkAttendance",
            templateUrl : 'app/components/attendances/markAttendance/MarkAttendanceManage.html',
            controller : 'ManageMarkAttendanceController',
            params : {
              id : null,
              mode : null
            },
            resolve : {
              deps : [
                '$ocLazyLoad',
                function($ocLazyLoad) {
                  return $ocLazyLoad.load([ 'app/components/attendances/markAttendance/js/MarkAttendanceController.js',
                    'app/components/attendances/markAttendance/js/MarkAttendanceService.js',
                    'app/components/attendances/markAttendance/js/MarkAttendanceModel.js' ]);
                } ]
            }
          })


        .state(
          "restricted.attendances.studentAttendance",
          {
            url : "/studentAttendance",
            templateUrl : 'app/components/attendances/studentAttendance/StudentAttendanceForm.html',
            controller : 'StudentAttendanceController',
            params : {
              id : null,
              mode : null
            },
            resolve : {
              deps : [
                '$ocLazyLoad',
                function($ocLazyLoad) {
                  return $ocLazyLoad.load([ 'lazy_pwswitch',
                    'app/components/attendances/studentAttendance/js/StudentAttendanceController.js',
                    'app/components/attendances/studentAttendance/js/StudentAttendanceService.js',
                    'app/components/schools/course/js/CourseService.js',
                    'app/components/schools/batch/js/BatchService.js',
                    'app/components/students/student/js/StudentService.js',
                    'app/components/attendances/studentAttendance/js/StudentAttendanceModel.js' ]);
                } ]
            }
          })

        .state(
          "restricted.attendances.manageStudentAttendance",
          {
            url : "/manageStudentAttendance",
            templateUrl : 'app/components/attendances/studentAttendance/StudentAttendanceManage.html',
            controller : 'ManageStudentAttendanceController',
            params : {
              id : null,
              mode : null
            },
            resolve : {
              deps : [
                '$ocLazyLoad',
                function($ocLazyLoad) {
                  return $ocLazyLoad.load([
                    'app/components/attendances/studentAttendance/js/StudentAttendanceController.js',
                    'app/components/attendances/studentAttendance/js/StudentAttendanceService.js',
                    'app/components/attendances/studentAttendance/js/StudentAttendanceModel.js' ]);
                } ]
            }
          })

        .state(
          "restricted.attendances.adhocAttendance",
          {
            url : "/adhocAttendance",
            templateUrl : 'app/components/attendances/adhocAttendance/AdhocAttendanceForm.html',
            controller : 'AdhocAttendanceController',
            params : {
              id : null,
              mode : null
            },
            resolve : {
              deps : [
                '$ocLazyLoad',
                function($ocLazyLoad) {
                  return $ocLazyLoad.load([ 'lazy_pwswitch',
                    'app/components/attendances/adhocAttendance/js/AdhocAttendanceController.js',
                    'app/components/attendances/adhocAttendance/js/AdhocAttendanceService.js',
                    'app/components/admin/group/js/GroupService.js',
                    'app/components/attendances/adhocAttendance/js/AdhocAttendanceModel.js' ]);
                } ]
            }
          })

        .state(
          "restricted.attendances.manageAdhocAttendance",
          {
            url : "/manageAdhocAttendance",
            templateUrl : 'app/components/attendances/adhocAttendance/AdhocAttendanceManage.html',
            controller : 'ManageAdhocAttendanceController',
            params : {
              id : null,
              mode : null
            },
            resolve : {
              deps : [
                '$ocLazyLoad',
                function($ocLazyLoad) {
                  return $ocLazyLoad.load([
                    'app/components/attendances/adhocAttendance/js/AdhocAttendanceController.js',
                    'app/components/attendances/adhocAttendance/js/AdhocAttendanceService.js',
                    'app/components/attendances/adhocAttendance/js/AdhocAttendanceModel.js' ]);
                } ]
            }
          })

        .state(
          "restricted.attendances.studentIdentityCard",
          {
            url : "/studentIdentityCard",
            templateUrl : 'app/components/attendances/studentIdentityCard/StudentIdentityCardForm.html',
            controller : 'StudentIdentityCardController',
            params : {
              id : null,
              mode : null
            },
            resolve : {
              deps : [
                '$ocLazyLoad',
                function($ocLazyLoad) {
                  return $ocLazyLoad.load([
                    'app/components/attendances/studentIdentityCard/js/StudentIdentityCardController.js',
                    'app/components/attendances/studentIdentityCard/js/StudentIdentityCardService.js',
                    'app/components/attendances/studentIdentityCard/js/StudentIdentityCardModel.js',
                    'app/components/students/student/js/StudentService.js',
                    'app/components/schools/course/js/CourseService.js',
                    'app/components/schools/batch/js/BatchService.js' ]);
                } ]
            }
          })

        .state(
          "restricted.attendances.manageStudentIdentityCard",
          {
            url : "/manageStudentIdentityCard",
            templateUrl : 'app/components/attendances/studentIdentityCard/StudentIdentityCardManage.html',
            controller : 'ManageStudentIdentityCardController',
            params : {
              id : null,
              mode : null
            },
            resolve : {
              deps : [
                '$ocLazyLoad',
                function($ocLazyLoad) {
                  return $ocLazyLoad.load([
                    'app/components/attendances/studentIdentityCard/js/StudentIdentityCardController.js',
                    'app/components/attendances/studentIdentityCard/js/StudentIdentityCardService.js',
                    'app/components/attendances/studentIdentityCard/js/StudentIdentityCardModel.js' ]);
                } ]
            }
          })

        .state(
          "restricted.attendances.transportAttendance",
          {
            url : "/transportAttendance",
            templateUrl : 'app/components/attendances/transportAttendance/TransportAttendanceForm.html',
            controller : 'TransportAttendanceController',
            params : {
              id : null,
              mode : null
            },
            resolve : {
              deps : [
                '$ocLazyLoad',
                function($ocLazyLoad) {
                  return $ocLazyLoad.load([
                    'app/components/attendances/transportAttendance/js/TransportAttendanceController.js',
                    'app/components/attendances/transportAttendance/js/TransportAttendanceService.js',
                    'app/components/attendances/transportAttendance/js/TransportAttendanceModel.js' ]);
                } ]
            }
          })

        .state(
          "restricted.attendances.manageTransportAttendance",
          {
            url : "/manageTransportAttendance",
            templateUrl : 'app/components/attendances/transportAttendance/TransportAttendanceManage.html',
            controller : 'ManageTransportAttendanceController',
            params : {
              id : null,
              mode : null
            },
            resolve : {
              deps : [
                '$ocLazyLoad',
                function($ocLazyLoad) {
                  return $ocLazyLoad.load([
                    'app/components/attendances/transportAttendance/js/TransportAttendanceController.js',
                    'app/components/attendances/transportAttendance/js/TransportAttendanceService.js',
                    'app/components/attendances/transportAttendance/js/TransportAttendanceModel.js' ]);
                } ]
            }
          })

        .state(
          "restricted.attendances.staffHoliday",
          {
            url : "/staffHoliday",
            templateUrl : 'app/components/attendances/staffHoliday/staffHolidayForm.html',
            controller : 'staffHolidayController',
            params : {
              id : null,
              mode : null
            },
            resolve : {
              deps : [
                '$ocLazyLoad',
                function($ocLazyLoad) {
                  return $ocLazyLoad.load([ 'app/components/attendances/staffHoliday/js/staffHolidayController.js',
                    'app/components/attendances/staffHoliday/js/staffHolidayService.js',
                    'app/components/attendances/staffHoliday/js/staffHolidayModel.js', 'lazy_parsleyjs' ]);
                } ]
            }
          }).state(
        "restricted.attendances.manageStaffHoliday",
        {
          url : "/manageStaffHoliday",
          templateUrl : 'app/components/attendances/staffHoliday/staffHolidayManage.html',
          controller : 'ManageStaffHolidayController',
          params : {
            id : null,
            mode : null
          },
          resolve : {
            deps : [
              '$ocLazyLoad',
              function($ocLazyLoad) {
                return $ocLazyLoad.load([ 'lazy_datatables',
                  'app/components/attendances/staffHoliday/js/staffHolidayController.js',
                  'app/components/attendances/staffHoliday/js/staffHolidayService.js',
                  'app/components/attendances/staffHoliday/js/staffHolidayModel.js', ]);
              } ]
          }
        })

        .state(
          "restricted.attendances.studentHoliday",
          {
            url : "/studentHoliday",
            templateUrl : 'app/components/attendances/studentHoliday/studentHolidayForm.html',
            controller : 'studentHolidayController',
            params : {
              id : null,
              mode : null
            },
            resolve : {
              deps : [
                '$ocLazyLoad',
                function($ocLazyLoad) {
                  return $ocLazyLoad.load([ 'app/components/attendances/studentHoliday/js/studentHolidayController.js',
                    'app/components/attendances/studentHoliday/js/studentHolidayService.js',
                    'app/components/attendances/studentHoliday/js/studentHolidayModel.js', 'lazy_parsleyjs' ]);
                } ]
            }
          }).state(
        "restricted.attendances.manageStudentHoliday",
        {
          url : "/manageStudentHoliday",
          templateUrl : 'app/components/attendances/studentHoliday/studentHolidayManage.html',
          controller : 'ManageStudentHolidayController',
          params : {
            id : null,
            mode : null
          },
          resolve : {
            deps : [
              '$ocLazyLoad',
              function($ocLazyLoad) {
                return $ocLazyLoad.load([ 'lazy_datatables',
                  'app/components/attendances/studentHoliday/js/studentHolidayController.js',
                  'app/components/attendances/studentHoliday/js/studentHolidayService.js',
                  'app/components/attendances/studentHoliday/js/studentHolidayModel.js', ]);
              } ]
          }
        })


        .state("restricted.staffs", {
          url : "/staffs",
          template : '<div ui-view autoscroll="false"/>',
          abstract : true
        })

        .state(
          "restricted.staffs.staff",
          {
            url : "/staff",
            templateUrl : 'app/components/staffs/staff/StaffForm.html',
            controller : 'StaffController',
            params : {
              id : null,
              mode : null
            },
            resolve : {
              deps : [
                '$ocLazyLoad',
                function($ocLazyLoad) {
                  return $ocLazyLoad.load([ 'lazy_ng_dropzone', 'app/components/staffs/staff/js/StaffController.js',
                    'app/components/staffs/staff/js/StaffService.js',
                    'app/components/staffs/department/js/DepartmentService.js',
                    'app/components/staffs/designation/js/DesignationService.js',
                    'app/components/admin/role/js/RoleService.js',
                    'app/components/schools/subject/js/SubjectService.js',
                    'app/components/staffs/staff/js/StaffModel.js' ]);
                } ]
            }
          }).state(
        "restricted.staffs.manageStaff",
        {
          url : "/manageStaff",
          templateUrl : 'app/components/staffs/staff/StaffManage.html',
          controller : 'ManageStaffController',
          params : {
            id : null,
            mode : null
          },
          resolve : {
            deps : [
              '$ocLazyLoad',
              function($ocLazyLoad) {
                return $ocLazyLoad
                  .load([ 'lazy_datatables', 'app/components/staffs/staff/js/StaffController.js',
                    'app/components/staffs/staff/js/StaffService.js',
                    'app/components/staffs/staff/js/StaffModel.js', ]);
              } ]
          }
        })

        .state(
          "restricted.staffs.department",
          {
            url : "/department",
            templateUrl : 'app/components/staffs/department/DepartmentForm.html',
            controller : 'DepartmentController',
            params : {
              id : null,
              mode : null
            },
            resolve : {
              deps : [
                '$ocLazyLoad',
                function($ocLazyLoad) {
                  return $ocLazyLoad.load([ 'app/components/staffs/department/js/DepartmentController.js',
                    'app/components/staffs/department/js/DepartmentService.js',
                    'app/components/staffs/department/js/DepartmentModel.js' ]);
                } ]
            }
          }).state(
        "restricted.staffs.manageDepartment",
        {
          url : "/manageDepartment",
          templateUrl : 'app/components/staffs/department/DepartmentManage.html',
          controller : 'ManageDepartmentController',
          params : {
            id : null,
            mode : null
          },
          resolve : {
            deps : [
              '$ocLazyLoad',
              function($ocLazyLoad) {
                return $ocLazyLoad.load([ 'lazy_datatables',
                  'app/components/staffs/department/js/DepartmentController.js',
                  'app/components/staffs/department/js/DepartmentService.js',
                  'app/components/staffs/department/js/DepartmentModel.js' ]);
              } ]
          }
        })

        .state(
          "restricted.staffs.designation",
          {
            url : "/designation",
            templateUrl : 'app/components/staffs/designation/DesignationForm.html',
            controller : 'DesignationController',
            params : {
              id : null,
              mode : null
            },
            resolve : {
              deps : [
                '$ocLazyLoad',
                function($ocLazyLoad) {
                  return $ocLazyLoad.load([ 'app/components/staffs/designation/js/DesignationController.js',
                    'app/components/staffs/designation/js/DesignationService.js',
                    'app/components/admin/role/js/RoleService.js',
                    'app/components/staffs/designation/js/DesignationModel.js' ]);
                } ]
            }
          }).state(
        "restricted.staffs.manageDesignation",
        {
          url : "/manageDesignation",
          templateUrl : 'app/components/staffs/designation/DesignationManage.html',
          controller : 'ManageDesignationController',
          params : {
            id : null,
            mode : null
          },
          resolve : {
            deps : [
              '$ocLazyLoad',
              function($ocLazyLoad) {
                return $ocLazyLoad.load([ 'lazy_datatables',
                  'app/components/staffs/designation/js/DesignationController.js',
                  'app/components/staffs/designation/js/DesignationService.js',
                  'app/components/staffs/designation/js/DesignationModel.js' ]);
              } ]
          }
        })
        .state("restricted.notifications", {
          url : "/notifications",
          template : '<div ui-view autoscroll="false"/>',
          abstract : true
        }).state(
        "restricted.notifications.template",
        {
          url : "/template",
          templateUrl : 'app/components/notifications/template/TemplateForm.html',
          controller : 'TemplateController',
          params : {
            id : null,
            mode : null
          },
          resolve : {
            deps : [
              '$ocLazyLoad',
              function($ocLazyLoad) {
                return $ocLazyLoad.load([
                  'lazy_ng_dropzone', 'lazy_parsleyjs', 'lazy_ckeditor',
                  'app/components/notifications/template/js/TemplateModel.js',
                  'app/components/notifications/template/js/TemplateController.js',
                  'app/components/notifications/template/js/TemplateService.js',
                  'app/components/settings/application/js/SettingsService.js' ]);
              } ]
          }
        }).state(
        "restricted.notifications.manageTemplate",
        {
          url : "/manageTemplate",
          templateUrl : 'app/components/notifications/template/TemplateManage.html',
          controller : 'ManageTemplateController',
          params : {
            id : null,
            mode : null
          },
          resolve : {
            deps : [
              '$ocLazyLoad',
              function($ocLazyLoad) {
                return $ocLazyLoad.load([ 'lazy_datatables',
                  'app/components/notifications/template/js/TemplateController.js',
                  'app/components/notifications/template/js/TemplateService.js' ]);
              } ]
          }
        }).state(
        "restricted.notifications.manageNotification",
        {
          url : "/manageNotification",
          templateUrl : 'app/components/notifications/notification/NotificationManage.html',
          controller : 'ManageNotificationController',
          params : {
            id : null,
            mode : null
          },
          resolve : {
            deps : [
              '$ocLazyLoad',
              function($ocLazyLoad) {
                return $ocLazyLoad.load([ 'lazy_datatables',
                  'app/components/notifications/notification/js/NotificationController.js',
                  'app/components/notifications/notification/js/NotificationService.js' ]);
              } ]
          }
        })

        .state(
          "restricted.notifications.notification",
          {
            url : "/notification",
            templateUrl : 'app/components/notifications/notification/NotificationForm.html',
            controller : 'NotificationController',
            params : {
              id : null,
              mode : null
            },
            resolve : {
              deps : [
                '$ocLazyLoad',
                function($ocLazyLoad) {
                  return $ocLazyLoad.load([ 'app/components/notifications/notification/js/NotificationController.js',
                    'app/components/notifications/notification/js/NotificationService.js' ]);
                } ]
            }
          }).state(
        "restricted.notifications.manageBulkNotification",
        {
          url : "/manageBulkNotification",
          templateUrl : 'app/components/notifications/bulkNotification/BulkNotificationManage.html',
          controller : 'ManageBulkNotificationController',
          params : {
            id : null,
            mode : null
          },
          resolve : {
            deps : [
              '$ocLazyLoad',
              function($ocLazyLoad) {
                return $ocLazyLoad.load([ 'lazy_datatables',
                  'app/components/notifications/bulkNotification/js/BulkNotificationController.js',
                  'app/components/notifications/bulkNotification/js/BulkNotificationService.js',
                  'app/components/staffs/staff/js/StaffService.js',
                  'app/components/students/guardian/js/GuardianService.js',
                  'app/components/students/student/js/StudentService.js' ]);
              } ],
            messages : function($http) {
              return $http({
                method : 'GET',
                url : 'data/mailbox_data.json'
              }).then(function(data) {
                return data.data;
              });
            }
          }
        })

        .state(
          "restricted.notifications.bulkNotification",
          {
            url : "/bulkNotification",
            templateUrl : 'app/components/notifications/bulkNotification/BulkNotificationForm.html',
            controller : 'BulkNotificationController',
            params : {
              id : null,
              mode : null
            },
            resolve : {
              deps : [
                '$ocLazyLoad',
                function($ocLazyLoad) {
                  return $ocLazyLoad.load([ 'lazy_ng_dropzone',
                    'app/components/notifications/bulkNotification/js/BulkNotificationController.js',
                    'app/components/notifications/bulkNotification/js/BulkNotificationService.js',
                    'app/components/notifications/bulkNotification/js/BulkNotificationModel.js',
                    'app/components/admin/group/js/GroupService.js',
                    'app/components/notifications/template/js/TemplateService.js',
                    'app/components/students/student/js/StudentService.js',
                    'app/components/staffs/staff/js/StaffService.js',
                    'app/components/schools/branch/js/BranchService.js',
                    'app/components/schools/course/js/CourseService.js',
                    'app/components/schools/batch/js/BatchService.js',
                    'app/components/students/guardian/js/GuardianService.js',
                    'app/components/staffs/department/js/DepartmentService.js', 'lazy_ckeditor' ]);
                } ]
            }
          }).state(
        "restricted.notifications.userNotification",
        {
          url : "/userNotification",
          templateUrl : 'app/components/notifications/userNotification/UserNotification.html',
          controller : 'UserNotificationController',
          params : {
            id : null,
            mode : null
          },
          resolve : {
            deps : [
              '$ocLazyLoad',
              function($ocLazyLoad) {
                return $ocLazyLoad.load([
                  'app/components/notifications/userNotification/js/UserNotificationController.js',
                  'app/components/notifications/userNotification/js/UserNotificationService.js',
                ]);
              } ],
            messages : function($http) {
              return $http({
                method : 'GET',
                url : 'data/mailbox_data.json'
              }).then(function(data) {
                return data.data;
              });
            }
          }
        })

        .state("restricted.fees", {
          url : "/fees",
          template : '<div ui-view autoscroll="false"/>',
          abstract : true
        })

        .state(
          "restricted.fees.manageFeeCategory",
          {
            url : "/manageFeeCategory",
            templateUrl : 'app/components/fees/category/FeeCategoryManage.html',
            controller : 'ManageFeeCategoryController',
            params : {
              id : null,
              mode : null
            },
            resolve : {
              deps : [
                '$ocLazyLoad',
                function($ocLazyLoad) {
                  return $ocLazyLoad.load([ 'lazy_datatables',
                    'app/components/fees/category/js/FeeCategoryController.js',
                    'app/components/fees/category/js/FeeCategoryService.js' ]);
                } ]
            }
          })

        .state(
          "restricted.fees.feeCategory",
          {
            url : "/feeCategory",
            templateUrl : 'app/components/fees/category/FeeCategoryForm.html',
            controller : 'FeeCategoryController',
            params : {
              id : null,
              mode : null
            },
            resolve : {
              deps : [
                '$ocLazyLoad',
                function($ocLazyLoad) {
                  return $ocLazyLoad.load([ 'app/components/fees/category/js/FeeCategoryController.js',
                    'app/components/fees/category/js/FeeCategoryService.js',
                    'app/components/fees/category/js/FeeCategoryModel.js', 'lazy_parsleyjs', 'lazy_pwswitch' ]);
                } ]
            }
          })

        .state(
          "restricted.fees.manageFee",
          {
            url : "/manageFee",
            templateUrl : 'app/components/fees/manager/FeeManage.html',
            controller : 'ManageFeeController',
            params : {
              id : null,
              mode : null
            },
            resolve : {
              deps : [
                '$ocLazyLoad',
                function($ocLazyLoad) {
                  return $ocLazyLoad.load([ 'lazy_datatables', 'app/components/fees/manager/js/FeeController.js',
                    'app/components/fees/manager/js/FeeService.js' ]);
                } ]
            }
          })

        .state(
          "restricted.fees.fee",
          {
            url : "/fee",
            templateUrl : 'app/components/fees/manager/FeeForm.html',
            controller : 'FeeController',
            params : {
              id : null,
              mode : null
            },
            resolve : {
              deps : [
                '$ocLazyLoad',
                function($ocLazyLoad) {
                  return $ocLazyLoad.load([ 'app/components/fees/manager/js/FeeController.js',
                    'app/components/fees/manager/js/FeeService.js', 'app/components/fees/manager/js/FeeModel.js',
                    'app/components/fees/category/js/FeeCategoryService.js',
                    'app/components/schools/course/js/CourseService.js', 'lazy_parsleyjs', 'lazy_pwswitch' ]);
                } ]
            }
          })

        .state(
          "restricted.fees.manageWaiver",
          {
            url : "/manageWaiver",
            templateUrl : 'app/components/fees/waiver/FeeWaiverManage.html',
            controller : 'ManageFeeWaiverController',
            params : {
              id : null,
              mode : null
            },
            resolve : {
              deps : [
                '$ocLazyLoad',
                function($ocLazyLoad) {
                  return $ocLazyLoad.load([ 'lazy_datatables', 'app/components/fees/waiver/js/FeeWaiverController.js',
                    'app/components/fees/waiver/js/FeeWaiverService.js' ]);
                } ]
            }
          })

        .state(
          "restricted.fees.waiver",
          {
            url : "/waiver",
            templateUrl : 'app/components/fees/waiver/FeeWaiverForm.html',
            controller : 'FeeWaiverController',
            params : {
              id : null,
              mode : null
            },
            resolve : {
              deps : [
                '$ocLazyLoad',
                function($ocLazyLoad) {
                  return $ocLazyLoad.load([ 'app/components/fees/waiver/js/FeeWaiverController.js',
                    'app/components/fees/waiver/js/FeeWaiverService.js',
                    'app/components/fees/category/js/FeeCategoryService.js',
                    'app/components/fees/waiver/js/FeeWaiverModel.js', 'lazy_parsleyjs', ]);
                } ]
            }
          })

        .state(
          "restricted.fees.manageReceipt",
          {
            url : "/manageReceipt",
            templateUrl : 'app/components/fees/receipt/FeeReceiptManage.html',
            controller : 'ManageFeeReceiptController',
            params : {
              id : null,
              mode : null
            },
            resolve : {
              deps : [
                '$ocLazyLoad',
                function($ocLazyLoad) {
                  return $ocLazyLoad.load([ 'lazy_datatables',
                    'app/components/fees/receipt/js/FeeReceiptController.js',
                    'app/components/fees/receipt/js/FeeReceiptService.js' ]);
                } ]
            }
          })

        .state(
          "restricted.fees.receipt",
          {
            url : "/receipt",
            templateUrl : 'app/components/fees/receipt/FeeReceiptForm.html',
            controller : 'FeeReceiptController',
            params : {
              id : null,
              mode : null
            },
            resolve : {
              deps : [
                '$ocLazyLoad',
                function($ocLazyLoad) {
                  return $ocLazyLoad.load([ 'lazy_parsleyjs', 'app/components/fees/receipt/js/FeeReceiptController.js',
                    'app/components/fees/receipt/js/FeeReceiptService.js',
                    'app/components/fees/receipt/js/FeeReceiptModel.js',
                    'app/components/students/student/js/StudentService.js',
                    'app/components/schools/course/js/CourseService.js',
                    'app/components/schools/batch/js/BatchService.js' ]);
                } ]
            }
          })

        .state(
          "restricted.dashboards",
          {
            url : "/dashboards",
            template : '<div ui-view autoscroll="false"/>',
            abstract : true,
            resolve : {
              deps : [
                '$ocLazyLoad',
                function($ocLazyLoad) {
                  return $ocLazyLoad.load([
                    'lazy_countUp', 'lazy_charts_peity', 'lazy_charts_easypiechart', 'lazy_charts_metricsgraphics',
                    'lazy_charts_chartist', 'lazy_weathericons', 'lazy_clndr', 'lazy_echarts', 'lazy_google_maps',
                    'lazy_charts_c3', 'lazy_datatables', 'lazy_pwswitch', 'lazy_ionRangeSlider'
                  ],
                    {
                      serie : true
                    });
                } ],
            },
          })

        .state(
          "restricted.dashboards.system",
          {
            url : "/system",
            templateUrl : 'app/components/dashboards/system/dashboard.html',
            controller : 'SystemsDashboardController',
            resolve : {
              deps : [
                '$ocLazyLoad',
                function($ocLazyLoad) {
                  return $ocLazyLoad.load([
                    'lazy_circuit_breaker',
                    'app/components/dashboards/system/js/dashboardController.js',
                    'app/components/dashboards/system/js/dashboardService.js',
                    'app/components/dashboards/system/js/dashboardModel.js' ], {
                    serie : true
                  });
                } ],
              applications : function($http) {
                return $http({
                  method : 'GET',
                  url : 'api/applications'
                }).then(function(response) {
                  return response.data;
                });
              },
            },
            data : {
              pageTitle : 'Dashboard'
            },
            ncyBreadcrumb : {
              label : 'Home'
            }
          })

        .state(
          "restricted.dashboards.admin",
          {
            url : "/admin",
            templateUrl : 'app/components/dashboards/admin/dashboard.html',
            controller : 'AdminDashboardController',
            resolve : {
              deps : [
                '$ocLazyLoad',
                function($ocLazyLoad) {
                  return $ocLazyLoad.load([
                    'app/components/dashboards/admin/js/dashboardController.js',
                    'app/components/dashboards/admin/js/dashboardService.js',
                    'app/components/dashboards/admin/js/dashboardModel.js' ], {
                    serie : true
                  });
                } ]
            },
            data : {
              pageTitle : 'Dashboard'
            },
            ncyBreadcrumb : {
              label : 'Home'
            }
          })

        .state(
          "restricted.dashboards.staff",
          {
            url : "/staff",
            templateUrl : 'app/components/dashboards/staff/dashboard.html',
            controller : 'StaffDashboardController',
            resolve : {
              deps : [
                '$ocLazyLoad',
                function($ocLazyLoad) {
                  return $ocLazyLoad.load([
                    'app/components/dashboards/staff/js/dashboardController.js',
                    'app/components/dashboards/staff/js/dashboardService.js',
                    'app/components/dashboards/staff/js/dashboardModel.js' ],
                    {
                      serie : true
                    });
                } ]
            },
            data : {
              pageTitle : 'Dashboard'
            },
            ncyBreadcrumb : {
              label : 'Home'
            }
          })

        .state(
          "restricted.dashboards.student",
          {
            url : "/student",
            templateUrl : 'app/components/dashboards/student/dashboard.html',
            controller : 'StudentDashboardController',
            resolve : {
              deps : [
                '$ocLazyLoad',
                function($ocLazyLoad) {
                  return $ocLazyLoad.load([
                    'app/components/dashboards/student/js/dashboardController.js',
                    'app/components/dashboards/student/js/dashboardService.js',
                    'app/components/dashboards/student/js/dashboardModel.js' ], {
                    serie : true
                  });
                } ]
            },
            data : {
              pageTitle : 'Dashboard'
            },
            ncyBreadcrumb : {
              label : 'Home'
            }
          })

        .state(
          "restricted.dashboards.guardian",
          {
            url : "/guardian",
            templateUrl : 'app/components/dashboards/guardian/dashboard.html',
            controller : 'GuardianDashboardController',
            resolve : {
              deps : [
                '$ocLazyLoad',
                function($ocLazyLoad) {
                  return $ocLazyLoad.load([
                    'app/components/dashboards/guardian/js/dashboardController.js',
                    'app/components/dashboards/guardian/js/dashboardModel.js',
                    'app/components/dashboards/guardian/js/dashboardService.js',
                    'app/components/students/student/js/StudentService.js' ], {
                    serie : true
                  });
                } ]
            },
            data : {
              pageTitle : 'Dashboard'
            },
            ncyBreadcrumb : {
              label : 'Home'
            }
          })


        // -- FORMS --
        .state("restricted.forms", {
          url : "/forms",
          template : '<div ui-view autoscroll="false"/>',
          abstract : true
        }).state("restricted.forms.regular", {
        url : "/regular",
        templateUrl : 'app/components/forms/regularView.html',
        controller : 'regularCtrl',
        resolve : {
          deps : [ '$ocLazyLoad', function($ocLazyLoad) {
            return $ocLazyLoad.load('app/components/forms/regularController.js');
          } ]
        },
        data : {
          pageTitle : 'Regular Elements'
        }
      }).state(
        "restricted.forms.advanced",
        {
          url : "/advanced",
          templateUrl : 'app/components/forms/advancedView.html',
          controller : 'advancedCtrl',
          resolve : {
            deps : [
              '$ocLazyLoad',
              function($ocLazyLoad) {
                return $ocLazyLoad.load([ 'lazy_ionRangeSlider', 'lazy_masked_inputs', 'lazy_character_counter',
                  'app/components/forms/advancedController.js' ], {
                  serie : true
                });
              } ]
          },
          data : {
            pageTitle : 'Advanced Elements'
          }
        }).state("restricted.forms.dynamic", {
        url : "/dynamic",
        templateUrl : 'app/components/forms/dynamicView.html',
        controller : 'dynamicCtrl',
        resolve : {
          deps : [ '$ocLazyLoad', function($ocLazyLoad) {
            return $ocLazyLoad.load([ 'app/components/forms/dynamicController.js' ]);
          } ]
        },
        data : {
          pageTitle : 'Dynamic Elements'
        }
      }).state("restricted.forms.file_input", {
        url : "/file_input",
        templateUrl : 'app/components/forms/file_inputView.html',
        controller : 'file_inputCtrl',
        resolve : {
          deps : [ '$ocLazyLoad', function($ocLazyLoad) {
            return $ocLazyLoad.load([ 'lazy_dropify', 'app/components/forms/file_inputController.js' ]);
          } ]
        },
        data : {
          pageTitle : 'File Input (dropify)'
        }
      }).state("restricted.forms.file_upload", {
        url : "/file_upload",
        templateUrl : 'app/components/forms/file_uploadView.html',
        controller : 'file_uploadCtrl',
        resolve : {
          deps : [ '$ocLazyLoad', function($ocLazyLoad) {
            return $ocLazyLoad.load('app/components/forms/file_uploadController.js');
          } ]
        },
        data : {
          pageTitle : 'File Upload'
        }
      }).state("restricted.forms.validation", {
        url : "/validation",
        templateUrl : 'app/components/forms/validationView.html',
        controller : 'validationCtrl',
        resolve : {
          deps : [ '$ocLazyLoad', function($ocLazyLoad) {
            return $ocLazyLoad.load([ 'lazy_parsleyjs', 'app/components/forms/validationController.js' ]);
          } ]
        },
        data : {
          pageTitle : 'Validation'
        }
      }).state("restricted.forms.wizard", {
        url : "/wizard",
        templateUrl : 'app/components/forms/wizardView.html',
        controller : 'wizardCtrl',
        resolve : {
          deps : [ '$ocLazyLoad', function($ocLazyLoad) {
            return $ocLazyLoad.load([ 'lazy_parsleyjs', 'lazy_wizard', 'app/components/forms/wizardController.js' ], {
              serie : true
            });
          } ]
        },
        data : {
          pageTitle : 'Wizard'
        }
      }).state("restricted.forms.wysiwyg_ckeditor", {
        url : "/wysiwyg_ckeditor",
        templateUrl : 'app/components/forms/wysiwyg_ckeditorView.html',
        controller : 'ckeditorCtrl',
        resolve : {
          deps : [ '$ocLazyLoad', function($ocLazyLoad) {
            return $ocLazyLoad.load([ 'lazy_ckeditor', 'app/components/forms/wysiwyg_ckeditorController.js' ], {
              serie : true
            });
          } ]
        },
        data : {
          pageTitle : 'ckEditor'
        }
      }).state("restricted.forms.wysiwyg_tinymce", {
        url : "/wysiwyg_tinymce",
        templateUrl : 'app/components/forms/wysiwyg_tinymceView.html',
        controller : 'tinymceCtrl',
        resolve : {
          deps : [ '$ocLazyLoad', function($ocLazyLoad) {
            return $ocLazyLoad.load([ 'lazy_tinymce', 'app/components/forms/wysiwyg_tinymceController.js' ], {
              serie : true
            });
          } ]
        },
        data : {
          pageTitle : 'tinyMCE'
        }
      }).state("restricted.forms.wysiwyg_inline", {
        url : "/wysiwyg_inline",
        templateUrl : 'app/components/forms/wysiwyg_ckeditorInlineView.html',
        controller : 'ckeditorInlineCtrl',
        resolve : {
          deps : [ '$ocLazyLoad', function($ocLazyLoad) {
            return $ocLazyLoad.load([ 'lazy_ckeditor', 'app/components/forms/wysiwyg_ckeditorInlineController.js' ], {
              serie : true
            });
          } ]
        },
        data : {
          pageTitle : 'ckEditor inline'
        }
      })

        // -- LAYOUT --
        .state("restricted.layout", {
          url : "/layout",
          template : '<div ui-view autoscroll="false"/>',
          abstract : true
        }).state("restricted.layout.top_menu", {
        url : "/top_menu",
        templateUrl : 'app/components/layout/top_menuView.html',
        controller : 'top_menuCtrl',
        resolve : {
          deps : [ '$ocLazyLoad', function($ocLazyLoad) {
            return $ocLazyLoad.load('app/components/layout/top_menuController.js');
          } ]
        },
        data : {
          pageTitle : 'Top Menu'
        }
      }).state("restricted.layout.full_header", {
        url : "/full_header",
        templateUrl : 'app/components/layout/full_headerView.html',
        controller : 'full_headerCtrl',
        resolve : {
          deps : [ '$ocLazyLoad', function($ocLazyLoad) {
            return $ocLazyLoad.load('app/components/layout/full_headerController.js');
          } ]
        },
        data : {
          pageTitle : 'Full Header'
        }
      })

        // -- KENDO UI --
        .state("restricted.kendoui", {
          url : "/kendoui",
          template : '<div ui-view autoscroll="false"/>',
          abstract : true,
          resolve : {
            deps : [ '$ocLazyLoad', function($ocLazyLoad) {
              return $ocLazyLoad.load('lazy_KendoUI');
            } ]
          }
        }).state("restricted.kendoui.autocomplete", {
        url : "/autocomplete",
        templateUrl : 'app/components/kendoUI/autocompleteView.html',
        controller : 'autocompleteCtrl',
        resolve : {
          deps : [ '$ocLazyLoad', function($ocLazyLoad) {
            return $ocLazyLoad.load('app/components/kendoUI/autocompleteController.js');
          } ]
        },
        data : {
          pageTitle : 'Autocomplete (kendoUI)'
        }
      }).state("restricted.kendoui.calendar", {
        url : "/calendar",
        templateUrl : 'app/components/kendoUI/calendarView.html',
        controller : 'calendarCtrl',
        resolve : {
          deps : [ '$ocLazyLoad', function($ocLazyLoad) {
            return $ocLazyLoad.load('app/components/kendoUI/calendarController.js');
          } ]
        },
        data : {
          pageTitle : 'Calendar (kendoUI)'
        }
      }).state("restricted.kendoui.colorpicker", {
        url : "/colorPicker",
        templateUrl : 'app/components/kendoUI/colorPickerView.html',
        data : {
          pageTitle : 'ColorPicker (kendoUI)'
        }
      }).state("restricted.kendoui.combobox", {
        url : "/combobox",
        templateUrl : 'app/components/kendoUI/comboboxView.html',
        controller : 'comboboxCtrl',
        resolve : {
          deps : [ '$ocLazyLoad', function($ocLazyLoad) {
            return $ocLazyLoad.load('app/components/kendoUI/comboboxController.js');
          } ]
        },
        data : {
          pageTitle : 'Combobox (kendoUI)'
        }
      }).state("restricted.kendoui.datepicker", {
        url : "/datepicker",
        templateUrl : 'app/components/kendoUI/datepickerView.html',
        controller : 'datepickerCtrl',
        resolve : {
          deps : [ '$ocLazyLoad', function($ocLazyLoad) {
            return $ocLazyLoad.load('app/components/kendoUI/datepickerController.js');
          } ]
        },
        data : {
          pageTitle : 'Datepicker (kendoUI)'
        }
      }).state("restricted.kendoui.datetimepicker", {
        url : "/datetimepicker",
        templateUrl : 'app/components/kendoUI/datetimepickerView.html',
        controller : 'datetimepickerCtrl',
        resolve : {
          deps : [ '$ocLazyLoad', function($ocLazyLoad) {
            return $ocLazyLoad.load('app/components/kendoUI/datetimepickerController.js');
          } ]
        },
        data : {
          pageTitle : 'Datetimepicker (kendoUI)'
        }
      }).state("restricted.kendoui.dropdown_list", {
        url : "/dropdown_list",
        templateUrl : 'app/components/kendoUI/dropdown_listView.html',
        controller : 'dropdownListCtrl',
        resolve : {
          deps : [ '$ocLazyLoad', function($ocLazyLoad) {
            return $ocLazyLoad.load('app/components/kendoUI/dropdown_listController.js');
          } ]
        },
        data : {
          pageTitle : 'Dropdown List (kendoUI)'
        }
      }).state("restricted.kendoui.masked_input", {
        url : "/masked_input",
        templateUrl : 'app/components/kendoUI/masked_inputView.html',
        controller : 'maskedInputCtrl',
        resolve : {
          deps : [ '$ocLazyLoad', function($ocLazyLoad) {
            return $ocLazyLoad.load('app/components/kendoUI/masked_inputController.js');
          } ]
        },
        data : {
          pageTitle : 'Masked Input (kendoUI)'
        }
      }).state("restricted.kendoui.menu", {
        url : "/menu",
        templateUrl : 'app/components/kendoUI/menuView.html',
        controller : 'menuCtrl',
        resolve : {
          deps : [ '$ocLazyLoad', function($ocLazyLoad) {
            return $ocLazyLoad.load('app/components/kendoUI/menuController.js');
          } ]
        },
        data : {
          pageTitle : 'Menu (kendoUI)'
        }
      }).state("restricted.kendoui.multiselect", {
        url : "/multiselect",
        templateUrl : 'app/components/kendoUI/multiselectView.html',
        controller : 'multiselectCtrl',
        resolve : {
          deps : [ '$ocLazyLoad', function($ocLazyLoad) {
            return $ocLazyLoad.load('app/components/kendoUI/multiselectController.js');
          } ]
        },
        data : {
          pageTitle : 'Multiselect (kendoUI)'
        }
      }).state("restricted.kendoui.numeric_textbox", {
        url : "/numeric_textbox",
        templateUrl : 'app/components/kendoUI/numeric_textboxView.html',
        controller : 'numericTextboxCtrl',
        resolve : {
          deps : [ '$ocLazyLoad', function($ocLazyLoad) {
            return $ocLazyLoad.load('app/components/kendoUI/numeric_textboxController.js');
          } ]
        },
        data : {
          pageTitle : 'Numeric textbox (kendoUI)'
        }
      }).state("restricted.kendoui.panelbar", {
        url : "/panelbar",
        templateUrl : 'app/components/kendoUI/panelbarView.html',
        data : {
          pageTitle : 'PanelBar (kendoUI)'
        }
      }).state("restricted.kendoui.timepicker", {
        url : "/timepicker",
        templateUrl : 'app/components/kendoUI/timepickerView.html',
        data : {
          pageTitle : 'Timepicker (kendoUI)'
        }
      }).state("restricted.kendoui.toolbar", {
        url : "/toolbar",
        templateUrl : 'app/components/kendoUI/toolbarView.html',
        controller : 'toolbarCtrl',
        resolve : {
          deps : [ '$ocLazyLoad', function($ocLazyLoad) {
            return $ocLazyLoad.load('app/components/kendoUI/toolbarController.js');
          } ]
        },
        data : {
          pageTitle : 'Toolbar (kendoUI)'
        }
      }).state("restricted.kendoui.window", {
        url : "/window",
        templateUrl : 'app/components/kendoUI/windowView.html',
        controller : 'windowCtrl',
        resolve : {
          deps : [ '$ocLazyLoad', function($ocLazyLoad) {
            return $ocLazyLoad.load('app/components/kendoUI/windowController.js');
          } ]
        },
        data : {
          pageTitle : 'Window (kendoUI)'
        }
      })
        // -- COMPONENTS --
        .state("restricted.components", {
          url : "/components",
          template : '<div ui-view autoscroll="false" ng-class="{ \'uk-height-1-1\': page_full_height }"/>',
          abstract : true,
          ncyBreadcrumb : {
            label : 'Components'
          }
        }).state("restricted.components.accordion", {
        url : "/accordion",
        controller : 'accordionCtrl',
        templateUrl : 'app/components/components/accordionView.html',
        resolve : {
          deps : [ '$ocLazyLoad', function($ocLazyLoad) {
            return $ocLazyLoad.load('app/components/components/accordionController.js');
          } ]
        },
        data : {
          pageTitle : 'Accordion (components)'
        }
      }).state("restricted.components.autocomplete", {
        url : "/autocomplete",
        templateUrl : 'app/components/components/autocompleteView.html',
        controller : 'autocompleteCtrl',
        resolve : {
          deps : [ '$ocLazyLoad', function($ocLazyLoad) {
            return $ocLazyLoad.load('app/components/components/autocompleteController.js');
          } ]
        },
        data : {
          pageTitle : 'Autocomplete (components)'
        }
      }).state("restricted.components.breadcrumbs", {
        url : "/breadcrumbs",
        templateUrl : 'app/components/components/breadcrumbsView.html',
        controller : 'breadcrumbsCtrl',
        resolve : {
          deps : [ '$ocLazyLoad', function($ocLazyLoad) {
            return $ocLazyLoad.load('app/components/components/breadcrumbsController.js');
          } ]
        },
        data : {
          pageTitle : 'Breadcrumbs (components)'
        },
        ncyBreadcrumb : {
          label : 'Breadcrumbs'
        }
      }).state("restricted.components.buttons", {
        url : "/buttons",
        templateUrl : 'app/components/components/buttonsView.html',
        data : {
          pageTitle : 'Buttons (components)'
        }
      }).state("restricted.components.buttons_fab", {
        url : "/buttons_fab",
        templateUrl : 'app/components/components/fabView.html',
        data : {
          pageTitle : 'Buttons FAB (components)'
        }
      }).state("restricted.components.cards", {
        url : "/cards",
        templateUrl : 'app/components/components/cardsView.html',
        controller : 'cardsCtrl',
        resolve : {
          deps : [ '$ocLazyLoad', function($ocLazyLoad) {
            return $ocLazyLoad.load('app/components/components/cardsController.js');
          } ]
        },
        data : {
          pageTitle : 'Cards (components)'
        }
      }).state("restricted.components.colors", {
        url : "/colors",
        templateUrl : 'app/components/components/colorsView.html',
        data : {
          pageTitle : 'Colors (components)'
        }
      }).state("restricted.components.common", {
        url : "/common",
        templateUrl : 'app/components/components/commonView.html',
        data : {
          pageTitle : 'Common (components)'
        }
      }).state("restricted.components.dropdowns", {
        url : "/dropdowns",
        templateUrl : 'app/components/components/dropdownsView.html',
        data : {
          pageTitle : 'Dropdowns (components)'
        }
      }).state("restricted.components.dynamic_grid", {
        url : "/dynamic_grid",
        templateUrl : 'app/components/components/dynamic_gridView.html',
        data : {
          pageTitle : 'Dynamic Grid (components)'
        }
      }).state("restricted.components.footer", {
        url : "/footer",
        templateUrl : 'app/components/components/footerView.html',
        controller : 'footerCtrl',
        resolve : {
          deps : [ '$ocLazyLoad', function($ocLazyLoad) {
            return $ocLazyLoad.load('app/components/components/footerController.js');
          } ]
        },
        data : {
          pageTitle : 'Footer (components)'
        }
      }).state("restricted.components.grid", {
        url : "/grid",
        templateUrl : 'app/components/components/gridView.html',
        data : {
          pageTitle : 'Grid (components)'
        }
      }).state("restricted.components.icons", {
        url : "/icons",
        templateUrl : 'app/components/components/iconsView.html',
        data : {
          pageTitle : 'Icons (components)'
        }
      }).state("restricted.components.lists", {
        url : "/lists",
        templateUrl : 'app/components/components/listsView.html',
        data : {
          pageTitle : 'Lists (components)'
        }
      }).state("restricted.components.modal", {
        url : "/modal",
        templateUrl : 'app/components/components/modalView.html',
        data : {
          pageTitle : 'Modals/Lightboxes (components)'
        }
      }).state("restricted.components.nestable", {
        url : "/nestable",
        templateUrl : 'app/components/components/nestableView.html',
        controller : 'nestableCtrl',
        resolve : {
          deps : [ '$ocLazyLoad', function($ocLazyLoad) {
            return $ocLazyLoad.load('app/components/components/nestableController.js');
          } ]
        },
        data : {
          pageTitle : 'Nestable (components)'
        }
      }).state("restricted.components.notifications", {
        url : "/notifications",
        templateUrl : 'app/components/components/notificationsView.html',
        controller : 'notificationsCtrl',
        resolve : {
          deps : [ '$ocLazyLoad', function($ocLazyLoad) {
            return $ocLazyLoad.load('app/components/components/notificationsController.js');
          } ]
        },
        data : {
          pageTitle : 'Notifications (components)'
        }
      }).state("restricted.components.panels", {
        url : "/panels",
        templateUrl : 'app/components/components/panelsView.html',
        data : {
          pageTitle : 'Panels (components)'
        }
      }).state("restricted.components.preloaders", {
        url : "/preloaders",
        templateUrl : 'app/components/components/preloadersView.html',
        controller : 'preloadersCtrl',
        resolve : {
          deps : [ '$ocLazyLoad', function($ocLazyLoad) {
            return $ocLazyLoad.load('app/components/components/preloadersController.js');
          } ]
        },
        data : {
          pageTitle : 'Preloaders (components)'
        }
      }).state("restricted.components.slider", {
        url : "/slider",
        templateUrl : 'app/components/components/sliderView.html',
        data : {
          pageTitle : 'Slider (components)'
        }
      }).state("restricted.components.slideshow", {
        url : "/slideshow",
        templateUrl : 'app/components/components/slideshowView.html',
        data : {
          pageTitle : 'Slideshow (components)'
        }
      }).state("restricted.components.sortable", {
        url : "/sortable",
        templateUrl : 'app/components/components/sortableView.html',
        controller : 'sortableCtrl',
        resolve : {
          deps : [ '$ocLazyLoad', function($ocLazyLoad) {
            return $ocLazyLoad.load([ 'lazy_dragula', 'app/components/components/sortableController.js' ], {
              serie : true
            });
          } ]
        },
        data : {
          pageTitle : 'Sortable (components)'
        }
      }).state("restricted.components.switcher", {
        url : "/switcher",
        templateUrl : 'app/components/components/switcherView.html',
        data : {
          pageTitle : 'Switcher (components)'
        }
      }).state("restricted.components.tables_examples", {
        url : "/tables_examples",
        templateUrl : 'app/components/components/tables_examplesView.html',
        controller : 'tables_examplesCtrl',
        resolve : {
          deps : [ '$ocLazyLoad', function($ocLazyLoad) {
            return $ocLazyLoad.load([ 'app/components/components/tables_examplesController.js' ]);
          } ]
        },
        data : {
          pageTitle : 'Tables Examples (components)'
        }
      }).state("restricted.components.tables", {
        url : "/tables",
        templateUrl : 'app/components/components/tablesView.html',
        data : {
          pageTitle : 'Tables (components)'
        }
      }).state("restricted.components.tabs", {
        url : "/tabs",
        templateUrl : 'app/components/components/tabsView.html',
        data : {
          pageTitle : 'Tabs (components)'
        }
      }).state("restricted.components.tooltips", {
        url : "/tooltips",
        templateUrl : 'app/components/components/tooltipsView.html',
        data : {
          pageTitle : 'Tooltips (components)'
        }
      }).state("restricted.components.typography", {
        url : "/typography",
        templateUrl : 'app/components/components/typographyView.html',
        data : {
          pageTitle : 'Typography (components)'
        }
      })
        // -- E-COMMERCE --
        .state("restricted.ecommerce", {
          url : "/ecommerce",
          template : '<div ui-view autoscroll="false"/>',
          abstract : true
        }).state("restricted.ecommerce.product_details", {
        url : "/product_details",
        templateUrl : 'app/components/ecommerce/product_detailsView.html',
        controller : 'productCtrl',
        resolve : {
          deps : [ '$ocLazyLoad', function($ocLazyLoad) {
            return $ocLazyLoad.load([ 'app/components/ecommerce/productController.js' ]);
          } ]
        },
        data : {
          pageTitle : 'Product Details'
        }
      }).state("restricted.ecommerce.product_edit", {
        url : "/product_edit",
        templateUrl : 'app/components/ecommerce/product_editView.html',
        controller : 'productCtrl',
        resolve : {
          deps : [ '$ocLazyLoad', function($ocLazyLoad) {
            return $ocLazyLoad.load([ 'app/components/ecommerce/productController.js' ]);
          } ]
        },
        data : {
          pageTitle : 'Product Edit'
        }
      }).state("restricted.ecommerce.products_list", {
        url : "/products_list",
        templateUrl : 'app/components/ecommerce/products_listView.html',
        controller : 'products_listCtrl',
        resolve : {
          products_data : function($http) {
            return $http({
              method : 'GET',
              url : 'data/ecommerce_products.json'
            }).then(function(data) {
              return data.data;
            });
          },
          deps : [ '$ocLazyLoad', function($ocLazyLoad) {
            return $ocLazyLoad.load([ 'lazy_pagination', 'app/components/ecommerce/products_listController.js' ], {
              serie : true
            });
          } ]
        },
        data : {
          pageTitle : 'Products List'
        }
      }).state("restricted.ecommerce.products_grid", {
        url : "/products_grid",
        templateUrl : 'app/components/ecommerce/products_gridView.html',
        controller : 'products_gridCtrl',
        resolve : {
          products_data : function($http) {
            return $http({
              method : 'GET',
              url : 'data/ecommerce_products.json'
            }).then(function(data) {
              return data.data;
            });
          },
          deps : [ '$ocLazyLoad', function($ocLazyLoad) {
            return $ocLazyLoad.load([ 'app/components/ecommerce/products_gridController.js' ], {
              serie : true
            });
          } ]
        },
        data : {
          pageTitle : 'Products Grid'
        }
      })
        // -- PLUGINS --
        .state("restricted.plugins", {
          url : "/plugins",
          template : '<div ui-view autoscroll="false"/>',
          abstract : true
        }).state("restricted.plugins.calendar", {
        url : "/calendar",
        templateUrl : 'app/components/plugins/calendarView.html',
        controller : 'calendarCtrl',
        resolve : {
          deps : [ '$ocLazyLoad', function($ocLazyLoad) {
            return $ocLazyLoad.load([ 'lazy_fullcalendar', 'app/components/plugins/calendarController.js' ]);
          } ]
        },
        data : {
          pageTitle : 'Calendar'
        }
      }).state("restricted.plugins.code_editor", {
        url : "/code_editor",
        templateUrl : 'app/components/plugins/code_editorView.html',
        controller : 'code_editorCtrl',
        resolve : {
          deps : [ '$ocLazyLoad', function($ocLazyLoad) {
            return $ocLazyLoad.load([ 'lazy_codemirror', 'app/components/plugins/code_editorController.js' ]);
          } ]
        },
        data : {
          pageTitle : 'Code Editor'
        }
      }).state(
        "restricted.plugins.charts",
        {
          url : "/charts",
          templateUrl : 'app/components/plugins/chartsView.html',
          controller : 'chartsCtrl',
          resolve : {
            deps : [
              '$ocLazyLoad',
              function($ocLazyLoad) {
                return $ocLazyLoad.load([ 'lazy_charts_chartist', 'lazy_charts_metricsgraphics', 'lazy_charts_c3',
                  'app/components/plugins/chartsController.js' ], {
                  serie : true
                });
              } ],
            mg_chart_linked_1 : function($http) {
              return $http({
                method : 'GET',
                url : 'data/mg_brief-1.json'
              }).then(function(data) {
                return data.data;
              });
            },
            mg_chart_linked_2 : function($http) {
              return $http({
                method : 'GET',
                url : 'data/mg_brief-2.json'
              }).then(function(data) {
                return data.data;
              });
            },
            mg_confidence_band : function($http) {
              return $http({
                method : 'GET',
                url : 'data/mg_confidence_band.json'
              }).then(function(data) {
                return data.data;
              });
            },
            mg_currency : function($http) {
              return $http({
                method : 'GET',
                url : 'data/mg_some_currency.json'
              }).then(function(data) {
                return data.data;
              });
            }
          },
          data : {
            pageTitle : 'Charts'
          }
        }).state(
        "restricted.plugins.datatables",
        {
          url : "/datatables",
          templateUrl : 'app/components/plugins/datatablesView.html',
          resolve : {
            deps : [
              '$ocLazyLoad',
              function($ocLazyLoad) {
                return $ocLazyLoad.load([ 'bower_components/angular-resource/angular-resource.min.js',
                  'lazy_datatables', 'app/components/plugins/datatablesController.js' ]);
              } ]
          },
          data : {
            pageTitle : 'Datatables'
          }
        }).state("restricted.plugins.diff_view", {
        url : "/diff_view",
        templateUrl : 'app/components/plugins/diff_viewView.html',
        controller : 'diff_viewCtrl',
        resolve : {
          deps : [ '$ocLazyLoad', function($ocLazyLoad) {
            return $ocLazyLoad.load([ 'lazy_diff', 'app/components/plugins/diff_viewController.js' ], {
              serie : true
            });
          } ]
        },
        data : {
          pageTitle : 'Diff View'
        }
      }).state("restricted.plugins.filemanager", {
        url : "/filemanager",
        controller : 'filemanagerCtrl',
        templateUrl : 'app/components/plugins/filemanagerView.html',
        resolve : {
          deps : [ '$ocLazyLoad', function($ocLazyLoad) {
            return $ocLazyLoad.load([ 'lazy_filemanager', 'app/components/plugins/filemanagerController.js' ], {
              serie : true
            });
          } ]
        },
        data : {
          pageTitle : 'FileManager'
        }
      }).state("restricted.plugins.gantt_chart", {
        url : "/gantt_chart",
        controller : 'gantt_chartCtrl',
        templateUrl : 'app/components/plugins/gantt_chartView.html',
        resolve : {
          deps : [ '$ocLazyLoad', function($ocLazyLoad) {
            return $ocLazyLoad.load([ 'lazy_gantt_chart', 'app/components/plugins/gantt_chartController.js' ]);
          } ]
        },
        data : {
          pageTitle : 'Gantt Chart'
        }
      }).state("restricted.plugins.google_maps", {
        url : "/google_maps",
        templateUrl : 'app/components/plugins/google_mapsView.html',
        resolve : {
          deps : [ '$ocLazyLoad', function($ocLazyLoad) {
            return $ocLazyLoad.load([ 'lazy_google_maps', 'app/components/plugins/google_mapsController.js' ]);
          } ]
        },
        data : {
          pageTitle : 'Google Maps'
        }
      }).state("restricted.plugins.idle_timeout", {
        url : "/idle_timeout",
        templateUrl : 'app/components/plugins/idle_timeoutView.html',
        controller : 'idle_timeoutCtrl',
        resolve : {
          deps : [ '$ocLazyLoad', function($ocLazyLoad) {
            return $ocLazyLoad.load([ 'lazy_idle_timeout', 'app/components/plugins/idle_timeoutController.js' ], {
              serie : true
            });
          } ]
        },
        data : {
          pageTitle : 'Idle Timeout'
        }
      }).state(
        "restricted.plugins.tablesorter",
        {
          url : "/tablesorter",
          templateUrl : 'app/components/plugins/tablesorterView.html',
          controller : 'tablesorterCtrl',
          resolve : {
            deps : [
              '$ocLazyLoad',
              function($ocLazyLoad) {
                return $ocLazyLoad.load([ 'lazy_ionRangeSlider', 'lazy_tablesorter',
                  'app/components/plugins/tablesorterController.js' ], {
                  serie : true
                });
              } ],
            ts_data : function($http) {
              return $http({
                method : 'GET',
                url : 'data/tablesorter.json'
              }).then(function(data) {
                return data.data;
              });
            }
          },
          data : {
            pageTitle : 'Tablesorter'
          }
        }).state("restricted.plugins.tour", {
        url : "/tour",
        templateUrl : 'app/components/plugins/tourView.html',
        controller : 'tourCtrl',
        resolve : {
          deps : [ '$ocLazyLoad', function($ocLazyLoad) {
            return $ocLazyLoad.load([ 'lazy_tour', 'app/components/plugins/tourController.js' ]);
          } ]
        },
        data : {
          pageTitle : 'Tour'
        }
      }).state("restricted.plugins.tree", {
        url : "/tree",
        templateUrl : 'app/components/plugins/treeView.html',
        controller : 'treeCtrl',
        resolve : {
          deps : [ '$ocLazyLoad', function($ocLazyLoad) {
            return $ocLazyLoad.load([ 'lazy_iCheck', 'lazy_tree', 'app/components/plugins/treeController.js' ]);
          } ]
        },
        data : {
          pageTitle : 'Tree'
        }
      }).state("restricted.plugins.vector_maps", {
        url : "/vector_maps",
        templateUrl : 'app/components/plugins/vector_mapsView.html',
        controller : 'vector_mapsCtrl',
        resolve : {
          deps : [ '$ocLazyLoad', function($ocLazyLoad) {
            return $ocLazyLoad.load([ 'lazy_vector_maps', 'app/components/plugins/vector_mapsController.js' ]);
          } ]
        },
        data : {
          pageTitle : 'Vector Maps'
        }
      })

        // -- PAGES --
        .state("restricted.pages", {
          url : "/pages",
          template : '<div ui-view autoscroll="false" ng-class="{ \'uk-height-1-1\': page_full_height }" />',
          abstract : true
        }).state("restricted.pages.blank", {
        url : "/blank",
        templateUrl : 'app/components/pages/blankView.html',
        data : {
          pageTitle : 'Blank Page'
        }
      }).state("restricted.pages.chat", {
        url : "/chat",
        templateUrl : 'app/components/pages/chatView.html',
        controller : 'chatCtrl',
        resolve : {
          deps : [ '$ocLazyLoad', function($ocLazyLoad) {
            return $ocLazyLoad.load([ 'app/components/pages/chatController.js' ]);
          } ]
        },
        data : {
          pageTitle : 'Chat'
        }
      }).state("restricted.pages.contact_list", {
        url : "/contact_list",
        templateUrl : 'app/components/pages/contact_listView.html',
        controller : 'contact_listCtrl',
        resolve : {
          deps : [ '$ocLazyLoad', function($ocLazyLoad) {
            return $ocLazyLoad.load([ 'app/components/pages/contact_listController.js' ], {
              serie : true
            });
          } ],
          contact_list : function($http) {
            return $http({
              method : 'GET',
              url : 'data/contact_list.json'
            }).then(function(data) {
              return data.data;
            });
          }
        },
        data : {
          pageTitle : 'Contact List'
        }
      }).state("restricted.pages.gallery", {
        url : "/gallery",
        templateUrl : 'app/components/pages/galleryView.html',
        controller : 'galleryCtrl',
        resolve : {
          deps : [ '$ocLazyLoad', function($ocLazyLoad) {
            return $ocLazyLoad.load([ 'app/components/pages/galleryController.js' ], {
              serie : true
            });
          } ]
        },
        data : {
          pageTitle : 'Gallery'
        }
      }).state("restricted.pages.help", {
        url : "/help",
        templateUrl : 'app/components/pages/helpView.html',
        controller : 'helpCtrl',
        resolve : {
          deps : [ '$ocLazyLoad', function($ocLazyLoad) {
            return $ocLazyLoad.load([ 'app/components/pages/helpController.js' ], {
              serie : true
            });
          } ],
          help_data : function($http) {
            return $http({
              method : 'GET',
              url : 'data/help_faq.json'
            }).then(function(data) {
              return data.data;
            });
          }
        },
        data : {
          pageTitle : 'Help Center'
        }
      }).state("restricted.pages.invoices", {
        url : "/invoices",
        abstract : true,
        templateUrl : 'app/components/pages/invoices_listView.html',
        controller : 'invoicesCtrl',
        resolve : {
          deps : [ '$ocLazyLoad', function($ocLazyLoad) {
            return $ocLazyLoad.load('app/components/pages/invoicesController.js');
          } ],
          invoices_data : function($http) {
            return $http({
              method : 'GET',
              url : 'data/invoices_data.json'
            }).then(function(data) {
              return data.data;
            });
          }
        }
      }).state("restricted.pages.invoices.list", {
        url : "/list",
        views : {
          'ivoice_content' : {
            templateUrl : 'app/components/pages/invoices_blankView.html',
            controller : 'invoicesCtrl'
          }
        },
        data : {
          pageTitle : 'Invoices'
        }
      }).state("restricted.pages.invoices.details", {
        url : "/details/{invoiceId:[0-9]{1,4}}",
        views : {
          'ivoice_content' : {
            templateUrl : 'app/components/pages/invoices_detailView.html',
            controller : 'invoicesCtrl'
          }
        },
        params : {
          hidePreloader : true
        }
      }).state("restricted.pages.invoices.add", {
        url : "/add",
        views : {
          'ivoice_content' : {
            templateUrl : 'app/components/pages/invoices_addView.html',
            controller : 'invoicesCtrl'
          }
        },
        params : {
          hidePreloader : true
        }
      }).state("restricted.pages.mailbox", {
        url : "/mailbox",
        templateUrl : 'app/components/pages/mailboxView.html',
        controller : 'mailboxCtrl',
        resolve : {
          deps : [ '$ocLazyLoad', function($ocLazyLoad) {
            return $ocLazyLoad.load('app/components/pages/mailboxController.js');
          } ],
          messages : function($http) {
            return $http({
              method : 'GET',
              url : 'data/mailbox_data.json'
            }).then(function(data) {
              return data.data;
            });
          }
        },
        data : {
          pageTitle : 'Mailbox'
        }
      }).state("restricted.pages.notes", {
        url : "/notes",
        templateUrl : 'app/components/pages/notesView.html',
        controller : 'notesCtrl',
        resolve : {
          deps : [ '$ocLazyLoad', function($ocLazyLoad) {
            return $ocLazyLoad.load([ 'app/components/pages/notesController.js' ]);
          } ],
          notes_data : function($http) {
            return $http({
              method : 'GET',
              url : 'data/notes_data.json'
            }).then(function(data) {
              return data.data;
            });
          }
        },
        data : {
          pageTitle : 'Notes'
        }
      }).state("restricted.pages.pricing_tables", {
        url : "/pricing_tables",
        templateUrl : 'app/components/pages/pricing_tablesView.html',
        data : {
          pageTitle : 'Pricing Tables'
        }
      }).state("restricted.pages.scrum_board", {
        url : "/scrum_board",
        templateUrl : 'app/components/pages/scrum_boardView.html',
        controller : 'scrum_boardCtrl',
        resolve : {
          deps : [ '$ocLazyLoad', function($ocLazyLoad) {
            return $ocLazyLoad.load([ 'lazy_dragula', 'app/components/pages/scrum_boardController.js' ], {
              serie : true
            });
          } ],
          tasks_list : function($http) {
            return $http({
              method : 'GET',
              url : 'data/tasks_list.json'
            }).then(function(data) {
              return data.data;
            });
          }
        },
        data : {
          pageTitle : 'Scrum Board'
        }
      }).state(
        "restricted.pages.search_results",
        {
          url : "/search_results",
          templateUrl : 'app/components/pages/search_resultsView.html',
          controller : 'search_resultsCtrl',
          resolve : {
            deps : [
              '$ocLazyLoad',
              function($ocLazyLoad) {
                return $ocLazyLoad.load([ 'js!https://maps.google.com/maps/api/js', 'lazy_google_maps',
                  'app/components/pages/search_resultsController.js' ], {
                  serie : true
                })
              } ]
          },
          data : {
            pageTitle : 'Search Results'
          }
        }).state("restricted.pages.settings", {
        url : "/settings",
        templateUrl : 'app/components/pages/settingsView.html',
        controller : 'settingsCtrl',
        resolve : {
          deps : [ '$ocLazyLoad', function($ocLazyLoad) {
            return $ocLazyLoad.load('app/components/pages/settingsController.js')
          } ]
        },
        data : {
          pageTitle : 'Settings'
        }
      }).state("restricted.pages.snippets", {
        url : "/snippets",
        templateUrl : 'app/components/pages/snippetsView.html',
        controller : 'snippetsCtrl',
        resolve : {
          deps : [ '$ocLazyLoad', function($ocLazyLoad) {
            return $ocLazyLoad.load([ 'app/components/pages/snippetsController.js' ]);
          } ],
          snippets_data : function($http) {
            return $http({
              method : 'GET',
              url : 'data/snippets.json'
            }).then(function(data) {
              return data.data;
            });
          }
        },
        data : {
          pageTitle : 'Snippets'
        }
      }).state("restricted.pages.todo", {
        url : "/todo",
        templateUrl : 'app/components/pages/todoView.html',
        controller : 'todoCtrl',
        resolve : {
          deps : [ '$ocLazyLoad', function($ocLazyLoad) {
            return $ocLazyLoad.load([ 'app/components/pages/todoController.js' ]);
          } ],
          todo_data : function($http) {
            return $http({
              method : 'GET',
              url : 'data/todo_data.json'
            }).then(function(data) {
              return data.data;
            });
          }
        },
        data : {
          pageTitle : 'User profile'
        }
      }).state("restricted.pages.user_profile", {
        url : "/user_profile",
        templateUrl : 'app/components/pages/user_profileView.html',
        controller : 'user_profileCtrl',
        resolve : {
          deps : [ '$ocLazyLoad', function($ocLazyLoad) {
            return $ocLazyLoad.load([ 'app/components/pages/user_profileController.js' ]);
          } ],
          user_data : function($http) {
            return $http({
              method : 'GET',
              url : 'data/user_data.json'
            }).then(function(data) {
              return data.data;
            });
          }
        },
        data : {
          pageTitle : 'User profile'
        }
      }).state(
        "restricted.pages.user_edit",
        {
          url : "/user_edit",
          templateUrl : 'app/components/pages/user_editView.html',
          controller : 'user_editCtrl',
          resolve : {
            deps : [
              '$ocLazyLoad',
              function($ocLazyLoad) {
                return $ocLazyLoad.load([ 'assets/js/custom/uikit_fileinput.min.js',
                  'app/components/pages/user_editController.js' ], {
                  serie : true
                });
              } ],
            user_data : function($http) {
              return $http({
                method : 'GET',
                url : 'data/user_data.json'
              }).then(function(data) {
                return data.data;
              });
            },
            groups_data : function($http) {
              return $http({
                method : 'GET',
                url : 'data/groups_data.json'
              }).then(function(data) {
                return data.data;
              });
            }
          },
          data : {
            pageTitle : 'User edit'
          }
        }).state("restricted.pages.issues", {
        url : "/issues",
        abstract : true,
        template : '<div ui-view autoscroll="false" ng-class="{ \'uk-height-1-1\': page_full_height }" />',
        resolve : {
          deps : [ '$ocLazyLoad', function($ocLazyLoad) {
            return $ocLazyLoad.load([ 'lazy_tablesorter', 'app/components/pages/issuesController.js' ]);
          } ],
          issues_data : function($http) {
            return $http({
              method : 'GET',
              url : 'data/issues.json'
            }).then(function(data) {
              return data.data;
            });
          }
        }
      }).state("restricted.pages.issues.list", {
        url : "/list",
        templateUrl : 'app/components/pages/issues_listView.html',
        controller : 'issuesCtrl',
        data : {
          pageTitle : 'Issues List'
        }
      }).state("restricted.pages.issues.details", {
        url : "/details/{issueId:[0-9]{1,4}}",
        controller : 'issuesCtrl',
        templateUrl : 'app/components/pages/issue_detailsView.html',
        data : {
          pageTitle : 'Issue Details'
        }
      }).state("restricted.pages.blog", {
        url : "/blog",
        template : '<div ui-view autoscroll="false" ng-class="{ \'uk-height-1-1\': page_full_height }" />',
        controller : 'blogCtrl',
        resolve : {
          deps : [ '$ocLazyLoad', function($ocLazyLoad) {
            return $ocLazyLoad.load([ 'app/components/pages/blogController.js' ]);
          } ],
          blog_articles : function($http) {
            return $http({
              method : 'GET',
              url : 'data/blog_articles.json'
            }).then(function(data) {
              return data.data;
            });
          }
        },
        abstract : true
      }).state("restricted.pages.blog.list", {
        url : "/list",
        controller : 'blogCtrl',
        templateUrl : 'app/components/pages/blog_listView.html',
        data : {
          pageTitle : 'Blog List'
        }
      }).state("restricted.pages.blog.article", {
        url : "/article/{articleId:[0-9]{1,4}}",
        controller : 'blogCtrl',
        templateUrl : 'app/components/pages/blog_articleView.html',
        data : {
          pageTitle : 'Blog Article'
        }
      })
    } ]);