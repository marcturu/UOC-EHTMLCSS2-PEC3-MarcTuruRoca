import AOS from 'aos';
import 'aos/dist/aos.css';

export function initAOS() {
  const mqDesktop = window.matchMedia('(min-width: 1024px)');

  function getCards() {
    return document.querySelectorAll('.speakers-card-wrapper');
  }

  function applyAOS(isDesktop) {
    getCards().forEach((card, index) => {
      const position = index + 1;

      const animation = isDesktop
        ? position <= 3 ? 'fade-down' : 'fade-up'
        : position % 2 === 1 ? 'fade-right' : 'fade-left';

      card.setAttribute('data-aos', animation);

      if (isDesktop) {
        const delay = index * 100;
        card.setAttribute('data-aos-delay', String(delay));
      } else {
        card.removeAttribute('data-aos-delay');
      }
    });
  }

  applyAOS(mqDesktop.matches);

 setTimeout(() => {
    AOS.init({
      duration: 550,
      easing: 'ease-out',
      once: false,
      offset: 60,
    });
  }, 100);

  mqDesktop.addEventListener('change', (e) => {
    applyAOS(e.matches);
    AOS.refreshHard();
  });
}