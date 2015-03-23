angular.module('app.services', [])

.factory('Validate', function() {
	return {
			htmlCredentials: function(htmlCredentials) {
				var error = {
					identifier: '',
					password: ''
				};
				/* True its empty */
				if(!htmlCredentials.identifier) {
					error.identifier = 'Enter your email address';
				}
				else if(!validator.isEmail(htmlCredentials.identifier)) {
					error.identifier = 'The email address is not valid';
				}

				if(!htmlCredentials.password) {
					error.password = 'Enter a password';
				}

				return error;
			},

			hasError: function(error) {
				for(var i in error) {
					if(error.hasOwnProperty(i) && error[i]) {
						return true;
					}
				}
				return false;
			}
	};
})

.service('User', function($rootScope){
	var user = null;
	return {
		setLoggedInUser: function(u){
			user = u;
			$rootScope.$emit('LOGIN_EVENT', u);
		},
		isLoggedIn: function(){
			if(user === null){
				return false;
			}
			else{
				return true;
			}
		},
		getInfo: function(){
			return user;
		}
	};
})