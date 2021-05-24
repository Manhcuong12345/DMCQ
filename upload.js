const express = require('express')
const { google } = require('googleapis');
var multer = require('multer')
var GoogleDriveStorage = require('multer-google-drive')

const app = express()


const CLIENT_ID = '696264302834-oigrvq9t0plcbh7k6kfs8baes7so7ifr.apps.googleusercontent.com'
const CLIENT_SECRET = 'mtlRGYrpDL9_C5zld8i24v_E'
const REDIRECT_URI = 'https://developers.google.com/oauthplayground'
const REFRESH__TOKEN = '1//040zwIF9jkstGCgYIARAAGAQSNwF-L9Ir3fwBCLS76t9BphEGKKWt3fbiIlaSpvDZozHtT26WkkXWt_LL-kCT1K9fTppLMHeKBNo'


const oauth2Client = new google.auth.OAuth2(
    CLIENT_ID,
    CLIENT_SECRET,
    REDIRECT_URI
);

oauth2Client.setCredentials({ refresh_token: REFRESH__TOKEN })

const drive = google.drive({ 
    version:'v3', 
    auth:oauth2Client
})

let host = 'https://lh3.google.com/u/0/d/'

const parents = '1WU3GiJz71GHntSvee56zljpNpA7FmEX7'

var upload = multer({
    storage: GoogleDriveStorage({
      drive: drive,
      parents: parents,
      fileName: function (req, file, cb) {
        let filename  = `${file.originalname}`;
        cb(null, filename );
      }
    })
  })
   
  app.post('/', upload.single('file'), function(req, res, next) {
    // req.file = req.file.map(file => {
    //     file.url = host + file.fileId
    //     return file
    // })
    const file = req.file
    file.url = host + req.file.fileId
    res.send(req.file)
  })

  app.delete('/:fileId', async function(req, res){
    const file =await drive.files.delete(files)
    console.log(file)
    if(!file) return res.status(400).send({err_message:"file not found"})
    res.status(200).send({message:'Deleted successfully'})
  })

  
  function deleteFiles(fileId, supportsTeamDrives) {

    var date = new Date();
    date.setDate(date.getDate() - 180);
    var n = date.toISOString().split('.')[0];
    var test = false;


// method used to delete the files
function deleteFile(file_id) {
    var request = gapi.client.drive.files.delete({
        supportsTeamDrives: 'false',
        fileId: file_id,
    });
    request.execute(function(resp) {});
}


app.listen(5000, (req,res) => {
    console.log('Sever running port 5000')
})







// //https://lh3.googleusercontent.com/fife/ABSRlIrjMhO0etbiiq_AsmhUOnakqUPGQZzs9gLr9PPj7oTZm5T0kvYBtcvNZGxGtMef1CimlM9h1XRRva6gic8EcrNMeu-NmGPqoUSOVSkAnRpdngDCa3P1ojdpahDaNzjL65kjuTiYnMROlqa2M9KE-u4QHZFKgRFGZtWJ2yzaecNDWrw__MZ7iaRPueMS1BPrkTsFxloTWDvMWahCKsgVLhwvVxtSAzXrAfjQWcG12vi-xJCJLOK4fqUKixEOW-CPK8fZLIgM4_Yj7Ro5ebvZcP1c_rOW6yjEDJgZySFZywCxtgZFG515iW_PRUlvXiHNuPEGxAQzIwgw3jDFsZzNHA4RlRxTB1yfiL2nt_jVmJRKoZQYitjj4uVwJK4o_V2AUlPh9WvIbtdcQNUisazoWuh1oX_cmwcoWUVUG7Spzrq5MNobb9l_96BYBXACl0laezR4thYwDH8DrCzPf5pzALLe76Cu3x2givWlkKWRuz9hUDAh7iUynB_1Rgswi73YtO3afUNAT9aAVC9MV3-6WE56Mzbo-FUTLudaOF7Le-3TTees4AfiMAwIpa8pboEg6tYKGM8djw6svNFOm4xq6p27WEAgM8lbE19kQmbyCSLanQScVZqOyQ9eChh0BF8fVRBAGP12K3jEIebo33_Di5J7jEirr7TtNRGyskZcwrf5qUikRKE5SgUd0z5imsQmRiFSm7LlTqqSnobVAy3-GYCf3Qk80DGPMDE=w1920-h903-ft


















// // var drive = google.drive({ version: 'v3', auth: '' })

// // var upload = multer({
// //     storage: GoogleDriveStorage({
// //         drive: drive,
// //         parents: 'id-parents',
// //         fileName: function (req, file, cb) {

// //         }
// //     })
// // })
// // var key = require('../prive_key.json')
// // // var keys= require('../client_secret.json')
// // //make request to authorization with google drive web server
// // var auth = new google.auth.JWT(
// //     key.client_email,
// //     null,
// //     key.private_key,
// //     // keys.client_secret
// //     ['https://www.googleapis.com/auth/drive.file']
// // )

// // const storage = multer.diskStorage({
// //     destination: function (req, file, cb) {
// //         cb(null, 'public')
// //     },
// //     filename: function (req, file, cb) {
// //         const name = Date.now() + '-' + file.originalname
// //         cb(null, name)
// //     }
// // })

// // const upload = multer({
// //     storage: multerDrive(auth),
// // });


// // module.exports = upload

