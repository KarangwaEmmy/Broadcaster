import dbQuery from '../config';

const sqlQueries = {};

const alltables = `
               CREATE TABLE IF NOT EXISTS users(
                  id SERIAL PRIMARY KEY,
                  email VARCHAR(128) UNIQUE NOT NULL,
                  firstname VARCHAR(128) NOT NULL,
                  lastname VARCHAR(128) NOT NULL,
                  phonenumber VARCHAR(255) UNIQUE NOT NULL,
                  password VARCHAR(255) NOT NULL,
                  username VARCHAR(255) UNIQUE NOT NULL,
                  isadmin VARCHAR(255) NOT NULL
                  );
                  
                  
                  CREATE TABLE IF NOT EXISTS intervention(
                    id SERIAL PRIMARY KEY,
                    created_on VARCHAR NOT NULL,
                    user_id INTEGER REFERENCES users(id) NOT NULL,
                    createdBy VARCHAR(128) REFERENCES users(email)  NOT NULL,
                    title VARCHAR(128) NOT NULL,
                    type VARCHAR(128) NOT NULL,
                    location VARCHAR(128) NOT NULL,
                    status VARCHAR(128) NOT NULL,
                    image_url VARCHAR(128) NOT NULL,
                    video_url VARCHAR(128) NOT NULL,
                    comment VARCHAR(255) NOT NULL
                    );                  
                    
`;


sqlQueries.alltables = alltables;
 dbQuery(alltables);

 export default sqlQueries;
