// loading http module first
var http = require('http');
var cheerio = require('cheerio');
var url = 'http://www.imooc.com/learn/134';

// filter the useful data
function filterChapters(html) {
	var $ = cheerio.load(html);
	var chapters = $('.chapter.course-wrap');

	// [{ 
	//     chapterTitle: '', 
	//     videos: [ 
	//         title: '', 
	//         id:'' 
	//     ] 
	// }] 
	
	var courseData = [];  

	chapters.each(function(item) {
		var chapter = $(this);
		var chapterTitle = chapter.find('h3').text();
		var videos = chapter.find('.video').children('li');
		var chapterData = {
			chapterTitle: chapterTitle,
			videos: []
		};

		videos.each(function(item) {
			var video = $(this).find('.J-media-item');
			var videoTitle = video.text();
			var id = video.attr('href').split('video/')[1];

			chapterData.videos.push({
				title: videoTitle,
				id: id
			});
		});

		courseData.push(chapterData);
	});
	return courseData;
}


// print out the filterd data
function printCourseInfo(courseData) {
	courseData.forEach(function(item) {
		var chapterTitle = item.chapterTitle;
		console.log(chapterTitle+'\n');

		item.videos.forEach(function(video) {
			console.log('   ['+video.id+']   '+video.title+'\n');
		});
	});
}




// using "get" to retrieve the content of "url"
http.get(url,function(res) {
	var html = '';
	//using "on" to bind a event // res.on('data') mean where there is a chunk of data (this almost will happen more than once)
	res.on('data',function(data) {
		html += data;
	});

	res.on('end', function() {
		var courseData = filterChapters(html);
		printCourseInfo(courseData);
	});
}).on('error', function(){
	console.log('something wrong');
});