Router.configure({
    layoutTemplate : "ApplicationLayout"
});

Router.route('/', function () {
    this.subscribe('websites');
    this.render('website_list', {
        to: "main"
    });
    this.render('website_form', {
        to : "form"
    })
});

Router.route('/:_id', function() {
    this.subscribe('websites', {_id:this.params.id});
    this.render('website', {
        to: "main",
        data: Websites.findOne({_id : this.params._id})
    });
    this.subscribe('comments');
    this.render('commentList', {

       to: "comments",
       data : {
           postId : this.params._id
       }

    });
});