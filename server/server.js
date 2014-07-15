var cheerio = Meteor.require('cheerio');
var moment = Meteor.require('moment');

Meteor.methods({
  getTime: function() {
    result = Meteor.http.get("http://www.kijiji.ca/b-musical-instrument/winnipeg/wurlitzer/k0c17l1700192");
    var $ = cheerio.load(result.content);
    var listing = [];
    $('.regular-ad').each(function(i, elem) {
      listing.push({
        id: "",
        title: $(this).find('.title').text(),
        description: $(this).find('.description p').text(),
        price: $(this).find('.price').text(),
        image: [],
        url: "",
        posted: moment($(this).find('.posted').text(), "DD/MM/YYYY").fromNow(),
      });
    });
    return listing;
  }
});
