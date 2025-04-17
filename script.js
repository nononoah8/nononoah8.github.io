try {
  // DOM elements
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');
  
  // Toggle mobile menu
  const toggleMenu = () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
  };
  
  // Event listeners
  hamburger.addEventListener('click', toggleMenu);
  
  // Close mobile menu when clicking a nav link
  navLinks.forEach(link => {
    link.addEventListener('click', async () => {
      // Only close if it's open (which is only on mobile)
      if (hamburger.classList.contains('active')) {
        toggleMenu();
      }
    });
  });
  
} catch (error) {
  console.error('Error initializing navigation:', error);
}