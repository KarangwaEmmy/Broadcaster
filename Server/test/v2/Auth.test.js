import chai from 'chai';
import 'dotenv/config';
import chaiHttp from 'chai-http';
import server from '../../index';
const jwt = require('jsonwebtoken');

const {expect} = chai;
chai.use(chaiHttp);
const data = [
    {},
    {firstname: 'karangwa'},
    {firstname: 'karangwa', lastname: 'emmy'},
    {firstname: 'karangwa', lastname: 'emmy', email: 'karangwae10@gmail.com'},
    {firstname: 'karangwa', lastname: 'emmy', email: 'karangwae10@gmail.com', phoneNumber: '0786639530'},
    {firstname: 'karangwa', lastname: 'emmy', email: 'karangwae10@gmail.com', phoneNumber: '0786639530', password: 'kemmy123'},
    {firstname: 'karangwa', lastname: 'emmy', email: 'karangwae10@gmail.com', phoneNumber: '0786639530', password: 'kemmy123', username: 'kemmy'},
    {firstname: 'Emmy', lastname: 'Karangwa', email: 'karangwae@gmail.com',   phoneNumber: '0786639530', password: 'Kemmy', username: 'karagwa'},
    {email: 'karangwae10@gmail.com', password: 'Kemmy'}
  ];
  
// routes urls
const signupurl = '/api/v2/auth/signup';
const loginUrl = '/api/v2/auth/login';
const flagUpdateLocationUrl = '/api/v1/red-flags/:id/location';
const flagAllentriesUrl = '/api/v1/red-flags/';
const postflagUrl = '/api/v1/red-flags/';
const specificflagUrl = '/api/v1/red-flags/:id';
const updateCommentUrl = '/api/v1/red-flags/:id/comment';

// generate token
const generateToken = tokenObj => jwt.sign(tokenObj, process.env.SECRET_KEY);
const token = (generateToken(data[7]));
// router
const router = () => chai.request(server);

describe('Testing Authenticatiopn Endpoint', (done) =>{
//     it('should you welcome to the broadcaster endpoint page', (done) =>{
//         router()
//         .get('/')
//         .end((err, res) => {
//             if(err) return done(err);
//             chai.expect(res.statusCode).to.be.equal(200);
//             expect((res.text)).to.be.a('string');
//             done();
//         })
//     });

// });

// describe('Authentication tests Suite',() =>{
//     it('should not  be able to signUp when firstname of not filled', (done) => {
//         router()
//           .post('/api/v2/auth/signup')
//           .send(data[0])
//           .set('Authorization', 'Bearer ' + token)
//           .end((error, response) => {
//             expect(response.body).to.be.an('object');
//             expect(response.body.status).to.equal(400);
//             expect(response.body.message).to.be.a('string');
//             done(error);
//           })
//       });
//       it('should not be able to signUp when lastname is not filled', (done) => {
//         router()
//           .post('/api/v2/auth/signup')
//           .send(data[1])
//           .set('Authorization', 'Bearer ' + token)
//           .end((error, response) => {
//             expect(response.body).to.be.an('object');
//             expect(response.body.status).to.equal(400);
//             expect(response.body.message).to.be.a('string');
//             done(error);
//           })
//       });
    
//       it('should not be able to signUp when lastname is not filled', (done) => {
//          router()
//           .post('/api/v2/auth/signup')
//           .send(data[2])
//           .set('Authorization', 'Bearer ' + token)
//           .end((error, response) => {
//             expect(response.body.status).to.be.equal(400)
//             expect(responseponse.body).to.have.property('status');
//             expect(responseponse.body.status).to.be.equal(400);
//             expect(responseponse.body).to.have.property('message');
//             expect(responseponse.body.message).to.be.a('string');
//             done(error);
//           });
//       });
//       it('should not be able to signUp when email is not filled', (done) => {
//          router()
//           .post('/api/v2/auth/signup')
//           .send(data[3])
//           .set('Authorization', 'Bearer ' + token)
//           .end((error, response) => {
//           expect(responseponse.body).to.have.property('status');
//           expect(responseponse.body.status).to.be.equal(400);
//           expect(responseponse.body).to.have.property('message');
//           expect(responseponse.body.message).to.be.a('string');
//           done(error)
//       });
//     });

    it('should create a new  user',() =>{
        router()
        .post(signupurl)
        .send(data[7])
        .set('Authorization', 'Bearer ' + token)
        .end((err,res) =>{
            expect(res.body).to.be.a('object');
            expect(res.statusCode).to.be.equal(201);
            expect(res.body).to.have.property('status');
            expect(res.type).to.be.equal('application/json');

        });
    });

    it('should Log in the user',() =>{
        router()
        .post(loginUrl)
        .send(data[8])
        .set('Authorization', 'Bearer ' + token)
        .end((err,res) =>{
            expect(res.body).to.be.a('object');
            expect(res.statusCode).to.be.equal(200);
            expect(res.body).to.have.property('status');
            expect(res.type).to.be.equal('application/json');

        });
    });
});
 