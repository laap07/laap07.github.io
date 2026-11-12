// =============================================
// PORTFOLIO - MAIN JAVASCRIPT
// Luan A Procópio · Game Programmer
// =============================================

document.addEventListener('DOMContentLoaded', () => {

  // ---- NAVBAR: scroll effect + hamburger ----
  const navbar    = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('navLinks');

  const onScroll = () => navbar?.classList.toggle('scrolled', window.scrollY > 30);
  window.addEventListener('scroll', onScroll);
  onScroll();

  hamburger?.addEventListener('click', () => navLinks?.classList.toggle('open'));
  navLinks?.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
  });

  // ---- CAROUSEL ----
  const slides  = document.querySelectorAll('.carousel-slide');
  const thumbs  = document.querySelectorAll('.thumb');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');

  if (slides.length > 0) {
    let current   = 0;
    let autoTimer = null;
    const INTERVAL = 5000;

    function goTo(index) {
      slides[current]?.classList.remove('active');
      thumbs[current]?.classList.remove('active');

      current = (index + slides.length) % slides.length;

      slides[current]?.classList.add('active');
      thumbs[current]?.classList.add('active');

      thumbs.forEach(t => {
        const bar = t.querySelector('.thumb-bar');
        if (bar) { bar.style.transition = 'none'; bar.style.width = '0%'; }
      });
      setTimeout(() => {
        const bar = thumbs[current]?.querySelector('.thumb-bar');
        if (bar) { bar.style.transition = `width ${INTERVAL}ms linear`; bar.style.width = '100%'; }
      }, 50);
    }

    const startAuto = () => { stopAuto(); autoTimer = setInterval(() => goTo(current + 1), INTERVAL); };
    const stopAuto  = () => clearInterval(autoTimer);

    prevBtn?.addEventListener('click', () => { goTo(current - 1); startAuto(); });
    nextBtn?.addEventListener('click', () => { goTo(current + 1); startAuto(); });
    thumbs.forEach(thumb => thumb.addEventListener('click', () => {
      goTo(parseInt(thumb.dataset.index)); startAuto();
    }));

    const main = document.querySelector('.carousel-main');
    main?.addEventListener('mouseenter', stopAuto);
    main?.addEventListener('mouseleave', startAuto);

    let touchStartX = 0;
    main?.addEventListener('touchstart', e => { touchStartX = e.changedTouches[0].clientX; });
    main?.addEventListener('touchend', e => {
      const dx = e.changedTouches[0].clientX - touchStartX;
      if (Math.abs(dx) > 50) { goTo(dx < 0 ? current + 1 : current - 1); startAuto(); }
    });

    goTo(0);
    startAuto();
  }

  // ---- COUNTER ANIMADO (stats) ----
  const counters = document.querySelectorAll('.stat-number');
  if (counters.length > 0) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const el     = entry.target;
        const target = parseInt(el.dataset.target);
        const suffix = el.dataset.suffix || '';
        const step   = Math.max(1, Math.ceil(target / 40));
        let count    = 0;
        const timer  = setInterval(() => {
          count = Math.min(count + step, target);
          el.textContent = count + suffix;
          if (count >= target) clearInterval(timer);
        }, 35);
        observer.unobserve(el);
      });
    }, { threshold: 0.5 });
    counters.forEach(c => observer.observe(c));
  }

  // ---- LIGHTBOX (images + videos, navegação dentro da galeria) ----
  const lightbox      = document.getElementById('lightbox');
  const lightboxMedia = document.getElementById('lightboxMedia');
  const lightboxClose = document.getElementById('lightboxClose');
  const lightboxPrev  = document.getElementById('lightboxPrev');
  const lightboxNext  = document.getElementById('lightboxNext');

  let lbItems = [];
  let lbIndex = 0;

  function renderLightbox() {
    const item = lbItems[lbIndex];
    if (!item) return;
    lightboxMedia.innerHTML = '';
    if (item.dataset.kind === 'video') {
      const video = document.createElement('video');
      video.src = item.dataset.full;
      video.controls = true;
      video.autoplay = true;
      video.playsInline = true;
      if (item.dataset.loop !== undefined) video.loop = true;
      lightboxMedia.appendChild(video);
    } else {
      const img = document.createElement('img');
      img.src = item.dataset.full;
      img.alt = item.dataset.alt || '';
      lightboxMedia.appendChild(img);
    }
    const multi = lbItems.length > 1;
    if (lightboxPrev) lightboxPrev.style.display = multi ? 'flex' : 'none';
    if (lightboxNext) lightboxNext.style.display = multi ? 'flex' : 'none';
  }

  function openLightbox(items, index) {
    if (!lightbox) return;
    lbItems = items;
    lbIndex = index;
    renderLightbox();
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    if (!lightbox) return;
    lightbox.classList.remove('open');
    lightboxMedia.innerHTML = '';
    document.body.style.overflow = '';
  }

  function stepLightbox(dir) {
    if (!lbItems.length) return;
    lbIndex = (lbIndex + dir + lbItems.length) % lbItems.length;
    renderLightbox();
  }

  document.querySelectorAll('.gallery, .work-grid').forEach(gallery => {
    const items = Array.from(gallery.querySelectorAll('.media'));
    items.forEach((item, i) => {
      item.addEventListener('click', () => openLightbox(items, i));
    });
  });

  lightboxClose?.addEventListener('click', closeLightbox);
  lightboxPrev?.addEventListener('click', () => stepLightbox(-1));
  lightboxNext?.addEventListener('click', () => stepLightbox(1));
  lightbox?.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });
  document.addEventListener('keydown', e => {
    if (!lightbox?.classList.contains('open')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') stepLightbox(-1);
    if (e.key === 'ArrowRight') stepLightbox(1);
  });

  // ---- VÍDEOS EM LOOP (estilo GIF): só tocam quando visíveis ----
  const loopVideos = document.querySelectorAll('video[data-autoplay]');
  if (loopVideos.length > 0) {
    const vObs = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const v = entry.target;
        if (entry.isIntersecting) v.play().catch(() => {});
        else v.pause();
      });
    }, { threshold: 0.25 });
    loopVideos.forEach(v => vObs.observe(v));
  }

  // ---- FORMULÁRIO DE CONTATO (envia para o e-mail via FormSubmit) ----
  const form    = document.getElementById('contactForm');
  const success = document.getElementById('formSuccess');
  const errorEl = document.getElementById('formError');

  form?.addEventListener('submit', async e => {
    e.preventDefault();
    const btn = form.querySelector('button[type=submit]');
    const label = btn?.querySelector('span');
    if (btn) btn.disabled = true;
    if (label) label.textContent = I18N.t('contact.sending');
    if (errorEl) errorEl.style.display = 'none';

    try {
      const res = await fetch(form.action, {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: new FormData(form)
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || data.success === 'false' || data.success === false) throw new Error('send failed');

      form.style.display = 'none';
      if (success) success.style.display = 'block';
    } catch (err) {
      if (errorEl) errorEl.style.display = 'block';
      if (btn) btn.disabled = false;
      if (label) label.textContent = I18N.t('contact.send');
    }
  });

  // ---- SCROLL REVEAL ----
  const revealEls = document.querySelectorAll('.cat-card, .skill-card, .stat-item, .proj-block, .work');
  const revealObs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        revealObs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });
  revealEls.forEach(el => { el.classList.add('reveal'); revealObs.observe(el); });

});


