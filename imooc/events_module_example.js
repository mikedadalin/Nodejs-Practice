var EventEmitter = require('events').EventEmitter;
var life = new EventEmitter();

//$$ default is 10, you can customize 
//life.setMaxListensers(11);

//$$ on = addEventListener
function money1(who) {
	console.log('give ' + who + ' money1');
}

life.on('Event1', money1);

life.on('Event1', function(who){ 
    console.log('give ' + who + ' money3') 
}) 
 
life.on('Event1', function(who){ 
    console.log('give ' + who + ' money4') 
}) 
 
life.on('Event1', function(who){ 
    console.log('give ' + who + ' money5') 
}) 
 
life.on('Event1', function(who){ 
    console.log('give ' + who + ' money6') 
}) 
 
life.on('Event1', function(who){ 
    console.log('give ' + who + ' money7') 
}) 
 
life.on('Event1', function(who){ 
    console.log('give ' + who + ' money8') 
}) 
 
life.on('Event1', function(who){ 
    console.log('give ' + who + ' money9') 
}) 
 
life.on('Event1', function(who){ 
    console.log('give ' + who + ' money10') 
}) 
 
life.on('Event2', function(who){ 
    console.log('give ' + who + ' tool1') 
}) 
 
life.on('Event2', function(who){ 
    console.log('give ' + who + ' tool2') 
}) 
 
//remove event (remember: put it in front of emit) 
life.removeListener('Event1', money1) 
 
//移除多個事件監聽 
     // life.removeAllListerner() //不傳參表示移除所有事件監聽 
     // life.removeAllListerner('Event1') //移除特定event的所有事件監聽 

//$$ 'emit' means trigger the event directly
life.emit('Event1', 'Boss') 
life.emit('Event2', 'Pro') 
 
// check the event has been monitor or not 
    // var hasEvnet1Listener = life.emit('Event1', 'Boss') 
    //console.log(hasEvnet1Listener) 
 
// count the number of event/listener 
    // console.log(life.listeners('Event1').length) 
    console.log(EventEmitter.listenerCount(life, 'Event1')) 
 
 

 
 