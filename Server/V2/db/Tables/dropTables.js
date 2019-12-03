
import dbQuery from '../config';

const sqlQueries = {};

const dropTables = `
DROP TABLE IF EXISTS users,intervention CASCADE
                                   
`;

sqlQueries.dropTables = dropTables;
 dbQuery(dropTables);

 export default sqlQueries;

