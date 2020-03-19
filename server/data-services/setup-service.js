const mongo = require('mongodb').MongoClient
let PostModel = require('../models/post');
const UserModel = require('../models/user');
let mongoose = require('mongoose');

module.exports = {
    deleteAllData: function(){
        PostModel.remove().exec;
        UserModel.remove().exec;
        return true;
    },
    setupData: function(){
        //friend
        var friendId = null;
        var friend = {
            username: "friend",
            password: "pass",
            displayName: "Test 1",
            location: "Location",
            avatarUrl: "path",
            followers: [{
                id: new mongoose.Types.ObjectId().toHexString(),
                isRevealed: true
            }],
            following: [{
                id: new mongoose.Types.ObjectId().toHexString(),
                isRevealed: true
            }],
            posts: [{
                id: new mongoose.Types.ObjectId().toHexString(),
            }]
        };
        UserModel.find({username: 'friend'}, function(err, users) {
            if(users.length == 0){
                friend.save().then(function(err, createdFriend){
                    friendId = createdFriend.Id;
                });
            }
        });
        //posts
        var post = {
            content: "test test test",
            likes: [{
                userId: new mongoose.Types.ObjectId().toHexString()
            }],
            comments: [{
                id: new mongoose.Types.ObjectId().toHexString(),
                content: "test",
                userId: new mongoose.Types.ObjectId().toHexString()
            }]
        }
        var postsCount = 0;
        while(postsCount < 10){
            PostModel.find(function(err, posts) {
                post.save().then(function(err,createdPost) {
                    addPostToUser({},createdPost.id, friendId);
                    });
            });
            postsCount++;
        }
    
//loggedInUser
        let loggedInUserId = null;
        var user = {
            username: "firstUser",
            password: "pass",
            displayName: "First user",
            location: "Location",
            avatarUrl: "path",
            followers: [{
                id: new mongoose.Types.ObjectId().toHexString(),
                isRevealed: true
            }],
            following: [{
                id: friendId,
                isRevealed: true
            }],
            posts: [{
                id: new mongoose.Types.ObjectId().toHexString(),
            }]
        };
        UserModel.find({username: 'firstUser'}, function(err, users) {
            if(users.length == 0){
                user.save();
            }
        });
        
    return true;
},

    addPostToUser: function(postId, friendId) {
        UserModel.update(
            { _id: friendId }, 
            { $push: { following: { id: postId, isRevealed: true } } },
            done
        );
    }
};