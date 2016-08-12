
Template.ordersList.helpers({
   ordersItem: function(){
      return Orders.find();
   },
   noOrders: function(){
       if (Orders.find().count()<1){
           return true;
       }
       return false;
   }
});
Template.orderView.helpers({
    ordItem: function(){
        return Orders.findOne({_id:Session.get('ordid')});
    }
});
Template.orderView.events({
   'click .js-removeOrd': function(){
       Orders.remove(Session.get('ordid'));
       Router.go('/orders');
   },
   'click form#insertNeworder submit': function(){
       Router.go('/orders');
   }
});

/*
Template.ordersList.helpers({
  orders:function(){
    return Orders.find();
  }
});
<template name="ordersList">
	<h2>Orders List</h2>
	<div class="row">
  	{{#each orders}}
  		{{> ordersListTemplate}}
  	{{/each}}
  </div>
</template>
<template name="ordersListTemplate">
	Null Here
</template>

*/
