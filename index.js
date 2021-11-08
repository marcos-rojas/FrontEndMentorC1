let musicButton = document.querySelector(".music");

function playSong(e){
    let songId = e.target.dataset.key;
    let song = document.querySelector(`audio[data-key="${songId}"]`);
    song.currentTime = 0;
    song.play();
}
musicButton.addEventListener('click', playSong);