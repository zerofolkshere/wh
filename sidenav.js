document.addEventListener('DOMContentLoaded', () => {
  /* ───── Element refs ───── */
  const toggleBtns = document.querySelectorAll('.nav__side_nav--button');
  const sidePanel  = document.querySelector('.side_nav');
  const body       = document.body;

  /* ───── State helper ───── */
  let panelIsOpen = false;
  const getOpenToggle = () =>
    [...toggleBtns].find(b => b.getAttribute('aria-expanded') === 'true') || null;

  /* ───── Toggle buttons ───── */
  toggleBtns.forEach(btn => {
    btn.setAttribute('aria-expanded', 'false');

    btn.addEventListener('click', () => {
      panelIsOpen = !panelIsOpen;

      // update only the button that was clicked
      btn.setAttribute('aria-expanded', panelIsOpen);
      btn.setAttribute('aria-label', panelIsOpen ? 'Close menu' : 'Open menu');

      body.classList.toggle('no-scroll', panelIsOpen);
    });
  });

  /* ───── Close helper (click the real opener) ───── */
  function closePanel() {
    if (!panelIsOpen) return;

    const opener = getOpenToggle() || toggleBtns[0];
    opener.click();               // lets Webflow run its IX2 animation
    panelIsOpen = false;          // keep flag correct
    body.classList.remove('no-scroll');
  }

  /* ───── Global click ───── */
  document.addEventListener('click', e => {
    /* Ignore clicks on any hamburger button, so the menu can open */
    if (e.target.closest('.nav__side_nav--button')) return;

    const insidePanel = sidePanel?.contains(e.target);
    const explicit    = e.target.closest('[sidenav="close"]');

    if (explicit || (panelIsOpen && !insidePanel)) closePanel();
  });

  /* ───── ESC key ───── */
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closePanel();
  });

  /* ───── Swipe-left (mobile) ───── */
  let startX = 0;
  document.addEventListener('touchstart', e => {
    startX = e.touches[0].clientX;
  });
  document.addEventListener('touchend', e => {
    if (panelIsOpen && startX - e.changedTouches[0].clientX > 50) {
      closePanel();
    }
  });
});
