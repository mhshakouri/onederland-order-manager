// set up the main template the the router will use to build pages
Router.configure({
  layoutTemplate: 'ApplicationLayout',
  yieldTemplates: {
    navbar: {to: 'header'}
  }
});
// specify the top level route, the page users see when they arrive at the site
Router.route('/', function () {
  this.render("navbar", {to:"header"});
  if(Meteor.user()){
    this.render("lobby_page", {to:"main"});
    this.render("userSidebar", {to:"sidebar1"});
    this.render("ordersSidebar", {to:"sidebar2"});
  }else{
    this.render('intro',{to:'main'});
    this.render(null,{to:'sidebar'});
  }
},
{name:'home'});

// specify a route that allows the current user to chat to another users
Router.route('/chat/:_id', function () {
  // the user they want to chat to has id equal to
  // the id sent in after /chat/...
  var otherUserId = this.params._id;
  // find a chat that has two users that match current user id
  // and the requested user id
  var filter = {$or:[
              {user1Id:Meteor.userId(), user2Id:otherUserId},
              {user2Id:Meteor.userId(), user1Id:otherUserId}
              ]};
  var chat = Chats.findOne(filter);
  if (!chat){// no chat matching the filter - need to insert a new one
    chatId = Chats.insert({user1Id:Meteor.userId(), user2Id:otherUserId});
  }
  else {// there is a chat going already - use that.
    chatId = chat._id;
  }
  if (chatId){// looking good, save the id to the session
    Session.set("chatId",chatId);
  }
  this.render("navbar", {to:"header"});
  this.render("chat_page", {to:"main"});
});
Router.route('/users/:_id', function () {
  var userID = this.params._id;
  Session.set('profileID',userID);
  this.render("navbar",{to:"header"});
  this.render("profile",{to:"main"});
});

Router.route('/categories', function() {
    this.render("categoriesList",{to:"main"});
    this.render("navbar",{to:"header"});
}, {
    name: 'categories'
});

Router.route('/categories/:_id',function(){
    Session.set("catid", this.params._id);
    this.render("categoryView",{to:"main"});
    this.render("navbar",{to:"header"});
});

Router.route('/products', function() {
    this.render("productsList",{to:"main"});
    this.render("navbar",{to:"header"});
}, {
    name: 'products'
});

Router.route('/products/:_id',function(){
    Session.set("productId", this.params._id);
    this.render("productView",{to:"main"});
    this.render("navbar",{to:"header"});
});
