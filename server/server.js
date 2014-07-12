var cheerio = Meteor.require('cheerio');

Meteor.methods({
  getTime: function() {
    result = Meteor.http.get("http://www.kijiji.ca/b-musical-instrument/winnipeg/wurlitzer/k0c17l1700192");
    // var $ = cheerio.load(result);
    return "hello";
  }
});
