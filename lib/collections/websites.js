
Websites = new Mongo.Collection("websites");

Websites.schema = new SimpleSchema({
    url: {type: String, label: "url"},
    title: {type: String, label: "title"},
    description : {type : String, label: "description"},
    votes: {type: Number, label: "votes"},
    createdBy : {type: String},
    createdAt : {type: Date, autoValue: function (){ return new Date(); }}
});

Websites.attachSchema(Websites.schema);

Websites.allow({
    insert: function(userId, doc) {
        console.log("testing security on post add");
        if(Meteor.user()){
            if(Meteor.user().username != doc.createdBy) {
                
                return false;

            }
            else {

                return true;
            }
        }
    },
    remove : function(userId, doc) {
        console.log("testing security on post delete");
        if(Meteor.user()){
            if(Meteor.user().username != doc.createdBy) {
                return false;

            }
            else {
                return true;
            }
        }
    },
    update : function (userId, doc) {
        if(Meteor.user()) {
            //Only upvote/downvote when logged in
            return true;
        }
        else {
            //Flash Message
            return false;
        }
    }

});