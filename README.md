# Ayoba Bakes Website
SITEMAP
<img width="1536" height="1024" alt="image" src="https://github.com/user-attachments/assets/5f97d064-5088-44c2-88db-e5a893452ad3" />

## Student Information
- Name: Tshidiso Moloto Maroga
- Student Number: ST10533833
- Module: WEDE5020
- Date: September 2026
https://ayobabakery.netlify.app
## About This Project
Ayoba Bakes is a 5-page website for a family bakery in Polokwane, Limpopo. The site shows the shop, the products, and contact details for two locations.

Part 1 built the HTML structure. Part 2 added CSS styling and responsive design.

## Pages
| Page | File | Content |
|------|------|---------|
| Home | index.html | Welcome intro, why people love us, shop images |
| About | about.html | History, mission, vision, team |
| Products | products.html | Breads, pastries, cakes with prices |
| Enquiry | enquiry.html | Contact form for custom orders |
| Contact | contact.html | Phone, email, hours, two store locations with maps |


## Responsive Design
The site works on desktop, tablet, and mobile.

- Desktop: Full horizontal navigation, wide content
- <img width="1915" height="1036" alt="image" src="https://github.com/user-attachments/assets/6ed91e71-2a4a-472e-934d-dc9ab202d814" />

- Tablet (768px and below): Nav wraps, smaller fonts, tighter spacing
- <img width="862" height="827" alt="image" src="https://github.com/user-attachments/assets/ba120c97-717f-45f7-9a39-0763269229fa" />

- Mobile (480px and below): Nav stacks vertically, full-width buttons, headings shrink
- <img width="781" height="763" alt="image" src="https://github.com/user-attachments/assets/f6b0f71a-653d-4028-a2ab-86246ceab88d" />



All images use max-width 100% so they never overflow. Headings use clamp() so text scales smoothly between sizes.

## Changelog

### Part 1 fixes
- Renamed `Images/` folder to lowercase `images/` so the path matches convention
- Expanded comments throughout to explain what each block does, not just label it
- Added `class="active"` to the current page link on every nav for visual feedback
- Tightened up indentation and removed redundant comments
- Kept all semantic tags (header, nav, main, footer) intact

### Part 2
- Created css/style.css and linked it to all 5 HTML pages
- Added Google Fonts import for Playfair Display and Open Sans
- Added CSS reset
- Set base body font, size, line-height, colour, background
- Styled headings with clamp() for fluid scaling
- Styled links with hover and focus states
- Styled header with dark brown background and gold accent
- Styled nav with horizontal layout, gold hover, and active state
- Styled main content with max-width and horizontal padding
- Styled buttons with hover lift and active press
- Styled forms with padded fields, gold borders, focus glow
- Styled iframes with rounded border and shadow
- Styled footer with dark background and centred text
- Added media query at 768px for tablet
- Added media query at 480px for mobile
- Added media query at 360px for small phones
- Nav stacks vertically on mobile with full-width tap targets
- Buttons go full width on mobile
- Headings, body text, and images all scale properly across breakpoints

## References
Google Fonts. (2026). Playfair Display. https://fonts.google.com/specimen/Playfair+Display (Accessed: 20 September 2026)

Google Fonts. (2026). Open Sans. https://fonts.google.com/specimen/Open+Sans (Accessed: 20 September 2026)

W3Schools. (2026). CSS Tutorial. https://www.w3schools.com/css/ (Accessed: 20 September 2026)

W3Schools. (2026). CSS Media Queries. https://www.w3schools.com/css/css_rwd_mediaqueries.asp (Accessed: 20 September 2026)

W3Schools. (2026). CSS Flexbox. https://www.w3schools.com/css/css3_flexbox.asp (Accessed: 20 September 2026)

Mozilla Developer Network. (2026). Responsive Design. https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design (Accessed: 20 September 2026)

## Contact
- Name: Tshidiso Moloto Maroga
- Student Number: ST10533833
PART 3 READ.ME
- Assessment: POE Parts 1, 2 and 3

## Live Website
https://ayobabakery.netlify.app


## Project Overview
This is a 5-page website for Ayoba Bakes, a bakery in Polokwane. It includes Home, About Us, Products, Enquiry, and Contact pages.

## Pages
- **Home:** Welcome text, images, why people love us.
- **About Us:** History, interactive FAQ accordion, team.
- **Products:** Filterable product grid using CSS Grid.
- **Enquiry:** Form with JavaScript validation.
- **Contact:** Interactive Leaflet map and email form.

## Part 2 Feedback Fixes
- Added CSS Grid layout to the Products page for better alignment.
- Added `srcset` and `sizes` to images for responsive image loading.
- Fixed the navigation to strictly be one single `<nav>` tag in the header.
- Renamed all folders to lowercase (`css/` and `images/`).

## Part 3 Features
- **Interactive Elements:** FAQ Accordion on the About page and an image Lightbox.
- **Interactive Map:** Replaced iframes with a real Leaflet JS map showing two markers (City Centre and Mall of the North).
- **Dynamic Content:** Search bar on the Products page filters items live.
- **SEO:** Added unique title tags, meta descriptions, meta keywords, and `robots.txt` + `sitemap.xml`.
- **Form Validation:** Both forms validate input and provide immediate error messages. The contact form generates an email using `mailto`.

## Changelog
- **Part 1:** Created HTML structure, navigation, and basic content.
- **Part 2:** Added CSS, Google Fonts, responsive media queries (768px, 480px, 360px).
- **Part 3:**

- **Fixes from Part 2:** Added a hamburger menu for mobile screens to fix the missing navigation issue. Added CSS Grid to the products page and `srcset` to images for better responsiveness.
- **Interactive Map:** Replaced the static iframe maps with a working Leaflet map on the contact page, showing markers for both the City Centre and Mall of the North stores.
- **Lightbox Gallery:** Added JavaScript to allow users to click product and hero images to view them larger in a full-screen modal.
- **Accordion FAQ:** Added an interactive FAQ accordion on the About Us page so users can expand and collapse questions.
- **Dynamic Search:** Added a live search bar on the Products page that filters the product cards as the user types.
- **Form Validation:** Added JavaScript validation to both the Enquiry and Contact forms. It now shows error messages if fields are empty or invalid.
- **Form Processing:** The Contact form now generates a `mailto:` link to send the email. The Enquiry form shows a dynamic success message when submitted.
- **SEO Additions:** Added unique title tags, meta descriptions, and meta keywords to all 5 HTML pages. Created `robots.txt` and `sitemap.xml` files in the root folder.
- **Deployment:** Deployed the final website to Netlify.

## References
W3Schools. (2026). *HTML Tutorial*. Available at: https://www.w3schools.com/html/ (Accessed: 1 November 2026)
W3Schools. (2026). *CSS Tutorial*. Available at: https://www.w3schools.com/css/ (Accessed: 1 November 2026)
W3Schools. (2026). *JavaScript Form Validation*. Available at: https://www.w3schools.com/js/js_validation.asp (Accessed: 1 November 2026)
Leaflet. (2026). *Leaflet Documentation*. Available at: https://leafletjs.com/ (Accessed: 1 November 2026)
