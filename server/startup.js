
    // start up function that creates entries in the Websites databases.
    Meteor.startup(function () {
        // code to run on server at startup
        if (!Websites.findOne()){
            console.log("No websites yet. Creating starter data.");
            Websites.insert({
                title:"Goldsmiths Computing Department",
                url:"http://www.gold.ac.uk/computing/",
                description:"This is where this course was developed.",
                votes: 5,
                createdBy: "dummy"
            });
            Websites.insert({
                title:"University of London",
                url:"http://www.londoninternational.ac.uk/courses/undergraduate/goldsmiths/bsc-creative-computing-bsc-diploma-work-entry-route",
                description:"University of London International Programme.",
                votes: 2,
                createdBy: "dummy"
            });
            Websites.insert({
                title:"Coursera",
                url:"http://www.coursera.org",
                description:"Universal access to the world’s best education.",
                votes: 1,
                createdBy: "dummy"
            });
            Websites.insert({
                title:"Google",
                url:"http://www.google.com",
                description:"Popular search engine.",
                votes: 0,
                createdBy: "dummy"
            });
        }
        Meteor.publish('websites', function () {
            return Websites.find();
        });
        Meteor.publish('comments', function(){
            return Comments.find();
        })

    });
