/**
* Album.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
  	artist: {
      type: 'string', 
      required: false, 
      unique: false
    },
  	album: {
      type: 'string', 
      required: false, 
      unique: false
    },
    albumCover: {
      type: 'string', 
      required: false, 
      unique: false
    },
    user : { 
      model: 'User', 
      required : true 
    },
    uniqueId : {
      type: 'string',
      required: false,
      unique: false
    }
  }
};

