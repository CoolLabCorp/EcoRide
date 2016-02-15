const imports = require('./config/imports');
const session = imports.getExpressSession();
const MongoStore = imports.getMongoSessionStore()(session);
const passport = imports.getPassport();
//============================
var app = require('./config/environment');
var db = require('./config/database');
//============================
// Controllers
var ride = require('./controllers/ride');
var main = require('./controllers/main');
var auth = require('./controllers/auth');
//============================
var controllers = {'ride' : ride,'main':main, 'auth' : auth};


// App = Express Instance, Router = Router Instance
db.connect();
process.on('exit', function () {
    db.disconnect();
    console.log("[Server] Offline.");
});

process.on('uncaughtException', function(ex) {
    console.log(ex);
});

// Middlewares

app.use(session({
    secret: 'pineapple',
    resave: true,
    saveUninitialized: true,
    store: new MongoStore({ url: 'mongodb://localhost/ecoride-sessions'})
}));
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use('/home',main);
app.use('/rides',ride);
app.use('/auth',auth);

module.exports = app;
