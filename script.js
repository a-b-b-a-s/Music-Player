const musicContainer = document.getElementById("music-container");
const playBtn = document.getElementById("play");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
const audio = document.getElementById("audio");
const progress = document.getElementById("progress");
const progressContainer = document.getElementById("progress-container");
const title = document.getElementById("title");
const cover = document.getElementById("cover");



//song titles

const songs = ['hey','summer','ukulele']


//keep track of songs

let songIndex = 0;


// initially load song details 
loadSong(songs[songIndex]);

function loadSong (song) {
  title.innerText = song;
  audio.src = `music/${song}.mp3`;
  cover.src = `images/${song}.jpg`;
}

function playSong() {
  musicContainer.classList.add('play');
  playBtn.querySelector('.fas').classList.remove('fa-play');
  playBtn.querySelector('.fas').classList.add('fa-pause');
  audio.play();
}

function pauseSong() {
  musicContainer.classList.remove('play');
  playBtn.querySelector('.fas').classList.remove('fa-pause');
  playBtn.querySelector('.fas').classList.add('fa-play');
  audio.pause();
}

function prevSong (e) {
songIndex --;
if(songIndex < 0 ) {
  songIndex = songs.length-1
}

loadSong(songs [songIndex] )

playSong();
}

function nextSong (e) {
  songIndex ++;
if(songIndex > songs.length-1) {
  songIndex = 0;
}

loadSong(songs [songIndex] )

playSong();

}


function updateProgress(e) {
const { duration , currentTime } = audio;
const progressPercent = (currentTime / duration) * 100;
progress.style.width = ` ${progressPercent}%`;

}

function setProgress (e) {
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const duration = audio.duration;

  audio.currentTime = (clickX / width) * duration;
}


playBtn.addEventListener("click", () => {
  const isPlaying = musicContainer.classList.contains('play');
  if (isPlaying) {
    pauseSong();
  } else {
    playSong();
  }
});

prevBtn.addEventListener('click', prevSong)
nextBtn.addEventListener('click' , nextSong)

audio.addEventListener('timeupdate', updateProgress)
progressContainer.addEventListener('click', setProgress)

// Volume 

const volumeControl = document.getElementById("volume-control");
volumeControl.style.backgroundColor = "#FFC0CB"; 

volumeControl.addEventListener("input", () => {
  audio.volume = volumeControl.value;
});






