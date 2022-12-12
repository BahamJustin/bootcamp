// Write code to create a function that accepts an array of numbers
// Each number represents the duration of a song in minutes
// Return the maximum number of songs from the list that can fit in a 60 minute playlist

var mostSongsInPlaylist = function (arr) {
  let sortArray = arr.sort();
  let totalMin = 0;
  let totalSongs = 0;

  for (let i = 0; i < sortArray.length; i++) {
    var currentSong = sortArray[i];

    if (totalMin + currentSong <= 60) {
      totalMin += currentSong;
      totalSongs++;
    } else {
      return totalSongs;
    }
  }
  return totalSongs;
};
