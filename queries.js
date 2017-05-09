const knex = require('./db/knex');

module.exports = {
    getUser: function() {
      return knex.select().from('user')
    },
    getOne: function(id){
        return knex('user').where('id', id).first();
    },
    getOneByEmail: function(email){
        return knex('user').where('email', email).first();
    },
    getGallery: function(user_id){
      return knex('gallery_img').where('user_id', user_id);
    },
    getOneGallery: function(id){
      return knex('gallery_img').where('id', id);
    },
    editOneGallery: function(id, image_url, description) {
      return knex('gallery_img').where('id', id).update({
        image_url: image_url,
        description: description,
      })
    },
    getHero: function(user_id){
      return knex('hero_img').where('user_id', user_id);
    },
    editOneHero: function(user_id, image_url) {
      return knex('hero_img').where('user_id', user_id).update({
        image_url: image_url
      })
    }
};
