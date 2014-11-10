if (Meteor.isClient) {
  Meteor.startup(function() {
    $('body')
      .attr('unresolved', '')
      .attr('fullbleed', '');
  });
}

if (Meteor.isServer) {
  var Music = new Mongo.Collection('music');

  Meteor.publish('musics', function() {
    return Music.find({},{fields: {artist: 1, album: 1, color: 1}});
  });

  Meteor.publish('album', function(id) {
    if (id)
      return Music.find({_id: id},{fields: {tracks: 1}});
    else
      this.ready();
  });
}
