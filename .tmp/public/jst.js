this["JST"] = this["JST"] || {};

this["JST"]["assets/templates/addNew.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<section class="addNew">\n\t<section class="top">\n\t\t<header>\n\t\t\t<div class="logo-box">\n\t\t\t\t<img class="logo" src="/images/V6.png">\n\t\t\t</div>\n\t\t</header>\n\t\t<nav class="top-bottom">\n\t\t\t<h1>artist search</h1>\n\t\t\t<a href="#" ng-click="menuView()" class="ion-navicon menu" ng-show="hamburger"></a>\n\t\t\t<a href="#" ng-click="menuView()" class="ion-ios-close-empty menu" ng-show="closeMenu"></a>\n\t\t\t<ul ng-show="menuItems" class="animated fadeIn">\n\t\t\t\t<li>\n\t\t\t\t\t<a ui-sref="collection">back to collection</a>\n\t\t\t\t</li>\n\t\t\t\t<li>\n\t\t\t\t\t<a class="logout" href="#" ng-click="logout()">logout</a>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t\t<div class="clear-float"></div>\n\t\t</nav>\n\t</section>\n\t<section class="search animated fadeIn">\n\t\t<input type="text" placeholder="search by artist" id="artistSearch" ng-model="artistSearch" ng-keyup="$event.keyCode == 13 && search()">\n\t\t<button ng-click="search()">search</button>\n\t\t<div class="clear-float"></div>\n\t\t<div class="results animated fadeInUp" ng-repeat="(id, artist) in artists">\n\t\t\t<a href="#" ng-click="albumSearch(artist.id)" ng-show="artistResults" ng-model="artistName" class="artist-name" ui-sref="albumView({id: artist.id, name: artist.name})">{{ artist.name }}&nbsp;&nbsp;<span class="ion-ios-arrow-right"></span><span class="ion-ios-arrow-right"></span></a>\n\t\t</div>\n\t</section>\n</section>';

}
return __p
};

this["JST"]["assets/templates/albumView.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<section class="album-search">\n\t<section class="top">\n\t\t<header>\n\t\t\t<div class="logo-box">\n\t\t\t\t<img class="logo" src="/images/V6.png">\n\t\t\t</div>\n\t\t</header>\n\t\t<nav class="top-bottom">\n\t\t\t<h1>artist search</h1>\n\t\t\t<a href="#" ng-click="menuView()" class="ion-navicon menu" ng-show="hamburger"></a>\n\t\t\t<a href="#" ng-click="menuView()" class="ion-ios-close-empty menu" ng-show="closeMenu"></a>\n\t\t\t<ul ng-show="menuItems" class="animated fadeIn">\n\t\t\t\t<li>\n\t\t\t\t\t<a class="add-new" ui-sref="collection">\n\t\t\t\t\t\tback to collection\n\t\t\t\t\t</a>\n\t\t\t\t</li>\n\t\t\t\t<li>\n\t\t\t\t\t<a class="add-new" ui-sref="addNew">\n\t\t\t\t\t\tartist search\n\t\t\t\t\t</a>\n\t\t\t\t</li>\n\t\t\t\t<li>\n\t\t\t\t\t<a class="logout" href="#" ng-click="logout()">logout</a>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t\t<div class="clear-float"></div>\n\t\t</nav>\n\t</section>\n\t<h1>{{artist}}</h1>\n\t<div ng-show="albums.length" class="album-view animated fadeIn">\n\t\t<ul>\n\t\t\t<li ng-repeat="album in albums">\n\t\t\t\t<img ng-model="albumCover" ng-src="{{ album.images[0].url }}" class="album-cover">\n\t\t\t\t<p ng-model="albumName" class="album-name">\n\t\t\t\t\t{{ album.name }}\n\t\t\t\t\t<button id="{{album.id}}" class="add-album ion-plus" ng-class="{added: selected === album.id}" ng-click="addAlbum(artist, album.name, album.images[0].url, album.id); selected = album.id"></button>\n\t\t\t\t</p>\n\t\t\t\t<!-- <div class="clear-float"></div> -->\n\t\t\t</li>\n\t\t</ul>\n\t</div>\n</section>';

}
return __p
};

