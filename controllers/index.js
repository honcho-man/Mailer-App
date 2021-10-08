const transporter = require('../middlewares/mailer')
const db = require('../config/config').get(process.env.NODE_ENV);
module.exports = {
    sendMail: async function (req,res) {
        let EmailData = {
            from: db.SMTP_USER,
            to: req.body.recipients,
            subject: req.body.subject,
            html: 'tesing emails ' + req.body.recipients
        }
        transporter.sendMail(EmailData, function (err, info) {
            if (err) {
                console.log(err);
                res.status(500).send(err); // <----- HERE
            } else {
                console.log("Successfully sent email.");
                res.status(200).send("OK"); // <------------- HERE
            }
        });
    }
}