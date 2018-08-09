module.exports = {
  "development": {
    "username": process.env.DEVELOPMENT_DB_USERNAME,
    "password": process.env.DEVELOPMENT_DB_PASSWORD,
    "database": process.env.DEVELOPMENT_DB_NAME,
    "host": process.env.DEVELOPMENT_DB_HOST,
    "port": process.env.DEVELOPMENT_DB_PORT,
    "dialect": process.env.DEVELOPMENT_DB_DIALECT
  },
  "test": {
    "username": process.env.TEST_DB_USERNAME,
    "password": process.env.TEST_DB_PASSWORD,
    "database": process.env.TEST_DB_NAME,
    "host": process.env.TEST_DB_HOST,
    "port": process.env.TEST_DB_PORT,
    "dialect": process.env.TEST_DB_DIALECT
  },
  "production": {
    "username": process.env.PRODUCTION_DB_USERNAME,
    "password": process.env.PRODUCTION_DB_PASSWORD,
    "database": process.env.PRODUCTION_DB_NAME,
    "host": process.env.PRODUCTION_DB_HOST,
    "port": process.env.PRODUCTION_DB_PORT,
    "dialect": process.env.PRODUCTION_DB_DIALECT
  }
}