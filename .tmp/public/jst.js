this["JST"] = this["JST"] || {};

this["JST"]["assets/templates/home.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<section class="home-view">\n\t<div class="pics" id="pic1">\n\t\t<section class="login">\n\t\t\t<a class="login-options" href="#" ng-click="login()">log in</a>\n\t\t\t<a class="login-options" href="#">register</a>\n\t\t\t<div ng-show="loginInput">\n\t\t\t\t<input type="text" placeholder="email" ng-model="email"><br>\n\t\t\t\t<input type="password" placeholder="password" ng-model="password"><br>\n\t\t\t\t<button class="submit">submit</button>\n\t\t\t\t<button class="cancel" ng-click="login()">cancel</button>\n\t\t\t</div>\n\t\t</section>\n\t\t<h1>Vinyfi</h1>\n\t\t<div class="description">\n\t\t\t<p id="description"></p>\n\t\t</div>\n\t</div>\n</section>';

}
return __p
};