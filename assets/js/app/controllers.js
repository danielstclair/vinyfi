angular.module('app.controllers', ['app.services'])
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
	}
})

.controller('collectionCTRL', function($scope){
	console.log('test');
})

































