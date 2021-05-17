const { google } = require('googleapis');
var multer = require('multer');
var multerDrive = require('multer-drive');

var key = require('../prive_key.json')
//make request to authorization with google drive web server
var auth = new google.auth.JWT(
    key.client_email,
    null,
    key.private_key,
    ['https://www.googleapis.com/auth/drive']
)

const upload = multer({
    storage: multerDrive(auth)
})


module.exports = upload

