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
const entryData = {
            title: 'Effect of the robotics',
            type: 'red flag',
            location: 'Kigali',
            status: 'draft',
            comment: 'It has been a long time without resting'
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

describe('Authentication tests',() =>{
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
            chai.expect(res.statusCode).to.be.equal(200);
            chai.expect(res.body).to.have.property('status');
            chai.expect(res.type).to.be.equal('application/json');

        });
    });
});
describe('Entry EndPoints Tests',() =>{
    it('should return a new red flag  created',() =>{
        chai.request(server)
        .post('/api/v1/red-flags')
        .send(entryData)
        .set('Authorization', 'Bearer ' + token)
        .end((err,res) =>{
            chai.expect(res.body).to.be.a('object');
            chai.expect(res.statusCode).to.be.equal(201);
            chai.expect(res.body).to.have.property('status');
            chai.expect(res.type).to.be.equal('application/json');

        });
    });
    it('should return all  entries',() =>{
        chai.request(server)
        .get('/api/v1/red-flags')
        .set('Authorization', 'Bearer ' + token)
        .end((err,res) =>{
            chai.expect(res.body).to.be.a('object');
            chai.expect(res.statusCode).to.be.equal(200);
            chai.expect(res.body).to.have.property('status');
            chai.expect(res.type).to.be.equal('application/json');

        });
    });
});
describe('Get/api/v1/red-flags/:id',() =>{
    it('should return  a specific red -flag',() =>{
        chai.request(server)
        .get('/api/v1/red-flags/:id')
        .set('Authorization', 'Bearer ' + token)
        .end((err,res) =>{
            chai.expect(res.body).to.be.a('object');
            chai.expect(res.statusCode).to.be.equal(200);
            chai.expect(res.body).to.have.property('status');
            chai.expect(res.type).to.be.equal('application/json');

        });
    });
 
    });

    describe('delete/api/v1/red-flags/:id',() =>{
        it('should delete existing red flag',() =>{
            chai.request(server)
            .delete('/api/v1/red-flags/:id')
            .set('Authorization', 'Bearer ' + token)
            .end((err,res) =>{
                chai.expect(res.body).to.be.a('object');
                chai.expect(res.statusCode).to.be.equal(200);
                chai.expect(res.body).to.have.property('status');
                chai.expect(res.type).to.be.equal('application/json');
    
            });
        });
    });