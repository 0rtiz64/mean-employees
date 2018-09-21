const mongoose = require('mongoose');

const  URI = 'mongodb://localhost/mean-crud'; // DIRECCION DE LA DB, SI NO EXISTE MONGO LA CREARA
mongoose.connect(URI) //MONGO SE CONECTARA A LA DB
    .then(db => console.log("DB IS CONNECTED"))
    .catch(err =>console.error(err));


module.exports = mongoose; // EXPORTARA LO QUE DEVUELVA MONGOOSE