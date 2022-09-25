const pgp = require("pg-promise")();

/**
 *
 * Conexão com o Banco de Dados PostgreSQL
 * @author: Nilso Junior
 *
 */

const db = pgp({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: "localhost",
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
});

module.exports = db;
