Template.commentList.helpers({
    comments: function() {
        return Comments.find({postId: this.postId}, {sort: {createdAt: 1}}).fetch();
    }
});
