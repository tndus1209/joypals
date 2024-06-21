document.addEventListener('DOMContentLoaded', function() {
    gsap.registerPlugin(ScrollTrigger);

    const section2 = document.getElementById('section2');
    const logo2 = document.querySelector('.logo2');
    const message = document.querySelector('.message');

    gsap.fromTo(logo2, {
        y: 0,
        opacity: 0
    }, {
        y: '30vh',
        opacity: 0.3,
        ease: 'none',
        scrollTrigger: {
            trigger: section2,
            start: 'top bottom',
            end: 'top top',
            scrub: true
        }
    });

    gsap.fromTo(message, {
        y: '150%',
        opacity: 0
    }, {
        y: '0%',
        opacity: 1,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: section2,
            start: 'top bottom',
            end: 'top top',
            scrub: true
        }
    });

    gsap.to(message, {
        opacity: 0,
        y: '-150%',
        ease: 'power3.out',
        scrollTrigger: {
            trigger: section2,
            start: 'center center',
            end: 'top top',
            scrub: true
        }
    });

    gsap.to(section2, {
        height: '100vh',
        ease: 'none',
        scrollTrigger: {
            trigger: section2,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
        }
    });
});

function openBox(imageSrc, text) {
    var popup = document.getElementById('popup');
    var popupContent1 = document.getElementById('popup-content');
    var popupContent2 = document.getElementById('popup-content2');
    var popupContent3 = document.getElementById('popup-content3');

    popupContent1.style.display = 'none';
    popupContent2.style.display = 'none';
    popupContent3.style.display = 'none';

    if (imageSrc.includes('사조팝업')) {
        const popupContent1 = document.getElementById('popup-content');
        popupContent1.style.display = 'block';
        document.getElementById('popup-image').src = imageSrc;
        document.getElementById('popup-maintext').textContent = '사조와 갈맹';
        document.getElementById('popup-text').innerHTML = text;
    } else if (imageSrc.includes('어글리프렌즈')) {
        const popupContent2 = document.getElementById('popup-content2');
        popupContent2.style.display = 'block';
        document.getElementById('popup-image2').src = imageSrc;
        document.getElementById('popup-maintext2').textContent = '어글리프렌즈';
        document.getElementById('popup-text4').innerHTML = text;
    } else if (imageSrc.includes('해길')) {
        const popupContent3 = document.getElementById('popup-content3');
        popupContent3.style.display = 'block';
        document.getElementById('popup-image3').src = imageSrc;
        document.getElementById('popup-maintext3').textContent = '해길과 썬';
        document.getElementById('popup-text8').innerHTML = text;
    }
    popup.style.display = 'flex';
}

function closeBox() {
    var popup = document.getElementById('popup');
    popup.style.display = 'none';
}