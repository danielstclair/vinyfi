angular.module('app.controllers', [])
.controller('homeCTRL', function($scope){
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
	$scope.login = function(){

		$scope.loginInput = !$scope.loginInput;
		$scope.email = '';
		$scope.password = '';
	}
})