var express = require('express');
var router = express.Router();

const User = require('../queries');
const knex = require('../db/knex');
/* GET users listing. */
// router.get('/user', function(req, res){
//   knex("user").then((data)=>{
//     res.json(data)
//   });
// });

router.get('/:id', (req, res) => {
  if (!isNaN(req.params.id) && req.user.id == req.params.id) {
    User.getOne(req.params.id).then(user => {
      if (user) {
        delete user.password;
        res.json(user);
      } else {
        resError(res, 404, "User Not Found");
      }
    });
  } else {
    resError(res, 500, "Invalid ID");
  }
});
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

router.post('/:id/gallery', function (req, res, next){
  User.addGalleryImg(req.params.id, req.body.image_url, req.body.description).then(data => {
    res.json({message: 'success'});
  })
});
router.get('/:id/gallery/:img', function (req, res, next){
  User.getOneGallery(req.params.img).then(data => {
    res.json(data);
  })
});
router.put('/:id/gallery/:img', function (req, res, next){
  User.editOneGallery(req.params.img, req.body.image_url, req.body.description).then(data => {
    res.json({message: 'success'});
  })
});

router.delete('/:id/gallery/:img', function(req, res, next) {
  User.deleteOneGallery(req.params.img).then(data => {
    res.json({message: 'success'});
  })
})

router.get('/:id/hero', (req,res)=>{
  if (!isNaN(req.params.id)) {
    User.getHero(req.params.id).then(gallery_imgs => {
      res.json(gallery_imgs);
    });
  } else {
    resError(res, 500, "Invalid ID");
  }
})
router.put('/:id/hero', function (req, res, next){
  User.editOneHero(req.params.id, req.body.image_url).then(data => {
    res.json(data);
  })
});

function resError(res, statusCode, message) {
  res.status(statusCode);
  res.json({message});
}

module.exports = router;
