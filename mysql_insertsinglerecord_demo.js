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

	//$$ insert single record 
	var sql = "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')";

    con.query(sql, [values], function (err, result) {
      if (err) throw err;      
      console.log("1 record inserted");
      
    });
});