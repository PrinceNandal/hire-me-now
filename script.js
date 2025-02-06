// JavaScript to toggle the hamburger menu
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('nav ul');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('open');
        hamburger.classList.toggle('active');
    });
}

// Ensure menu closes when a link is clicked (for mobile usability)
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        hamburger.classList.remove('active');
    });
});

// JavaScript for the contact form submission with redirection to a custom Thank You page
function redirectThankYou(event) {
    event.preventDefault(); // Prevent the default form submission

    const form = event.target;
    const formData = new FormData(form);

    fetch(form.action, {
        method: form.method,
        body: formData,
        headers: {
            Accept: 'application/json',
        },
    })
        .then((response) => {
            if (response.ok) {
                window.location.href = 'thankyou.html'; // Redirect to custom Thank You page
            } else {
                alert('Oops! Something went wrong. Please try again later.');
            }
        })
        .catch(() => {
            alert('Oops! Something went wrong. Please try again later.');
        });
}
