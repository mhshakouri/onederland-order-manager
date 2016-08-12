Template.editableText.helpers({
    userCanEdit: function() {
        if (!Meteor.user()) {
            console.log('not logged in');
            return false;
        }
        return true;
    }
});