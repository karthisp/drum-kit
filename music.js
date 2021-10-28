document.addEventListener('keydown', function (e) {
    let key = document.querySelector(`p[data-keycode="${e.keyCode}"]`);
    let audio = document.querySelector(`audio[data-keycode="${e.keyCode}"]`);

    if (!audio) return

    key.parentElement.classList.add('playing')
    audio.currentTime = 0;
    audio.play();

    setTimeout(() => {
        key.parentElement.classList.remove('playing')
    }, 500)

})