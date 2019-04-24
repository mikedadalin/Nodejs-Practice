// build connection
var mysql = require('mysql');

var con = mysql.createConnection({
	host: "localhost",
	user: "mike",
	password: "",
	database: "mydb" // assign the database to create table
});

con.connect(function(err) {
	if(err) throw err;	
	
	//$$ select from a table
  	con.query("SELECT * FROM customers", function (err, result, fields) {
     if (err) throw err;
     console.log(result);
    });
});