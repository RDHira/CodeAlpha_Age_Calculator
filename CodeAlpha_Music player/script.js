
const audio = new Audio();
const playPauseButton = document.getElementById('play-pause');
const playPauseIcon = document.getElementById('play-pause-icon');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const progress = document.getElementById('progress');
const volumeButton = document.getElementById('volume-button');
const volumeSlider = document.getElementById('volume');
const songTitle = document.getElementById('song-title');
const artist = document.getElementById('artist');
const albumArt = document.getElementById('album-art');
const musicPlayer = document.querySelector('.music-player');

// Sample playlist
const playlist = [
  {
    title: 'Zindagi Do Pal Ki', 
    artist: 'Hrithik Roshan, Bárbara1', 
    src: 'audios/_Zindagi Do Pal Ki_ Full Song Kites _ Hrithik Roshan, Bárbara Mori.mp3'
    
  },
  {
    title: 'Aadha Main Aadhi Vo', 
    artist: 'B Praak', 
    src: 'audios/Aadha Main Aadhi Vo _ Bholaa_ Ajay Devgn, Tabu _ B Praak, Irshad Kamil, Ravi Basrur _ Bhushan Kumar.mp3'
    
  },
  {
    title: 'Kismat Ka To Yahi Fasana Hai', 
    artist: 'Bollywood Singer', 
    src: 'audios/Dekho Na Ye Kismat Ki Majburi ((Jhankar Song)) _ Kismat Ka To Yahi Fasana Hai _ Hindi Old Songs.mp3'
    
  },
  {
    title: 'Je Tainu Dhoop Lageya Ve', 
    artist: 'Rana Sotal, Rajat Nagpal', 
    src: 'audios/Lyrics_ Je Tainu Dhoop Lageya Ve _ Rito Riba _ Rohit K, Shivangi J _ Rana Sotal, Rajat Nagpal.mp3'
    
  },
  {
    title: 'O Bedardeya', 
    artist: 'Pritam,Arijit Singh, Amitabh B', 
    src: 'audios/O Bedardeya (Full Video) Tu Jhoothi Main Makkaar _ Ranbir, Shraddha _ Pritam,Arijit Singh, Amitabh B.mp3'
  },
  {
    title: 'Roj Roj Aankhon Tale', 
    artist: 'Asha Bhosle and R.D. Burman', 
    src: 'audios/Roj Roj Aankhon Tale - Mandakini _ Sanjay Dutt _ Asha Bhosle _ R.D. Burman.mp3'
  },
  {
    title: 'Tum Jo Mil Gaye Ho', 
    artist: 'Rishi Nityapragya', 
    src: 'audios/Tum Jo Mil Gaye Ho (with Lyrics)  - Rishi Nityapragya.mp3'
  },
  {
    title: 'Tera Chehra', 
    artist: 'Adnan Sami', 
    src: 'audios/Adnan Sami - Tera Chehra _ Best Of ADNAN SAMI ❤ Adnan Sami Top Hit Songs 🔥 Bollywood 2019 most song.mp3'
  }
];

let currentTrackIndex = 0;

// Load a track
function loadTrack(index) {
  const track = playlist[index];
  audio.src = track.src;
  songTitle.textContent = track.title;
  artist.textContent = track.artist;
//   albumArt.src = track.albumArt;
}

// Play or pause the audio
function togglePlayPause() {
    if (audio.paused) {
      audio.play();
      playPauseIcon.classList.remove('fa-play');
      playPauseIcon.classList.add('fa-pause');
      musicPlayer.classList.add('playing'); // Add class for rotation
    } else {
      audio.pause();
      playPauseIcon.classList.remove('fa-pause');
      playPauseIcon.classList.add('fa-play');
      musicPlayer.classList.remove('playing'); // Remove class to stop rotation
    }
  }

// Update progress bar
audio.addEventListener('timeupdate', () => {
  const progressPercent = (audio.currentTime / audio.duration) * 100;
  progress.value = progressPercent;
});

// Seek audio
progress.addEventListener('input', () => {
  const seekTime = (progress.value / 100) * audio.duration;
  audio.currentTime = seekTime;
});

// Play the previous track
function playPrev() {
  currentTrackIndex = (currentTrackIndex - 1 + playlist.length) % playlist.length;
  loadTrack(currentTrackIndex);
  audio.play();
  playPauseIcon.classList.remove('fa-play');
  playPauseIcon.classList.add('fa-pause');
}

// Play the next track
function playNext() {
  currentTrackIndex = (currentTrackIndex + 1) % playlist.length;
  loadTrack(currentTrackIndex);
  audio.play();
  playPauseIcon.classList.remove('fa-play');
  playPauseIcon.classList.add('fa-pause');
}

// Volume control
volumeSlider.addEventListener('input', () => {
  audio.volume = volumeSlider.value;
  if (audio.volume > 0) {
    volumeButton.innerHTML = '<i class="fas fa-volume-up"></i>';
  } else {
    volumeButton.innerHTML = '<i class="fas fa-volume-mute"></i>';
  }
});

// Mute/unmute volume
volumeButton.addEventListener('click', () => {
  if (audio.volume > 0) {
    audio.volume = 0;
    volumeSlider.value = 0;
    volumeButton.innerHTML = '<i class="fas fa-volume-mute"></i>';
  } else {
    audio.volume = 1;
    volumeSlider.value = 1;
    volumeButton.innerHTML = '<i class="fas fa-volume-up"></i>';
  }
});

// Event listeners
playPauseButton.addEventListener('click', togglePlayPause);
prevButton.addEventListener('click', playPrev);
nextButton.addEventListener('click', playNext);

// Load the first track on page load
loadTrack(currentTrackIndex);