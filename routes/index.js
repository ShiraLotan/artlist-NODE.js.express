var express = require('express');
var router = express.Router();
var dbHelper=require('../db/dbHelper')

/**All Movies */
router.post('/add', async (req, res)=> {

   await dbHelper.pool.query(`INSERT INTO arlistFiles.songfiles (name, email, country, bio, position, portfolio, registered, files, checkbox)
                              VALUES ('${req.body.passedFormDetails.name}','${req.body.passedFormDetails.email}', '${req.body.passedFormDetails.country}','${req.body.passedFormDetails.bio}', '${req.body.passedFormDetails.position}', '${req.body.passedFormDetails.portfolio}', '${req.body.passedFormDetails.registered}','${req.body.allFiles}', '${req.body.checkBox}');`)

  res.json({msg:'files were added'})
});



module.exports = router;
