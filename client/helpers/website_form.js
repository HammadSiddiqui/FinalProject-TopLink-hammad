Template.website_form.events({
    "click .js-toggle-website-form":function(event){
        $("#website_form").toggle('slow');
    },
    "submit .js-save-website-form":function(event){

        
        var url = event.target.url.value;
        var title = event.target.title.value;
        var description = event.target.description.value;

        Websites.insert({
            url:url,
            title: title,
            description: description,
            votes: 0,
            createdBy: Meteor.user().username
        });

        event.target.url.value = '';
        event.target.title.value = '';
        event.target.description.value = '';

        //  put your website saving code in here!


        return false;// stop the form submit from reloading the page

    }
});