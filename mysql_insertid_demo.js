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
	console.log("Connected!");
	
	//$$ Get Inserted ID
	var sql = "INSERT INTO customers (name, address) VALUES ('Michelle', 'Blue Village 1')";
  	con.query(sql, function (err, result) {
     if (err) throw err;
     console.log("1 record inserted, ID: " + result.insertId);
    });
});