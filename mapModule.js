
var app = angular.module("mapModule", []);

app.controller("mapController", ['$scope', function($scope) {
    $scope.src = "";
    $scope.labels;
    $scope.circular;
}]);

app.directive("mapDirective", function() {
    return {
        restrict: 'E',
        templateUrl : "http://portaldesmart.000webhostapp.com/map/mapZoom.html",
        transclude: true,
        scope: {
            config: '&'
        },
        link: function(scope, elem, attr){
            scope.src = attr.src;
            scope.labels = attr.labels;
            scope.circular = attr.circular;
        }
    };
});
app.config(function($sceProvider){
    $sceProvider.enabled(false);
});