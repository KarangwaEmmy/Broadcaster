import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../index';

const {expect} = chai;
chai.use(chaiHttp);
const userData = {
    firstname: 'Emmy', 
    lastname: 'Karangwa',  
    email: 'karangwae@gmail.com',
    phoneNumber: '0786639530',
    username: 'Kemmy',
    password: 'karagwa'
}

const loginDetails = {
    email: 'karangwae@gmail.com',
    password: 'karagwa'
}
let {token} = userData;

describe('Testing Authenticatiopn Endpoint', (done) =>{
    it('should you welcome to the broadcaster endpoint page', (done) =>{
        chai.request(server)
        .get('/')
        .end((err, res) => {
            if(err) return done(err);
            chai.expect(res.statusCode).to.be.equal(200);
            expect((res.text)).to.be.a('string');
            done();
        })
    });

});
// routes urls
 const signupurl = '/api/v1/auth/signup';
 const loginUrl = '/api/v1/auth/login';
 const flagUpdateLocationUrl = '/api/v1/red-flags/:id/location';
 const flagAllentriesUrl = '/api/v1/red-flags/';
 const postflagUrl = '/api/v1/red-flags/';
 const specificflagUrl = '/api/v1/red-flags/:id';
 const updateCommentUrl = '/api/v1/red-flags/:id/comment';

describe(signupurl,() =>{
    it('should create a new  user',() =>{
        chai.request(server)
        .post(signupurl)
        .send(userData)
        .set('Authorization', 'Bearer ' + token)
        .end((err,res) =>{
            chai.expect(res.body).to.be.a('object');
            chai.expect(res.statusCode).to.be.equal(201);
            chai.expect(res.body).to.have.property('status');
            chai.expect(res.type).to.be.equal('application/json');

        });
    });

    it('should Log in the user',() =>{
        chai.request(server)
        .post(loginUrl)
        .send(loginDetails)
        .set('Authorization', 'Bearer ' + token)
        .end((err,res) =>{
            chai.expect(res.body).to.be.a('object');
            chai.expect(res.statusCode).to.be.equal(201);
            chai.expect(res.body).to.have.property('status');
            chai.expect(res.type).to.be.equal('application/json');

        });
    });
});
describe('POST/apiv1/red-flags',() =>{
    it('should return a new red flag  created',() =>{
        chai.request(server)
        .post('/api/v1/red-flags')
        .send(userData)
        .set('Authorization', 'Bearer ' + token)
        .end((err,res) =>{
            chai.expect(res.body).to.be.a('object');
            chai.expect(res.statusCode).to.be.equal(422);
            chai.expect(res.body).to.have.property('status');
            chai.expect(res.type).to.be.equal('application/json');

        });
    });
    it('should ')
});