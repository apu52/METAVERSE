const mongoose= require('mongoose');
const audioSchema = new mongoose.Schema({
    email:{
      type:String,
      required:true,
    },
    
    audioArray:[ {filename: {
      type: String,
      required: true,
    },
    audio :{
      type: Buffer,
     
    },author:{
      type:String,
      
    },
    title:{
      type:String,
     
    },
    comment:{
      type:String,
    },
    date:{
      type:Date,
    },}],
  });
  
  // Create audio model
  const Audio = mongoose.model('Audio', audioSchema);
  module.exports = Audio;