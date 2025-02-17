document.querySelector('.btn').addEventListener('click', () => {
    const clickSound = new Audio('sounds/dice.mp3');
    clickSound.play();

    const button = document.querySelector('.btn');
    button.classList.add('pressed');

    setTimeout(() => {
        button.classList.remove('pressed');
    }, 100);

    rollDice();
});

function rollDice() {
    const duration = 3000;
    const interval = 70;
    const startTime = Date.now();

    const intervalId = setInterval(() => {
        const randomNumber1 = Math.floor(Math.random() * 6) + 1;
        const randomNumber2 = Math.floor(Math.random() * 6) + 1;

        document.querySelector('img.img1').src = `images/dice${randomNumber1}.png`;
        document.querySelector('img.img2').src = `images/dice${randomNumber2}.png`;

        if (Date.now() - startTime >= duration) {
            clearInterval(intervalId);
            console.log('Finished executing commands.');
        }
    }, interval);
}
