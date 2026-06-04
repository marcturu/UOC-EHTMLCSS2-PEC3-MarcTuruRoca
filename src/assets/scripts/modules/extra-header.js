export function initMenu() {
  const toggle = document.getElementById('menu-toggle');
  const nav    = document.getElementById('main-nav');
  const bar1   = document.getElementById('bar1');
  const bar2   = document.getElementById('bar2');
  const bar3   = document.getElementById('bar3');
  if (!toggle || !nav || !bar1 || !bar2 || !bar3) return;

  if (!toggle || !nav) return; 

  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('hidden') === false;
    toggle.setAttribute('aria-expanded', String(open));

    if (open) {
      bar1.style.transform = 'translateY(8px) rotate(45deg)';
      bar2.style.opacity   = '0';
      bar3.style.transform = 'translateY(-8px) rotate(-45deg)';
    } else {
      bar1.style.transform = '';
      bar2.style.opacity   = '';
      bar3.style.transform = '';
    }
  });
}