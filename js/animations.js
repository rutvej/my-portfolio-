function initScrollReveal() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => {
        observer.observe(el);
    });
}

function initTypingEffect(element) {
    if (!element) return;
    
    const words = window.PORTFOLIO_DATA.personal.subtitles;
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let timeoutId;

    function type() {
        const currentWord = words[wordIndex];
        
        if (isDeleting) {
            element.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
        } else {
            element.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
        }

        let typeSpeed = 60;

        if (isDeleting) {
            typeSpeed = 40;
        }

        if (!isDeleting && charIndex === currentWord.length) {
            // Pause at end of word
            typeSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            typeSpeed = 500;
        }

        timeoutId = setTimeout(type, typeSpeed);
    }

    // Start typing
    type();
    
    // Return a cleanup function if needed
    return () => clearTimeout(timeoutId);
}

function initSmoothScroll() {
    document.addEventListener('click', function(e) {
        const target = e.target.closest('a[href^="#/"]');
        if (target) {
            // Internal router handles hash routing, so we don't necessarily 
            // need to override window.scrollTo here unless there are in-page anchors
            return;
        }
        
        const anchor = e.target.closest('a[href^="#"]:not([href^="#/"])');
        if (anchor) {
            e.preventDefault();
            const id = anchor.getAttribute('href');
            if (id === '#') return;
            
            const element = document.querySelector(id);
            if (element) {
                element.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
    });
}

window.initScrollReveal = initScrollReveal;
window.initTypingEffect = initTypingEffect;
window.initSmoothScroll = initSmoothScroll;
