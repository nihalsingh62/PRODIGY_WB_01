const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-link');

// Function to handle scroll event
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Optional: Highlight the current section in the menu
window.addEventListener('scroll', () => {
  let fromTop = window.scrollY + navbar.offsetHeight + 10;

  navLinks.forEach(link => {
    let section = document.querySelector(link.hash);
    if (
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      link.parentElement.classList.add('active');
    } else {
      link.parentElement.classList.remove('active');
    }
  });
});