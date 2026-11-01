// ==================== HAMBURGER MENU ====================
// Toggle mobile menu on and off
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.getElementById('nav-menu');

if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('show');
    });
}

// ==================== LIGHTBOX ====================
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

// Add click event to images with class clickable-img
document.querySelectorAll('.clickable-img').forEach(img => {
    img.addEventListener('click', function() {
        if(!lightbox) return;
        lightboxImg.src = this.src;
        lightbox.classList.add('show');
    });
});

// Close lightbox when clicking outside image or on the X
if(lightbox) {
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox || e.target.classList.contains('lightbox-close')) {
            lightbox.classList.remove('show');
        }
    });
}

// ==================== ACCORDION ====================
// Open/close FAQ items
document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', function() {
        const item = this.parentElement;
        const isOpen = item.classList.contains('open');
        
        // Close all others first
        document.querySelectorAll('.accordion-item').forEach(i => i.classList.remove('open'));
        
        // Open clicked if it was closed
        if (!isOpen) item.classList.add('open');
    });
});

// ==================== SEARCH FILTER ====================
// Filter products as user types
const searchInput = document.getElementById('product-search');
if (searchInput) {
    searchInput.addEventListener('input', function() {
        const term = this.value.toLowerCase();
        const cards = document.querySelectorAll('.product-card');
        
        cards.forEach(card => {
            const text = card.textContent.toLowerCase();
            card.style.display = text.includes(term) ? 'block' : 'none';
        });
    });
}

// ==================== ENQUIRY FORM ====================
const enquiryForm = document.getElementById('enquiry-form');
if (enquiryForm) {
    enquiryForm.addEventListener('submit', function(e) {
        e.preventDefault();
        let isValid = true;
        
        // Clear old errors
        document.querySelectorAll('.error-msg').forEach(el => el.classList.remove('show'));
        document.querySelectorAll('.invalid').forEach(el => el.classList.remove('invalid'));

        const name = document.getElementById('fullname');
        const email = document.getElementById('email');
        const type = document.getElementById('ordertype');
        const msg = document.getElementById('message');

        // Check fields
        if(name.value.trim().length < 2) {
            document.getElementById('fullname-error').classList.add('show');
            name.classList.add('invalid');
            isValid = false;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailRegex.test(email.value)) {
            document.getElementById('email-error').classList.add('show');
            email.classList.add('invalid');
            isValid = false;
        }

        if(msg.value.trim().length < 10) {
            document.getElementById('message-error').classList.add('show');
            msg.classList.add('invalid');
            isValid = false;
        }

        // Show success message if all good
        if(isValid) {
            const successBox = document.getElementById('form-success');
            successBox.innerHTML = `<strong>Thank you, ${name.value}!</strong><br>Your enquiry about a <strong>${type.options[type.selectedIndex].text}</strong> has been sent. We will reply to ${email.value} within 24 hours.`;
            successBox.classList.add('show');
            enquiryForm.reset();
            successBox.scrollIntoView({ behavior: 'smooth' });
        }
    });
}

// ==================== CONTACT FORM ====================
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        let isValid = true;
        
        document.querySelectorAll('.error-msg').forEach(el => el.classList.remove('show'));
        document.querySelectorAll('.invalid').forEach(el => el.classList.remove('invalid'));

        const name = document.getElementById('c-name');
        const email = document.getElementById('c-email');
        const msg = document.getElementById('c-message');

        if(name.value.trim() === '') {
            document.getElementById('c-name-error').classList.add('show');
            isValid = false;
        }
        if(email.value.trim() === '') {
            document.getElementById('c-email-error').classList.add('show');
            isValid = false;
        }
        if(msg.value.trim() === '') {
            document.getElementById('c-message-error').classList.add('show');
            isValid = false;
        }

        // Build mailto link and open it
        if(isValid) {
            const body = `Name: ${name.value}%0D%0AEmail: ${email.value}%0D%0A%0D%0AMessage:%0D%0A${msg.value}`;
            const mailtoLink = `mailto:hello@ayobabakes.co.za?subject=Website Contact from ${name.value}&body=${body}`;
            
            const successBox = document.getElementById('form-success');
            successBox.innerHTML = `<strong>Message ready!</strong><br>Your email app should open now. If not, <a href="${mailtoLink}">click here</a>.`;
            successBox.classList.add('show');
            
            window.location.href = mailtoLink;
            contactForm.reset();
        }
    });
}

// ==================== LEAFLET MAP ====================
// Only run if map div exists
if (document.getElementById('map')) {
    window.addEventListener('load', function() {
        if (typeof L === 'undefined') return;
        
        // Center on Polokwane
        const map = L.map('map').setView([-23.9045, 29.4689], 11);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; OpenStreetMap'
        }).addTo(map);

        // Marker 1: City Centre
        L.marker([-23.9045, 29.4520]).addTo(map)
            .bindPopup('<strong>City Centre Store</strong><br>45 Landdros Mare St');

        // Marker 2: Mall of the North (Bendor)
        L.marker([-23.8900, 29.5100]).addTo(map)
            .bindPopup('<strong>Mall of the North Kiosk</strong><br>Shop 12, Bendor');
    });
}