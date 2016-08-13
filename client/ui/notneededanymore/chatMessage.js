
Template.chat_message.helpers({
    messageText: function(){
        return this.text;
    },
  userName: function(){
    var user = Meteor.users.findOne({_id:this.userId});
    return user.username;
  },
  userAvatar: function(){
    var user = Meteor.users.findOne({_id:this.userId});
    return user.profile.image;
  }
});