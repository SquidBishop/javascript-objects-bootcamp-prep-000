var playlist = {
  artist1: "song1",
  artist2: "song2"
};

function updatePlaylist(thePlaylist, artistName, songTitle) {
  return Object.assign({}, thePlaylist, { [artistName]: songTitle});
}

function removeFromPlaylist(obj, key) {
  return delete playlist.obj;
}
