// create music entries
if (Music.find({}).count() < 1) {
  Music.insert({
    artist: "Daft Punk",
    album: "Discovery",
    art: "#D81B60",
    tracks: ["One more time", "Aerodynamic", "Digital Love", "Harder, Better, Faster, Stronger"]
  });
  Music.insert({
    artist: "Fisherspooner",
    album: "#1",
    art: "#00BCD4",
    tracks: ["Invisible", "The 15th", "Emerge", "Fucker", "Turn On"]
  });
  Music.insert({
    artist: "Rone",
    album: "Bora EP",
    art: "#C6FF00",
    tracks: ["Bora", "Bora Vocal", "Flesh", "Spanish breakfast", "Dry"]
  });
}
