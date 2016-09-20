var app = angular.module('app', ['ngRoute']);


app.controller("mainController",['$scope','$http',function($scope,$http){
	
	$scope.prov=[
			{province: "Drenthe",capital: "Assen"},
			{province: "Flevoland",capital: "Lelystad"},
			{province: "Friesland",capital: "Leeuwarden"},
			{province: "Gelderland",capital: "Arnhem"},
			{province: "Groningen",capital: "Groningen"},
			{province: "Limburg",capital: "Maastricht"},
			{province: "Noord-Brabant",capital: "s-Hertogenbosch"},
			{province: "Noord-Holland",capital: "Haarlem"},
			{province: "Overijssel",capital: "Zwolle"},
			{province: "Utrecht",capital: "Utrecht"},
			{province: "Zeeland",capital: "Middelburg"},
			{province: "Zuid-Holland",capital: "Den Haag"}

	];
	
	$http.get('http://api-nghyf.rhcloud.com/provinces')
	.success(function(result){
		$scope.provinces= result;
	})
	.error(function(data,status){
		console.log(data);
	})
}]);

app.config(function($routeProvider) {
	$routeProvider
	.when('/',{
		templateUrl:'pages/main.html',
		controller:'mainController'
	})
	.when('/Drenthe',{
		templateUrl:'pages/a_drenthe.html',
		controller:'mainController'
	})
	.when('/Flevoland',{
		templateUrl:'pages/b_flevoland.html',
		controller:'mainController'
	})
	.when('/Friesland',{
		templateUrl:'pages/c_friesland.html',
		controller:'mainController'
	})
	.when('/Gelderland',{
		templateUrl:'pages/d_gelderland.html',
		controller:'mainController'
	})
	.when('/Groningen',{
		templateUrl:'pages/e_groningen.html',
		controller:'mainController'
	})
	.when('/Limburg',{
		templateUrl:'pages/f_limburg.html',
		controller:'mainController'
	})
	.when('/Noord-Brabant',{
		templateUrl:'pages/g_noord_brabant.html',
		controller:'mainController'
	})
	.when('/Noord-Holland',{
		templateUrl:'pages/h_noord_holland.html',
		controller:'mainController'
	})
	.when('/Overijssel',{
		templateUrl:'pages/i_overijssel.html',
		controller:'mainController'
	})
	.when('/Utrecht',{
		templateUrl:'pages/j_utrecht.html',
		controller:'mainController'
	})
	.when('/Zeeland',{
		templateUrl:'pages/k_zeeland.html',
		controller:'mainController'
	})
	.when('/Zuid-Holland',{
		templateUrl:'pages/l_zuid_holland.html',
		controller:'mainController'
	})
});


app.directive('provinceCard',provinceCard)


app.controller("secondController",['$scope',function($scope){
	
}]);
