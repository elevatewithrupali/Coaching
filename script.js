// Function to handle service selection and scroll to contact form
function selectService(serviceName) {
    const serviceSelect = document.getElementById('service-select');
    const goalTextarea = document.getElementById('goal');
    const contactSection = document.getElementById('contact');

    if (serviceSelect) {
        serviceSelect.value = serviceName;
    }

    if (goalTextarea) {
        goalTextarea.value = `I am interested in the ${serviceName} package. `;
        goalTextarea.focus();
    }

    // Smooth scroll to contact section
    contactSection.scrollIntoView({ behavior: 'smooth' });
}

// Check for URL parameters to pre-fill form (useful for links from resources page)
window.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const service = urlParams.get('service');
    if (service) {
        selectService(service);
    }
});

// Simple animation on scroll for service cards
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.service-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.6s ease-out';
    observer.observe(card);
});
