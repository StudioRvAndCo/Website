const animationDuration = 2600;
const frameDuration = 1000 / 60;
const totalFrames = Math.round(animationDuration / frameDuration);
const easeOutQuad = t => t * (2 - t);

const animateCountUp = el => {
    let frame = 0;
    const countTo = parseInt(el.innerHTML, 10);
    const counter = setInterval(() => {
        frame++;
        const progress = easeOutQuad(frame / totalFrames);
        const currentCount = Math.round(countTo * progress);

        if (parseInt(el.innerHTML, 10) !== currentCount) {
            el.innerHTML = currentCount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        }

        if (frame === totalFrames) {
            clearInterval(counter);
        }
    }, frameDuration);
};

function reveal() {
    let reveals = document.querySelectorAll(".reveal");

    for (let i = 0; i < reveals.length; i++) {
        let windowHeight = window.innerHeight;
        let elementTop = reveals[i].getBoundingClientRect().top;
        let elementVisible = 44;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");

            if (i === 6) {
                window.removeEventListener("scroll", reveal);
            }
        }
    }
}

window.onload = () => {
    reveal();
    window.addEventListener("scroll", reveal);

    // Smooth scroll to anchor
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            window.scroll({
                top: (document.querySelector(this.getAttribute('href')).offsetTop - 60),
                left: 0,
                behavior: 'smooth'
            })
        });
    });

    // Add shadow on play
    const video = document.querySelector('video');
    video.onplay = () => {
        video.style.boxShadow = "0 11px 15px -7px rgb(0 0 0 / 20%), 0 24px 38px 3px rgb(0 0 0 / 14%), 0 9px 46px 8px rgb(0 0 0 / 12%)";
        video.style.height = "100%";
    };

    document.querySelectorAll('.countup').forEach(animateCountUp);
    new Splide('.splide', {
        speed    : 800,
        type     : 'loop',
        interval : 7000,
        autoplay : true,
        lazyLoad : 'sequential',
        height   : 240
    }).mount();

    const mobile_menu = document.getElementById("mobile_menu");
    const nav = document.getElementsByClassName("dropdown")[0];
    mobile_menu.addEventListener('click', () => {
        if (nav.classList.contains("open")) {
            nav.classList.remove('open');
        } else {
            nav.classList.add('open');
        }
    })
}