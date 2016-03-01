if (Meteor.isClient) {

  /**
   * Addition
   */

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
    sum: function() {
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

  /**
   * Multiplication
   */

  Template.Multiplication.onRendered(function() {
    Session.set('minValue', 1);
    // Session.set('minValue', Number.MAX_VALUE * -1);
    Session.set('maxValue', 20);
    // Session.set('maxValue', Number.MAX_VALUE);
    Session.set('argA', 1);
    Session.set('argB', 1);
    Session.set('argC', 1);
  });

  Template.Multiplication.helpers({
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
    multiply: function() {
      return Number(Session.get('argA')) * Number(Session.get('argB')) * Number(Session.get('argC'));
    }
  });

  Template.Multiplication.events({
    'input input#argA': function (e) {
      Session.set('argA', e.target.value);
    },
    'input input#argB': function (e) {
      Session.set('argB', e.target.value);
    },
    'input input#argC': function (e) {
      Session.set('argC', e.target.value);
    }
  });
}
