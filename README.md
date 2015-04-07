# vinyfi

## Description

Trying to solve the lackluster experience of keeping track of your vinyl records, Vinyfi is an intuitive app for vinyl enthusiasts to keep track of what they own and want. While there are many apps with a vast marketplace and microsoft excel can be excellent for keeping track of inventory. Why settle for the mediocre user experience of a poorly designed, laggy website or the need to export files from one device to another if you want to view things from anywhere? Vinyfi is a free service with a simple and intuitive interface that incorparates current web design standards (no tables) that users can manage from any device simply. Vinyfi. Keep track of your tracks.

## User Stories

As a vinyl collector I want to be able to:
  - Register for a free account on Vinyfi
  - Sign in from anywhere
  - View my collections from anywhere
  - Search for albums that I want to add to my collections
  - Add items to my collection
  - View album covers and liner notes of albums that I own or want to add
  - Delete albums from my collection
  - Have multiple collections ('I own' list and 'I want' list)
  - Be able to choose which collection to add to
  - Turn my collections into Spotify playlists (Spotify account required)

## Wireframes

https://drive.google.com/open?id=0B2EAWUQzrY0rSW1pcXdXWk9ydms&authuser=0

## Models

Passport attributes :
  - protocol: { type: 'alphanumeric', required: true }
  - password: { type: 'string', minLength: 8 }
  - provider   : { type: 'alphanumericdashed' }
  - identifier : { type: 'string' }
  - tokens     : { type: 'json' }
  - user: { model: 'User', required: true }
  - validatePassword: function (password, next) {
      bcrypt.compare(password, this.password, next);
    }

User attributes:
  - username  : { type: 'string', unique: true }
  - email     : { type: 'email',  unique: true }
  - passports : { collection: 'Passport', via: 'user' }
  - albums : {collection: 'Album', via: 'user'}

Album attributes:
  - artist: {type: 'string', required: true, unique: false}
  - album: {type: 'string', required: true, unique: false}
  - releaseDate: {type: 'datetime', required: false, unique: false}
  - albumCover: {type: 'string', required: true, unique: false}
  - user : { model: 'User", required : true } 

## APIs, Plugins, Libraries and Frameworks
 - Spotify API
 - Sails
 - Angular JS
 - Underscore
 - jQuery
