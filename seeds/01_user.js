const bcrypt = require('bcryptjs')
require('dotenv').config()

exports.seed = (knex, Promise) => {
    return knex.raw('DELETE FROM "user"; ALTER SEQUENCE user_id_seq RESTART WITH 2')
      .then(() => {
        const users = [
          {
            id: 1,
            email: process.env.EMAIL,
            password: bcrypt.hashSync(process.env.SECRET_PASSWORD, 10)
          }
        ]
        return knex('user').insert(users)
      })
};
