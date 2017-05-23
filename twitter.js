
var Twitter = require('twitter');
var envs = require('envs');
var fs = require('fs');


var client = new Twitter({
  consumer_key: 'WBTfON080Bcb5fizN2z7ogNAX',
  consumer_secret: 'f6bDpa1TFK8GddKmz9Xv5zjDMaI9rmZC6I9c5r8Xfh7aZZK8mH',
  access_token_key: '1663055059-ll7Lz4ZK05jZBfZOJFzCoODQeHgIUzcURBec77p',
  access_token_secret: 'Ma1cpgTTcthMThrZ0ycNp5PrUzDyIigbOS9w2QqmbBf3K'
});

client.stream('statuses/filter', {follow: '1339835893,216776631,23022687,18020081,25073877'},  function(stream){

console.log('here');
  stream.on('data', function(tweet) {
    fs.appendFile('candidates_tweet_collection14_04_16.dat',JSON.stringify(tweet)+'\n',function (err){
        if(err) 
          {
            console.log('Error occurred');
            throw err;}
           }); 
    
     
    });

  stream.on('error', function(error) {
    console.log(error);
  });
});