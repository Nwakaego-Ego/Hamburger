
    const bar = document.querySelector('.bar');
    const navbar = document.querySelector('.nav-bar');
  
  
    bar.addEventListener('click', () => {
    navbar.classList.toggle('change');

    navLinks.forEach((link, index) => {
        if (link.style.animation) {
          link.style.animation = '';
        } else {
          link.style.animation = `navLinkFade 0.5s ease forwards ${
            index / 7 + 0.3
          }s`;
        } 
      });
  
      //bar animation
      bar.classList.toggle('toggle');
    });
  





  