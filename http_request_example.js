var http = require('http');
var querystring = require('querystring');
var postData = querystring.stringify({
	'content': 'I have no time!',
	'mid': 8837
});

var options = {
	hostname: 'www.imooc.com',
	port: 80,
	path: '/course/document',
	method: 'POST',
	headers: {
		'Accept': 'application/json, text/javascript, */*; q=0.01',
		'Accept-Encoding': 'gzip, deflate', 
        'Accept-Language': 'zh-CN,zh;q=0.8,en;q=0.6', 
        'Content-Length': postData.length
	}
};

var req = http.request(options, function(res){
	console.log('status: ' + res.statusCode);
	console.log('headers: ' + JSON.stringify(res.headers));

	res.on('data', function(chunk) {
		console.log(Buffer.isBuffer(chunk));
		console.log(typeof chunk);
	})

	res.on('end', function(){
		console.log('connection end');
	})

	res.on('error', function(e) {
		console.log('Error: ' + e.message);
	})
})

// write data to request body
req.write(postData);
req.end();