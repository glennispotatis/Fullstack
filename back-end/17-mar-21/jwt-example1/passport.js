const passport = require('passport');
const passportJWT = require('passport-jwt');
const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;
const User = require('./models/users');

passport.use(new JWTStrategy({
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'supersecret'
    },
    function (jwtPayload, done){
        return User.findById(jwtPayload.userId)
        .then(user => { return done(null, user) })
        .catch(error => { return done(error) });
    }
));