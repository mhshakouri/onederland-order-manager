/*
Template.available_user_list.helpers({
  users:function(){
    return Meteor.users.find({}, {sort: {createdOn: -1}});
  }
});
Template.available_user.helpers({
  getUsername:function(userId){
    user = Meteor.users.findOne({_id:userId});
    return user.profile.username;
  },
  getAvatar:function(userId){
    user = Meteor.users.findOne({_id:userId});
    return user.profile.image;
  },
  isMyUser:function(userId){
    if (userId == Meteor.userId()){
      return true;
    }
    else {
      return false;
    }
  },
  notMyUser:function(userId){
    if(userId !== Meteor.userId()){
      return  true;
    }
    return false;
  }
});
*/