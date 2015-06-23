var initDatabase = function() {
  if (Music.find({}).count() < 1) {
    var lorempixelcat = [
      'abstract', 'city', 'people', 'transport', 'animals', 'food', 'nature',
      'business', 'nightlife', 'sports', 'cats', 'fashion', 'technics'
    ];

    for (var i = 0; i<4; i++) {

      var tracks = [];
      for (var j = 0; j<Random.choice([5,6,7,8,9]); j++)
        tracks.push(faker.lorem.words().join(" "));

      var artist = faker.lorem.words()[0];
      var album = faker.lorem.words().slice(0,2).join(" ");
      var loremindex = Math.floor((Math.random() * 10) + 1);
      Music.insert({
        artist: artist,
        album: faker.lorem.words().slice(0,2).join(" "),
        arturl: "http://lorempixel.com/480/480/"+Random.choice(lorempixelcat)+"/"+loremindex+"/"+album.replace(/\s/g, "%20"),
        tracks: tracks
      });
    }
  }
}

Meteor.setInterval(function() {
  Music.remove({});
  initDatabase()
}, 2*3600*1000);

initDatabase();
