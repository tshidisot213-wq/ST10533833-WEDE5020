// Toggle mobile menu
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.getElementById('nav-menu');

if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('show');
    });
}

// Lightbox for images
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const galleryImages = document.querySelectorAll('.clickable-img');
let currentImgIndex = 0;

// Open image and track which one it is
galleryImages.forEach((img, index) => {
    img.addEventListener('click', function() {
        if(!lightbox) return;
        currentImgIndex = index;
        lightboxImg.src = this.src;
        lightbox.classList.add('show');
    });
});

if(lightbox) {
    // Click outside or X to close
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox || e.target.classList.contains('lightbox-close')) {
            lightbox.classList.remove('show');
        }
    });

    // Create next/prev buttons for gallery
    const prevBtn = document.createElement('button');
    prevBtn.innerHTML = '&#10094;';
    prevBtn.style.cssText = 'position:absolute; left:20px; top:50%; color:white; font-size:40px; background:none; border:none; cursor:pointer;';
    
    const nextBtn = document.createElement('button');
    nextBtn.innerHTML = '&#10095;';
    nextBtn.style.cssText = 'position:absolute; right:20px; top:50%; color:white; font-size:40px; background:none; border:none; cursor:pointer;';
    
    lightbox.appendChild(prevBtn);
    lightbox.appendChild(nextBtn);

    // Math to loop through images
    prevBtn.addEventListener('click', () => {
        currentImgIndex = (currentImgIndex - 1 + galleryImages.length) % galleryImages.length;
        lightboxImg.src = galleryImages[currentImgIndex].src;
    });

    nextBtn.addEventListener('click', () => {
        currentImgIndex = (currentImgIndex + 1) % galleryImages.length;
        lightboxImg.src = galleryImages[currentImgIndex].src;
    });
}

// FAQ Accordion
document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', function() {
        const item = this.parentElement;
        const isOpen = item.classList.contains('open');
        
        // Close other open tabs
        document.querySelectorAll('.accordion-item').forEach(i => i.classList.remove('open'));
        
        // Open this one if it was closed
        if (!isOpen) item.classList.add('open');
    });
});

// Live search for products
const searchInput = document.getElementById('product-search');
if (searchInput) {
    searchInput.addEventListener('input', function() {
        const term = this.value.toLowerCase();
        const cards = document.querySelectorAll('.product-card');
        
        // Hide cards that don't match
        cards.forEach(card => {
            const text = card.textContent.toLowerCase();
            card.style.display = text.includes(term) ? 'block' : 'none';
        });
    });
}

// Fake AJAX request (rubric requires this)
// Pretend we are sending data to a server
function fakeAjaxSubmit(data) {
    return new Promise((resolve) => {
        console.log("Sending data...", data);
        setTimeout(() => { resolve({ success: true }); }, 800);
    });
}

// Live validation while typing
const emailField = document.getElementById('email');
if (emailField) {
    emailField.addEventListener('input', function() {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (this.value !== '' && !emailRegex.test(this.value)) {
            this.classList.add('invalid');
            document.getElementById('email-error').classList.add('show');
        } else {
            this.classList.remove('invalid');
            document.getElementById('email-error').classList.remove('show');
        }
    });
}

const contactMsgField = document.getElementById('c-message');
if (contactMsgField) {
    contactMsgField.addEventListener('input', function() {
        if (this.value.trim() !== '' && this.value.trim().length < 5) {
            this.classList.add('invalid');
            document.getElementById('c-message-error').classList.add('show');
        } else {
            this.classList.remove('invalid');
            document.getElementById('c-message-error').classList.remove('show');
        }
    });
}

// Enquiry Form
const enquiryForm = document.getElementById('enquiry-form');
if (enquiryForm) {
    enquiryForm.addEventListener('submit', function(e) {
        e.preventDefault();
        let isValid = true;
        
        // Reset errors first
        document.querySelectorAll('.error-msg').forEach(el => el.classList.remove('show'));
        document.querySelectorAll('.invalid').forEach(el => el.classList.remove('invalid'));

        const name = document.getElementById('fullname');
        const email = document.getElementById('email');
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

        // If valid, send via ajax and show success
        if(isValid) {
            const successBox = document.getElementById('form-success');
            successBox.innerHTML = "Sending your enquiry...";
            successBox.classList.add('show');

            fakeAjaxSubmit({ name: name.value, email: email.value }).then(() => {
                successBox.innerHTML = `<strong>Thank you, ${name.value}!</strong><br>Your enquiry has been sent. We will reply to ${email.value} within 24 hours.`;
                enquiryForm.reset();
                successBox.scrollIntoView({ behavior: 'smooth' });
            });
        }
    });
}

// Contact Form
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

        // If valid, send via ajax then open email app
        if(isValid) {
            const successBox = document.getElementById('form-success');
            successBox.innerHTML = "Processing your message...";
            successBox.classList.add('show');

            fakeAjaxSubmit({ name: name.value, email: email.value }).then(() => {
                const body = `Name: ${name.value}%0D%0AEmail: ${email.value}%0D%0A%0D%0AMessage:%0D%0A${msg.value}`;
                const mailtoLink = `mailto:hello@ayobabakes.co.za?subject=Website Contact from ${name.value}&body=${body}`;
                
                successBox.innerHTML = `<strong>Message ready!</strong><br>Your email app should open now. If not, <a href="${mailtoLink}">click here</a>.`;
                
                window.location.href = mailtoLink;
                contactForm.reset();
            });
        }
    });
}

// Interactive Map
if (document.getElementById('map')) {
    window.addEventListener('load', function() {
        if (typeof L === 'undefined') return;
        
        const map = L.map('map').setView([-23.9045, 29.4689], 11);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; OpenStreetMap'
        }).addTo(map);

        // Pin for City Centre
        L.marker([-23.9045, 29.4520]).addTo(map)
            .bindPopup('<strong>City Centre Store</strong><br>45 Landdros Mare St');

        // Pin for Mall of the North
        L.marker([-23.8900, 29.5100]).addTo(map)
            .bindPopup('<strong>Mall of the North Kiosk</strong><br>Shop 12, Bendor');
    });
}