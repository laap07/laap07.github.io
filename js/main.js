// =============================================
// PORTFOLIO - MAIN JAVASCRIPT
// =============================================

document.addEventListener('DOMContentLoaded', () => {

  // ---- NAVBAR: scroll effect + hamburger ----
  const navbar   = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('navLinks');

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 30);
  });

  hamburger?.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });

  // Fecha menu ao clicar em link
  navLinks?.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
  });

  // ---- CAROUSEL ----
  const slides      = document.querySelectorAll('.carousel-slide');
  const thumbs      = document.querySelectorAll('.thumb');
  const prevBtn     = document.getElementById('prevBtn');
  const nextBtn     = document.getElementById('nextBtn');

  if (slides.length > 0) {
    let current    = 0;
    let autoTimer  = null;
    const INTERVAL = 5000; // 5 segundos por slide

    function goTo(index) {
      slides[current].classList.remove('active');
      thumbs[current]?.classList.remove('active');

      current = (index + slides.length) % slides.length;

      slides[current].classList.add('active');
      thumbs[current]?.classList.add('active');

      // Reinicia a barra de progresso
      thumbs.forEach(t => {
        const bar = t.querySelector('.thumb-bar');
        if (bar) bar.style.transition = 'none';
        if (bar) bar.style.width = '0%';
      });
      setTimeout(() => {
        const bar = thumbs[current]?.querySelector('.thumb-bar');
        if (bar) {
          bar.style.transition = `width ${INTERVAL}ms linear`;
          bar.style.width = '100%';
        }
      }, 50);
    }

    function startAuto() {
      stopAuto();
      autoTimer = setInterval(() => goTo(current + 1), INTERVAL);
    }
    function stopAuto() {
      clearInterval(autoTimer);
    }

    prevBtn?.addEventListener('click', () => { goTo(current - 1); startAuto(); });
    nextBtn?.addEventListener('click', () => { goTo(current + 1); startAuto(); });

    thumbs.forEach(thumb => {
      thumb.addEventListener('click', () => {
        const idx = parseInt(thumb.dataset.index);
        goTo(idx);
        startAuto();
      });
    });

    // Pause ao passar o mouse
    document.querySelector('.carousel-main')?.addEventListener('mouseenter', stopAuto);
    document.querySelector('.carousel-main')?.addEventListener('mouseleave', startAuto);

    // Touch/swipe support
    let touchStartX = 0;
    document.querySelector('.carousel-main')?.addEventListener('touchstart', e => {
      touchStartX = e.changedTouches[0].clientX;
    });
    document.querySelector('.carousel-main')?.addEventListener('touchend', e => {
      const dx = e.changedTouches[0].clientX - touchStartX;
      if (Math.abs(dx) > 50) {
        goTo(dx < 0 ? current + 1 : current - 1);
        startAuto();
      }
    });

    goTo(0);
    startAuto();
  }

  // ---- FILTER (grade de projetos) ----
  const filterBtns = document.querySelectorAll('.filter-btn');
  const cards      = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;

      cards.forEach(card => {
        const match = filter === 'all' || card.dataset.category === filter;
        card.classList.toggle('hidden', !match);
      });
    });
  });

  // ---- COUNTER ANIMADO (stats) ----
  const counters = document.querySelectorAll('.stat-number');
  if (counters.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el     = entry.target;
          const target = parseInt(el.dataset.target);
          let count    = 0;
          const step   = Math.ceil(target / 60);
          const timer  = setInterval(() => {
            count = Math.min(count + step, target);
            el.textContent = count;
            if (count >= target) clearInterval(timer);
          }, 25);
          observer.unobserve(el);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(c => observer.observe(c));
  }

  // ---- LIGHTBOX ----
  const lightbox      = document.getElementById('lightbox');
  const lightboxMedia = document.getElementById('lightboxMedia');
  const lightboxClose = document.getElementById('lightboxClose');

  function openLightbox(src, isVideo = false) {
    if (!lightbox) return;
    lightboxMedia.innerHTML = '';
    if (isVideo) {
      const video = document.createElement('video');
      video.src = src;
      video.controls = true;
      video.autoplay = true;
      lightboxMedia.appendChild(video);
    } else {
      const img = document.createElement('img');
      img.src = src;
      lightboxMedia.appendChild(img);
    }
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    if (!lightbox) return;
    lightbox.classList.remove('open');
    lightboxMedia.innerHTML = '';
    document.body.style.overflow = '';
  }

  // Ativa lightbox em imagens/vídeos da galeria
  document.querySelectorAll('.project-gallery img').forEach(img => {
    img.addEventListener('click', () => openLightbox(img.src, false));
  });
  document.querySelectorAll('.project-gallery video').forEach(vid => {
    vid.addEventListener('click', () => openLightbox(vid.querySelector('source')?.src || vid.src, true));
  });

  lightboxClose?.addEventListener('click', closeLightbox);
  lightbox?.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLightbox(); });

  // ---- FORMULÁRIO DE CONTATO ----
  const form    = document.getElementById('contactForm');
  const success = document.getElementById('formSuccess');

  form?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type=submit]');
    btn.textContent = 'Enviando...';
    btn.disabled = true;

    // Simulação visual de envio
    await new Promise(r => setTimeout(r, 1200));

    form.style.display = 'none';
    if (success) success.style.display = 'block';
  });

  // ---- PÁGINA DE PROJETO INDIVIDUAL ----
  // Lê parâmetros da URL para carregar dados dinamicamente
  const urlParams   = new URLSearchParams(window.location.search);
  const projectId   = urlParams.get('id');

  if (projectId && typeof projects !== 'undefined') {
    loadProject(projectId);
  }

  // ---- SCROLL REVEAL simples ----
  const revealEls = document.querySelectorAll('.project-card, .skill-card, .stat-item');
  const revealObs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        revealObs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  revealEls.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    revealObs.observe(el);
  });

});

