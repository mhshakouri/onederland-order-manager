Meteor.methods({
    "userExists": function(username){
        return !!Meteor.users.findOne({username: username});
    },
  	"addHomePart": function(part){
		if(!this.userId){
			return;
		} else {
			var id = HomeParts.insert(part);
			return id;
		}
	},
	"removeAllProductsByCat": function(catIdtoRemoveProducts){
		if(!this.userId){
			return false;
		} else {
			Products.remove({'category':catIdtoRemoveProducts});
		}
	},
	"removeCatById": function(catIdtoRemove){
		if(!this.userId){
			return false;
		} else {
			Categories.remove({_id:catIdtoRemove});
		}
	}
});