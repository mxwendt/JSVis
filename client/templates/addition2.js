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

    // Draw the calls
    updateDataCalls([{'x': 0.0, 'y': 7.0}]);
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
      if (e.target.checked) {
        output = document.getElementById('argC-false').querySelector('.output');
        document.getElementById('argC-false').removeChild(output);
        document.getElementById('argC-true').appendChild(output);
        Session.set('argC', 'true');
        updateDataCalls([{'x': 0.0, 'y': 7.0}]);
      } else {
        output = document.getElementById('argC-true').querySelector('.output');
        document.getElementById('argC-true').removeChild(output);
        document.getElementById('argC-false').appendChild(output);
        Session.set('argC', 'false');
        updateDataCalls([{'x': 0.0, 'y': 9.0}]);
      }
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