// =============================================
// DADOS DOS PROJETOS (edite aqui!)
// =============================================
const projects = {
  1: {
    title: "Nome do Projeto 1",
    badge: "Em Destaque",
    category: "Web",
    status: "Concluído",
    year: "2024",
    role: "Desenvolvedor de Jogos",
    tech: ["React", "Node.js", "MongoDB", "Tailwind"],
    banner: "assets/images/project1-banner.jpg",
    desc: `
      <p>Descreva seu projeto aqui. Explique a motivação, o problema que ele resolve e o impacto que causou.</p>
      <h2>Desafios</h2>
      <p>Quais foram os principais desafios técnicos que você enfrentou e como os resolveu?</p>
      <h2>Resultados</h2>
      <p>Qual foi o impacto final? Números, métricas, feedbacks.</p>
    `,
    gallery: [
      { type: "image", src: "assets/images/project1-screen1.jpg" },
      { type: "image", src: "assets/images/project1-screen2.jpg" },
      { type: "video", src: "assets/videos/project1-demo.mp4" },
    ],
    github: "https://github.com/laap07/projeto-1",
    live: "https://projeto1.vercel.app",
  },
  2: {
    title: "Nome do Projeto 2",
    badge: "Novo",
    category: "Backend",
    status: "Em produção",
    year: "2024",
    role: "Backend Developer",
    tech: ["Python", "Django", "PostgreSQL", "Docker"],
    banner: "assets/images/project2-banner.jpg",
    desc: `
      <p>Descreva seu projeto aqui.</p>
      <h2>Desafios</h2>
      <p>Principais desafios e soluções.</p>
    `,
    gallery: [
      { type: "image", src: "assets/images/project2-screen1.jpg" },
      { type: "image", src: "assets/images/project2-screen2.jpg" },
    ],
    github: "https://github.com/laap07/projeto-2",
    live: "",
  },
  3: {
    title: "Nome do Projeto 3",
    badge: "Popular",
    category: "Mobile",
    status: "Concluído",
    year: "2023",
    role: "Mobile Developer",
    tech: ["Flutter", "Firebase", "Dart"],
    banner: "assets/images/project3-banner.jpg",
    desc: `<p>Descreva seu projeto aqui.</p>`,
    gallery: [
      { type: "image", src: "assets/images/project3-screen1.jpg" },
    ],
    github: "https://github.com/laap07/projeto-3",
    live: "",
  },
  4: {
    title: "Nome do Projeto 4",
    badge: "Web",
    category: "Web",
    status: "Concluído",
    year: "2023",
    role: "Full Stack Developer",
    tech: ["Vue.js", "Express", "MySQL"],
    banner: "assets/images/project4-banner.jpg",
    desc: `<p>Descreva seu projeto aqui.</p>`,
    gallery: [
      { type: "image", src: "assets/images/project4-screen1.jpg" },
    ],
    github: "https://github.com/laap07/projeto-4",
    live: "",
  },
};

// Carrega dados do projeto na página individual
function loadProject(id) {
  const p = projects[id];
  if (!p) return;

  const el = (sel) => document.querySelector(sel);

  const titleEl = el('#projectTitle');
  if (titleEl) titleEl.textContent = p.title;

  const badgeEl = el('#projectBadge');
  if (badgeEl) badgeEl.textContent = p.badge;

  const bannerEl = el('#projectBanner');
  if (bannerEl) bannerEl.src = p.banner;

  const descEl = el('#projectDesc');
  if (descEl) descEl.innerHTML = p.desc;

  const tagsEl = el('#projectTags');
  if (tagsEl) tagsEl.innerHTML = p.tech.map(t => `<span class="tag">${t}</span>`).join('');

  const catEl = el('#projectCategory');
  if (catEl) catEl.textContent = p.category;

  const statusEl = el('#projectStatus');
  if (statusEl) statusEl.textContent = p.status;

  const yearEl = el('#projectYear');
  if (yearEl) yearEl.textContent = p.year;

  const roleEl = el('#projectRole');
  if (roleEl) roleEl.textContent = p.role;

  const githubEl = el('#projectGithub');
  if (githubEl && p.github) { githubEl.href = p.github; } 
  else if (githubEl) { githubEl.style.display = 'none'; }

  const liveEl = el('#projectLive');
  if (liveEl && p.live) { liveEl.href = p.live; } 
  else if (liveEl) { liveEl.style.display = 'none'; }

  const galleryEl = el('#projectGallery');
  if (galleryEl && p.gallery) {
    galleryEl.innerHTML = p.gallery.map(item => {
      if (item.type === 'video') {
        return `<video controls poster="">
          <source src="${item.src}" type="video/mp4">
        </video>`;
      }
      return `<img src="${item.src}" alt="${p.title}" loading="lazy" />`;
    }).join('');

    // Ativa lightbox após renderizar
    galleryEl.querySelectorAll('img').forEach(img => {
      img.style.cursor = 'pointer';
      img.addEventListener('click', () => {
        const lightbox = document.getElementById('lightbox');
        const media    = document.getElementById('lightboxMedia');
        if (!lightbox || !media) return;
        media.innerHTML = `<img src="${img.src}" />`;
        lightbox.classList.add('open');
        document.body.style.overflow = 'hidden';
      });
    });
  }

  document.title = `${p.title} | Portfolio`;
}
