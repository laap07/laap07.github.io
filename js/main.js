// =============================================
// PORTFOLIO - MAIN JAVASCRIPT
// Luan A Procópio · Game Programmer
// =============================================

document.addEventListener('DOMContentLoaded', () => {

  // ---- NAVBAR: scroll effect + hamburger ----
  const navbar    = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('navLinks');

  window.addEventListener('scroll', () => {
    navbar?.classList.toggle('scrolled', window.scrollY > 30);
  });

  hamburger?.addEventListener('click', () => {
    navLinks?.classList.toggle('open');
  });

  // Fecha menu ao clicar em link
  navLinks?.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
  });

  // ---- CAROUSEL ----
  const slides  = document.querySelectorAll('.carousel-slide');
  const thumbs  = document.querySelectorAll('.thumb');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');

  if (slides.length > 0) {
    let current    = 0;
    let autoTimer  = null;
    const INTERVAL = 5000; // 5 segundos por slide

    function goTo(index) {
      slides[current]?.classList.remove('active');
      thumbs[current]?.classList.remove('active');

      current = (index + slides.length) % slides.length;

      slides[current]?.classList.add('active');
      thumbs[current]?.classList.add('active');

      // Reinicia barra de progresso
      thumbs.forEach(t => {
        const bar = t.querySelector('.thumb-bar');
        if (bar) {
          bar.style.transition = 'none';
          bar.style.width = '0%';
        }
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

    // Touch/swipe
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
          const step   = Math.ceil(target / 40);
          const timer  = setInterval(() => {
            count = Math.min(count + step, target);
            el.textContent = count;
            if (count >= target) clearInterval(timer);
          }, 35);
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
    if (btn) {
      btn.textContent = 'Enviando...';
      btn.disabled = true;
    }

    // Feedback visual de envio
    await new Promise(r => setTimeout(r, 1000));

    form.style.display = 'none';
    if (success) success.style.display = 'block';
  });

  // ---- PÁGINA DE PROJETO INDIVIDUAL ----
  const urlParams = new URLSearchParams(window.location.search);
  const projectId = urlParams.get('id');

  if (projectId && typeof projects !== 'undefined') {
    loadProject(projectId);
  }

  // ---- SCROLL REVEAL ----
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
// DADOS DOS JOGOS & PROJETOS
// =============================================
const projects = {
  1: {
    title: "Past Dreams",
    category: "Mobile",
    status: "Disponível na Google Play",
    year: "2023 - 2024",
    role: "Game Programmer (Unity / C#)",
    tech: ["Unity", "C#", "Mobile", "Google Play", "UI Systems", "Gameplay"],
    banner: "assets/images/project1-banner.jpg",
    desc: `
      <p><strong>Past Dreams</strong> é um jogo mobile atmosférico e envolvente, publicado e disponível para download na Google Play Store.</p>
      <h2>Sobre o Desenvolvimento</h2>
      <p>Desenvolvido com a Unity engine, o projeto combinou arte estilizada, física refinada e sistemas dinâmicos de interação por toque.</p>
      <h2>Aspectos Técnicos</h2>
      <p>Implementação de arquitetura de código modular em C#, otimização de renderização e taxa de quadros (FPS) para smartphones Android, gerenciamento de cenas assíncrono e balanceamento de gameplay.</p>
    `,
    gallery: [
      { type: "image", src: "assets/images/project1-banner.jpg" },
    ],
    live: "https://play.google.com/store/apps/details?id=com.pastdreams",
  },
  2: {
    title: "Time To Kill! (Arena Shooter)",
    category: "PC",
    status: "Concluído",
    year: "2023",
    role: "Gameplay & Systems Programmer",
    tech: ["Unity 3D", "C#", "PC", "Gameplay Systems", "AI", "Physics"],
    banner: "assets/images/project2-banner.jpg",
    desc: `
      <p><strong>Time To Kill!</strong> é um arena shooter 3D dinâmico focado em combate rápido, reflexos aguçados e navegação fluida de cenário.</p>
      <h2>Sistemas de Gameplay</h2>
      <p>Desenvolvimento do sistema completo de movimentação do jogador, mecânicas de tiro (recoil, projéteis/hitscan, spread de armas), HUD e interface de combate reativa.</p>
      <h2>Inteligência Artificial & Spawns</h2>
      <p>Inimigos com comportamentos de perseguição e ataque, gerenciamento de ondas de inimigos e otimização de colisões e efeitos visuais.</p>
    `,
    gallery: [
      { type: "image", src: "assets/images/project2-banner.jpg" },
    ],
    live: "",
  },
  3: {
    title: "Company Training Game",
    category: "Serious Games",
    status: "Entregue / Em produção",
    year: "2023 - 2024",
    role: "Game Developer (Kriativar)",
    tech: ["Unity", "C#", "PC / Mobile / VR", "Serious Games", "Simulações"],
    banner: "assets/images/project3-banner.jpg",
    desc: `
      <p><strong>Company Training Game</strong> é uma solução de <em>Serious Game</em> criada para treinamentos corporativos interativos, transformando protocolos complexos em experiências imersivas de aprendizado.</p>
      <h2>Desafios Corporativos</h2>
      <p>Estruturação de árvores de diálogo, tomada de decisão com ramificações pedagógicas e coleta de métricas de desempenho dos participantes.</p>
      <h2>Suporte Multiplataforma</h2>
      <p>Arquitetura adaptada para execução em PC, dispositivos móveis e suporte a Realidade Virtual (VR), garantindo acessibilidade a diferentes perfis de equipes.</p>
    `,
    gallery: [
      { type: "image", src: "assets/images/project3-banner.jpg" },
    ],
    live: "",
  },
  4: {
    title: "Mini-Games for kids",
    category: "Mobile",
    status: "Concluído",
    year: "2022 - 2023",
    role: "Game Programmer (Nurv / Freelance)",
    tech: ["Unity", "C#", "Mobile", "Touch Systems", "Educational"],
    banner: "assets/images/project4-banner.jpg",
    desc: `
      <p>Coleção de minijogos lúdicos desenvolvidos especialmente para crianças, focados no desenvolvimento cognitivo, coordenação motora e raciocínio lógico.</p>
      <h2>Design Acessível</h2>
      <p>Interfaces gráficas limpas e autoexplicativas que dispensam leitura complexa, com feedback sonoro e visual instantâneo para reforço positivo.</p>
      <h2>Engenharia & Performance</h2>
      <p>Mecânicas leves em Unity com tempos de carregamento instantâneos e suporte a diversas resoluções de telas de tablets e celulares.</p>
    `,
    gallery: [
      { type: "image", src: "assets/images/project4-banner.jpg" },
    ],
    live: "",
  },
};

// Carrega dados do jogo na página individual
function loadProject(id) {
  const p = projects[id];
  if (!p) return;

  const el = (sel) => document.querySelector(sel);

  const titleEl = el('#projectTitle');
  if (titleEl) titleEl.textContent = p.title;

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

  const liveEl = el('#projectLive');
  if (liveEl) {
    if (p.live) {
      liveEl.href = p.live;
      liveEl.style.display = 'inline-flex';
    } else {
      liveEl.style.display = 'none';
    }
  }

  const galleryEl = el('#projectGallery');
  if (galleryEl && p.gallery) {
    galleryEl.innerHTML = p.gallery.map(item => {
      if (item.type === 'video') {
        return `<video controls>
          <source src="${item.src}" type="video/mp4">
        </video>`;
      }
      return `<img src="${item.src}" alt="${p.title}" loading="lazy" />`;
    }).join('');

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

  document.title = `${p.title} | Luan A Procópio`;
}
