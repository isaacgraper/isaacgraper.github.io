document.addEventListener('DOMContentLoaded', () => {
  function scrollSmooth(links, options = { behavior: "smooth", block: "start" }) {
    function scrollToSection(e) {
      e.preventDefault();
      const href = e.currentTarget.getAttribute("href");
      const section = document.querySelector(href);
      if (section) {
        section.scrollIntoView(options);
      } else {
        console.error(`Element with href "${href}" not found!`);
      }
    }
  
    if (links.length > 0) {
      links.forEach((link) => link.addEventListener("click", scrollToSection));
    } else {
      links.addEventListener("click", scrollToSection);
    }
  }
  const links = document.querySelectorAll("a");
  scrollSmooth(links);
})
const goTopBtn = document.getElementById("goTopBtn");
goTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Debounce function (separate function for clarity)
let timeoutId;
function debounce(callback, delay) {
  return () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(callback, delay);
  };
}

// Display Button
let isActiveBtn = false;

const handleScroll = debounce(() => {
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

  if (scrollTop > 400 && !isActiveBtn) {
      goTopBtn.classList.add('active');
      goTopBtn.classList.remove('hide');
      isActiveBtn = true;
  } else if (scrollTop <= 5) {
      goTopBtn.classList.add('hide');
      goTopBtn.addEventListener('transitionend', () => {
          goTopBtn.classList.remove('active');
          isActiveBtn = false;
      }, { once: true });
      clearTimeout(timeoutId);
  }
}, 200);

addEventListener('scroll', handleScroll);