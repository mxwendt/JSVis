/**
 * Addition
 */

if (Meteor.isClient) {

  Template.Addition.onRendered(function() {
    Session.set('minValue', 0);
    // Session.set('minValue', Number.MAX_VALUE * -1);
    Session.set('maxValue', 10);
    // Session.set('maxValue', Number.MAX_VALUE);
    Session.set('argA', 0);
    Session.set('argB', 0);
  });

  Template.Addition.helpers({
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
    return: function() {
      return Number(Session.get('argA')) + Number(Session.get('argB'));
    }
  });

  Template.Addition.events({
    'input input#argA': function (e) {
      Session.set('argA', e.target.value);
    },
    'input input#argB': function (e) {
      Session.set('argB', e.target.value);
    }
  });
}
