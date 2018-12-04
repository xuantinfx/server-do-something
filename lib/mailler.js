
var nodemailer = require('nodemailer');
var hbsMailler = require('nodemailer-express-handlebars');
const account = require('../config').mailler;

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: account.user,
        pass: account.pass
    }
});

transporter.use('compile', hbsMailler({
    viewPath: 'views/mailler',
    extName: '.hbs'
}));

module.exports = {
    //template, context, desMail, subject
    sendMail: (template, context, desMail, subject) => {
        return new Promise((resolve, reject) => {
            const mailOptions = {
                from: 'My Gekko', // sender address
                to: desMail, // list of receivers
                subject: subject, // Subject line
                template: template,
                context: context
            };
            
            transporter.sendMail(mailOptions, function (err, info) {
                if(err)
                  reject(err)
                else
                  resolve(info)
            });
        })
    }
}