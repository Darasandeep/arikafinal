var http = require('http');
var path = require('path');
var express = require('express');
var ejs=require('ejs');
var mongoose = require('mongoose');
var session = require('express-session');
var bodyParser = require('body-parser');
var errorHandler = require('errorhandler');
var cookieParser = require('cookie-parser');
var app = express();

var routes=require('./server/routes');
app.locals.pretty = true;
app.set('port', process.env.PORT || 3032);
// app.set('views', __dirname + '/app/server/views');

// my new code
app.set('views', path.join(__dirname, 'views'));

// end of my code
app.set('view engine', 'ejs');
// var dbURL = 'mongodb://localhost:27017/churchdb';
// mongoose.connect(dbURL); Mongodb code

var dbURL = 'mongodb://haritha:arikapudi1@ds129831.mlab.com:29831/formsubms';
mongoose.connect(dbURL, { useMongoClient: true });
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'dbURL connection error:'));
// var dbURL = 'mongodb://sandeep:dara@ds151528.mlab.com:51528/teamcodex';mlabs code

// mongoose.connect(dbURL, { useMongoClient: true });
// mongoose.Promise = global.Promise;
// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'dbURL connection error:'));

//  mongoose.connect(dbURL);
// var db = mongoose.connection;
// app.use(session({
//     secret: 'work hard',
//     resave: true,
//     saveUninitialized: false,
//     store: new MongoStore({
//       mongooseConnection: db
//     })
//   }));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(require('stylus').middleware({ src: __dirname + '/app' }));
app.use(express.static(__dirname + '/'));



// var dbURL='mongodb://'+dbHost+':'+dbPort+'/'+dbName;

// require('./app/server/routes')(app);
// require('./app/server/routes');

console.log('before calling routes');
app.use('/', routes);

http.createServer(app).listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
});
