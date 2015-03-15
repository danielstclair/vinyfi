this["JST"] = this["JST"] || {};

this["JST"]["assets/templates/addNew.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<h1>add new</h1>\n<a href="#" ng-click="logout()">logout</a>\n<a ui-sref="collection">back</a>\n<input type="text" placeholder="search by artist" id="artistSearch" ng-model="artistSearch" ng-keyup="$event.keyCode == 13 && search()">\n<button ng-click="search()">Search</button>\n<div ng-repeat="(id, artist) in artists">\n\t<a href="#" ng-click="albumSearch(artist.id)" ng-model="artistName">{{ artist.name }}</a>\n\t<!-- <a >show albums</> -->\n\t<div>\n\t<ul>\n\t\t<li ng-repeat="album in artist.albums">\n\t\t\t<img ng-model="albumCover" ng-src="{{ album.images[0].url }}" height="200" width="200">\n\t\t\t<p ng-model="albumName">{{ album.name }}</p>\n\t\t\t<button ng-click="addAlbum(artist.id, album.name, album.images[0].url)">add album</button>\n\t\t</li>\n\t</ul>\n\t<!-- <button ng-click="closeAlbums()">close</button> -->\n\t</div>\n</div>';

}
return __p
};

this["JST"]["assets/templates/collection.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<h1>collection</h1>\n<a href="#" ng-click="logout()">logout</a>\n<a ui-sref="addNew">add new</a>\n\n<div ng-repeat="album in collection">\n\t<ul>\n\t\t<li>\n\t\t\t<img ng-src="{{album.albumCover}}" height="200" width="200">\n\t\t\t<p>{{album.artist}}</p>\n\t\t\t<p>{{album.album}}</p>\n\t\t</li>\n\t</ul>\n</div>\n\n';

}
return __p
};

this["JST"]["assets/templates/home.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<section class="home-view">\n\t<div class="pics" id="pic1">\n\t\t<header>\n\t\t<section class="login">\n\t\t\t<a class="login-options" href="#" ng-click="loginStart()">log in</a>\n\t\t\t<a class="login-options" href="#" ng-click="registerStart()">register</a>\n\t\t\t<form ng-show="loginInput" ng-submit="login(htmlCredentials)">\n\t\t\t\t<input type="text" placeholder="email" ng-model="htmlCredentials.identifier"><br>\n\t\t\t\t<input type="password" placeholder="password" ng-model="htmlCredentials.password" ng-keyup="$event.keyCode == 13 && login(htmlCredentials)"><br>\n\t\t\t\t<button type="submit" class="submit">submit</button>\n\t\t\t\t<button class="cancel" ng-click="loginStart()">cancel</button>\n\t\t\t\t<p class="errors" ng-bind="error.identifier"></p>\n\t\t\t\t<p class="errors" ng-bind="error.password"></p>\n\t\t\t</form>\n\t\t\t<form ng-show="registerInput" ng-submit="register(htmlCredentials)">\n\t\t\t\t<input type="text" placeholder="email" ng-model="htmlCredentials.identifier"><br>\n\t\t\t\t<input type="password" placeholder="password (8 character min)" ng-model="htmlCredentials.password" ng-keyup="$event.keyCode == 13 && register(htmlCredentials)"><br>\n\t\t\t\t<button type="submit" class="submit">let\'s go!</button>\n\t\t\t\t<button class="cancel" ng-click="registerStart()">cancel</button>\n\t\t\t\t<p class="errors" ng-bind="error.identifier"></p>\n\t\t\t\t<p class="errors" ng-bind="error.password"></p>\n\t\t\t</form>\n\t\t</section>\n\t\t<div class="img-box">\n\t\t\t<img src="/images/Vinyfi-lightgreen.png">\n\t\t</div>\n\t\t</header>\n\t\t<div class="description">\n\t\t\t<p id="description"></p>\n\t\t</div>\n\t</div>\n</section>';

}
return __p
};