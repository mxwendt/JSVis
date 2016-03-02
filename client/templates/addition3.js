/**
 * Addition 3
 */

if (Meteor.isClient) {

  Template.Addition3.onRendered(function() {
    Session.set('minValue', 0);
    // Session.set('minValue', Number.MAX_VALUE * -1);
    Session.set('maxValue', 20);
    // Session.set('maxValue', Number.MAX_VALUE);
    Session.set('argA', 10);

    // Draw the calls
    var data = [];
    data.push({'x': 0, 'y': 4});
    for (var i = 0; i < Number(Session.get('argA')); i++) {
      data.push({'x': i + 1, 'y': 6});
    }
    data.push({'x': Number(Session.get('argA')) + 1, 'y': 8});
    updateDataCalls(data);
  });

  Template.Addition3.helpers({
    minValue: function() {
      return Session.get('minValue');
    },
    maxValue: function() {
      return Session.get('maxValue');
    },
    argA: function() {
      return Session.get('argA');
    },
    return: function() {
        return eval('2 * ' + Session.get('argA').toString());
    }
  });

  Template.Addition3.events({
    'input input#argA': function (e) {
      Session.set('argA', e.target.value);
      var data = [];
      data.push({'x': 0, 'y': 4});
      for (var i = 0; i < Number(e.target.value); i++) {
        data.push({'x': i + 1, 'y': 6});
      }
      data.push({'x': Number(e.target.value) + 1, 'y': 8});
      updateDataCalls(data);
    }
  });

  function updateDataCalls(data) {
    var calls = d3.select('svg.calls')
        .attr('width', '300px')
        .attr('height', document.getElementsByTagName('code').length * 20 + 'px')
      .selectAll('circle')
        .data(data);

    calls.exit().remove();

    calls.enter().append('circle')
        .attr('r', 3);
    calls
        .attr('cx', function(d) { return d.x * 10 + 3; })
        .attr('cy', function(d) { return d.y * 20 + 12; })
  }
}
