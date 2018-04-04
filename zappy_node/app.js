const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const twit = require('twitter');
const twitter_api = require('./twitter.js');
//object of a post
const Post = require('./models/tweets');

const { RTMClient } = require('@slack/client');
const CLIENT_EVENTS = require('@slack/client').CLIENT_EVENTS;
const cors = require('cors')


 //test if server is on
app.get('/', function (req, res) {1
    res.send("hello world");
});

//added cors
var originsWhitelist = [
    'http://localhost:4200',      //this is my front-end url for development
     //'http://www.myproductionurl.com'
  ];
  var corsOptions = {
    origin: function(origin, callback){
          var isWhitelisted = originsWhitelist.indexOf(origin) !== -1;
          callback(null, isWhitelisted);
    },
    credentials:true
  }
  //here is the magic
  app.use(cors(corsOptions));
 
  app.use(bodyParser.json());

//bot object from slack	
const rtm = new RTMClient('xoxb-340882666630-K2XAr6xDrDcoEyxLYtHTOeKf');

rtm.start();

rtm.on('message', (event) => {
    if (event.text) {
        let pattern = new RegExp(/\bgo\b/);
        if (pattern.test(event.text)) {

            add_to_database();
        }
    }

});

//db connection      
mongoose.connect('mongodb://ghada:123456@ds231529.mlab.com:31529/zappy')
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));


//fetch  tweets from database
app.get('/view',(req,res)=>{
    Post.find({},(err,docs)=>{
    if(err){
        res.json(err);
    }else{
        res.json(docs);
    }
    });
});


app.listen(PORT, () => console.log(`Listening on ${ PORT }`))



//connect to twitter
twitter = new twit({
    consumer_key: twitter_api.CONSUMER_KEY,
    consumer_secret: twitter_api.CONSUMER_SECRET,
    access_token_key: twitter_api.ACCESS_TOKEN_KEY,
    access_token_secret: twitter_api.ACCESS_TOKEN_SECRET
});





function add_to_database() {
    twitter.get('statuses/user_timeline', {
        screen_name: 'dodo_ezzat',
        count: 1
    }, function (error, tweets, response) {

        if (error) {
            console.log(error);
        }
        if (tweets) {
            for (let tweet in tweets) {

                let post = new Post({
                    screen_name: tweets[tweet].user.screen_name,
                    picture: tweets[tweet].user.profile_image_url,
                    tweeted_at: tweets[tweet].created_at,
                    tweet_text: tweets[tweet].text

                });
                //save tweet to mongo database
                post.save(err => {
                    if (err) {
                        return err;
                    } else {
                        console.log("successfully added to zappy");
                        return "successfully added to zappy";
                    }
                });


            }

        }
    });
}

module.exports = app; // for testing
