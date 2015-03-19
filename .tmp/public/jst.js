this["JST"] = this["JST"] || {};

this["JST"]["assets/templates/addNew.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<section class="addNew">\n\t<section class="top">\n\t\t<header>\n\t\t\t<div class="logo-box">\n\t\t\t\t<img class="logo" src="/images/V6.png">\n\t\t\t</div>\n\t\t</header>\n\t\t<nav class="top-bottom">\n\t\t\t<h1>add new</h1>\n\t\t\t<a href="#" ng-click="menuView()" class="ion-navicon menu" ng-show="hamburger"></a>\n\t\t\t<a href="#" ng-click="menuView()" class="ion-ios-close-empty menu" ng-show="closeMenu"></a>\n\t\t\t<ul ng-show="menuItems" class="animated fadeIn">\n\t\t\t\t<li>\n\t\t\t\t\t<a ui-sref="collection">back</a>\n\t\t\t\t</li>\n\t\t\t\t<li>\n\t\t\t\t\t<a class="logout" href="#" ng-click="logout()">logout</a>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t\t<div class="clear-float"></div>\n\t\t</nav>\n\t</section>\n\t<section class="search animated fadeInRight">\n\t\t<input type="text" placeholder="search by artist" id="artistSearch" ng-model="artistSearch" ng-keyup="$event.keyCode == 13 && search()">\n\t\t<button ng-click="search()">search</button>\n\t\t<div class="clear-float"></div>\n\t\t<div class="results animated fadeInRight" ng-repeat="(id, artist) in artists">\n\t\t\t<a href="#" ng-click="albumSearch(artist.id)" ng-show="artistResults" ng-model="artistName" class="artist-name">{{ artist.name }}&nbsp;<span class="ion-ios-arrow-right"></span></a>\n\t\t\t<div ng-show="albumResults" class="album-view animated fadeInRight">\n\t\t\t\t<!-- <h1>{{ artist.name }}</h1> -->\n\t\t\t\t<ul>\n\t\t\t\t\t<li ng-repeat="album in artist.albums">\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t<img ng-model="albumCover" ng-src="{{ album.images[0].url }}" class="album-cover">\n\t\t\t\t\t\t<span ng-model="albumName" class="album-name">{{ album.name }}<br><button class="add-album" ng-click="addAlbum(artist.id, album.name, album.images[0].url)">add album</button></span>\n\t\t\t\t\t\t<div class="clear-float"></div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n\t</section>\n</section>';

}
return __p
};

this["JST"]["assets/templates/collection.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<section class="collection-view" scroll>\n\t<section class="top">\n\t\t<header>\n\t\t\t<div class="logo-box">\n\t\t\t\t<img class="logo" src="/images/V6.png">\n\t\t\t</div>\n\t\t</header>\n\t\t<nav class="top-bottom">\n\t\t\t<h1>collection</h1>\n\t\t\t<a href="#" ng-click="menuView()" class="ion-navicon menu" ng-show="hamburger"></a>\n\t\t\t<a href="#" ng-click="menuView()" class="ion-ios-close-empty menu" ng-show="closeMenu"></a>\n\t\t\t<ul ng-show="menuItems" class="animated fadeIn">\n\t\t\t\t<li>\n\t\t\t\t\t<a class="add-new" href="#" ui-sref="addNew">add new <span class="ion-plus-round"></span></a>\n\t\t\t\t</li>\n\t\t\t\t<li>\n\t\t\t\t\t<a class="logout" href="#" ng-click="logout()">logout</a>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t\t<div class="clear-float"></div>\n\t\t</nav>\n\t</section>\n\n\t<div class="album-view">\n\t\t<ul>\n\t\t\t<li class="animated fadeInRight" ng-repeat="album in collection">\n\t\t\t\t<div>\n\t\t\t\t\t<img ng-src="{{album.albumCover}}" class="album-cover">\n\t\t\t\t\t<p class="album-artist">{{album.artist}} <br> <span class="album-name">{{album.album}}</span>\n\t\t\t\t\t</p>\n\t\t\t\t\t<!-- <div class="line"></div> -->\n\t\t\t\t</div>\n\t\t\t</li>\n\t\t</ul>\n\t</div>\n</section>';

}
return __p
};

this["JST"]["assets/templates/home.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<section class="home-view">\n\t<div class="pics" id="pic1">\n\t\t<header class="animated fadeInRight">\n\t\t\t<div class="logo-box">\n\t\t\t\t<img class="logo" src="/images/V6.png">\n\t\t\t</div>\n\t\t\t<a href="#" ng-click="loginView()" class="ion-navicon menu" ng-show="hamburger"></a>\n\t\t\t<a href="#" ng-click="loginView()" class="ion-ios-close-empty menu" ng-show="closeMenu"></a>\n\t\t\t<div class="clear-float"></div>\n\t\t\t<section class="login" ng-show="loginOptions">\n\t\t\t\t<a class="login-options col6" href="#" ng-click="loginStart()">log in</a>\n\t\t\t\t<a class="login-options col6" href="#" ng-click="registerStart()">register</a>\n\t\t\t\t<form ng-show="loginInput" ng-submit="login(htmlCredentials)" class="animated fadeIn">\n\t\t\t\t\t<input type="text" placeholder="email" ng-model="htmlCredentials.identifier"><br>\n\t\t\t\t\t<input type="password" placeholder="password" ng-model="htmlCredentials.password" ng-keyup="$event.keyCode == 13 && login(htmlCredentials)"><br>\n\t\t\t\t\t<button type="submit" class="submit">submit</button>\n\t\t\t\t\t<button class="cancel" ng-click="loginStart()">cancel</button>\n\t\t\t\t\t<p class="errors" ng-bind="error.identifier"></p>\n\t\t\t\t\t<p class="errors" ng-bind="error.password"></p>\n\t\t\t\t</form>\n\t\t\t\t<form ng-show="registerInput" ng-submit="register(htmlCredentials)" class="animated fadeIn">\n\t\t\t\t\t<input type="text" placeholder="email" ng-model="htmlCredentials.identifier"><br>\n\t\t\t\t\t<input type="password" placeholder="password (8 character min)" ng-model="htmlCredentials.password" ng-keyup="$event.keyCode == 13 && register(htmlCredentials)"><br>\n\t\t\t\t\t<button type="submit" class="submit">let\'s go!</button>\n\t\t\t\t\t<button class="cancel" ng-click="registerStart()">cancel</button>\n\t\t\t\t\t<p class="errors" ng-bind="error.identifier"></p>\n\t\t\t\t\t<p class="errors" ng-bind="error.password"></p>\n\t\t\t\t</form>\n\t\t\t</section>\n\t\t</header>\n\t\t<div class="description">\n\t\t\t<p id="description"></p>\n\t\t</div>\n\t</div>\n</section>';

}
return __p
};