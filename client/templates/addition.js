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

    // Draw the calls
    var data = [{'x': 0.0, 'y': 5.0}];
    var svg = d3.select('svg.calls')
        .attr('width', '200px')
        .attr('height', document.getElementsByTagName('code').length * 20 + 'px')
      .selectAll('circle')
        .data(data)
      .enter().append('circle')
        .attr('cx', function(d) { return d.x * 10 + 3; })
        .attr('cy', function(d) { return d.y * 20 + 12; })
        .attr('r', 3);
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
      return eval(Session.get('argA').toString() + " + " +
                  Session.get('argB').toString());
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
