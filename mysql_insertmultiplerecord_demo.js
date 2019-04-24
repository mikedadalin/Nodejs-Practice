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
	
	//$$ insert multiple records
	var sql = "INSERT INTO customers (name, address) VALUES ?";	
	var values = [
	    ['John', 'Highway 71'],
	    ['Peter', 'Lowstreet 4'],
	    ['Amy', 'Apple st 652'],
	    ['Hannah', 'Mountain 21'],
	    ['Michael', 'Valley 345'],
	    ['Sandy', 'Ocean blvd 2'],
	    ['Betty', 'Green Grass 1'],
	    ['Richard', 'Sky st 331'],
	    ['Susan', 'One way 98'],
	    ['Vicky', 'Yellow Garden 2'],
	    ['Ben', 'Park Lane 38'],
	    ['William', 'Central st 954'],
	    ['Chuck', 'Main Road 989'],
	    ['Viola', 'Sideway 1633']
	  ];

    con.query(sql, [values], function (err, result) {
      if (err) throw err;
      console.log("Number of records inserted: " + result.affectedRows);
    });
});