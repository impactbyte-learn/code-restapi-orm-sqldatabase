require('dotenv-extended').load({
  encoding: 'utf8',
  silent: true,
  path: '.env',
  defaults: '.env.defaults',
  schema: '.env.schema',
  errorOnMissing: false,
  errorOnExtra: false,
  assignToProcessEnv: true,
  overrideProcessEnv: false
});

module.exports = {
  "development": {
    "username": process.env.DEVELOPMENT_DB_USERNAME,
    "password": process.env.DEVELOPMENT_DB_PASSWORD,
    "database": process.env.DEVELOPMENT_DB_NAME,
    "host": process.env.DEVELOPMENT_DB_HOST || 'localhost',
    "port": process.env.DEVELOPMENT_DB_PORT || 3306,
    "dialect": process.env.DEVELOPMENT_DB_DIALECT || 'mysql'
  },
  "test": {
    "username": process.env.TEST_DB_USERNAME,
    "password": process.env.TEST_DB_PASSWORD,
    "database": process.env.TEST_DB_NAME,
    "host": process.env.TEST_DB_HOST || 'localhost',
    "port": process.env.TEST_DB_PORT || 3306,
    "dialect": process.env.TEST_DB_DIALECT || 'mysql'
  },
  "production": {
    "username": process.env.PRODUCTION_DB_USERNAME,
    "password": process.env.PRODUCTION_DB_PASSWORD,
    "database": process.env.PRODUCTION_DB_NAME,
    "host": process.env.PRODUCTION_DB_HOST || 'localhost',
    "port": process.env.PRODUCTION_DB_PORT || 3306,
    "dialect": process.env.PRODUCTION_DB_DIALECT || 'mysql'
  }
}
