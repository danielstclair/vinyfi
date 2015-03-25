angular.module('app.controllers', ['app.services', 'spotify', 'app.directives'])
.controller('homeCTRL', function($scope, $http, $state, Validate, Spotify, User, $rootScope){
	$scope.hamburger = true;
	$scope.closeMenu = false;
	$scope.loginOptions = false;

	$scope.isLoggedIn = User.isLoggedIn();
	if($scope.isLoggedIn) {
		$scope.user = User.getInfo();
		$state.go('collection');
	}
	$rootScope.$on('LOGIN_EVENT', function(){
		$scope.user = User.getInfo();
		$state.go('collection');
	})

	$scope.loginView = function(){
		$scope.hamburger = !$scope.hamburger;
		$scope.closeMenu = !$scope.closeMenu;
		$scope.loginOptions = !$scope.loginOptions;
	};

	// $scope.loginSpotify = function () {
	// 	Spotify.login().then(function(data){
	// 		$state.go('collection');
	// 	});
		
	// };

	var quotes = [
		'keep track of your records anywhere.',
		'update your collection seamlessly.',
		'turn your record collection into spotify playlists. <br> (future feature)',
		'sign up for a free account easily.'
	];
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
				username: htmlCredentials.identifier.toLowerCase(),
				email: htmlCredentials.identifier.toLowerCase(),
				password: htmlCredentials.password
			};

			$http.post('/auth/local', htmlCredentials)
			.success(function(res){
				User.setLoggedInUser(res.user);
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
	};

	$scope.register = function(htmlCredentials){
		$scope.error = Validate.htmlCredentials(htmlCredentials);
		console.log($scope.error);

		if(!Validate.hasError($scope.error)) {
			var object = {
				username: htmlCredentials.identifier.toLowerCase(),
				email: htmlCredentials.identifier.toLowerCase(),
				password: htmlCredentials.password
			};

			$http.post('auth/local/register', object)
			.success(function(res) {
				$state.go('collection');
			})
			.error(function(err){
				console.log(err);
			});
		}
		else {
			console.log($scope.error);
			}
	};
})

.controller('collectionCTRL', function($scope, $state, $http, User, $rootScope, Spotify){
	// $scope.isLoggedIn = User.isLoggedIn();
	// if($scope.isLoggedIn) {
	// 	$scope.user = User.getInfo();
	// 	// console.log($scope.user);
	// 	getAlbum();
	// }
	// $rootScope.$on('LOGIN_EVENT', function(){
	// 	$scope.user = User.getInfo();
	// 	getAlbum();
	// })
	$scope.collection = [];
	$scope.tracks = [];
	$scope.menuItems = false;
	$scope.hamburger = true;
	$scope.closeMenu = false;

	$http.get('/auth/user')
	.success(function(user){
		$scope.user = user;
		getAlbum();
		Spotify.setAuthToken(user.accessToken);
	})
	// .error(function(err){
	// 	$state.go('home');
	// })

	Spotify.getCurrentUser().then(function(data){
		$scope.spotifyUser = data.id;
	});

	$scope.menuView = function(){
		$scope.menuItems = !$scope.menuItems;
		$scope.hamburger = !$scope.hamburger;
		$scope.closeMenu = !$scope.closeMenu;
	};

	$scope.logout = function(){
		$http.get('/logout')
		.success(function(){
			console.log('testing logout');
			$state.go('home');
		})
		.error(function(err){
			console.log(err);
		})

	};

	function getAlbum() {
		$http.get('/album?sort=id DESC')
		.success(function(collection){
			$scope.collection = _.filter(collection, function (a) { 
				return a.user.id === $scope.user.id; 
			});
		});
	};



	// $scope.createVinyfi = function(){
	// 	Spotify.createPlaylist($scope.spotifyUser, { name: 'Vinyfi'}).then(function(vinyfi){
	// 		console.log('playlist created');
	// 		$scope.vinyfi = vinyfi.id;
	// 	})
	// 	for(var i = 0; i<$scope.collection.length; i++){
	// 		Spotify.getAlbumTracks($scope.collection[i].uniqueId).then(function(tracks){
	// 			console.log(tracks);
	// 			$scope.tracks = _.filter(tracks.items, function(el){
	// 				return el.available_markets.indexOf("US") > -1;
	// 			});
	// 		})
	// 	}
	// };

	// $scope.addVinyfiTracks = function(){
	// 	// for(var j = 0; j< $scope.tracks.length; j++){
	// 		// console.log($scope.tracks[j].id);
	// 		Spotify.addPlaylistTracks($scope.user, $scope.vinyfi, 'spotify:track:4iV5W9uYEdYUVa79Axb7Rh, spotify:track:1301WleyT98MSxVHPZCA6M').then(function(addedTracks){
	// 			console.log(addedTracks);
	// 		})

	// 	// }
	// }

	$scope.sortRecent = function(){
		$scope.collection = _.sortBy($scope.collection, 'id');
		$scope.collection.reverse();
	};

	$scope.sortArtist = function(){
		$scope.collection = _.sortBy($scope.collection, 'artist');
	};

	$scope.sortAlbum = function(){
		$scope.collection = _.sortBy($scope.collection, 'album');
	};

	$scope.deleteAlbum = function(album){
		console.log(album);
		$http.delete('/album/' + album.id)
		.success(function(deleted){
			console.log(deleted);
		})
		.error(function(err){
			console.log(err);
		})
	};
})

