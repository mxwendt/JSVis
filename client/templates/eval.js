/**
 * Eval
 */

if (Meteor.isClient) {

  Template.Eval.onRendered(function() {

  });

  Template.Eval.helpers({

  });

  Template.Eval.events({
    'click button#eval-button': function(e) {
      lazyLoad();
    }
  });

  function lazyLoad() {
    var lazyElement = document.getElementById('eval');
    console.log(lazyElement)
    var lazyElementBody = lazyElement.value;
    console.log(lazyElementBody);
    var evalCode = eval(lazyElementBody);
    console.log(evalCode);
  }
}
