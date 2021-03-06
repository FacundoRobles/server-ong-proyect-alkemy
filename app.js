require('dotenv').config();
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const session = require("express-session");
const passport = require('passport');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const authRouter = require('./routes/auth');
const newsRouter = require('./routes/news');
const membersRouter = require('./routes/members')
const categoriesRouter = require('./routes/categories');
const testimonialsRouter = require('./routes/testimonials');
const contactsRouter = require('./routes/contacts');
const organizationsRouter = require('./routes/organizations')
const activitiesRouter = require('./routes/activities');

const app = express();
app.use(cors({
  credentials: true,
  origin: "http://localhost:2032" || "*"
}))

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(session({ secret: "secret_key", resave: false, saveUninitialized: false }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:2032'); 
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(passport.initialize());
app.use(passport.session());

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/news', newsRouter);
app.use('/members', membersRouter)
app.use('/categories', categoriesRouter);
app.use('/testimonials', testimonialsRouter);
app.use('/contacts', contactsRouter);
app.use('/organizations', organizationsRouter);
app.use('/activities', activitiesRouter);
app.use('/auth', authRouter)

app.use(function(req, res, next) {
  next(createError(404));
});

app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
