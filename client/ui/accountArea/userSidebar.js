Template.userSidebar.helpers({
    'userObject': function(){
        user = Meteor.users.findOne({_id:Meteor.userId()});
        return user;
    },
    'checkAvatar': function() {
        user = Meteor.users.findOne({_id:Meteor.userId()});
        avatar = user.profile.image;
        if(avatar.length > 0) {
            return true;
        }
        return false;
    },
    'userAvatar': function(){
        user = Meteor.users.findOne({_id:Meteor.userId()});
        return user.profile.image;
    }
});
Template.userSidebar.events({
    'click a.editAvatar': function () {
        $('#editYourAvatarModal').modal();
    }
});