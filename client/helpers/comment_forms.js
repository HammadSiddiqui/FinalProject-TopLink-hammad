Template.commentForm.events({
    'submit .js-save-comment-form' : function (event) {
        var text = event.target.comment.value;
        Comments.insert({
            text: text,
            postId : Template.instance().data.postId,
            createdBy: Meteor.user().username
        }, function(error,result) {
            if(error) {
                console.log(error);
            }
            else{
                event.target.comment.value = '';
            }
        });
        return false;
    }
});

Template.commentForm.helpers({
    postId: this.postId
});