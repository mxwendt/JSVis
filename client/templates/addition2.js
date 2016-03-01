/**
 * Addition 2
 */

if (Meteor.isClient) {

  Template.Addition2.onRendered(function() {
    Session.set('minValue', 0);
    // Session.set('minValue', Number.MAX_VALUE * -1);
    Session.set('maxValue', 10);
    // Session.set('maxValue', Number.MAX_VALUE);
    Session.set('argA', 0);
    Session.set('argB', 0);
    Session.set('argC', 'true');
    document.getElementById('argC-true').classList.toggle('is-highlighted');
  });

  Template.Addition2.helpers({
    minValue: function() {
      return Session.get('minValue');
    },
    maxValue: function() {
      return Session.get('maxValue');
    },
    argA: function() {
      return Session.get('argA');
    },
    argB: function() {
      return Session.get('argB');
    },
    argC: function() {
      return Session.get('argC');
    },
    return: function() {
      if (Session.get('argC') === 'true') {
        return eval(Session.get('argA').toString() + " + " +
                    Session.get('argB').toString() + " * 2");
      } else {
        return eval(Session.get('argA').toString() + " + " +
                    Session.get('argB').toString() + "* 4");
      }
    }
  });

  Template.Addition2.events({
    'input input#argA': function (e) {
      Session.set('argA', e.target.value);
    },
    'input input#argB': function (e) {
      Session.set('argB', e.target.value);
    },
    'change input#argC': function(e) {
      var output;
      document.getElementById('argC-true').classList.toggle('is-highlighted');
      document.getElementById('argC-false').classList.toggle('is-highlighted');
      if (e.target.checked) {
        output = document.getElementById('argC-false').removeChild(document.querySelector('.output'));
        document.getElementById('argC-true').appendChild(output);
        Session.set('argC', 'true');
      } else {
        output = document.getElementById('argC-true').removeChild(document.querySelector('.output'));
        document.getElementById('argC-false').appendChild(output);
        Session.set('argC', 'false');
      }
    }
  });
}
