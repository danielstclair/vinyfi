angular.module('app.directives', [])
.directive("scroll", function ($window) {
	return function(scope, element, attrs) {
		angular.element($window).bind("scroll", function() {
			if (this.pageYOffset >= 116) {
				$('nav').addClass('fixed');
				$('.album-view').addClass('prop');
			} else {
				$('nav').removeClass('fixed');
				$('.album-view').removeClass('prop');
			}
			scope.$apply();
		});
	};
})