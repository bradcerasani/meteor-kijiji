var dataArr = [
  {
    name: "something",
    description: "some description"
  },
  {
    name: "something else",
    description: "some other description"
  }
]

Template.results.result = function() {
  return Session.get('q');
}

Meteor.call("getTime", function(err, res) {
  Session.set('q', res);
});


