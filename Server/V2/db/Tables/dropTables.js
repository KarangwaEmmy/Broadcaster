
import dbQuery from '../config';
import '@babel/polyfill';


const userTable = 'DROP TABLE IF EXISTS users CASCADE';
const flagTable = 'DROP TABLE IF EXISTS redflag CASCADE ';
const dropAllTables = async () => {
  try {
    await dbQuery.query(userTable);
    await dbQuery.query(flagTable);
    console.log('=========  All tables have been dropped ==========');
  } catch (error) {
    console.log(error);
  }
};
export default dropAllTables();
