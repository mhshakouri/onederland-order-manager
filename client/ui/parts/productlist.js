Template.produtcsList.helpers({
  productsListItems:function(){
    if(Session.get('catId')){
      return Products.find({category:Session.get('catId')});
    }
    return Products.find({});
  },
  categoryInfo:function(){
    return Categories.findOne({_id:Session.get('catId')});
  },
  editMode:function(){
    if(Session.get('editMode')===true){
      return true;
    }
  },
  viewMode:function(){
    if(Session.get('viewMode')===true){
      return true;
    }
  },
  aTOMode:function(){
    if(Session.get('aTOMode')===true){
      return true;
    }
  }
  
});

Template.produtcsList.events({
  'click .js-edit-category':function(event){
    event.preventDefault();
    Session.set('editMode',true);
    Session.set('viewMode',false);
  },
  'click .js-close-edit':function(event){
    event.preventDefault();
    Session.set('editMode',false);
    Session.set('viewMode',true);
  },
  'click .js-remove-category':function(event){
    event.preventDefault();
    if(confirm('Are you sure you want to delete this Category and all of it\'s products?')){
      if(Meteor.user()){
        Meteor.call('removeAllProductsByCat',this._id);
        Meteor.call('removeCatById',this._id);
			  Router.go('/');
      }
    }
  }
});
