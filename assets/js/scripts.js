function scrollSuave(links, options = { behavior: 'smooth', block: 'start' }) {
    function scrollToSection(e) {
      e.preventDefault();
  
      const href = e.currentTarget.getAttribute('href');
      const section = document.querySelector(href);
  
      if (section) {
        section.scrollIntoView(options);
      } else {
        console.warn(`Element with href "${href}" not found!`);
        // Optionally, provide user feedback (e.g., alert or visual cue)
      }
    }
  
    if (links.length > 0) {
      links.forEach(link => link.addEventListener('click', scrollToSection));
    } else {
      links.addEventListener('click', scrollToSection);
    }
  }