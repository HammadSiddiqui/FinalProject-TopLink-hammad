Comments = new Mongo.Collection('comments');

Comments.schema = new SimpleSchema({
    text: {type: String, label: "text"},
    postId: {type: String, label: "postId"},
    createdBy : {type: String},
    createdAt : {type: Date, autoValue: function (){ return new Date(); }}
});

Comments.attachSchema(Comments.schema);

Comments.allow({
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
    }

});