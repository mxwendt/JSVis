Router.configure({
  layoutTemplate: 'ApplicationLayout',
  // notFoundTemplate: 'NotFound'
});

Router.route('/', function() {
  this.render('Home');
});

Router.route('/vis/:_id', function() {
  var id = this.params._id;
  console.log(id);
  if (id === 'map') this.render('Map');
  else if (id === 'filter') this.render('Filter');
  else if (id === 'reduce') this.render('Reduce');
});