.controller('addNewCTRL', function($scope, $state, $http, Spotify){
	$scope.hamburger = true;
	$scope.closeMenu = false;
	$scope.menuItems = false;
	$scope.artistResults = false;

	$scope.menuView = function(){
		$scope.hamburger = !$scope.hamburger;
		$scope.closeMenu = !$scope.closeMenu;
		$scope.menuItems = !$scope.menuItems;
	};

	$scope.logout = function(){
		$http.get('/logout')
		.success(function(){
			$state.go('home');
		})
	};



	$scope.search = function(){
		$scope.artistResults = true;
		Spotify.search($scope.artistSearch, 'artist').then(function (data) {
			$scope.artists = {};
			for (var i = 0; i < data.artists.items.length; i++) {
				var artist = data.artists.items[i];
				$scope.artists[artist.id] = artist;
			}
		});
		$scope.artistSearch = '';
	};

})


.controller('albumViewCTRL', function($state, $http, $scope, $stateParams, Spotify, User){
	$scope.albums = [];
	$scope.artist = $stateParams.name
	$scope.buttonText = 'add album';
	$scope.buttonDisabled = false;
	$scope.hamburger = true;
	$scope.closeMenu = false;
	$scope.menuItems = false;
	$scope.user = User.getInfo();

	var options = {
		'limit' : 50
	};

	Spotify.getArtistAlbums($stateParams.id, options).then(function(albums){
		$scope.albums = _.filter(albums.items, function(el){
			return el.available_markets.indexOf("US") > -1;
		});
	});


	$scope.menuView = function(){
		$scope.hamburger = !$scope.hamburger;
		$scope.closeMenu = !$scope.closeMenu;
		$scope.menuItems = !$scope.menuItems;
	};

	$scope.logout = function(){
		$http.get('/logout')
		.success(function(){
			$state.go('home');
		})
	};

	$scope.albumAdded = false;

	$scope.addAlbum = function(artist, albumName, albumCover, albumId){
		var newAlbum = {
			artist: $scope.artist,
			album: albumName.toString(),
			albumCover: albumCover.toString(),
			user: $scope.user.id,
			uniqueId: albumId
		};
		$scope.albumAdded = true;
		for(var i = 0; i < $scope.albums.length; i++){
			if($scope.albums[i].id === newAlbum.uniqueId){
				$scope.albums[i].name = 'added!';
			}
			if(newAlbum.album === 'added!'){
				return;
			}
		}
		$http.post('/album', newAlbum)
		.success(function(addedAlbum){
		})
		.error(function(err){
			console.log(err);
		});

	};
})
































