mainApp.controller("mapsDashboardCtrl", function ($route, $scope, $interval, $cookies, $http, HttpRequest, Constant, Helper, $routeParams) {
    //Variable


    //Form Load ======================================================================
    $scope.formLoad = function () {

        $scope.getMaps();
        $scope.getDateTime();
        $scope.GetMW();

        var index = 0;
        $scope.namaUnit = "PLTU";
        var getNama = function () {
            var url = "/api/GetLocation";
            HttpRequest.get(url).success(function (response) {
                $scope.dataMap = response;

                // console.log(index);
                var idx = index++;
                var ListData = $scope.dataMap[idx];

                var LatitudeAktive = ListData.Latitude;
                var LongitudeAktive = ListData.Longitude;

                $scope.namaUnit = ListData.NamaUnit;
                // console.log($scope.namaUnit);
                // $scope.test = ListData.NamaUnit;

                if (index == $scope.dataMap.length)
                    index = 0

            });
        }

        $interval(getNama, 5000);


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


            // console.log(data.length);

            if ($scope.dataLocation.length > 0) {

                $scope.dataLocation.forEach(element => {
                    // console.log(element[Latitude] + element[Longitude]);
                    // console.log(element.Latitude);

                    marker = new L.marker([element.Latitude, element.Longitude], {
                        icon: customIcon
                    }).addTo(map);

                });

                // console.log(data[0]);

                var index = 0;
                var markerAktive = {};
                var time = 5000;
                setInterval(function () {
                    // console.log(data[index++]);
                    // console.log(index);
                    var idx = index++;
                    var ListData = $scope.dataLocation[idx];



                    var LatitudeAktive = ListData.Latitude;
                    var LongitudeAktive = ListData.Longitude;

                    // $scope.namaUnit = ListData.NamaUnit;
                    // console.log($scope.namaUnit);
                    // $scope.test = "PLTU";


                    map.removeLayer(markerAktive)


                    markerAktive = new L.marker([LatitudeAktive, LongitudeAktive], {
                            icon: customIconAktive
                        }).bindPopup("Nama Unit")
                        .addTo(map);

                    if (index == $scope.dataLocation.length)
                        index = 0

                }, time);
            }
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



    //Start of Application ===============================================================
    $scope.formLoad();
})