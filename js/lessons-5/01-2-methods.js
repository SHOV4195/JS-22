// Методы обьекта и this при обращении к свойствам в методах

// - chengeName
// - addTrack
// - updateRating
// - getTrackCoun

const playlist = {
   name: 'Мой супер плейлист',
   rating: 5,
   tracks: ['трек-1', 'трек-2', 'трек-3'],

   changeName(newName) {
      console.log('this внутри changeName', this);

      this.name = newName;
   },
   addTrack(track) {
      this.tracks.push(track);
   },
   updateRating(newRating) {
      this.rating = newRating;
   },
   getTrackCount() {
      return this.tracks.length;
   }
};

playlist.changeName('Новое имя');

playlist.addTrack('Новое трек');

playlist.updateRating(4);

console.log(playlist);
