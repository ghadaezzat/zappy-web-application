

//During the test the env variable is set to test
process.env.NODE_ENV = 'test';

const post = require('../models/tweets');
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('./../app');
const should = chai.should();
const expect = chai.expect();

const api =require('supertest');
chai.use(chaiHttp);

describe('tweets', function() {
  
    it('should list ALL tweets on /view GET', function(done) {
        chai.request(server)
          .get('/view')
          .end(function(err, res){
            res.should.have.status(200);
            done(err);
          });
      });
  });

