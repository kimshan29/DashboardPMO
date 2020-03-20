mainApp.controller("mapsDashboardCtrl", function ($route, $scope, $interval, $cookies, $http, HttpRequest, Constant, Helper, $routeParams) {
    //Variable

    $scope.dataPH = [];
    $scope.dataPE = [];

    // var indexMesin = 0;
    var index = 0;
    //Form Load ======================================================================
    $scope.formLoad = function () {

        $scope.getMaps();
        $scope.getDateTime();
        $scope.GetMW();
        // $scope.slidePH();
        $scope.namaUnit = "UNIT";


    }



    $scope.getMaps = function () {

        var url = "/api/GetLocation";
        HttpRequest.get(url).success(function (response) {
            $scope.dataLocation = response;
            var mapOptions = {
                center: [-0.586527, 116.315544],
                zoom: 5
            }
            // Creating a map object
            var map = new L.map('map', mapOptions);
            var Esri_WorldImagery = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
                attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
            });
            // Adding layer to the map
            map.addLayer(Esri_WorldImagery);

            // Icon options
            var iconOptions = {
                iconUrl: './../hijau.svg',
                iconSize: [20, 20]

            }

            var iconOptionsAktive = {
                iconUrl: './../indonesia.svg',
                iconSize: [20, 20],
                className: 'blink',
                html: '<span class="my-div-span">RAF Banff Airfield</span>'
            }
            // Creating a custom icon
            var customIcon = L.icon(iconOptions);

            var customIconAktive = L.icon(iconOptionsAktive);


            // console.log(JSON.stringify($scope.dataLocation));

            $scope.time = 120000;
            // $scope.time = 5000;
            var markerAktive = {};
            if ($scope.dataLocation.length > 0) {

                var offset = 0;
                $scope.dataLocation.forEach(element => {
                    marker = new L.marker([element.Latitude, element.Longitude], {
                        icon: customIcon
                    }).addTo(map);

                });



                var markerAktive = {};
                setInterval(function () {

                    var idx = index++;
                    var ListData = $scope.dataLocation[idx];



                    var LatitudeAktive = ListData.Latitude;
                    var LongitudeAktive = ListData.Longitude;

                    $scope.kodeUnit = ListData.KodeUnit;
                    $scope.namaUnit = ListData.NamaUnit;

                    map.removeLayer(markerAktive)

                    markerAktive = new L.marker([LatitudeAktive, LongitudeAktive], {
                            icon: customIconAktive
                        }).bindPopup("Nama Unit")
                        .addTo(map);


                    $scope.getDataMesin($scope.kodeUnit);


                    // console.log($scope.dataLocation.length);

                    if (index == $scope.dataLocation.length)
                        index = 0



                }, $scope.time);


            }
        })
    }

    $scope.getDataMesin = function (kodeUnit) {
        var xIndex = 0;
        // GetMesin per 1 detik
        var apiUrl = "/api/GetDataMesin/" + kodeUnit;
        // console.log(apiUrl);

        HttpRequest.get(apiUrl).success(function (response) {
            $scope.dataMesin = response;
            // console.log($scope.dataMesin);

            var offset = 0;
            $scope.dataMesin.forEach(function (person) {

                var jumlahArray = person;
                // console.log(jumlahArray);
                var intervalMesin = 10000;
                // var intervalMesin = 2000;


                setTimeout(function () {
                    console.log(person);
                    $scope.namaMesin = person.mesin;
                    // Get Data PH
                    var apiUrlPH = "/api/GetDataPH/" + person.mesin;
                    console.log(apiUrlPH);

                    HttpRequest.get(apiUrlPH).success(function (responsePH) {
                        $scope.dataPH = responsePH;
                        // console.log(JSON.stringify($scope.dataPH));

                    })

                    // Get Data PE 
                    var apiUrlPE = "/api/GetDataPE/" + person.mesin;
                    console.log(apiUrlPE);

                    HttpRequest.get(apiUrlPE).success(function (responsePE) {
                        $scope.dataPE = responsePE
                        // console.log(JSON.stringify($scope.dataPE));

                    })

                }, intervalMesin + offset);
                offset += intervalMesin;
            });


        })


    }
    $scope.getDateTime = function () {
        var interval = setInterval(function () {
            var momentNow = moment();
            $('#date-part').html(momentNow.format('YYYY MMMM DD') + ' ' +
                momentNow.format('dddd')
                .substring(0, 3).toUpperCase());
            $('#time-part').html(momentNow.format('hh:mm:ss A'));
        }, 100);
    }

    $scope.GetMW = function () {
        $scope.dataMW = {
            totalCapacity: 200,
            totalOutput: 8.597,
            unitExisting: 3.934,
            omJawa: 4.327,
            omLuarJawa: 336
        }


    }


    var myIndex = 0;
    $scope.slidePH = function (kodeMesin) {
        var i;
        var x = document.getElementsByClassName("mySlides");
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        myIndex++;
        if (myIndex > x.length) {
            myIndex = 1
        }
        x[myIndex - 1].style.display = "block";

        setTimeout($scope.slidePH, 2000);
    }

    //Start of Application ===============================================================
    $scope.formLoad();
})