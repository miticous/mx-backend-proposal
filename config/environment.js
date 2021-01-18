require('dotenv').config();

console.log(`Environment: ${process.env.NODE_ENV}`);

module.exports = {
  dbConfig: {
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    host: process.env.DATABASE_HOST,
    dialect: process.env.DATABASE_DIALECT,
    schema: process.env.DATABASE_SCHEMA,
    pool: {
      max: process.env.DATABASE_POOL_MAX || '5',
      min: process.env.DATABASE_POOL_MIN || '1',
      acquire: process.env.DATABASE_POOL_ACQUIRE || '30000',
      idle: process.env.DATABASE_POOL_IDLE || '30000',
    },
  },
  App: {
    id: process.env.APP_ID,
    port: process.env.PORT || 80,
  },
  logLevel: process.env.LOG_LEVEL || 'debug',
  requestLimit: process.env.REQUEST_LIMIT || '10mb',
  sessionSecret: process.env.SESSION_SECRET || 'mySecret',
  staticFiles: process.env.STATIC_FILES || '/usr/app/public/files',
  openApiResponseValidation:
    process.env.DISABLE_REQUEST_AUTHORIZATION_HEADER === 'true' || false,
};
