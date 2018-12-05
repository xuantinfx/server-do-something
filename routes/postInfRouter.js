var express = require('express');
const mailler = require('../lib/mailler')
var router = express.Router();

router.post('/', function (req, res, next) {
    res.setHeader('content-type', "text/json; charset=utf-8")

    // Xử lí data và gửi mail
    let data = req.body.data;
    //if(data.macdiff < -1.15) {

        mailler.sendMail('index', {data: JSON.stringify(data)}, 'xuantinfx@gmail.com', "Hello From Gekko")
            .then(info => {
                console.log('send mail success', info)
            })
            .catch(err => {
                console.log('send mail error', info)
            })
    //}
    res.end(JSON.stringify({
        status: 'success'
    }))
});

module.exports = router;