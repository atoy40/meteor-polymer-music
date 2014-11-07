if (Meteor.isClient) {
  Meteor.startup(function() {
    $('body')
      .attr('unresolved', '')
      .attr('fullbleed', '');
  });
}

if (Meteor.isServer) {
  var test = new Mongo.Collection('test');

  if (test.find({}).count() < 1) {
    test.insert({bla: "blo", bli: "blu"});
  }

  Meteor.publish('testsub', function() {
    return test.find({});
  })
}
