Template.results.listing = function() {
  return Session.get('q');
}

Meteor.call("getTime", function(err, res) {
  Session.set('q', res);
});


