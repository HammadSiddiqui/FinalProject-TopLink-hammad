Meteor.startup(function() {
    //Meteor.subscribe('websites');
    //Helper for Creating a global function to format Data time nicely with moment.js package
    Template.registerHelper('formatDate', function(date) {
        var currentTime = moment(new Date());
        var createdAtTime = moment(date);
        return createdAtTime.from(currentTime);
    });
});
