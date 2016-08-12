Meteor.publish("Products", function(){
  return Products.find();
});
Meteor.publish("Categories", function(){
  return Categories.find();
});
Meteor.publish("Clients", function(){
  return Clients.find();
});
Meteor.publish("Orders", function(){
  return Orders.find();
});
Meteor.publish("OrderItems", function(){
  return OrderItems.find();
});
