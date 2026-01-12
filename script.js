// Fade in elements on scroll
const faders = document.querySelectorAll('.feature-card, .hero h1, .hero p, .cta-button');

const appearOptions = {
  threshold: 0.2,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.classList.add('appear');
    observer.unobserve(entry);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});