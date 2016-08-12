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
});