module.exports = {

  attributes: {
  	artist: {
      type: 'string', 
      required: true, 
      unique: false
    },
  	album: {
      type: 'string', 
      required: true, 
      unique: false
    },
  	addedDate: {
      type: 'datetime', 
      required: false, 
      unique: false
    },
    albumCover: {
      type: 'string', 
      required: true, 
      unique: false
    },
    user : { 
      model: 'User', 
      required : true 
    }
  }
};