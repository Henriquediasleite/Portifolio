  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuIcon = document.getElementById('menu-icon');

  menuToggle.addEventListener('click', () => {
    // Abre / fecha menu
    mobileMenu.classList.toggle('translate-x-0');
    mobileMenu.classList.toggle('translate-x-full');

    // Troca ícone
    if (menuIcon.classList.contains('ri-menu-line')) {
      menuIcon.classList.remove('ri-menu-line');
      menuIcon.classList.add('ri-close-line');
    } else {
      menuIcon.classList.remove('ri-close-line');
      menuIcon.classList.add('ri-menu-line');
    }
  });