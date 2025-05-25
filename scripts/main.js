// AOS animations for other sections
AOS.init({
  duration: 800,
  once: true,
});

// Reveal #about on any interaction
function revealAboutOnInteraction() {
  const about = document.querySelector('.reveal-on-interaction');
  if (about && !about.classList.contains('show')) {
    about.classList.add('show');
    window.removeEventListener('mousemove', revealAboutOnInteraction);
    window.removeEventListener('mousedown', revealAboutOnInteraction);
    window.removeEventListener('touchstart', revealAboutOnInteraction);
  }
}

window.addEventListener('mousemove', revealAboutOnInteraction);
window.addEventListener('mousedown', revealAboutOnInteraction);
window.addEventListener('touchstart', revealAboutOnInteraction);

window.addEventListener('DOMContentLoaded', () => {
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    navbar.classList.add('show-nav');
  }
});