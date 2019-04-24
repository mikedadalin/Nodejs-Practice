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
  	con.query("SELECT name, address FROM customers", function (err, result, fields) {
     if (err) throw err;
     console.log(result);
     console.log("Result Object: "+result[2].address);
	 console.log(fields);
     console.log("Field Object: " + fields[1].name);
    });
});