Router.configure({
  layoutTemplate: 'ApplicationLayout',
  // notFoundTemplate: 'NotFound'
});

Router.route('/', function() {
  this.render('Home');
});

Router.route('/vis/:_id', function() {
  var id = this.params._id;
  if (id === 'addition') this.render('Addition');
  else if (id === 'multiplication') this.render('Multiplication');
  else if (id === 'map') this.render('Map');
  else if (id === 'filter') this.render('Filter');
  else if (id === 'reduce') this.render('Reduce');
});
