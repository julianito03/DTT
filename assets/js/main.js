/* DTT — shared behaviour: partial includes, nav, slider, year */

(function () {
  // ---- Include header/footer partials -------------------------------------
  // Each page sets data-root ("" at root, "../" one level deep) so links inside
  // the shared partials resolve correctly regardless of folder depth.
  async function includePartials() {
    const slots = document.querySelectorAll('[data-include]');
    await Promise.all([...slots].map(async (slot) => {
      const url = slot.getAttribute('data-include');
      const root = slot.getAttribute('data-root') || '';
      try {
        const res = await fetch(url);
        let html = await res.text();
        if (root) html = rewriteLinks(html, root);
        slot.outerHTML = html;
      } catch (e) {
        console.error('Include failed:', url, e);
      }
    }));
    afterInclude();
  }

  // Prepend the root prefix to relative href/src (skip absolute, anchor, mailto).
  function rewriteLinks(html, root) {
    return html.replace(/(href|src)="([^"]*)"/g, (m, attr, val) => {
      if (/^(https?:|#|mailto:|tel:|\/)/.test(val)) return m;
      return `${attr}="${root}${val}"`;
    });
  }

  function afterInclude() {
    // Mobile nav toggle
    const toggle = document.getElementById('navToggle');
    const nav = document.getElementById('mainNav');
    if (toggle && nav) {
      toggle.addEventListener('click', () => nav.classList.toggle('open'));
    }
    // Current year in footer
    const y = document.getElementById('year');
    if (y) y.textContent = new Date().getFullYear();
  }

  // ---- Hero slider ---------------------------------------------------------
  function initSlider() {
    const slider = document.querySelector('.slider');
    if (!slider) return;
    const slides = [...slider.querySelectorAll('.slide')];
    const dots = [...slider.querySelectorAll('.slider-dots button')];
    if (!slides.length) return;
    let i = 0, timer;

    function go(n) {
      slides[i].classList.remove('active');
      dots[i]?.classList.remove('active');
      i = (n + slides.length) % slides.length;
      slides[i].classList.add('active');
      dots[i]?.classList.add('active');
    }
    function next() { go(i + 1); }
    function start() { timer = setInterval(next, 6000); }
    function reset() { clearInterval(timer); start(); }

    dots.forEach((d, n) => d.addEventListener('click', () => { go(n); reset(); }));
    slider.querySelector('.slider-arrow.next')?.addEventListener('click', () => { next(); reset(); });
    slider.querySelector('.slider-arrow.prev')?.addEventListener('click', () => { go(i - 1); reset(); });
    start();
  }

  document.addEventListener('DOMContentLoaded', async () => {
    await includePartials();
    initSlider();
  });
})();
