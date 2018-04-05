

//During the test the env variable is set to test
process.env.NODE_ENV = 'test';

const Post = require('../models/tweets');
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('./../app');
const should = chai.should();
const mongoose = require('mongoose');

chai.use(chaiHttp);

describe('tweets', function() {
  
    it('should list ALL tweets on /view GET', function() {
        chai.request(server)
          .get('/view')
          .then(function(res) {
            res.should.have.status(200);
          });
      });

  });






    describe('Test Database', function() {

      before(function () {
        mongoose.connect('mongodb://ghada:123456@ds231529.mlab.com:31529/zappy');
        const db = mongoose.connection;
        db.on('error', console.error.bind(console, 'connection error'));
        db.once('open', function() {
          console.log('We are connected to test database!');
        });
      });

      it('New tweet saved to test database', function() {
        let post_test = new Post({
          screen_name: "ahmed123",
          picture: "http://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png",
          tweeted_at: Date.now(),
          tweet_text: "test from mocha"

      });
   
        post_test.save();
      });
  

    });