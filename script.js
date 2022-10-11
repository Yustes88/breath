const text = document.querySelector('.text')
const totalTime = 16000;
const period = totalTime / 4;

const startGame = () => {
    text.textContent = 'Breath in';

    setTimeout(() => {
        text.textContent = 'Hold';

        setTimeout(() => {
        text.textContent = 'Breath out';

        setTimeout(() => {
            text.textContent = 'Hold';
        }, period)
        }, period)
    }, period)
}

startGame();
setInterval(startGame,totalTime )