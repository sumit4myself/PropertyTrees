/*

 * Altair Admin AngularJS
 */

"use strict";

// var apiURI = "https://educoresystems.in/api-v1.0/"
//var apiURI = "http://educoresystems.com/api-v1.0/"
var apiURI = ""
if (location.origin.indexOf("localhost") >= 0) {
  apiURI = "http://localhost:9000/"
} else {
  apiURI = "/api-v1.0/"
}

//apiURI = "http://educoresystems.com/api-v1.0/"


var altairApp = angular.module('altairApp', [ 'ui.router', 'oc.lazyLoad', 'ngSanitize', 'ngRetina', 'ncy-angular-breadcrumb',
  'ConsoleLogger', 'http-auth-interceptor', 'angularPromiseButtons', 'angular-loading-bar' ]);

altairApp.constant('variables', {
  header_main_height : 48,
  easing_swiftOut : [ 0.4, 0, 0.2, 1 ],
  bez_easing_swiftOut : $.bez([ 0.4, 0, 0.2, 1 ]),

  publicPages : [ 'login', 'error', 'error.403', 'error.404', 'error.500' ],

  baseUrl : apiURI,
  userServiceUrl : apiURI + '/users/',
  roleServiceUrl : apiURI + '/roles/',
  roleHierarchyServiceUrl : apiURI + '/roleHierarchies/',
  groupServiceUrl : apiURI + '/groups/',
  profileServiceUrl : apiURI + '/profiles/',

  batchTimetableServiceUrl : apiURI + '/batchTimetables/',
  batchServiceUrl : apiURI + '/batches/',
  branchServiceUrl : apiURI + '/branches/',
  courseServiceUrl : apiURI + '/courses/',
  schoolServiceUrl : apiURI + '/schools/',
  subjectServiceUrl : apiURI + '/subjects/',
  syllabusServiceUrl : apiURI + '/syllabuses/',
  sessionYearsServiceUrl : apiURI + '/sessionYears/',
  termDetailsServiceUrl : apiURI + '/terms/',
  studentServiceUrl : apiURI + '/students/',
  guardianServiceUrl : apiURI + '/guardians/',
  admissionQuotaServiceUrl : apiURI + '/admissionQuotas/',
  admissionServiceUrl : apiURI + '/admissions/',
  feeServiceUrl : apiURI + '/fees/',
  feeWaiverServiceUrl : apiURI + '/waivers/',
  feeCategoryServiceUrl : apiURI + '/feeCategories/',
  feeReceiptServiceUrl : apiURI + '/feeReceipts/',

  bookServiceUrl : apiURI + '/books/',
  libraryServiceUrl : apiURI + '/library/',
  bookIssueServiceUrl : apiURI + '/bookIssue/',
  uniformServiceUrl : apiURI + '/uniform/',
  uniformSetServiceUrl : apiURI + '/uniformSet/',
  vehicleServiceUrl : apiURI + '/vehicles/',
  vehicleTypeServiceUrl : apiURI + '/vehicleTypes/',
  vendorServiceUrl : apiURI + '/vendors/',
  assetServiceUrl : apiURI + '/assets/',
  assetCategoryServiceUrl : apiURI + '/assetCategories/',
  hostelServiceUrl : apiURI + '/hostels/',
  roomServiceUrl : apiURI + '/rooms/',
  roomCategoryServiceUrl : apiURI + '/roomCategories/',
  roomAllocationServiceUrl : apiURI + '/roomAllocations/',
  orderServiceUrl : apiURI + '/order/',
  resultConfigurationUrl : apiURI + '/resultConfigurations/',
  examServiceUrl : apiURI + '/exams/',
  
  assessementRatingConfigurationServiceUrl : apiURI + '/assessementRatingConfigurations/',
  assassmentConfigurationServiceUrl : apiURI + '/assessmentConfigurations/',
  studentAssessmentsServiceUrl : apiURI + '/studentAssessments/',
  resultServiceUrl : apiURI + '/results/',
  attendanceServiceUrl : apiURI + '/attendances/',
  staffServiceUrl : apiURI + '/staffs/',
  departmentServiceUrl : apiURI + '/departments/',
  designationServiceUrl : apiURI + '/designations/',
  templateServiceUrl : apiURI + '/templates/',
  notificationServiceUrl : apiURI + '/notifications/',
  bulkNotificationServiceUrl : apiURI + '/bulkNotifications/',


  //  Attendance and Leave Service URLs
  staffHolidayServiceUrl : apiURI + '/staffHolidays/',
  studentHolidayServiceUrl : apiURI + '/studentHolidays/',
  leaveTypeServiceUrl : apiURI + '/leaveType/',
  staffLeaveDefinitionServiceUrl : apiURI + '/staffLeaveDefinitions/',
  staffLeavesServiceUrl : apiURI + '/staffLeaves/',
  staffAttendancesServiceUrl : apiURI + '/staffAttendances/',
  staffIdentityCardServiceUrl : apiURI + '/staffIdentityCards/',
  studentIdentityCardServiceUrl : apiURI + '/studentIdentityCards/',
  studentLeavesServiceUrl : apiURI + '/studentLeaves/',
  studentAttendancesServiceUrl : apiURI + '/studentAttendances/',
  adhocAttendancesServiceUrl : apiURI + '/adhocAttendances/',
  transportAttendancesServiceUrl : apiURI + '/transportAttendances/',




  stateServiceUrl : apiURI + '/states/',
  cityServiceUrl : apiURI + '/cities/',
  pincodeServiceUrl : apiURI + '/pincodes/',


  configurationServiceUrl : apiURI + '/config/',
  cmsServiceUrl : apiURI + "zuul/files/",
  fileViewUrl : apiURI + "/files/browse/",

  userDetialsKey : 'LUSD',
});

