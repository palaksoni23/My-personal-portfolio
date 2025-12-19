// Smooth scrolling for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Theme toggle
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    themeToggle.textContent = document.body.classList.contains('dark') ? 'Light Mode' : 'Dark Mode';
});

// Scroll-triggered animations using Intersection Observer
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animationPlayState = 'running'; // Trigger CSS animations
        }
    });
}, observerOptions);

// Observe all sections and skill bars
document.querySelectorAll('section, .skill-bar').forEach(el => {
    el.style.animationPlayState = 'paused'; // Pause initially
    observer.observe(el);
});

// Form submission (basic - sends email; for production, use a backend)
document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Message sent! (In a real site, this would connect to a server.)');
    e.target.reset();
});

// Skill bar animation on scroll
const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.querySelector('.fill').style.width = entry.target.querySelector('.fill').style.width; // Trigger transition
        }
    });
});
document.querySelectorAll('.skill-bar').forEach(bar => skillObserver.observe(bar));