var express = require('express');
var router = express.Router();
var dbHelper=require('../db/dbHelper')


router.get('/DB', async (req, res)=> {
  await dbHelper.pool.query(`CREATE DATABASE arlistFiles`)
res.send('DB Created')
});

router.get('/Tabel', async (req, res)=> {
  await dbHelper.pool.query(`CREATE TABLE arlistFiles.songfiles (
                              id int NOT NULL AUTO_INCREMENT,
                              name varchar(255),
                              email varchar(255),
                              country varchar(255),
                              bio varchar(255),
                              position varchar(255),
                              portfolio varchar(255),
                              registered varchar(255),
                              files varchar(6000),
                              checkbox varchar(6000),
                              PRIMARY KEY (id)
                          );`)
res.send('DB Tabel')
});



module.exports = router;