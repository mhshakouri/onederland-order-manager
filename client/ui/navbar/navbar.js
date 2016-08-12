Template.navbar.events({
   'click .js-logout': function(event){
       event.preventDefault();
       AccountsTemplates.logout();
   } 
});