  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');

  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show-menu');
  });

  const sections = document.querySelectorAll("section[id]");
  const scrollActive = () => {
    const scrollY = window.scrollY;

    sections.forEach((current) => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 58;
      const sectionId = current.getAttribute("id");
      const link = document.querySelector(".nav-list a[href*=" + sectionId + "]");
      if (link) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          link.classList.add("active-link");
        } else {
          link.classList.remove("active-link");
        }
      }
    });
  };

  window.addEventListener("scroll", scrollActive);


const themeButton = document.getElementById('theme-button');
const darkThemeClass = 'dark-theme';
const iconThemeClass = 'fa-sun';

// Check stored preferences
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

// Apply stored theme and icon on page load
if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkThemeClass);
  if (selectedIcon === 'fa-sun') {
    themeButton.classList.add(iconThemeClass);
    themeButton.classList.remove('fa-moon');
  } else {
    themeButton.classList.add('fa-moon');
    themeButton.classList.remove(iconThemeClass);
  }
} else {
  // Default icon (moon)
  themeButton.classList.add('fa-moon');
}

themeButton.addEventListener('click', () => {
  // Toggle dark theme
  document.body.classList.toggle(darkThemeClass);

  // Toggle icon class
  if (document.body.classList.contains(darkThemeClass)) {
    themeButton.classList.add(iconThemeClass);
    themeButton.classList.remove('fa-moon');
  } else {
    themeButton.classList.add('fa-moon');
    themeButton.classList.remove(iconThemeClass);
  }

  // Save current settings
  const currentTheme = document.body.classList.contains(darkThemeClass) ? 'dark' : 'light';
  const currentIcon = themeButton.classList.contains(iconThemeClass) ? 'fa-sun' : 'fa-moon';

  localStorage.setItem('selected-theme', currentTheme);
  localStorage.setItem('selected-icon', currentIcon);
});
//scroll reveal
window.addEventListener('DOMContentLoaded', () => {
  const sr = ScrollReveal({
    distance: '40px',
    duration: 800,
    easing: 'ease',
    reset: false
  });

  sr.reveal('.home-data', { origin: 'left', delay: 200 });
  sr.reveal('.home-bg img', { origin: 'right', delay: 400 });
  sr.reveal('.about-detail', { origin: 'bottom', delay: 300 });
  sr.reveal('.service', { origin: 'bottom', interval: 200 });
  sr.reveal('.menu-dish', { origin: 'bottom', interval: 200 });
  sr.reveal('.app-content', { origin: 'left', delay: 300 });
  sr.reveal('.contact-content', { origin: 'bottom', delay: 300 });
  sr.reveal('footer', { origin: 'top', delay: 300 });
  sr.reveal('#scroll-top-btn', { origin: 'bottom', delay: 100 });

});
// Scroll To Top Button
const scrollTopBtn = document.getElementById('scroll-top-btn');

// Show button after scrolling 300px
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollTopBtn.style.display = 'block';
  } else {
    scrollTopBtn.style.display = 'none';
  }
});

// Smooth scroll to top on click
scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
