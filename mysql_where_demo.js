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
	
	//$$ select columns from a table
	// var sql = "SELECT * FROM customers WHERE address = 'Park Lane 38'";
	var sql = "SELECT * FROM customers WHERE address LIKE 'S%'";
  	con.query(sql, function (err, result, fields) {
     if (err) throw err;
     console.log(result);
    });
});