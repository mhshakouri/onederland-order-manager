Template.profile.helpers({
    'userObject': function(){
        user = Meteor.users.findOne({_id:Session.get("profileID")});
        return user;
    }
})