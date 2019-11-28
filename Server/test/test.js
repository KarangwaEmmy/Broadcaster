import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../index';

const {expect} = chai;
chai.use(chaiHttp);
const userData = {
    'firstname': 'Emmy ', 
    'lastname': ' Karangwa',  
    'email​': 'karangwae@gmail.com',
    'phoneNumber': '(+250) 786639530',
    'username': 'Kemmy',
    'password': 'karagwa'
}
let testToken = userData;

describe('Testing Authenticatiopn Endpoint', (done) =>{
    it('should you welcome to the broadcaster endpoint page', (done) =>{
        chai.request(server)
        .get('/')
        .end((err, res) => {
            if(err) return done(err);
            expect((res.text)).to.be.a('string');
            done();
        })
    })
});

 