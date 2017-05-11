var express = require('express');
var router = express.Router();

const User = require('../queries');
const knex = require('../db/knex');

// get gallery at user id
router.get('/:id/gallery', (req,res)=>{
  if (!isNaN(req.params.id)) {
    User.getGallery(req.params.id).then(gallery_imgs => {
      res.json(gallery_imgs);
    });
  } else {
    resError(res, 500, "Invalid ID");
  }
})
//get the hero at the user id
router.get('/:id/hero', (req,res)=>{
  if (!isNaN(req.params.id)) {
    User.getHero(req.params.id).then(gallery_imgs => {
      res.json(gallery_imgs);
    });
  } else {
    resError(res, 500, "Invalid ID");
  }
})

function resError(res, statusCode, message) {
  res.status(statusCode);
  res.json({message});
}

module.exports = router;
