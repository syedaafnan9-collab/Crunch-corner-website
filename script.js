// 1. FIXED SMOOTH SCROLL - Sirf # links, .html links free
document.querySelectorAll('a[href^="#"]:not([href$=".html"])').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// 2. Sticky navbar (same rakho)
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('nav');
    if (window.scrollY > 100) {
        navbar.classList.add('shadow-lg', 'bg-dark');
    } else {
        navbar.classList.remove('shadow-lg', 'bg-dark');
    }
});

// 3. Form validation (same rakho)
document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = this.querySelector('input[type="email"]')?.value;
        if (email && email.includes('@')) {
            alert('✅ Form submitted successfully!');
            this.reset();
        } else {
            alert('❌ Please enter valid email!');
        }
    });
});

// 4. Counter animation (same rakho)
function animateCounters() {
    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-count');
        const count = +counter.innerText;
        const increment = target / 100;
        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(animateCounters, 20);
        }
    });
}

// 5. Mobile toggle (same rakho)
document.getElementById('mobile-toggle')?.addEventListener('click', function() {
    document.querySelector('.navbar-collapse').classList.toggle('show');
});
