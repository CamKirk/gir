require('dotenv').config()

console.log(process.env.MONGODB_URI);
console.log(process.env.spotifyKey);

const keys = {
    spotify:process.env.spotifyKey
}

var spotify = new Spotify(keys.spotify);
