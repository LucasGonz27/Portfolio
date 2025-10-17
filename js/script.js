document.addEventListener('DOMContentLoaded', function() {
  // Hamburger menu (si présent)
  const hamburgerMenu = document.querySelector('.hamburger-menu');
  const navbar = document.querySelector('.navbar');
  if (hamburgerMenu && navbar) {
    hamburgerMenu.addEventListener('click', function() {
      navbar.classList.toggle('active');
      hamburgerMenu.classList.toggle('active');
    });
  }

  // Dropdown menu Navigation
  const navToggle = document.querySelector('.nav-toggle');
  const dropdownMenu = document.querySelector('.dropdown-menu');
  if (navToggle && dropdownMenu) {
    navToggle.addEventListener('click', function(e) {
      e.stopPropagation();
      dropdownMenu.classList.toggle('open');
      dropdownMenuSocial.classList.remove('open');
    });
    document.addEventListener('click', function(e) {
      if (!dropdownMenu.contains(e.target) && !navToggle.contains(e.target)) {
        dropdownMenu.classList.remove('open');
      }
    });
  }

  // Dropdown menu Social
  const navToggleSocial = document.querySelector('.nav-toggle-social');
  const dropdownMenuSocial = document.querySelector('.dropdown-menu-social');
  if (navToggleSocial && dropdownMenuSocial) {
    navToggleSocial.addEventListener('click', function(e) {
      e.stopPropagation();
      dropdownMenuSocial.classList.toggle('open');
      dropdownMenu.classList.remove('open');
    });
    document.addEventListener('click', function(e) {
      if (!dropdownMenuSocial.contains(e.target) && !navToggleSocial.contains(e.target)) {
        dropdownMenuSocial.classList.remove('open');
      }
    });
  }
});
