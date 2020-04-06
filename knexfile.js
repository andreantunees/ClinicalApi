require('dotenv').config();

module.exports = {
    development: {
        client: 'pg',
        connection: process.env.PG_CONNECTION_STRING,
        migrations: {
          directory: './src/db/migrations',
        },
        seeds: { directory: './src/db/seeds' },
      },
    
      testing: {
        client: 'pg',
        connection: process.env.PG_CONNECTION_STRING,
        migrations: {
          directory: './src/db/migrations',
        },
        seeds: { directory: './src/db/seeds' },
      },
    
      production: {
        client: 'pg',
        connection: process.env.PG_CONNECTION_STRING,
        migrations: {
          directory: './src/db/migrations',
        },
        seeds: { directory: './src/db/seeds' },
      },
};
