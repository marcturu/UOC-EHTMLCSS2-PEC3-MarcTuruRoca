export function initHeader() {
  setActiveNav();
  toggleDropdown();
  initDropdownAutoclose();
}

function normalizePath(path) {
  path = path.replace(/\/$/, '');
  if (path === '' || path === '/' || path === '/index') return '/';
  return path || '/';
}

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
    }
    else {
      link.classList.remove('text-primary', 'font-semibold');
      link.classList.add('text-secondary');
      link.removeAttribute('aria-current');
    }
  });

  // For the dropdown links (Ponentes)
  document.querySelectorAll('#dropdownNavbar a').forEach(link => {
    link.removeAttribute('aria-current');
    link.classList.remove('text-primary', 'font-semibold');
    link.classList.add('text-secondary');
  });

  const isSpeakerSection = currentPath.startsWith('/speakers');
  dropdownButton.classList.toggle('text-primary', isSpeakerSection);
  dropdownButton.classList.toggle('font-bold', isSpeakerSection);
  dropdownButton.classList.toggle('text-secondary', !isSpeakerSection);
}

function toggleDropdown() {
    const btn = document.querySelector('[data-dropdown-toggle]');
    const menu = document.getElementById('dropdownNavbar');

    if (!btn || !menu) return;

    btn.addEventListener('click', () => {
        menu.classList.toggle('hidden');
    });
}

function initDropdownAutoclose() {
  const menu = document.getElementById('dropdownNavbar');
  if (!menu) return;

  // Close when clicking any link from the dropdown
  document.querySelectorAll('#dropdownNavbar a').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.add('hidden');
    });
  });

  // Close when the hash changes (#name1 -> #name2)
  window.addEventListener('hashchange', () => {
    menu.classList.add('hidden');
  });
}
