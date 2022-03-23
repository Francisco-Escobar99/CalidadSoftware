const mysql = require('mysql');

const connection ={
    host    : 'localhost',
    user    : 'root',
    password: 'Escobarovilla12',
    database: 'guarderia'
};

const conn = mysql.createConnection(connection);

conn.connect(function (err){
    if(err) throw err;
    console.log('¡La conexion a sido exitosa!  ');
});

module.exports = conn;
                                        