const { Pool } = require('pg');

const pool = new Pool({
    host: process.env.HOST_DB,
    database: process.env.NAME_DB,
    port: process.env.PORT_DB,
    user: process.env.USER_DB,
    password: process.env.PASSWORD_DB,
    ssl: { rejectUnauthorized: false }
});

module.exports = { pool }
