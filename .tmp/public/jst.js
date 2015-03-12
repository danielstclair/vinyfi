this["JST"] = this["JST"] || {};

this["JST"]["assets/templates/collection.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<h1>test</h1>\n<a href="#" ng-click="logout()">logout</a>\n<input type="text" placeholder="search by artist" id="artistSearch" ng-model="artistSearch" ng-keyup="$event.keyCode == 13 && search()">\n<button ng-click="search()">Search</button>';

}
return __p
};

this["JST"]["assets/templates/home.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<section class="home-view">\n\t<div class="pics" id="pic1">\n\t\t<header>\n\t\t<section class="login">\n\t\t\t<a class="login-options" href="#" ng-click="loginStart()">log in</a>\n\t\t\t<a class="login-options" href="#" ng-click="registerStart()">register</a>\n\t\t\t<form ng-show="loginInput" ng-submit="login(htmlCredentials)">\n\t\t\t\t<input type="text" placeholder="email" ng-model="htmlCredentials.identifier"><br>\n\t\t\t\t<input type="password" placeholder="password" ng-model="htmlCredentials.password" ng-keyup="$event.keyCode == 13 && login(htmlCredentials)"><br>\n\t\t\t\t<button type="submit" class="submit">submit</button>\n\t\t\t\t<button class="cancel" ng-click="loginStart()">cancel</button>\n\t\t\t\t<p class="errors" ng-bind="error.identifier"></p>\n\t\t\t\t<p class="errors" ng-bind="error.password"></p>\n\t\t\t</form>\n\t\t\t<form ng-show="registerInput" ng-submit="register(htmlCredentials)">\n\t\t\t\t<input type="text" placeholder="email" ng-model="htmlCredentials.identifier"><br>\n\t\t\t\t<input type="password" placeholder="password" ng-model="htmlCredentials.password" ng-keyup="$event.keyCode == 13 && register(htmlCredentials)"><br>\n\t\t\t\t<button type="submit" class="submit">let\'s go!</button>\n\t\t\t\t<button class="cancel" ng-click="registerStart()">cancel</button>\n\t\t\t\t<p class="errors" ng-bind="error.identifier"></p>\n\t\t\t\t<p class="errors" ng-bind="error.password"></p>\n\t\t\t</form>\n\t\t</section>\n\t\t<div class="img-box">\n\t\t\t<img src="/images/Vinyfi-lightgreen.png">\n\t\t</div>\n\t\t</header>\n\t\t<div class="description">\n\t\t\t<p id="description"></p>\n\t\t</div>\n\t</div>\n</section>';

}
return __p
};