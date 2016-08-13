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
    this.render("categoriesList", {to:"main"});
    this.render("userSidebar", {to:"sidebar"});
  }else{
    this.render('intro',{to:'main'});
    this.render(null,{to:'sidebar'});
  }
},
{name:'home'});
Router.route('/addOrder', function () {
  this.render("navbar", {to:"header"});
  if(Meteor.user()){
    this.render("addorder", {to:"main"});
    this.render("userSidebar", {to:"sidebar"});
  }else{
    this.render('intro',{to:'main'});
    this.render(null,{to:'sidebar'});
  }
},
{name:'addOrder'});
Router.route('/addProduct', function () {
  this.render("navbar", {to:"header"});
  if(Meteor.user()){
    this.render("addproduct", {to:"main"});
    this.render("userSidebar", {to:"sidebar"});
  }else{
    this.render('intro',{to:'main'});
    this.render(null,{to:'sidebar'});
  }
},
{name:'addProduct'});
Router.route('/products', function () {
  this.render("navbar", {to:"header"});
  if(Meteor.user()){
    this.render("produtcsList", {to:"main"});
    this.render("userSidebar", {to:"sidebar"});
  }else{
    this.render('intro',{to:'main'});
    this.render(null,{to:'sidebar'});
  }
},
{name:'products'});
Router.route('/addCategory', function () {
  this.render("navbar", {to:"header"});
  if(Meteor.user()){
    this.render("addcategory", {to:"main"});
    this.render("userSidebar", {to:"sidebar"});
  }else{
    this.render('intro',{to:'main'});
    this.render(null,{to:'sidebar'});
  }
},
{name:'addCategory'});
Router.route('/categories', function () {
  this.render("navbar", {to:"header"});
  if(Meteor.user()){
    this.render("categoriesList", {to:"main"});
    this.render("userSidebar", {to:"sidebar"});
  }else{
    this.render('intro',{to:'main'});
    this.render(null,{to:'sidebar'});
  }
},
{name:'categories'});
Router.route('/categories/:_id', function () {
  var categoryId = this.params._id;
  Session.set("catId",categoryId);
  this.render("navbar", {to:"header"});
  if(Categories.findOne({_id:categoryId})){
    if(Meteor.user()){
      this.render("produtcsList", {to:"main"});
      this.render("userSidebar", {to:"sidebar"});
    }else{
      this.render('intro',{to:'main'});
      this.render(null,{to:'sidebar'});
    }    
    //console.log('category with Id: '+categoryId+' was found on the database for double check the found value, catdata is: '+catdata._id+', the category name is: '+catdata.title+'. This data is only intended to be here for debuging purposes');
  }
});