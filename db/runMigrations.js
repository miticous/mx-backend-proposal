// requiring path and fs modules
import { Client } from 'pg';
import '../server/common/env';

const path = require('path');
const fs = require('fs');

const MIGRATIONS_PATH = 'migrations/';
// const SEEDERS_PATH = 'seeders/';

const client = new Client({
  user: process.env.DATABASE_USERNAME,
  host: process.env.DATABASE_HOST,
  database: process.env.DATABASE_NAME,
  password: process.env.DATABASE_PASSWORD,
  port: 5432,
});

/**
 *
 */
const getMigrationFilesContent = async dirPath => {
  try {
    console.log(`Step READ FILES >>> Reading ${dirPath} files...`);
    // joining path of directory
    const directoryPath = path.join(__dirname, dirPath);
    // passsing directoryPath and callback function
    const files = fs
      .readdirSync(directoryPath, (err, files) => {
        // handling error
        if (err) {
          return console.log(`Unable to scan directory: ${err}`);
        }

        return files;
      })
      .filter(file => file.endsWith('.sql'));

    const queries = await files.map(file => fs.readFileSync(
      path.join(__dirname, dirPath, file),
      'utf-8',
      (err, data) => data,
    ));
    return queries;
  } catch (error) {
    console.error(`Error droping tables -> ${error}`);
  }
};

/**
 *
 */
const dropTables = async () => {
  try {
    console.log('Step 1 >>> Checking tables to drop...');
    await client.connect();
    const res = await client.query(
      'SELECT tablename FROM pg_tables WHERE schemaname = $1;',
      ['public'],
    );
    if (res.rows) {
      for (let i = 0; i < res.rows.length; i++) {
        const record = res.rows[i];
        await client
          .query(`DROP TABLE IF EXISTS ${record.tablename} CASCADE;`)
          .then(res => console.log(res.command))
          .catch(e => console.error(e.stack));
      }
    }
    return;
  } catch (error) {
    console.error(`Error droping tables -> ${error}`);
  }
};

/**
 *
 * @param {String} queries
 */
const runQueries = async queries => {
  try {
    console.log('Step ALTER DATABASE >>> Runnig queries...');
    if (queries) {
      for (let i = 0; i < queries.length; i++) {
        const query = queries[i];
        await client
          .query(query)
          .then(res => console.log(`> ${res}`))
          .catch(e => console.error(e.stack));
      }
    } else {
      throw new Error("Parameter 'queries' is undefined or null");
    }
    return;
  } catch (error) {
    console.error(`Error running queries -> ${error}`);
  }
};

const runMigrations = async () => {
  try {
    console.log('---- Running migrations ----');
    await dropTables();
    const queries = await getMigrationFilesContent(MIGRATIONS_PATH);
    await runQueries(queries);
    // queries = await getMigrationFilesContent(SEEDERS_PATH);
    // await runQueries(queries);
  } catch (e) {
    console.error(`Global error ${e.stack}`);
  }
};

// Running the program. All migrations
runMigrations();
