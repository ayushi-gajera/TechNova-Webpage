// Dark Mode Toggle
const toggleDarkMode = () => {
    document.body.classList.toggle('dark');
    const mode = document.body.classList.contains('dark') ? 'Dark' : 'Light';
    localStorage.setItem('theme', mode);
};

document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'Dark') {
        document.body.classList.add('dark');
    }

    const toggleButton = document.querySelector('.dark-mode-toggle');
    toggleButton.addEventListener('click', toggleDarkMode);

    // Testimonial Slider
    const slider = document.querySelector('.testimonial-slider');
    let isDown = false;
    let startX;
    let scrollLeft;

    slider.addEventListener('mousedown', (e) => {
        isDown = true;
        slider.classList.add('active');
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    });

    slider.addEventListener('mouseleave', () => {
        isDown = false;
        slider.classList.remove('active');
    });

    slider.addEventListener('mouseup', () => {
        isDown = false;
        slider.classList.remove('active');
    });

    slider.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 2;
        slider.scrollLeft = scrollLeft - walk;
    });

    // Form Validation
    const form = document.querySelector('.contact form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = form.querySelector('input[name="name"]').value;
        const email = form.querySelector('input[name="email"]').value;
        const message = form.querySelector('textarea[name="message"]').value;

        if (!name || !email || !message) {
            alert('All fields are required!');
            return;
        }

        alert('Thank you for your message!');
        form.reset();
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.testimonial-slider');
    const testimonials = document.querySelectorAll('.testimonial');
    let currentIndex = 0;

    function showNextTestimonial() {
        currentIndex = (currentIndex + 1) % testimonials.length;

        slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    setInterval(showNextTestimonial, 3000);

    window.addEventListener('resize', () => {
        slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');

    hamburgerMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});

