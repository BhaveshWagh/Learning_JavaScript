document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.btn');
    const stopButton = document.querySelector('.stop');
    const audioPlayer = document.getElementById('audioPlayer');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const soundFile = this.getAttribute('data-sound');
            playSound(soundFile);
        });
    });

    stopButton.addEventListener('click', function() {
        stopSound();
    });

    function playSound(soundFile) {
        audioPlayer.src = soundFile;
        audioPlayer.play();
    }

    function stopSound() {
        audioPlayer.pause();
        audioPlayer.currentTime = 0;
    }
});
