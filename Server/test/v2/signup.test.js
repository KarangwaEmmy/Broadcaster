// import chai from 'chai';
// import chaiHttp from 'chai-http';
// import server from '../../index';


// const { expect } = chai;
// chai.use(chaiHttp);

// // eslint-disable-next-line no-undef
// describe('POST /api/v2/auth/signup', () => {
//   // eslint-disable-next-line no-undef
//   it('it should create a user when all field are given', async () => {
//     const user = {
//       firstname: 'Emmy',
//       lastname: 'Karangwa',
//       email: 'karangwae10@gmail.com',
//       phoneNumber: '0786639530',
//       username: 'Kemmy',
//       password: 'karagwa',
//       isAdmin: 'false',
//     };
//     try {
//       const res = await chai.request(server)
//         .post('/api/v2/auth/signup')
//         .send(user);
//       expect(res).to.have.status(201);
//       expect(res.body).to.be.an('object');
//     } catch (err) {
//       (() => { throw err; }).should.throw();
//     }
//   });
// });
