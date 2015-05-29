// create music entries
if (Music.find({}).count() < 1) {
  for (var i = 0; i<5; i++) {

    var tracks = [];
    for (var j = 0; j<Random.choice([5,6,7,8,9]); j++)
      tracks.push(faker.lorem.words().join(" "));

    var artist = faker.lorem.words()[0];
    var album = faker.lorem.words().slice(0,2).join(" ");
    Music.insert({
      artist: artist,
      album: faker.lorem.words().slice(0,2).join(" "),
      arturl: faker.image.image()+"/"+album.replace(/\s/g, "%20"),
      tracks: tracks
    });
  }
}
