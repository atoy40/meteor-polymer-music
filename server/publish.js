// publish albums (without track list)
Meteor.publish('albums', function() {
  return Music.find({},{fields: {artist: 1, album: 1, art: 1}});
});

// publish tracks for a given album
Meteor.publish('album', function(id) {
  if (id)
    return Music.find({_id: id},{fields: {tracks: 1}});
  else
    this.ready();
});

Music.allow({
  insert: function(userId, doc) {
    return true;
  },
  remove: function(userId, doc) {
    return true;
  }
});