this["JST"]["assets/templates/collection.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<section class="collection-view" scroll>\n\t<section class="top">\n\t\t<header>\n\t\t\t<div class="logo-box">\n\t\t\t\t<img class="logo" src="/images/V6.png">\n\t\t\t</div>\n\t\t</header>\n\t\t<nav class="top-bottom">\n\t\t\t<h1>collection</h1>\n\t\t\t<a href="#" ng-click="menuView()" class="ion-navicon menu" ng-show="hamburger"></a>\n\t\t\t<a href="#" ng-click="menuView()" class="ion-ios-close-empty menu" ng-show="closeMenu"></a>\n\t\t\t<ul ng-show="menuItems" class="animated fadeIn">\n\t\t\t\t<li>\n\t\t\t\t\t<a class="add-new" href="#" ui-sref="addNew">artist search <span class="ion-plus-round"></span></a>\n\t\t\t\t</li>\n\t\t\t\t<li>\n\t\t\t\t\t<a class="logout" href="#" ng-click="logout()">logout</a>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t\t<div class="clear-float"></div>\n\t\t</nav>\n\t</section>\n\n\t<div class="album-view">\n\t\t<section class="sorts">\n\t\t\tsort by:\n\t\t\t<a href="#" ng-click="selected=1; sortRecent()" ng-class="{active: selected === 1}">recently added</a>\n\t\t\t<a href="#" ng-click="selected=2; sortArtist()" ng-class="{active: selected === 2}">artist</a>\n\t\t\t<a href="#" ng-click="selected=3; sortAlbum()" ng-class="{active: selected === 3}">album</a><br>\n\t\t\t<a class="add-new edit" href="#" ng-click="show = !show; editStart = !editStart; editFinished = !editFinished" ng-hide="editStart">edit list</a>\n\t\t\t<a href="#" class="add-new edit" ng-show="editFinished" ng-click="show = !show; editStart = !editStart; editFinished = !editFinished">done editing</a>\n\t\t\t<!-- <br><a class="add-new edit" href="#" ng-click="createVinyfi()">create vinyfi playlist</a>\n\t\t\t<a class="add-new edit" href="#" ng-click="addVinyfiTracks()">add collection to vinyfi playlist</a> -->\n\t\t</section>\n\t\t<ul>\n\t\t\t<li ng-repeat="album in collection" ng-animate="\'animate\'" ng-hide="deletedAlbum === album.id">\n\t\t\t\t<div>\n\t\t\t\t\t<span class="ion-ios-close-outline" ng-show="show" ng-click="deleteAlbum(album); deletedAlbum = album.id"></span>\n\t\t\t\t\t<img ng-src="{{album.albumCover}}" class="album-cover">\n\t\t\t\t\t<p class="album-artist">{{album.artist}} <br> <span class="album-name">{{album.album}}</span>\n\t\t\t\t\t</p>\n\t\t\t\t</div>\n\t\t\t</li>\n\t\t</ul>\n\t</div>\n</section>';

}
return __p
};

this["JST"]["assets/templates/home.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<section class="home-view">\n\t<div class="pics" id="pic1">\n\t\t<header class="animated fadeIn">\n\t\t\t<div class="logo-box">\n\t\t\t\t<img class="logo" src="/images/V6.png">\n\t\t\t</div>\n\t\t\t<a href="#" ng-click="loginView()" class="ion-navicon menu" ng-show="hamburger"></a>\n\t\t\t<a href="#" ng-click="loginView()" class="ion-ios-close-empty menu" ng-show="closeMenu"></a>\n\t\t\t<div class="clear-float"></div>\n\t\t\t<section class="login" ng-show="loginOptions">\n\t\t\t\t<a class="login-options" href="#" ng-click="loginStart()">log in</a>\n\t\t\t\t<a class="login-options" href="#" ng-click="registerStart()">register</a>\n\t\t\t\t<form ng-show="loginInput" ng-submit="login(htmlCredentials)" class="animated fadeIn">\n\t\t\t\t\t<input type="email" placeholder="email (case sensitive)" ng-model="htmlCredentials.identifier"><br>\n\t\t\t\t\t<input type="password" placeholder="password (case sensitive)" ng-model="htmlCredentials.password" ng-keyup="$event.keyCode == 13 && login(htmlCredentials)"><br>\n\t\t\t\t\t<button type="submit" class="submit">submit</button>\n\t\t\t\t\t<button class="cancel" ng-click="loginStart()">cancel</button>\n\t\t\t\t\t<p class="errors" ng-bind="error.identifier"></p>\n\t\t\t\t\t<p class="errors" ng-bind="error.password"></p>\n\t\t\t\t\t<p style="color:#F2F2F2">or</p>\n\t\t\t\t\t<p style="text-align:center"><a class="login-options" href="/auth/spotify">log in with Spotify</a></p>\n\t\t\t\t</form>\n\t\t\t\t<form ng-show="registerInput" ng-submit="register(htmlCredentials)" class="animated fadeIn">\n\t\t\t\t\t<input type="email" placeholder="email (case sensitive)" ng-model="htmlCredentials.identifier"><br>\n\t\t\t\t\t<input type="password" placeholder="password (8 character min)" ng-model="htmlCredentials.password" ng-keyup="$event.keyCode == 13 && register(htmlCredentials)"><br>\n\t\t\t\t\t<button type="submit" class="submit">let\'s go!</button>\n\t\t\t\t\t<button class="cancel" ng-click="registerStart()">cancel</button>\n\t\t\t\t\t<p class="errors" ng-bind="error.identifier"></p>\n\t\t\t\t\t<p class="errors" ng-bind="error.password"></p>\n\t\t\t\t\t<p style="color:#F2F2F2">or</p>\n\t\t\t\t\t<p style="text-align:center"><a class="login-options" href="/auth/spotify">log in with Spotify</a></p>\n\t\t\t\t</form>\n\t\t\t</section>\n\t\t</header>\n\t\t<div class="description">\n\t\t\t<p id="description"></p>\n\t\t</div>\n\t</div>\n</section>';

}
return __p
};

this["JST"]["assets/templates/spotifycallback.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '\n  <script type=\'text/javascript\'>//<![CDATA[ \n  window.onload=function(){\n    var target = window.self === window.top ? window.opener : window.parent;\n\n    var hash = window.location.hash;\n    if (hash) {\n        var token = window.location.hash.split(\'&\')[0].split(\'=\')[1];\n        // target.postMessage(token, \'http://example.com/\'); // v0.7.0 and below\n        localStorage.setItem(\'spotify-token\', token);\n    }\n\n  }//]]>  \n\n  </script>\n';

}
return __p
};