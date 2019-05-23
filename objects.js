var playlist = {theShins: "Australia"};
function updatePlaylist(playlist,artist,song){
  playlist[artist] = song
  return playlist
}
function updatePlaylist(playlist,artist){
  delete playlist[artist]
  return playlist
}