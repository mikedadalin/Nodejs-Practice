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
	
	//$$ escpaing query values
	//$$ this is for prevent SQL injections
	
	// method 1: mysql.escape()
	// var adr = "Mountain 21";
	// var sql = "SELECT * FROM customers WHERE address = " + mysql.escape(adr);
 //  	con.query(sql, function (err, result, fields) {
 //     if (err) throw err;
 //     console.log(result);
 //    });

    // method 2: "?" as placeholder
    var name = "Amy";
    var adr = "Mountain 21";
    var sql = "SELECT * FROM customers WHERE name = ? OR address = ?";
    con.query(sql,[name, adr], function(err, result) {
    	if(err) throw err;
    	console.log(result);
    });
});