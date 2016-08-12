Products = new Mongo.Collection("Products");
Products.attachSchema(new SimpleSchema({
    title:{
        type: String,
        label:  "Product Name",
        max: 300
    },
    desc:{
        type: String,
        label: "Product Description",
        max: 5000
    },
    price:{
        type: Number
    },
    image:{
        type: String,
        label: "Image URL",
        max: 400
    },
    category: {
        type: String,
        optional: false,
        autoform: {
            type: "select",
            options: function () {
                return Categories.find().map(function (c) {
                    return {label: c.title, value: c._id};
                });
            }
        }
    }
}));
Categories = new Mongo.Collection("Categories");
Categories.attachSchema(new SimpleSchema({
    title:{
        type: String,
        label:  "Category Name",
        max: 300
    },
    desc:{
        type: String,
        label: "Category Description",
        max: 5000
    },
    image:{
        type: String,
        label: "Image URL",
        max: 400,
        optional: true
    }
}));
Clients = new Mongo.Collection("Clients");
Clients.attachSchema(new SimpleSchema({
    name: {
        type: String,
        label: "Name",
        max: 300
    },
    address: {
        type: String,
        label: "Address",
        max: 5000
    },
    postalcode: {
        type: Number,
        label: "Postal Code",
        max: 200
    },
    mobile: {
        type: Number,
        label: "Mobile",
        max: 200
    },
    phone: {
        type: Number,
        label: "Phone",
        max: 200
    }
}));
Orders = new Mongo.Collection("Orders");
Orders.attachSchema(new SimpleSchema({
    useClientAddress:{
        type: Boolean,
        label: "Use Client address as shipping address",
        defaultValue: false  
    },
    orderName: {
        type: String,
        label: "Name",
        max: 300
    },
    orderAddress: {
        type: String,
        label: "Address",
        max: 5000
    },
    orderPC: {
        type: Number,
        label: "Postal Code",
        max: 9999999999999
    },
    orderMobile: {
        type: Number,
        label: "Mobile",
        max: 9999999999999
    },
    orderPhone: {
        type: Number,
        label: "Phone",
        max: 9999999999999
    },
    pending:{
        type: Boolean,
        label: "Pending",
        defaultValue: true
    },
    approved:{
        type: Boolean,
        label: "Approved",
        defaultValue: false
    },
    shipped:{
        type: Boolean,
        label: "Shipped",
        defaultValue: false
    }
}));
OrderItems = new Mongo.Collection("OrderItems");
OrderItems.attachSchema(new SimpleSchema({
    product: {
        type: String,
        optional: false,
        autoform: {
            type: "select",
            options: function () {
                return Products.find().map(function (c) {
                    return {label: c.title, value: c._id};
                });
            }
        }
    },
    amount: {
        type: Number,
        label: "Amount",
        max: 200
    },
    total: {
        type: Number,
        label: "Total Price",
        max: 200
    },
    desc:{
        type: String,
        label: "Approved",
        max: 5000
    }
}));


Products.allow({
  insert: function(){
    if (Meteor.userId) {
        return true
    }
    return false
  },
  update: function(){
    if (Meteor.userId) {
        return true
    }
    return false
  },
  remove: function(){
    if (Meteor.userId) {
        return true
    }
    return false
  }
});
Categories.allow({
  insert: function(){
    if (Meteor.userId) {
        return true
    }
    return false
  },
  update: function(){
    if (Meteor.userId) {
        return true
    }
    return false
  },
  remove: function(){
    if (Meteor.userId) {
        return true
    }
    return false
  }
});
Clients.allow({
  insert: function(){
    if (Meteor.userId) {
        return true
    }
    return false
  },
  update: function(){
    if (Meteor.userId) {
        return true
    }
    return false
  },
  remove: function(){
    if (Meteor.userId) {
        return true
    }
    return false
  }
});
Orders.allow({
  insert: function(){
    if (Meteor.userId) {
        return true
    }
    return false
  },
  update: function(){
    if (Meteor.userId) {
        return true
    }
    return false
  },
  remove: function(){
    if (Meteor.userId) {
        return true
    }
    return false
  }
});
OrderItems.allow({
  insert: function(){
    if (Meteor.userId) {
        return true
    }
    return false
  },
  update: function(){
    if (Meteor.userId) {
        return true
    }
    return false
  },
  remove: function(){
    if (Meteor.userId) {
        return true
    }
    return false
  }
});