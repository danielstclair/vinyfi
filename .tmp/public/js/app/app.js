angular.module('app', ['app.controllers', 'ui.router', 'app.services'])
.run(function($http, User, Spotify){
	$http.get('/auth/user')
	.success(function(user){
		User.setLoggedInUser(user);
		Spotify.setAuthToken(user.accessToken);
	})
	.error(function(err){
	});


})
.config(function($stateProvider, $urlRouterProvider, SpotifyProvider) {
	SpotifyProvider.setClientId('4704d4e286a844b0890f7b99708e63f9');
	SpotifyProvider.setRedirectUri('http://localhost:1337/auth/spotify/callback ');
	SpotifyProvider.setScope('playlist-read-private playlist-modify-private playlist-modify-public');
	// If you already have an auth token
	// SpotifyProvider.setAuthToken('zoasliu1248sdfuiknuha7882iu4rnuwehifskmkiuwhjg23');
	$stateProvider
	.state('home', {
		url: '/',
		templateUrl: 'templates/home.html',
		controller: 'homeCTRL'
	})
	.state('collection', {
		url: '/collection',
		templateUrl: 'templates/collection.html',
		controller: 'collectionCTRL',
		deepStateRedirect: true
	})
	.state('addNew', {
		url: '/addNew',
		templateUrl: 'templates/addNew.html',
		controller: 'addNewCTRL'
	})
	.state('albumView', {
		url: '/addNew/:id/:name',
		templateUrl: 'templates/albumView.html',
		controller: 'albumViewCTRL'
	})

	$urlRouterProvider.otherwise('/');
})

