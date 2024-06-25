/**
 * Função para adicionar comportamento de rolagem suave aos links internos.
 * @param {string} links - Seletor CSS dos links internos.
 * @param {object} options - Opções de rolagem suave (opcional). Padrão: { behavior: 'smooth', block: 'start' }.
 * @returns {undefined}
 */
function scrollSuave(links, options = { behavior: 'smooth', block: 'start' }) {
    function scrollToSection(e) {

      e.preventDefault();

      const href = e.currentTarget.getAttribute('href');
      const section = document.querySelector(href);

      if (section) {
        section.scrollIntoView(options);
      } else {
        console.error(`Element with href "${href}" not found!`);
      }
    }

    if (links.length > 0) {
        links.forEach(link => link.addEventListener('click', scrollToSection));
   } else {
        links.addEventListener('click', scrollToSection);
   }
  }
  
  const links = document.querySelectorAll('.navlinks a');
  scrollSuave(links);
  
  const arrow = document.querySelector('#act-arrow');
  scrollSuave(arrow);