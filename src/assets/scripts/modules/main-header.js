export function initHeader() {
  setActiveNav();
  toggleDropdown();
  initDropdownAutoclose();
  toggleMenu();
  borderOnScroll();
}

function normalizePath(path) {
  path = path.replace(/\/$/, '');
  if (path === '' || path === '/' || path === '/index') return '/';
  return path || '/';
}

// Set active link in the navbar
function setActiveNav() {
  const currentPath = normalizePath(window.location.pathname);
  const dropdownButton = document.getElementById('dropdownNavbarButton');

  document.querySelectorAll('#navbar-dropdown a').forEach(link => {
    const linkPath = normalizePath(new URL(link.href, location.href).pathname);
    const isActive = currentPath === linkPath && linkPath !== '';

    if (isActive) {
      link.classList.remove('text-secondary');
      link.classList.add('text-primary', 'font-semibold');
      link.setAttribute('aria-current', 'page');
    } else {
      link.classList.remove('text-primary', 'font-semibold');
      link.classList.add('text-secondary');
      link.removeAttribute('aria-current');
    }
  });

  document.querySelectorAll('#dropdownNavbar a').forEach(link => {
    link.removeAttribute('aria-current');
    link.classList.remove('text-primary', 'font-semibold');
    link.classList.add('text-secondary');
  });

  if (!dropdownButton) return; // ← guarda aquí

  const isSpeakerSection = currentPath.startsWith('/speakers');
  dropdownButton.classList.toggle('text-primary', isSpeakerSection);
  dropdownButton.classList.toggle('font-bold', isSpeakerSection);
  dropdownButton.classList.toggle('text-secondary', !isSpeakerSection);
}

//
function toggleDropdown() {
    const btn = document.querySelector('[data-dropdown-toggle]');
    const menu = document.getElementById('dropdownNavbar');

    if (!btn || !menu) return;

    btn.addEventListener('click', () => {
        menu.classList.toggle('hidden');
    });
}

// Close the dropdown when a link is clicked
function initDropdownAutoclose() {
  const dropdownButton = document.getElementById('dropdownNavbarButton'); // Ponentes' link
  const menu = document.getElementById('dropdownNavbar'); // Div with the speakers' links
  const mobileMenu = document.getElementById('navbar-dropdown'); // Navbar with Inicio, Ponentes, etc. (the big one)
  const mobileToggleBtn = document.querySelector('[data-collapse-toggle="navbar-dropdown"]'); // Hamburger button for the big mobile menu
  if (!dropdownButton || !menu) return;

  const closeMenu = () => menu.classList.add('hidden');

  const closeMobileMenu = () => {
    mobileMenu?.classList.add('hidden');
    mobileToggleBtn?.setAttribute('aria-expanded', 'false');
  };

  // Close the dropdown when clicking on any link inside it
  menu.addEventListener('click', (e) => {
    if (e.target.closest('a')) closeMenu();
  }, { capture: true });

  // Close the large mobile menu when clicking any link in the navigation
  mobileMenu?.addEventListener('click', (e) => {
    if (e.target.closest('a')) closeMobileMenu();
  }, { capture: true });

  document.addEventListener('click', (e) => {
    if (!menu.contains(e.target) && !dropdownButton.contains(e.target)) closeMenu();
  });

  window.addEventListener('hashchange', () => {
    closeMenu();
    closeMobileMenu();
  });
}

// Add border to header on scroll (only on mobile). Desktop always has border.
function borderOnScroll() {
  const header = document.getElementById('header');
  if (!header) return;

  const mq = window.matchMedia('(min-width: 768px)');

  function updateBorder() {
    const isMobile = mq.matches;
    const hasScroll = window.scrollY > 0;

    header.classList.toggle('border-b', isMobile || hasScroll);
  }

  window.addEventListener('scroll', updateBorder);
  mq.addEventListener('change', updateBorder);

  updateBorder(); // Set initial state
}

function toggleMenu() {
  const toggleBtn = document.querySelector('[data-collapse-toggle="navbar-dropdown"]');
  const menu = document.getElementById('navbar-dropdown');

  toggleBtn?.addEventListener('click', () => {
    const isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';
    toggleBtn.setAttribute('aria-expanded', String(!isExpanded));
    menu?.classList.toggle('hidden');
  });
}
