'use strict';
/* App Controllers */

var controllers = angular.module('GeoConnections.controllers', []);


controllers.controller('GeoConnectionsCtrl', function ($scope, $rootScope, $location, $browser, $log, GeoConnectionsModel){

    $scope.geoConnectionsModel = GeoConnectionsModel;

});


controllers.controller('WorldCtrl', function ($scope, $rootScope, $log, $timeout, GeoConnectionsModel, WorldModel){

    var geoPointsElem = [];
    $scope.addGeoPointsElem = function(elem){
        geoPointsElem.push(elem);
    }

    $scope.renderComplete = function(){
        WorldModel.setGeoPointsElem(geoPointsElem);
    }

    $scope.onSelect = function(geoPoint){
        WorldModel.destroy();
    }

    WorldModel.init();

    // register the listener to destroy for self destruction
    $timeout(function() {
        $( window.location ).one(
            "change",
            function( objEvent, objData ){
                $rootScope.$broadcast(':destroy-experiment');
            }
        );
    }, 0, false);

});




















