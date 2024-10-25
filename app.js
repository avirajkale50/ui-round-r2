// Mobile menu toggle
const navLinks = document.querySelector('.nav-links');
const menuToggle = document.createElement('button');
menuToggle.classList.add('menu-toggle');
menuToggle.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>';
menuToggle.setAttribute('aria-label', 'Toggle menu');

document.querySelector('nav .container').insertBefore(menuToggle, navLinks);

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

// Close menu when clicking outside
document.addEventListener('click', (event) => {
    if (!event.target.closest('nav') && navLinks.classList.contains('show')) {
        navLinks.classList.remove('show');
    }
});

// Theme toggle functionality
const themeToggle = document.getElementById('theme-toggle');
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

function setTheme(theme) {
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
}

themeToggle.addEventListener('click', () => {
    const currentTheme = document.body.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
});

// Set initial theme
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    setTheme(savedTheme);
} else {
    setTheme(prefersDarkScheme.matches ? 'dark' : 'light');
}

// Listen for changes in system theme
prefersDarkScheme.addListener((e) => {
    const newTheme = e.matches ? 'dark' : 'light';
    setTheme(newTheme);
});

// Rest of your JavaScript code for voice recognition and search functionality
// ...