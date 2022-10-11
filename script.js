const text = document.querySelector('.text')
const container = document.querySelector('.container')
const totalTime = 16000;
const period = totalTime / 4;

const startGame = () => {
    text.textContent = 'Breath in';
    container.className = 'container grow'
    setTimeout(() => {
        text.textContent = 'Hold';

        setTimeout(() => {
        text.textContent = 'Breath out';
        container.className = 'container shrink'
        setTimeout(() => {
            text.textContent = 'Hold';
        }, period)
        }, period)
    }, period)
}

startGame();
setInterval(startGame,totalTime )