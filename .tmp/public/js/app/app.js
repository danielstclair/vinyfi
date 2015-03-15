angular.module('app', ['app.controllers', 'ui.router'])
.config(function($stateProvider, $urlRouterProvider) {
	$stateProvider
	.state('home', {
		url: '/',
		templateUrl: 'templates/home.html',
		controller: 'homeCTRL'
	})
	.state('collection', {
		url: '/collection',
		templateUrl: 'templates/collection.html',
		controller: 'collectionCTRL'
	})
	.state('addNew', {
		url: '/addNew',
		templateUrl: 'templates/addNew.html',
		controller: 'addNewCTRL'
	})

	$urlRouterProvider.otherwise('/');
})