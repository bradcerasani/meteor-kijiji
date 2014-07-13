var cheerio = Meteor.require('cheerio');

Meteor.methods({
  getTime: function() {
    result = Meteor.http.get("http://www.kijiji.ca/b-musical-instrument/winnipeg/wurlitzer/k0c17l1700192");
    var $ = cheerio.load(result.content);
    console.log($('.title').text());
    var listing = [
      {
        id: "1001426158",
        title: "Piano for sale",
        description: "Selling my piano. Used to play a lot but don&#039;t have much time anymore. It works good, might need a bit of tuning. Wurlitzer piano. 700$ OBO This ad was posted with the Kijiji mobile app.",
        price: "$700.00",
        image: ["http://i.ebayimg.com/00/s/NjAwWDgwMA==/z/t8UAAOSwFAZTs1dn/$_2.JPG"],
        url: "/v-piano-keyboard/winnipeg/piano-for-sale/1001426158",
        posted: "01/07/2014"
      }
    ]
    return listing;
  }
});
