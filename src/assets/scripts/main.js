import { initHeader } from './modules/main-header.js'
import { initMenu }   from './modules/extra-header.js'
import { initAOS }    from './modules/aos.js'

document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initMenu();
  initAOS();
});