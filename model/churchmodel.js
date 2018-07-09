var mongoose=require('mongoose');

var churchloginschema=mongoose.Schema({
  Firstname:{type: String},
  Lastname:{type: String},
  Email:{type:String,},
  Dateofapp:{type:String},
  Dob:{type:String},
  Rand:{type: String},
});

// var churchdata= new churchloginschema({
//   username : "sandeep",
//   password: "1234"
// });


module.exports=mongoose.model('Chuchlogin', churchloginschema);
