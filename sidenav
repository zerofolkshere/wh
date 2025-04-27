  document.addEventListener('DOMContentLoaded', function () {
    let panelIsOpen = false;

    const toggleBtn = document.querySelector('.nav__side_nav--button');
    const sidePanel = document.querySelector('.side_nav');
    const body = document.body;

    if (toggleBtn) {
      // Set initial ARIA state
      toggleBtn.setAttribute('aria-expanded', 'false');

      toggleBtn.addEventListener('click', function () {
        panelIsOpen = !panelIsOpen;

        // Update ARIA attributes
        toggleBtn.setAttribute('aria-expanded', panelIsOpen ? 'true' : 'false');
        toggleBtn.setAttribute('aria-label', panelIsOpen ? 'Close menu' : 'Open menu');

        if (panelIsOpen) {
          body.classList.add('no-scroll');
        } else {
          body.classList.remove('no-scroll');
        }
      });
    }

    document.addEventListener('click', function (event) {
      const isClickInsidePanel = sidePanel && sidePanel.contains(event.target);
      const isClickOnLinkOrBtn = event.target.closest('a, button');

      if (panelIsOpen && !isClickInsidePanel && !isClickOnLinkOrBtn) {
        toggleBtn.click();
        panelIsOpen = false;
        body.classList.remove('no-scroll');
      }
    });

    // ESC to close
    document.addEventListener('keydown', function (event) {
      if (panelIsOpen && event.key === 'Escape') {
        toggleBtn.click();
        panelIsOpen = false;
        body.classList.remove('no-scroll');
      }
    });

    // Swipe left to close
    let touchStartX = 0;

    document.addEventListener('touchstart', function (e) {
      touchStartX = e.touches[0].clientX;
    });

    document.addEventListener('touchend', function (e) {
      const touchEndX = e.changedTouches[0].clientX;
      const swipeDistance = touchStartX - touchEndX;

      if (panelIsOpen && swipeDistance > 50) {
        toggleBtn.click();
        panelIsOpen = false;
        body.classList.remove('no-scroll');
      }
    });
  });
