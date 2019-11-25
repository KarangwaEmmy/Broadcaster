import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../index';

const {expect} = chai;
chai.use(chaiHttp);

let testToken = null;

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