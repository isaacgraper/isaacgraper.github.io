
// scroll arrow function

window.addEventListener('scroll', function() {
    const content = document.querySelector('.content');
    const contentTop = content.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (contentTop < windowHeight / 1.5) {
        content.style.opacity = '1';
    }
});

window.addEventListener('scroll', function() {
    const boxes = document.querySelectorAll('.box');

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (boxTop < windowHeight * 0.75) {
            box.classList.add('in-view');
        } else {
            box.classList.remove('in-view');
        }
    });
});