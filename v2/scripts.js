/* ==========================================================================
   Anjouan Gaming — Direction B: Measured Openness
   ========================================================================== */

(function () {
  'use strict';

  /* ---------- Mobile Navigation Toggle ---------- */

  const toggle = document.querySelector('.nav__toggle');
  const navList = document.querySelector('.nav__list');

  if (toggle && navList) {
    toggle.addEventListener('click', function () {
      const expanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', String(!expanded));
      navList.classList.toggle('is-open');
    });
  }

  /* ---------- Scroll-triggered Fade-in ---------- */

  const animatedElements = document.querySelectorAll('[data-animate]');

  if ('IntersectionObserver' in window && animatedElements.length) {
    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -40px 0px'
      }
    );

    animatedElements.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    /* Fallback: show everything immediately */
    animatedElements.forEach(function (el) {
      el.classList.add('is-visible');
    });
  }
})();
