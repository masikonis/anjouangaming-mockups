/* =============================================
   Anjouan Gaming — Direction A: Geometric Authority
   ============================================= */

(function () {
  'use strict';

  // --- Mobile Navigation Toggle ---
  const navToggle = document.getElementById('nav-toggle');
  const mainNav = document.getElementById('main-nav');

  if (navToggle && mainNav) {
    navToggle.addEventListener('click', function () {
      navToggle.classList.toggle('active');
      mainNav.classList.toggle('open');
      document.body.style.overflow = mainNav.classList.contains('open') ? 'hidden' : '';
    });
  }

  // --- Mobile Dropdown Toggle ---
  const dropdownItems = document.querySelectorAll('.nav-item.has-dropdown');

  dropdownItems.forEach(function (item) {
    const link = item.querySelector(':scope > a');
    link.addEventListener('click', function (e) {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        item.classList.toggle('dropdown-open');
      }
    });
  });

  // --- Scroll Fade-In ---
  const sections = document.querySelectorAll('.section');

  function addFadeTargets() {
    sections.forEach(function (section) {
      const header = section.querySelector('.section-header');
      const blocks = section.querySelectorAll(
        '.area-block, .jurisdiction-block, .notice-item, .fact-block, .overview-main, .overview-side'
      );

      if (header) header.classList.add('fade-in');
      blocks.forEach(function (block, i) {
        block.classList.add('fade-in');
        block.style.transitionDelay = (i * 0.08) + 's';
      });
    });
  }

  function handleScroll() {
    const fadeElements = document.querySelectorAll('.fade-in');
    const windowHeight = window.innerHeight;

    fadeElements.forEach(function (el) {
      const rect = el.getBoundingClientRect();
      if (rect.top < windowHeight - 60) {
        el.classList.add('visible');
      }
    });
  }

  addFadeTargets();
  handleScroll();
  window.addEventListener('scroll', handleScroll, { passive: true });

  // --- Header shadow on scroll ---
  const header = document.getElementById('site-header');

  function handleHeaderScroll() {
    if (window.scrollY > 10) {
      header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.3)';
    } else {
      header.style.boxShadow = 'none';
    }
  }

  if (header) {
    handleHeaderScroll();
    window.addEventListener('scroll', handleHeaderScroll, { passive: true });
  }

  // --- Close mobile nav on resize ---
  window.addEventListener('resize', function () {
    if (window.innerWidth > 768 && mainNav.classList.contains('open')) {
      mainNav.classList.remove('open');
      navToggle.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
})();
