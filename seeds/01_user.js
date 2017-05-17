const bcrypt = require('bcrypt')
require('dotenv').config()

exports.seed = (knex, Promise) => {
    return knex.raw('DELETE FROM "user"; ALTER SEQUENCE user_id_seq RESTART WITH 2')
      .then(() => {
        const users = [
          {
            id: 1,
            email: 'ashsophia23@gmail.com',
            password: bcrypt.hashSync(process.env.SECRET_PASSWORD, 10)
          }
        ]
        return knex('user').insert(users)
      })
};
