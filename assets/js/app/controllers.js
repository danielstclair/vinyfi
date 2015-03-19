angular.module('app.controllers', ['app.services', 'spotify', 'app.directives'])
.controller('homeCTRL', function($scope, $http, $state, Validate){
	$scope.hamburger = true;
	$scope.closeMenu = false;
	$scope.loginOptions = false;

	$scope.loginView = function(){
		$scope.hamburger = !$scope.hamburger;
		$scope.closeMenu = !$scope.closeMenu;
		$scope.loginOptions = !$scope.loginOptions;
	}

	var quotes = [
		'keep track of your records anywhere.',
		'update your collection seamlessly.',
		'turn your record collection into spotify playlists. <br> (future feature)',
		'sign up for a free account easily.'
	]
	var i = 0;
	setInterval(function(){
		$('#description').html(quotes[i]);
		if(i == quotes.length){
			i = 0;}
		else {
			i++;}
		}, 5000);

	$scope.loginInput = false;
	$scope.registerInput = false;
	$scope.error = {
			identifier: '',
			password: '',
			generic: []
		};
	$scope.htmlCredentials = {
		identifier: '',
		password: ''
	};
	$scope.loginStart = function(){

		$scope.loginInput = !$scope.loginInput;
		$scope.registerInput = false;
		$scope.htmlCredentials.identifier = '';
		$scope.htmlCredentials.password = '';
	};

	$scope.login = function(htmlCredentials){
		$scope.error = Validate.htmlCredentials(htmlCredentials);

		if(!Validate.hasError($scope.error)){
			var object = {
				username: htmlCredentials.identifier,
				email: htmlCredentials.identifier,
				password: htmlCredentials.password
			};

			$http.post('/auth/local', htmlCredentials)
			.success(function(res){
				$state.go('collection');
			})
			.error(function(err){
				console.log(err);
			});
		}
	};

	$scope.registerStart = function() {
		$scope.registerInput = !$scope.registerInput;
		$scope.loginInput = false;
		$scope.htmlCredentials.identifier = '';
		$scope.htmlCredentials.password = '';
	}

	$scope.register = function(htmlCredentials){
		$scope.error = Validate.htmlCredentials(htmlCredentials);
		console.log($scope.error);

		if(!Validate.hasError($scope.error)) {
			var object = {
				username: htmlCredentials.identifier,
				email: htmlCredentials.identifier,
				password: htmlCredentials.password
			};
			console.log(object);

			$http.post('auth/local/register', object)
			.success(function(res) {
				$state.go('collection');
			})
			.error(function(err){
				console.log(err)
			})
		}
		else {
			console.log($scope.error);
			}
	}
})

.controller('collectionCTRL', function($scope, $state, $http){
	$scope.collection = [];
	$scope.user = {};
	$scope.menuItems = false;
	$scope.hamburger = true;
	$scope.closeMenu = false;

	$scope.menuView = function(){
		$scope.menuItems = !$scope.menuItems;
		$scope.hamburger = !$scope.hamburger;
		$scope.closeMenu = !$scope.closeMenu;
	}

	$scope.logout = function(){
		$http.get('/logout');
		$state.go('home');
	}

	$http.get('/album')
	.success(function(collection){
		$scope.collection = _.filter(collection, function (a) { 
			return a.user.id === $scope.user.id; 
		});
	})

	$http.get('/auth/user')
	.success(function(response){
		$scope.user = response;
	})
})

.controller('addNewCTRL', function($scope, $state, $http, Spotify){
	// $scope.artists = {};
	$scope.user = {};
	console.log('test');
	$scope.hamburger = true;
	$scope.closeMenu = false;
	$scope.menuItems = false;
	$scope.albumResults = false;
	$scope.artistResults = false;

	$scope.menuView = function(){
		$scope.hamburger = !$scope.hamburger;
		$scope.closeMenu = !$scope.closeMenu;
		$scope.menuItems = !$scope.menuItems;
	}

	$scope.logout = function(){
		$http.get('/logout');
		$state.go('home');
	}

	$http.get('/auth/user')
	.success(function(response){
		$scope.user = response;
	})

	$scope.search = function(){
		$scope.artistResults = true;
		Spotify.search($scope.artistSearch, 'artist').then(function (data) {
			$scope.artists = {};
			for (var i = 0; i < data.artists.items.length; i++) {
				var artist = data.artists.items[i];
				$scope.artists[artist.id] = artist;
			};
		});
		$scope.artistSearch = '';
	}

	$scope.albumSearch = function(id){
		$scope.artistResults = false;
		$scope.albumResults = true;
		$scope.artistSearch = $scope.artists[id].name;
		Spotify.getArtistAlbums(id).then(function(albums){
			// console.log(albums);
			$scope.artists[id].albums = _.filter(albums.items, function(el){
				return el.available_markets.indexOf("US") > -1;
			});
			$scope.artists = angular.copy($scope.artists);
		});
	}


	$scope.addAlbum = function(artistId, albumId, albumCover){
		var newAlbum = {
			artist: $scope.artists[artistId].name,
			album: albumId.toString(),
			albumCover: albumCover.toString(),
			user: $scope.user.id
		}

		$http.post('/album', newAlbum)
		.success(function(addedAlbum){
			console.log(addedAlbum);
		})
		.error(function(err){
			console.log(err);
		});

	}


})

































