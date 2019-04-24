// loading http module first
var http = require('http');
var cheerio = require('cheerio');
var Promise = require('bluebird');
var baseurl = 'http://www.imooc.com/learn/9';
var videoIds = [52,54,83,56,74,75];

// filter the useful data
function filterChapters(html) {
	var $ = cheerio.load(html);
	var chapters = $('.chapter.course-wrap');
	var number = parseInt($(".js-learn-num").text().trim(),10);
	

	// courseData = { 
    //     title: title, 
    //     number: number, 
    //     videos: [{ 
    //                 chapterTitle: '', 
    //                 videos: [ 
    //                 title: '', 
    //                 id:'' 
    //                 ] 
    //             }] 
    // } 

	
	var courseData = {
		title: title,
		number: number,
		videos: []
	};

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
			var id = video.attr('href').split('code/')[1];

			chapterData.videos.push({
				title: videoTitle,
				id: id
			});
		});

		courseData.videos.push(chapterData);
	});
	return courseData;
}


// print out the filterd data
function printCourseInfo(courseData) {
	// get the number of ppl who has learned this course
	courseData.forEach(function(courseData) {
		console.log(courseData.number+' people has learned ' + courseData.title + '\n' );
	});

	// get the course title and chapter title and each video info
	courseData.forEach(function(courseData) {
		console.log('### ' + courseData.title + '\n');
		courseData.videos.forEach(function(item) {
			var chapterTitle = item.chapterTitle;
			console.log(chapterTitle+'\n');

			item.videos.forEach(function(video) {
				console.log(' ['+ video.id+'] '+video.title+'\n');
			});
		});
	});
}


// using Promise 
function getPageAsync(url) {
	return new Promise(function(resolve, reject) {
		console.log('Crawling data ' + url);
		
		// using "get" to retrieve the response in URL
		http.get(url,function(res) {
			var html = '';
			// using "on" to bind an event
			res.on('data', function(data) {
				html += data;				
			})

			res.on('end', function() {
				resolve(html);
			})
		}).on('error', function(error) {
			reject(error);
			console.log('something wrong');
		});
	})
}

var fetchCourseArray = [];

// function getPageAsync will return a Promise Object, and use Promise.all to collect data. And after that do the thing in then()

videoIds.forEach(function(id) {
	fetchCourseArray.push(getPageAsync(baseurl + id));
})

// console.log("fetchCourseArray",fetchCourseArray);

// Promise.all(fetchCourseArray).then(function(pages) {
// 	var coursesData = [];

// 	pages.forEach(function(html) {
// 		var courses = filterChapters(html); 

// 		coursesData.push(courses);
// 	});

// 	coursesData.sort(function(a,b) {
// 		return a.number < b.number;
// 	})

// 	printCourseInfo(coursesData);
// });