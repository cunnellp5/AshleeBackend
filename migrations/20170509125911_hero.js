exports.up = function(knex, Promise) {
  return knex.schema.createTable('hero_img', table => {
    table.increments();
    table.text('image_url').notNullable();
    table.integer('user_id').references('user.id').unsigned().onDelete('cascade');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('hero_img');
};