altairApp.config(function($sceDelegateProvider) {
  $sceDelegateProvider.resourceUrlWhitelist([
    // Allow same origin resource loads.
    'self', 'https://www.youtube.com/**', 'https://w.soundcloud.com/**', apiURI + '/**' ]);
})

// breadcrumbs
altairApp.config(function($breadcrumbProvider) {
  $breadcrumbProvider.setOptions({
    prefixStateName : 'restricted.dashboard',
    templateUrl : 'app/templates/breadcrumbs.tpl.html'
  });
});

altairApp.config(function(angularPromiseButtonsProvider) {
  angularPromiseButtonsProvider.extendConfig({
    spinnerTpl : '<i class="btn-spinner uk-icon-refresh uk-icon-spin"></i>',
    disableBtn : true,
    btnLoadingClass : 'is-loading',
    addClassToCurrentBtnOnly : false,
    disableCurrentBtnOnly : false,
    minDuration : false,
    CLICK_EVENT : 'click',
    CLICK_ATTR : 'ngClick',
    SUBMIT_EVENT : 'submit',
    SUBMIT_ATTR : 'ngSubmit',
    BTN_SELECTOR : 'button'
  });
});

altairApp.config([ 'cfpLoadingBarProvider', function(cfpLoadingBarProvider) {
  cfpLoadingBarProvider.includeSpinner = false;
} ])

altairApp.config(function($httpProvider) {
  $httpProvider.interceptors.push(function($q, $log, Session) {
    return {
      'request' : function(config) {
        if (Session.isLoginedIn()) {
          if (Session.getSchoolId() != null)
            config.headers['SCHOOL_ID'] = Session.getSchoolId();
          if (Session.getBranchId() != null)
            config.headers['BRANCH_ID'] = Session.getBranchId();
          if (Session.getSessionYearId() != null)
            config.headers['SESSION_YEAR_ID'] = Session.getSessionYearId();
          if (Session.getUserId() != null)
            config.headers['USER_ID'] = Session.getUserId();
//          if (Session.getRoleLevel() != null)
//            config.headers['LEVEL'] = Session.getRoleLevel();
        }
        config.timeout = 15000;
        return config;
      },

      'requestError' : function(rejection) {
        UIkit.notify({
          message : "[ " + rejection.status + " ] " + rejection.statusText,
          status : 'danger',
          pos : 'top-right'
        });
        return $q.reject(rejection);
      },

      'response' : function(response) {
        return response;
      },

      'responseError' : function(rejection) {
        if (rejection.data != null
          && (rejection.data.exception == "com.webientsoft.esycation.common.exception.EsycationException")) {
          UIkit.notify({
            message : "[ " + rejection.data.error + " ] " + rejection.data.message,
            status : 'warning',
            pos : 'bottom-right',
            timeout : 5000
          });

        } else {
          UIkit.notify({
            message : "Error occurred while serving request, Please try after some time.",
            status : 'danger',
            pos : 'bottom-right',
            timeout : 1000
          });
        }
        return $q.reject(rejection);
      }
    };
  })
});

