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

// const router = express.Router();

//     router.post('/upload', upload.single('file'), (req, res) => {
//         if(!req.file) {
//             return res.status(500).send('An error occurred while uploading your file');
//         }
//         res.status(200).send('Hurray! File was uploaded.');
//     });
