exports.seed = (knex, Promise) => {
  return knex.raw('DELETE FROM hero_img; ALTER SEQUENCE hero_img_id_seq RESTART WITH 1')
      .then(() => {
        const hero_img = [{
          image_url: 'http://lorempixel.com/1000/1000/',
          user_id: 1
        }];

        return knex('hero_img').insert(hero_img);
      });
};
