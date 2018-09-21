const express = require('express'); //IMPORTAMOS EXPRESS;
const morgan = require('morgan');  //IMPORTAMOS MODULO MORGAN PARA MIDDLEWARE
const  cors = require('cors'); // IMPORTAMOS CORS QUE ESTABALECE LA COMUNICACION ENTRE LOS DOS SERVIDORES (BACKEND Y FRONTEND)
const app = express(); // GUARDAMOS LA EJECUCION DE EXPRESS EN LA VARIABLE APP;

const  { mongoose } = require('./database');
// SETTINGS;
app.set('port',process.env.PORT || 3000); // ASIGNAR UN PUERTO A LA VARIABLE PORT SI NO ENCUENTRA PUERTO TENDRA EL 3000 ;


// MIDDLEWARES;
app.use(morgan('dev')); // CADA PETICION PASARA POR ESTA FUNCION;
app.use(express.json()); // EL SERVER ENTENDERA FORMATO JSON;
app.use(cors({origin: 'http://localhost:4200'})); //SE LE ASSIGNA EL SERVIDOR CON EL QUE SE COMUNICARA


// ROUTES;
app.use('/api/employees',require('./routes/employee.routes'));

//INICIAR EL SERVIDOR;
app.listen(app.get('port'),()=>{
   console.log("SERVER ON PORT ", app.get('port'));
});