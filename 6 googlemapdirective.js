angular.module('googleMapLibrary', []).directive('googleMap', function () {
    return  {
        restrict: 'EA',
        templateUrl: 'partials/_googleMapDirective.html',
        compile: function (element, attrs) {
            // download the googlemaps script
            // wait for the download to complete and then link everything up
            console.log('downloading script ... ');

            //todo: finish loading in the configuration phase
            // todo: Use the zoom and the marker attributes to zoom and center the map
            var map;

            // load and run google map
            window.googlemaps_initialize = function () {
                console.log('running initialize');
                var mapOptions = {
                    zoom: 8,
                    center: new google.maps.LatLng(-34.397, 150.644)
                };

                map = new google.maps.Map(element[0].lastElementChild, mapOptions);
            };
            function loadScript() {
                var script = document.createElement('script');
                script.type = 'text/javascript';
                script.src = 'https://maps.googleapis.com/maps/api/js?v=3&' +
                'callback=googlemaps_initialize';
                document.body.appendChild(script);
            }
            if (document.readyState === 'complete') loadScript();
            else {
                document.addEventListener('readystatechange', function () {
                    if (document.readyState === 'complete') loadScript();
                });
            }



            return {
                pre: function (scope, iElement, attrs) {

                },
                post: function (scope, iElement, attrs) {
                    element.on('click', function (event) {
                        console.log('You clicked on google map ... ');
                    });
                }
            };
        }
    };
});