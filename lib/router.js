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
  else if (id === 'addition2') this.render('Addition2');
  else if (id === 'addition3') this.render('Addition3');
  else if (id === 'multiplication') this.render('Multiplication');
  else if (id === 'eval') this.render('Eval');
  else if (id === 'map') this.render('Map');
  else if (id === 'filter') this.render('Filter');
  else if (id === 'reduce') this.render('Reduce');
});

Router.route('/survey/:_id', function() {
  var id = this.params._id;
  this.layout('SurveyLayout');
  if (id === 'pre-ext') this.render('PreExt');
  else if (id === 'pre-int') this.render('PreInt');
  else if (id === 'post-int') this.render('PostInt');
});
