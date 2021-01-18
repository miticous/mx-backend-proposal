const { dbConfig } = require('./environment');

console.log(`Environment ${JSON.stringify(dbConfig)}`);

module.exports = {
  username: dbConfig.username,
  password: dbConfig.password,
  database: dbConfig.database,
  schema: dbConfig.schema,
  host: dbConfig.host,
  dialect: dbConfig.dialect,
  pool: {
    max: parseInt(dbConfig.pool.max),
    min: parseInt(dbConfig.pool.min),
    acquire: parseInt(dbConfig.pool.acquire),
    idle: parseInt(dbConfig.pool.idle),
  },
  define: {
    underscored: true,
    freezeTableName: false,
    charset: 'utf8',
    dialectOptions: {
      collate: 'utf8_general_ci',
    },
    timestamps: true,
  },
  dialectOptions: {
    ssl: process.env.NODE_ENV === 'production',
    connectTimeout: 600000,
    useUTC: false,
    // for reading from database
    dateStrings: true,
    typeCast(field, next) {
      // for reading from database
      if (field.type === 'DATETIME') {
        return field.string();
      }

      return next();
    },
  },
  ssl: process.env.NODE_ENV === 'production',
  timezone: '-03:00',
  autoreconnect: true,
  logging: true,
};
