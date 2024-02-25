// Smooth scrolling effect for navigation links
document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('nav ul li a');
  
    navLinks.forEach(function (link) {
      link.addEventListener('click', function (e) {
        e.preventDefault();
  
        const sectionId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(sectionId);
  
        if (targetSection) {
          window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth'
          });
        }
      });
    });
  });
  