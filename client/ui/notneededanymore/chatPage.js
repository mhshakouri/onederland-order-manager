
Template.chat_page.helpers({
  messages:function(){
    var chat = Chats.findOne({_id:Session.get("chatId")});
    return chat.messages;
  },
  other_user:function(){
    var chat = Chats.findOne({_id:Session.get("chatId")});
    return chat.user2Id;
  },
  conversee: function(){
    var chat = Chats.findOne({_id:Session.get("chatId")});
    var CuserObj = Meteor.users.findOne({_id:chat.user2Id});
    if (CuserObj){
      return CuserObj;
    }
  }
});
Template.chat_page.events({
// this event fires when the user sends a message on the chat page
'submit .js-send-chat':function(event){
  // stop the form from triggering a page reload
  event.preventDefault();
  // see if we can find a chat object in the database
  // to which we'll add the message
  var chat = Chats.findOne({_id:Session.get("chatId")});
  if (chat){// ok - we have a chat to use
    var msgs = chat.messages; // pull the messages property
    if (!msgs){// no messages yet, create a new array
      msgs = [];
    }
    // is a good idea to insert data straight from the form
    // (i.e. the user) into the database?? certainly not.
    // push adds the message to the end of the array
    var sentDate = new Date();
    msgs.push({text: event.target.chat.value,userId:Meteor.userId(),sentDate:sentDate});
    // reset the form
    event.target.chat.value = "";
    // put the messages array onto the chat object
    chat.messages = msgs;
    // update the chat object in the database.
    Chats.update(chat._id, chat);
  }
}
});
