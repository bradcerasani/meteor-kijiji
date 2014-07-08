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
  return dataArr;
}

return Meteor.call("getTime", function(err, res) {
  return res;
});


