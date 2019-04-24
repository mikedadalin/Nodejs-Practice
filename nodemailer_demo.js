var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user:'mikedadalin@gmail.com',
		pass:'mikeshit1225'
	}
});

var mailOptions = {
	from: 'mikedadalin@gmail.com',
	to: 'mthlin@fpcusa.com',
	subject: 'Node.js testing email',
	text: 'that was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
	if(error) {
		console.log(error);
	} else {
		console.log('Email sent' + info.response);
	}
});