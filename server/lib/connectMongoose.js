"use strict";

const mongoose = require('mongoose');

const db = mongoose.connection;

const mongoConnectionString = 'mongodb://localhost:27017/balloonSimulatorCompetition'; 

db.on("error", function(err){
    console.log(err);
})

db.once("open", function(){
    console.info("Conectado a mongodb");
})

mongoose.connect(mongoConnectionString, {useNewUrlParser: true,
                                         useUnifiedTopology: true});