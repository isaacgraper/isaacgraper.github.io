// goTopBtn
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function animateLoop() {
    while (true) {
        await anime({
            targets: '#goTopBtn',
            translateY: [
              '-10px',
              '0px',
              '-10px',
            ],
            easing: 'easeInOutSine',
            duration: 500,
            direction: 'alternate'
        }).finished;

        await sleep(2000);
    }
}

animateLoop();

// circle animation
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 2)) + min;
}

function animateCircle(target) {
    anime({
        targets: target,
        translateX: () => {
            return getRandomInt(-200, 200);
        },
        translateY: () => {
            return getRandomInt(-100, 100);
        },
        duration: () => {
            return getRandomInt(2000, 3600);
        },
        easing: 'easeInOutQuad',
        complete: () => {
            animateCircle(target);
        }
    });
}

animateCircle('.dark-circle');
animateCircle('.light-circle');

// page animation

anime({
    targets: '.title',
    translateX: [
        -250,
        0
    ],
    duration: 500,
    easing: 'easeInOutSine', 
})

anime({
    targets: 'p',
    translateX: [
        -300,
        0
    ],
    duration: 400,
    easing: 'easeInOutSine', 
})