/* Run Block */
altairApp.run(
  [ '$rootScope', '$state', '$stateParams', '$http', '$window', '$timeout', 'variables', 'Session',
    function($rootScope, $state, $stateParams, $http, $window, $timeout, variables, Session) {
      $rootScope.$state = $state;
      $rootScope.$stateParams = $stateParams;
      $rootScope.$on('$stateChangeSuccess', function() {

        // scroll view to top
        $("html, body").animate({
          scrollTop : 0
        }, 200);

        $timeout(function() {
          $rootScope.pageLoading = false;
        // reinitialize
        // uikit components
        // $.UIkit.init($('body'));
        // $($window).resize();
        }, 300);

        $timeout(function() {
          $rootScope.pageLoaded = true;
          $rootScope.appInitialized = true;
          // wave effects
          $window.Waves.attach('.md-btn-wave,.md-fab-wave', [ 'waves-button' ]);
          $window.Waves.attach('.md-btn-wave-light,.md-fab-wave-light', [ 'waves-button', 'waves-light' ]);

          // IE fixes
          if (typeof window.isLteIE9 != 'undefined') {
            $('svg,canvas,video').each(function() {
              var $this = $(this),
                height = $(this).attr('height');
              if (height) {
                $this.css('height', height);
              }
              if ($this.hasClass('peity')) {
                $this.prev('span').peity()
              }
            });
          }
        }, 600);
      });

      $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
        // main search
        $rootScope.mainSearchActive = false;
        // secondary sidebar
        $rootScope.sidebar_secondary = false;
        $rootScope.secondarySidebarHiddenLarge = false;

        if ($($window).width() < 1220) {
          // hide primary sidebar
          $rootScope.primarySidebarActive = false;
          $rootScope.hide_content_sidebar = false;
        }

        if (!toParams.hasOwnProperty('hidePreloader')) {
          $rootScope.pageLoading = true;
          $rootScope.pageLoaded = false;
        }

        if (toState.name.indexOf("restricted") >= 0 && !Session.isLoginedIn()) {
          event.preventDefault();
          $rootScope.$broadcast("event:auth-loginRequired", {});
        } else if (toState.name.indexOf("restricted") >= 0 && !Session.isAuthorized(toState.name)) {
          event.preventDefault();
          $rootScope.$broadcast("event:auth-forbidden", {});
        }
      // console.log(fromState.name ==
      // "");
      // if (fromState.name == "" &&
      // Session.isLoginedIn()) {
      // var savedState =
      // Session.getCurrentState();
      // if(Session.getCurrentState()
      // != null){
      //                
      // }
      // console.log("Referesh
      // ............ ");
      // console.log(savedState);
      // console.log($rootScope.$state);
      // $rootScope.$state.transitionTo(savedState.name,
      // savedState.params, {
      // reload : true,
      // inherit : true,
      // notify : false
      // });
      //
      // } else {
      // Session.setCurrentState(toState.name,
      // toParams);
      // }
      });

      // fastclick (eliminate the 300ms delay between a
      // physical tap and the firing of a click event on
      // mobile browsers)
      FastClick.attach(document.body);

      // get version from package.json
      $http.get('./package.json').success(function(response) {
        $rootScope.appVer = response.version;
      });

      // modernizr
      $rootScope.Modernizr = Modernizr;

      // get window width
      var w = angular.element($window);
      $rootScope.largeScreen = w.width() >= 1220;
      w.on('resize', function() {
        return $rootScope.largeScreen = w.width() >= 1220;
      });

      // show/hide main menu on page load
      $rootScope.primarySidebarOpen = ($rootScope.largeScreen) ? true : false;
      $rootScope.pageLoading = true;
      // wave effects
      $window.Waves.init();
    } ])

  .run(function($rootScope, $state, $http, $q, $timeout, Session) {
    // Call when the 403 response is returned by the server
    $rootScope.$on('event:auth-forbidden', function(rejection) {
      $rootScope.$evalAsync(function() {
        $state.go("error.403");
      });
    });

    $rootScope.$on('event:auth-loginConfirmed', function(event, response) {
      var delay = ($rootScope.pageLoading ? 1500 : 0);
      $timeout(function() {
        Session.login(response.data);
        $state.go(Session.getDefaultPage());
      }, delay);
    });

    // Call when the 401 response is returned by the server
    $rootScope.$on('event:auth-loginRequired', function(event, data) {
      Session.logout();
      $state.go("login");
    });
  })

  .run([ 'PrintToConsole', function(PrintToConsole) {
    // app debug
    PrintToConsole.active = false;
  } ]);