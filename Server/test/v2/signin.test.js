// /* eslint-disable no-undef */
// import chai from 'chai';
// import chaiHttp from 'chai-http';
// import server from '../../index';

// process.env.NODE_ENV = 'test';

// const { expect } = chai;
// chai.use(chaiHttp);
// describe('POST /api/v2/auth/signin', () => {
//   const user = {
//     firstname: 'Emmy',
//     lastname: 'Karangwa',
//     email: 'karangwae@gmail.com',
//     phoneNumber: '0786639530',
//     username: 'Kemmy',
//     password: 'karagwa',
//     isAdmin: 'false',
//   };
//   before(async () => {
//     try {
//     // eslint-disable-next-line no-unused-vars
//       const res = chai.request(server)
//         .post('/api/v2/auth/signup')
//         .send(user);
//     } catch (err) {
//       (() => { throw err; }).should.throw();
//     }
//   });

//   it('User should be able to loggin', async () => {
//     const credentials = {
//       email: 'karangwae10@gmail.com',
//       password: 'karagwa',
//     };
//     try {
//       await chai.request(server)
//         .post('/api/v2/auth/signup')
//         .send(user);
//       const res = await chai.request(server)
//         .post('/api/v2/auth/signin')
//         .send(credentials);

//       expect(res).to.have.status(200);
//       expect(res.body).to.have.a.property('data');
//       expect(res.body.message).to.equals('User is successfully logged in');
//       expect(res.body).to.be.an('object');
//     } catch (err) {
//       (() => { throw err; }).should.throw();
//     }
//   });
// });
