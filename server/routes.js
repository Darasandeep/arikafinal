var churchmodel = require('../model/churchmodel');
var express = require('express');
var router = express.Router();
// var dialog = require('dialog');
module.exports = router;
var paruserid="";
var parusername="";
var parappdate="";
var parname="";
// var errorMessage1="";
var detailsofapp="";
router.get('/', function (req, res) {
  res.render('newuser')
  });
  // });
// });


router.post("/newuser", function (req, res) {
    //Gathering input data from admin create user task
    console.log(req.body);
    var user = new churchmodel();
    email = req.body.email;
  
    // var password = req.body.password;
    // bcrypt.hash(password, saltRounds, function (err, hash) {
    //   // Store hash in your password DB.
    // });
  
  
    churchmodel.find({ Email: email }, function (err, results) {
      if (results.length > 0) {
  
        console.log('id already exists');
        res.render("newuser");
  
      }
  
      else {
        user.Dateofapp = req.body.doa;
        user.Firstname = req.body.fname;
        user.Lastname = req.body.lname;
        user.Email = req.body.email;
        user.Dob = req.body.dob;
        user.Rand=Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  
        user.save(function (err, result) {
          if (!err) {
            // paruserid = result[0].Rand;
            // alert("appointment scheduled your confirmation code is");
            console.log("User created successfully");
            res.render('newuser', {
             
              // errorMessage1: "Appointment created successfully"
            });
            // dialog("success");
            
          }
  
          else {
            console.log(err);
          }
        });
      }
    });
  });
//   <script>
// function myFunction() {
//     alert("I am an alert box!")
// }
// </script>
  router.get('/login', function (req, res) {
    res.render('login', {
      detailsofapp: ""
    });
  });
  // router.get('/newuser', function (req, res) {
  //   res.render('newuser', {
  //     errorMessage1: ""
  //   });
  // });
  router.post('/login', function (req, res) {
    //let id = req.params.id;
    var username = req.body.uname;
    current = username;
    var dob =req.body.dob;

    console.log("DOb is"+dob);
  
    churchmodel.find({ Email: username}, [], function (err, results) {
      if (!results.length) {
        // $("#abc").html("incorrect password");
        // req.session.user = user;
        res.render('login')
          // errorMessage: "Please Enter Valid Entries"
        
  
       
      }
      
      
      
      else {
        parname=results[0].Firstname+" "+results[0].Lastname;
        paruserid = results[0]._id;
        parusername =results[0].Email;
        parappdate=results[0].Dateofapp;
         console.log(results);

        res.render("login", { 
          detailsofapp: "Hey "+parname +" your have an appointment on "+parappdate });
        console.log("details are" + paruserid +"  "+parusername);
        
        console.log(detailsofapp);
        // return next();
      }
    });
  });
  router.get('/parishioner', function (req, res) {

         puserid = results[0].Email;
         console.log(results);
        res.render("parishioner", {
      // detailsofapp =" Details are " +parusername
        });
        console.log("details are" + puserid);
        // return next();
      
    });
  
  