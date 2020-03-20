var mainApp = angular.module('mainApp', ['ngRoute', 'ngSanitize', 'ngCookies', 'ui.bootstrap']);


mainApp.run(function ($rootScope, $location, $routeParams, $cookies, HttpRequest, Constant) {
    // $rootScope.$on('$routeChangeStart', function (e, current, next) {
    //     var currentUser = null;

    //     try {
    //         currentUser = JSON.parse($cookies.get('currentUser'));
    //         // console.log(currentUser);

    //     } catch (err) {}

    //     // if (currentUser == null)
    //     //     document.location.href = 'login.html';

    //     // $('.Loading').hide();

    // });

    // $rootScope.$on('$routeChangeSuccess', function (e, current, pre) {

    //     // console.log('Current route name: ' + $location.path() + '. currentUser : ' + $cookies.get('currentUser'));
    //     var currentUser = null;

    //     try {
    //         currentUser = JSON.parse($cookies.get('currentUser'));
    //     } catch (err) {}

    //     $cookies.put('currentRoute', $location.path());




    // });
});

// Routes Config
mainApp.config(function ($routeProvider) {
    $routeProvider
        // Home
        .when('/', {
            templateUrl: 'template/mapsDashboard.html',
            controller: 'mapsDashboardCtrl',
            cache: false,
        })
        .when('/pembukaan/:idPegawai', {
            templateUrl: 'template/pembukaan.html',
            controller: 'pembukaanCtrl',
            cache: false,
        })
        .when('/pembukaan', {
            templateUrl: 'template/frontPage.html',
            // controller: 'pembukaanCtrl',
            cache: false,
        })
        .when('/nulisSurat/:idPegawai', {
            templateUrl: 'template/nulisSurat.html',
            controller: 'nulisSuratCtrl',
            cache: false,
        })
        .when('/nulisSurat', {
            templateUrl: 'template/frontPage.html',
            // controller: 'pembukaanCtrl',
            cache: false,
        })
        .when('/jadian/:idPegawai', {
            templateUrl: 'template/jadian.html',
            controller: 'jadianCtrl',
            cache: false,
        })
        .when('/jadian', {
            templateUrl: 'template/frontPage.html',
            // controller: 'pembukaanCtrl',
            cache: false,
        })
        .when('/kehadiran/:idPegawai', {
            templateUrl: 'template/kehadiran.html',
            controller: 'kehadiranCtrl',
            cache: false,
        })
        .when('/kehadiran', {
            templateUrl: 'template/frontPage.html',
            // controller: 'pembukaanCtrl',
            cache: false,
        })
        .when('/health/:idPegawai', {
            templateUrl: 'template/health.html',
            controller: 'healthCtrl',
            cache: false,
        })
        .when('/health', {
            templateUrl: 'template/frontPage.html',
            // controller: 'pembukaanCtrl',
            cache: false,
        })
        .when('/study/:idPegawai', {
            templateUrl: 'template/study.html',
            controller: 'studyCtrl',
            cache: false,
        })
        .when('/study', {
            templateUrl: 'template/frontPage.html',
            // controller: 'pembukaanCtrl',
            cache: false,
        })
        .when('/travel/:idPegawai', {
            templateUrl: 'template/travel.html',
            controller: 'travelCtrl',
            cache: false,
        })
        .when('/travel', {
            templateUrl: 'template/frontPage.html',
            // controller: 'pembukaanCtrl',
            cache: false,
        })
        .when('/performance/:idPegawai', {
            templateUrl: 'template/performance.html',
            controller: 'performanceCtrl',
            cache: false,
        })
        .when('/performance', {
            templateUrl: 'template/frontPage.html',
            // controller: 'pembukaanCtrl',
            cache: false,
        })
        .when('/penutup/:idPegawai', {
            templateUrl: 'template/penutup.html',
            controller: 'penutupCtrl',
            cache: false,
        })
        .when('/penutup', {
            templateUrl: 'template/frontPage.html',
            // controller: 'pembukaanCtrl',
            cache: false,
        })


});