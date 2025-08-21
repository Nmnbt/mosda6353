require('dotenv').config();
const { readFileSync } = require('fs');

const sslCa = readFileSync(process.env.DB_SSL_CA);

module.exports = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: 'postgres',
    ssl: true,
    dialectOptions: {
      ssl: {
        ca: sslCa.toString(),
      },
    },
    port: process.env.DB_PORT,
  },
  test: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: 'postgres',
    ssl: true,
    dialectOptions: {
      ssl: {
        ca: sslCa.toString(),
      },
    },
    port: process.env.DB_PORT,
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: 'postgres',
    ssl: true,
    dialectOptions: {
      ssl: {
        ca: sslCa.toString(),
      },
    },
    port: process.env.DB_PORT,
  },
};
