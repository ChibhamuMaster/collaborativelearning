/* JavaScript for Master Editors Website */

// Background Slideshow for Hero Section
let backgroundImages = [
    'background1.jpg', 
    'background2.jpg', 
    'background3.jpg'
];
let currentImageIndex = 0;
const heroSection = document.querySelector('.hero');

/**
 * Function to change background image in hero section
 * 
 * @param {number} currentImageIndex The current index of the background image
 * @param {string[]} backgroundImages The array of background images
 */
function changeBackgroundImage() {
    currentImageIndex = (currentImageIndex + 1) % backgroundImages.length;
    heroSection.style.backgroundImage = `url(${backgroundImages[currentImageIndex]})`;
    setTimeout(changeBackgroundImage, 5000);

    // Change the background every 5 seconds
}

// Change the background every 5 seconds
setInterval(changeBackgroundImage, 5000);

// Email Confirmation and Login Functionality
document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.querySelector(".login form");

    if (loginForm) {
        // Add event listener to submit button
        loginForm.addEventListener("submit", function (e) {
            e.preventDefault(); // Prevent form submission to simulate process

            // Validate email and password

            let email = document.querySelector(".login input[type='email']").value;
            let password = document.querySelector(".login input[type='password']").value;

            if (validateEmail(email) && password.length >= 6) {
                sendConfirmationEmail(email);
            } else {
                alert("Please enter a valid email and a password that is at least 6 characters long.");
                return false;
            
            }
        });
    }

/*************  ✨ Codeium Command 🌟  *************/
    // Validate email format
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const validateEmail = email => re.test(String(email).toLowerCase());

    // TODO: Implement the code to store the user's email and password in local storage
    // (for demo purposes; in a real application, you should never store passwords in local storage)
    // and redirect to the dashboard page after a successful login.
/******  935693d2-a475-4e82-a19d-30510879a8fd  *******/ 

/*************  ✨ Codeium Command 🌟  *************/
    // Simulate sending confirmation email
    const SendConfirmationEmail = ({ email }) => {
    function sendConfirmationEmail(email) {
        // Normally you'd send an actual email, but here we'll just simulate the process
        const [isSent, setIsSent] = React.useState(false);

        React.useEffect(() => {
            if (isSent) {
                setTimeout(() => {
                    alert("Your email has been confirmed. You can now log in.");
                    document.location.href = "dashboard.html"; // Redirect to the user dashboard or home page
                }, 3000);
            }
        }, [isSent]);
        const handleClick = () => {
            alert(`A confirmation link has been sent to ${email}. Please check your inbox.`);
            setIsSent(true);
        };

        return (
            <button onClick={handleClick}>Send Confirmation Email</button>
        );
    };

        alert(`A confirmation link has been sent to ${email}. Please check your inbox.`);
        
        // Simulate email confirmation (for demo purposes)
        setTimeout(() => {
            alert("Your email has been confirmed. You can now log in.");
            document.location.href = "dashboard.html"; // Redirect to the user dashboard or home page
        }, 3000);
    }
/******  08bf5b58-49d7-4e37-a4ab-8b33ef8b25bf  *******/ 
});

// Navigation Scroll for Sidebar
const sidebar = document.querySelector('.sidebar');
const scrollbar = document.querySelector('.scrollbar');
const sidebarLinks = document.querySelectorAll('.sidebar a');

// Function to highlight active section when scrolling
window.addEventListener('scroll', function () {
    let scrollPosition = window.scrollY;

    sidebarLinks.forEach(link => {
        let section = document.querySelector(link.hash);

        if (
            section.offsetTop <= scrollPosition &&
            section.offsetTop + section.offsetHeight > scrollPosition
        ) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});

// Horizontal Scrollbar for Bottom Navigation
scrollbar.addEventListener('scroll', function () {
    document.body.scrollLeft = this.scrollLeft;
});

// Smooth Scroll to Sections on Sidebar Click
sidebarLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        let target = document.querySelector(this.hash);
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

/* For Testimonials or any other dynamic content that slides or auto-scrolls, you could use the following */

// Auto-scrolling Testimonials (if needed for dynamic testimonials)
let testimonialIndex = 0;
const testimonials = document.querySelectorAll('.testimonial-item');

/**
 * Auto-scroll testimonials every 5 seconds
 *
 * @function showTestimonial
 * @description Hides all testimonials except the current one, and then
 * increments the index to show the next testimonial on the next scroll
 */
function showTestimonial() {
    // Loop through all testimonials and hide all except the current one
    testimonials.forEach((item, index) => {
        item.style.display = index === testimonialIndex ? 'block' : 'none';
    });

    // Increment the index to show the next testimonial on the next scroll
    testimonialIndex = (testimonialIndex + 1) % testimonials.length;
}

// Auto-scroll every 5 seconds
setInterval(showTestimonial, 5000);

// Hover Effect for Service Items and Buttons
const serviceItems = document.querySelectorAll('.service-item');
const ctaButtons = document.querySelectorAll('.cta-button, .contact button');

// Adding hover effect to service items
serviceItems.forEach(item => {
    item.addEventListener('mouseover', function () {
        item.style.backgroundColor = '#f0f0f0';
        item.style.transform = 'scale(1.05)';
    });

    item.addEventListener('mouseout', function () {
        item.style.backgroundColor = '#fff';
        item.style.transform = 'scale(1)';
    });
});

// Adding hover effect to buttons
ctaButtons.forEach(button => {
    button.addEventListener('mouseover', function () {
        button.style.backgroundColor = '#ff7843';
        button.style.transform = 'scale(1.05)';
    });

    button.addEventListener('mouseout', function () {
        button.style.backgroundColor = '#ff5733';
        button.style.transform = 'scale(1)';
    });
});
