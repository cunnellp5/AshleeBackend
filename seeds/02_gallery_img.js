exports.seed = (knex, Promise) => {
  return knex.raw('DELETE FROM gallery_img; ALTER SEQUENCE gallery_img_id_seq RESTART WITH 1')
      .then(() => {
        const gallery_img = [{
          image_url: 'http://lorempixel.com/500/600/',
          description: 'gallery',
          user_id: 1
        }, {
          image_url: 'http://lorempixel.com/600/600/',
          description: 'gallery',
          user_id: 1
        }];

        return knex('gallery_img').insert(gallery_img);
      });
};
