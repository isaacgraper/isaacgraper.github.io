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

// //Blob
// anime({
//     targets: '.blob-light',
//     translateX: [
//         { value: -20, duration: 2000 },
//         { value: 20, duration: 2000 }
//     ],
//     translateY: [
//         { value: -10, duration: 2000 },
//         { value: 10, duration: 2000 }
//     ],
//     easing: 'easeInOutSine',
//     loop: true,
//     direction: 'alternate'
// });

// anime({
//     targets: '.blob-dark',
//     translateX: [
//         { value: 100, duration: 500 },
//         { value: -100, duration: 500 },
//         { value: 100, duration: 500 },
//         { value: -100, duration: 500 }
//     ],
//     translateY: [
//         { value: 50, duration: 500 },
//         { value: -50, duration: 500 },
//         { value: 50, duration: 500 },
//         { value: -50, duration: 500 }
//     ],
//     easing: 'easeInOutSine',
//     loop: true,
//     direction: 'alternate'
// });


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function animateBlob(target) {
    anime({
        targets: target,
        translateX: () => {
            return getRandomInt(-200, 200);
        },
        translateY: () => {
            return getRandomInt(-100, 100);
        },
        duration: () => {
            return getRandomInt(2000, 4000);
        },
        easing: 'easeInOutSine',
        complete: () => {
            animateBlob(target);
        }
    });
}

animateBlob('.blob-light');
animateBlob('.blob-dark');