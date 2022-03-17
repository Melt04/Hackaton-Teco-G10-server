import express from "express";
import routerDatos from "./rutas/datos.js";
import mongoose from "mongoose";

const app = express();
app.use(express.json());
import passport from 'passport'
import {Strategy as LocalStrategy} from 'passport-local'
import session from 'express-session'
import MongoStore from 'connect-mongo'

import isAuth from './middlewares/isAuth.js'




app.use(express.json())

mongoose
  .connect("mongodb://localhost:27017/test")
  .catch((error) => handleError(error));
app.use("/api/datos", routerDatos);


//Configuracion de Login
const advancedOptions = { useNewUrlParser: true, useUnifiedTopology: true }
app.use(session({
  store: MongoStore.create({
    mongoUrl: 'mongodb+srv://admin:Merluza23@cluster0.vuapg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    mongoOptions: advancedOptions
  }),
  /* ----------------------------------------------------- */

  secret: 'shhhhhhhhhhhhhhhhhhhhh',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 600000
  }
}))

passport.use('register', new LocalStrategy({
    usernameField: 'email',
    passReqToCallback: true
  }, async (req, username, password, done) => {
  
    const { nombre, email} = req.body;

    //VER ESTA PARTE!!!
    const usuario = { nombre, username, email, password, contador: 0 };
    const resultado = await miUsuarioDAO.addUsuario(usuario);
    //VER ESTA PARTE!!!


    if (!resultado.error) {
      return done(null, usuario)
    } else {
      return done({ error: resultado.error })
  
    }
  }));

  passport.use('login', new LocalStrategy({
    usernameField: 'email'
  }, async (username, password, done) => {
      //VER ESTA PARTE
    if (await miUsuarioDAO.checkPassword(username, password)) {
      const usuario = await miUsuarioDAO.getUsuario(username);
      return done(null, usuario);
    } else {
      return done({ error: 'Usuario o contraseña incorrectos' }, false)
    }
  }));

  passport.serializeUser(function (user, done) {
    done(null, user.username);
  });
  
  passport.deserializeUser(async function (username, done) {
      //VER ESTA PARTE
    const usuario = await miUsuarioDAO.getUsuario(username)
    done(null, usuario);
  });
  
  app.use(passport.initialize());
  app.use(passport.session());


// start server
const PORT = 8080;
const server = app.listen(PORT, () => {
<<<<<<< HEAD
  console.log(
    `Servidor express escuchando en el puerto ${server.address().port}`
  );
});
server.on("error", (error) => console.error(`Error en servidor`, error));
=======
    console.log(`Servidor express escuchando en el puerto ${server.address().port}`)
})
server.on('error', error => console.error(`Error en servidor`, error))


//TODO agregar CORS
//TODO Agregar puerto de enviroment. 
>>>>>>> 1762c5d804d12ec93e7e37a404ab9179d12d8bdd
