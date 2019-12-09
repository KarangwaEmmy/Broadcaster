const user = `INSERT INTO users (email,firstname,lastname,phonenumber,password,username,isadmin)
 VALUES('karangwa210@gmail.com','Karangwa','Emmy','0786639530','kemmy@530','kemmy','true') RETURNING * `;

const user1 = `INSERT INTO users (email,firstname,lastname,phonenumber,password,username,isadmin)
VALUES('mugisha123@gmail.com','Mugisha','Felix','078772618','$2a$12$3T3wDmPeNBaZe9uFfm23zeguUOoRwWzp5n1E7','mulix','false') RETURNING * `;

export default { user, user1 };
