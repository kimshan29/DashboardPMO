mainApp.controller("penutupCtrl", function ($route, $scope, $cookies, $http, HttpRequest, Constant, Helper, $routeParams) {
    //Variable

    $scope.idPegawai = Constant.emptyGuid;
    $scope.currentUser = {};
    $scope.form = {};

    $scope.pageSize = 10;
    $scope.currentPage = 1;
    //Form Load ======================================================================
    $scope.formLoad = function () {
        try {
            $scope.currentUser = JSON.parse($cookies.get('currentUser'));
        } catch (err) {
            $scope.currentUser = {};
        }

        if ($scope.idPegawai != "") {


            $scope.initVariables();



        }

        // $scope.idPegawai = "951932078I"




    }

    $scope.initVariables = () => {
        if (!Helper.isNullOrEmpty($routeParams.idPegawai)) {
            $scope.idPegawai = $routeParams.idPegawai;
            // console.log($scope.idPegawai);
            $http.get("https://webip.indonesiapower.co.id:6090/api/surat_cinta?nipeg=" + $scope.idPegawai).success(function (response) {
                $scope.data = response[0];
                // console.log(JSON.stringify($scope.data));

            });
            // $scope.eventClickEdit($scope.idGratifikasi);
        };
    }


    //Start of Application ===============================================================
    $scope.formLoad();
})