angular.module('app.controllers', ['app.services', 'spotify'])
.controller('homeCTRL', function($scope, $http, $state, Validate){
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
		console.log($scope.error);

		if(!Validate.hasError($scope.error)){
			var object = {
				username: htmlCredentials.identifier,
				email: htmlCredentials.identifier,
				password: htmlCredentials.password
			};

			$http.post('/auth/local', htmlCredentials)
			.success(function(res){
				console.log('success!');
				console.log(res);
				$state.go('collection');
			})
			.error(function(err){
				console.log('Error!');
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

			$http.post('auth/register', object)
			.success(function(res) {
				console.log('success!');
				// console.log(res);
				$state.go('collection');
			})
			.error(function(err){
				console.log('Error!');
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
	$scope.logout = function(){
		$http.get('/logout');
		$state.go('home');
	}

	$http.get('https://tiny-pizza-server.herokuapp.com/collections/vinyfi?sort=artist ASC')
	.success(function(collection){
		$scope.collection = collection;
		console.log($scope.collection);
	})
})

.controller('addNewCTRL', function($scope, $state, $http, Spotify){
	$scope.artists = {};
	console.log('test');
	$scope.logout = function(){
		$http.get('/logout');
		$state.go('home');
	}

	$scope.search = function(){
		Spotify.search($scope.artistSearch, 'artist').then(function (data) {
			$scope.artists = {};
				for (var i = 0; i < data.artists.items.length; i++) {
					var artist = data.artists.items[i];
					$scope.artists[artist.id] = artist;
				};
				
				// console.log($scope.artists);
		});
		$scope.artistSearch = '';
	}

	$scope.albumSearch = function(id){
		Spotify.getArtistAlbums(id).then(function(albums){
			// console.log(albums);
			var uniqueNames = [];
			$.each(albums.items, function(i, el){
				if($.inArray(el, uniqueNames) === -1) uniqueNames.push(el);
			});
			// console.log(uniqueNames);
			// var albumId = uniqueNames.id;
			$scope.artists[id].albums = uniqueNames;
			$scope.artists = angular.copy($scope.artists);

			// console.log($scope.artists);
		});
	}


	$scope.addAlbum = function(artistId, albumId, albumCover){
		// console.log('testing the new album function');
		// i = indexOf($scope.artists[i]);
		// console.log(albumId);
		var newAlbum = {
			artist: $scope.artists[artistId].name,
			album: albumId,
			albumCover: albumCover
		}
		console.log(newAlbum);

		$http.post('https://tiny-pizza-server.herokuapp.com/collections/vinyfi', newAlbum)
		.success(function(addedAlbum){
			console.log(addedAlbum);
		})

	}


})

































