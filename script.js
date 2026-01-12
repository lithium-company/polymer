// ---------------------------
// Fade in elements on scroll
// ---------------------------
const faders = document.querySelectorAll('.feature-card, .hero h1, .hero p, .cta-button');

const appearOptions = {
  threshold: 0.2,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('appear');
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

// ---------------------------
// Order Form Email Sender
// ---------------------------
const orderForm = document.querySelector('#order-form form');
if (orderForm) {
  orderForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const details = document.querySelector('#details').value;

    const subject = encodeURIComponent('New Polymer Order from ' + name);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nOrder Details:\n${details}`
    );

    // Open user's email client
    window.location.href = `mailto:thelithiumcompany@gmail.com?subject=${subject}&body=${body}`;
  });
}