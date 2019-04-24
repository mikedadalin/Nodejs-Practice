// loading http module first
var http = require('http');
var url = 'http://www.imooc.com/learn/134';

// using "get" to retrieve the content of "url"
http.get(url,function(res) {
	var html = '';
	//using "on" to bind a event // res.on('data') mean where there is a chunk of data (this almost will happen more than once)
	res.on('data',function(data) {
		html += data;
	});

	res.on('end', function() {
		console.log(html);
	});
}).on('error', function(){
	console.log('something wrong');
});