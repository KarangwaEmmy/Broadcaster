/* eslint-disable no-undef */
import chai from 'chai';
import chaiHttp from 'chai-http';
import dotenv from 'dotenv';
import server from '../../index';

const jwt = require('jsonwebtoken');

dotenv.config();
chai.use(chaiHttp);
const { expect } = chai;
const mochaAsync = (fn) => async () => {
  try {
    await fn();
  } catch (error) {
    console.error(error);
  }
};
// routes


describe('Api endpoints', () => {
  it('should be able to signUp', mochaAsync(async () => {
    const user = {
      firstname: 'Emmy',
      lastname: 'Karangwa',
      email: 'karangwae@gmail.com',
      phoneNumber: '0786639530',
      username: 'Kemmy',
      password: 'karagwa',
      isAdmin: 'false',
    };
    const set = await chai.request(server)
      .post('/api/v2/auth/signup')
      .send(user);
    expect(body).to.be.an('object');
    expect(body.status).to.equal(201);
    expect(body.message).to.be.a('string');
  }));


  it('should be able to login', mochaAsync(async () => {
    const user = {
      email: 'karangwae@gmail.com',
      password: 'karagwa',
    };
    const set = await chai.request(server)
      .post('/api/v2/auth/signin')
      .send(user);
    expect(body.status).to.equal(200);
    expect(body.message).to.be.a('string');
  }));
  it('should not be able to login with incorrect credentials', mochaAsync(async () => {
    const user = {
      email: 'karangwae@gmail.com',
      password: 'kemmy123',
    };
    const set = await chai.request(server)
      .post('/api/v2/auth/signin')
      .send(user);
    expect(body.status).to.equal(404);
    expect(body.message).to.be.a('string');
  }));
  const userData = {
    firstname: 'Emmy',
    lastname: 'Karangwa',
    email: 'karangwae@gmail.com',
    phoneNumber: '0786639530',
    username: 'Kemmy',
    password: 'karagwa',
  };
  const generateToken = (tokenObj) => jwt.sign(tokenObj, process.env.SECRET_KEY);

  const token = (generateToken(userData));

  const invalidToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NTEsImVtYWlsIjoia2FyYW5nd2FtNzkxMDBAZ21haWwuY29tIiwiZmlyc3RuYW1lIjoiRmVsaXgiLCJsYXN0bmFtZSI6IiBNdWdpc2hhIiwidXNlcm5hbWUiOiJrZTBtbTQwIiwiaWF0IjoxNTc1NjA3Mjc4fQ.ZLFGM6j9iJ62KOAaDtMu4_ozx-MOvmhNkTPnTmU2_Qs';

  it('should be able to create a redflag record', mochaAsync(async () => {
    const redflag = {
      title: 'Corruption',
      type: 'Redflag',
      comment: 'last night,i was asked to bribe a police off...',
      location: 'Latitude:-1.9570688 Longitude:30.101504',
      status: 'pending',
      images: ['images', 'image/png'],
      videos: ['videos', 'video/mp4'],
    };
    const set = await chai.request(server)
      .post('/api/v2/redflags')
      .set('Authorization', `Bearer ${token}`)
      .send(redflag);
    expect(body.status).to.equal(201);
  }));

  it('should not be able to fetch all redflags with no token', mochaAsync(async () => {
    const set = await chai.request(server)
      .get('/api/v2/redflags');
    expect(body.status).to.equal(401);
    expect(body.message).to.be.a('string');
  }));

  it('should not be able to fetch all redflags with invalid token', mochaAsync(async () => {
    const set = await chai.request(server)
      .get('/api/v2/redflags')
      .set('token', invalidToken);
    expect(body.status).to.equal(500);
  }));
  it('should be able to fetch all redflags', mochaAsync(async () => {
    const set = await chai.request(server)
      .get('/api/v2/redflags')
      .set('Authorization', `Bearer ${token}`);
    expect(body.status).to.equal(200);
  }));

  it('should be able to fetch a redflag record', mochaAsync(async () => {
    const set = await chai.request(server)
      .get('/api/v2/redflags/1')
      .set('Authorization', `Bearer ${token}`);
    expect(body.status).to.equal(200);
  }));

  it('should be not able to fetch a specific redflag with wrong id', mochaAsync(async () => {
    const set = await chai.request(server)
      .get('/api/v2/redflags/7')
      .set('Authorization', `Bearer ${token}`);
    expect(body.status).to.equal(404);
  }));
  // //edit a location
  it('should be able to update the location of a specific redflag', mochaAsync(async () => {
    const redflag = {
      location: 'Latitude:-1.9570688 Longitude:25.101504',
      status: 'pending',
    };
    const set = await chai.request(server)
      .patch('/api/v2/redflags/1/location')
      .set('Authorization', `Bearer ${token}`)
      .send(redflag);
    expect(body.status).to.equal(200);
  }));
  it('should be not able to update the location of a specific redflag,if user not a citizen', mochaAsync(async () => {
    const redflag = {
      location: 'Latitude:-1.9570688 Longitude:25.101504',
    };
    const set = await chai.request(server)
      .patch('/api/v2/redflags/1/location')
      .send(redflag);
    expect(body.status).to.equal(401);
  }));
  it('should be not able to update the location of a specific redflag,if status not pending', mochaAsync(async () => {
    const rredflag = {
      location: 'Latitude:-1.9570688 Longitude:25.101504',
      status: 'rejected',
    };
    const set = await chai.request(server)
      .patch('/api/v2/redflags/1/location')
      .set('Authorization', `Bearer ${token}`)
      .send(rredflag);
    expect(body.status).to.equal(401);
  }));
  it('should be not able to update the location of a not found redflag', mochaAsync(async () => {
    const set = await chai.request(server)
      .patch('/api/v2/redflags/99/location')
      .set('Authorization', `Bearer ${token}`);
    expect(body.status).to.equal(404);
  }));
  // //edit a comment
  it('should be able to update the comment of a specific redflag', mochaAsync(async () => {
    const redflag = {
      comment: 'last night,i was asked to bribe a police off...',
      status: 'pending',
    };
    const set = await chai.request(server)
      .patch('/api/v2/redflags/1/comment')
      .set('Authorization', `Bearer ${token}`)
      .send(redflag);
    expect(body.status).to.equal(200);
  }));
  it('should be not able to update the comment of a specific comment,', mochaAsync(async () => {
    const redflag = {
      comment: 'flood destruction in the area',
    };
    const set = await chai.request(server)
      .patch('/api/v2/redflags/1/comment')
      .send(redflag);
    expect(body.status).to.equal(401);
  }));
  it('should be not able to update the comment of a specific redflag,if status is rejected', mochaAsync(async () => {
    const uredflag = {
      comment: 'last night,i was asked to bribe a police off...',
      status: 'rejected',
    };
    const set = await chai.request(server)
      .patch('/api/v2/redflags/1/comment')
      .set('Authorization', `Bearer ${token}`)
      .send(uredflag);
    expect(body.status).to.equal(401);
  }));
  it('should be not able to update the comment of a not found redflag', mochaAsync(async () => {
    const set = await chai.request(server)
      .patch('/api/v2/redflags/109/comment')
      .set('Authorization', `Bearer ${token}`);
    expect(body.status).to.equal(404);
  }));
  // delete a redflag
  it('should be able to delete a specific redflag record', mochaAsync(async () => {
    const redflag = {
      status: 'pending',
    };
    const set = await chai.request(server)
      .delete('/api/v2/redflags/1')
      .set('Authorization', `Bearer ${token}`)
      .send(redflag);
    expect(body.status).to.equal(200);
  }));
  it('should not be able to delete a specific redflag,if status is rejected', mochaAsync(async () => {
    const redflag = {
      status: 'rejected',
    };
    const set = await chai.request(server)
      .delete('/api/v2/redflags/2')
      .send(redflag);
    expect(body.status).to.equal(401);
  }));
  it('should be able to create a redflag record', mochaAsync(async () => {
    const redflag = {
      title: 'flood',
      type: 'Redflag',
      comment: 'Flood in the area',
      location: 'Lat:-18.676848 Long:30.345567',
      status: 'draft',
      images: ['image.png', 'image.png'],
      videos: ['video.mp4', 'video.mp4'],
    };
    const set = await chai.request(server)
      .post('/api/v2/redflags')
      .set('Authorization', `Bearer ${token}`)
      .send(redflag);
    expect(body.status).to.equal(201);
  }));
  it('should not be able to delete a specific redflag,if status not under investigation', mochaAsync(async () => {
    const rredflag = {
      comment: 'Flood in the area',
      status: 'under investigation',
    };
    const set = await chai.request(server)
      .delete('/api/v2/redflags/2')
      .set('Authorization', `Bearer ${token}`)
      .send(rredflag);
    expect(body.status).to.equal(401);
  }));
  it('should be not able to delete a redflag of a not found redflag', mochaAsync(async () => {
    const set = await chai.request(server)
      .delete('/api/v2/redflags/719')
      .set('Authorization', `Bearer ${token}`);
    expect(body.status).to.equal(404);
  }));
});
describe('verifyToken', () => {
  it('it should respond with  authorisation header', () => {
    const generateToken = (tokenObj) => jwt.sign(tokenObj, process.env.SECRET_KEY);
    chai.request(server)
      .get('/api/auth/signUp')
      .set('Authorization', `Bearer + ${generateToken}`)
      .end((err, res) => {
        chai.expect(res.body).to.be.a('object');
        if (err) return done(err);
      });
  });
});
