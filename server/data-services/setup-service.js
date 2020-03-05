const mongo = require('mongodb').MongoClient
let PostModel = require('../models/post');
const UserModel = require('../models/user');
let mongoose = require('mongoose');

module.exports = {
    setupFirstUser: function(){
        var user = {
            username: "firstUser",
            password: "pass",
            displayName: "First user",
            location: "Location",
            avatarUrl: "path",
            followersCount: 3,
            followingCount: 4,
            postsCount: 5,
            likesCount: 6
        };
        UserModel.find({username: 'firstUser'}, function(err, users) {
            if(users.length == 0){
                UserModel.create(user);
            }
        });
    return true;
    }
};