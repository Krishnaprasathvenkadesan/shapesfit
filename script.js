document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    // Toggle mobile menu
    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navLinks.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
            navLinks.classList.remove('active');
        }
    });

    // Close mobile menu when window is resized above mobile breakpoint
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            navLinks.classList.remove('active');
        }
    });
});

// Add this to your existing script.js file

document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tab');
    const pricingContents = document.querySelectorAll('.pricing-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const tabId = tab.getAttribute('data-tab');

            // Remove active class from all tabs and contents
            tabs.forEach(t => t.classList.remove('active'));
            pricingContents.forEach(content => content.classList.remove('active'));

            // Add active class to clicked tab and corresponding content
            tab.classList.add('active');
            document.getElementById(tabId).classList.add('active');
        });
    });
});

//services//
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.service-card, .subscription-card');

    cards.forEach(card => {
        card.addEventListener('mouseover', () => {
            card.style.transform = 'rotate(0) scale(1.05)';
        });

        card.addEventListener('mouseout', () => {
            card.style.transform = 'rotate(1deg) scale(1)';
        });
    });
});