const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const bcrypt = require('bcrypt');      
const { User } = require('../models/index');  
const { SECRET_TOKEN } = process.env;

const messageError = {
  password:'Incorrect password.',
  email: 'Incorrect email.' 
}

passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
  },
  (email, password, done) => {
    User.findOne({ where:{ email: email } })
    .then(user => {
      if(user){
        let comparePassword = bcrypt.compareSync(password, user.password);

        if(comparePassword) return done(null, user);

        if(!comparePassword){
            return done(null, false, { message: messageError.password });
        }; 
      };

      if (!user) {
        return done(null, false, { message: messageError.email });
      };
      if (!user.validPassword(password)) {
        return done(null, false, { message: messageError.password });
      };
      return done(null, user);
    })
    .catch(err => done(err))
  }
));

var opts = {};
    opts.jwtFromRequest = ExtractJwt.fromExtractors([
      ExtractJwt.fromUrlQueryParameter(SECRET_TOKEN),
      ExtractJwt.fromHeader(SECRET_TOKEN),
      ExtractJwt.fromAuthHeaderAsBearerToken()
    ]);
    opts.secretOrKey = SECRET_TOKEN;

passport.use(new JwtStrategy(opts, async(jwt_payload, done) => {
    return await User.findByPk(jwt_payload.user.id)
    .then(user => {
        if (user?.roleId === 1) return done(null, user);
    
        return done(null, false);
    })
    .catch(err => {
        if (err) return done(err, false);
    });
  }
));

passport.serializeUser((user, done) => {
    return done(null, user.id);
});

passport.deserializeUser(async(id, done) => {
    return await User.findByPk(id)
    .then(user => done(null,user))
    .catch(err => done(err));
});

module.exports = { passport, messageError }