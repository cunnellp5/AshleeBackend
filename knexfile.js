// Update with your config settings.

require('dotenv').config();
module.exports = {
  development: {
    client: 'postgresql',
    connection: 'postgres://localhost/ashlee'
  },
  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL + '?ssl=true'
  }
};
