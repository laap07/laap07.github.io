// =============================================
// i18n - English (default) / Português
// Usage in HTML:
//   data-i18n="key"                 -> textContent
//   data-i18n-html="key"            -> innerHTML
//   data-i18n-attr="attr:key;..."   -> attributes (placeholder, aria-label...)
// =============================================
const TRANSLATIONS = {
  en: {
    // Titles
    'title.home': 'Luan A Procópio | Game Programmer',
    'title.projects': 'Projects | Luan A Procópio',
    'title.about': 'About Me | Luan A Procópio',
    'title.contact': 'Contact | Luan A Procópio',

    // Nav / footer
    'nav.home': 'Home',
    'nav.projects': 'Projects',
    'nav.about': 'About Me',
    'nav.contact': 'Contact',
    'nav.menu': 'Menu',
    'footer.tagline': 'Game programmer passionate about building memorable interactive experiences.',
    'footer.nav': 'Navigation',
    'footer.links': 'Links',
    'footer.rights': 'Luan A Procópio · Game Programmer.',

    // Home
    'home.prev': 'Previous',
    'home.next': 'Next',
    'home.cta.view': 'View Projects',
    'home.badge.ent': 'Entertainment',
    'home.badge.corp': 'Corporate Training',
    'home.badge.events': 'Events & Activations',
    'home.slide1.desc': 'Arena shooter built as my graduation project. I worked on the gameplay and the networking layer: quick join, lobbies and gameplay-related netcode.',
    'home.slide2.desc': 'Mobile game available on Google Play, developed during my second semester at university. All the programming was done by me.',
    'home.slide3.desc': 'Interactive safety training game for a company, mixing a virtual instructor, a 3D city and guided learning scenarios.',
    'home.slide4.title': 'Events & Activations',
    'home.slide4.desc': 'Games and quizzes for totems, trade shows and institutional events, played by real visitors on touch screens.',
    'home.stat.years': 'Years of Experience (since 2021)',
    'home.cats.title': 'What I Build',
    'home.cats.sub': 'From entertainment games to serious games for education, companies and events',
    'home.cat.ent.title': 'Entertainment Games',
    'home.cat.ent.desc': 'Commercial and academic games focused on gameplay systems and multiplayer.',
    'home.cat.serious.title': 'Serious Games',
    'home.cat.serious.desc': 'Games with a purpose: teaching, training teams and engaging people at live events.',
    'home.cat.education': 'Education',
    'home.cat.corporate': 'Corporate',
    'home.cat.events': 'Events',
    'home.cat.explore': 'Explore',
    'home.cta.title': 'Have an idea or an opportunity?',
    'home.cta.desc': 'Whether it is a project proposal, a job offer or just an idea you want to build together, I would love to hear from you.',
    'home.cta.contact': 'Get in Touch',
    'home.cta.about': 'About Me',

    // Projects
    'proj.hero.title': 'Projects',
    'proj.hero.sub': 'A visual overview of the games I have worked on. Click any image or video to enlarge it.',
    'proj.tab.ent': 'Entertainment',
    'proj.tab.serious': 'Serious Games',
    'proj.ent.title': 'Entertainment Games',
    'proj.ent.sub': 'Games made to be played for fun: gameplay, systems and multiplayer.',
    'proj.ttk.desc': 'Arena shooter developed as my university graduation project. I was responsible for part of the gameplay and for the networking: servers, quick lobby / quick join and the netcode tied to gameplay.',
    'proj.ttk.play': 'Play on itch.io',
    'proj.pd.desc': 'Mobile game published on Google Play, developed during my second semester at university. I did all of the programming.',
    'proj.pd.play': 'Get it on Google Play',
    'proj.serious.title': 'Serious Games',
    'proj.serious.sub': 'Games created with a purpose beyond fun: education, corporate training and live events.',
    'proj.edu.title': 'Education',
    'proj.edu.sub': 'Playful learning for kids and interactive science experiences.',
    'proj.kids.title': 'Viagem Maluca',
    'proj.kids.desc': 'Educational mini-game for kids with lives, timer and score, built for touch and mobile.',
    'proj.ar.title': 'Augmented Reality Experiment',
    'proj.ar.desc': 'Web AR experience that places a 3D electric circuit table in the real world to explain where energy comes from.',
    'proj.corp.title': 'Corporate Training',
    'proj.corp.sub': 'Immersive training experiences that turn company protocols into interactive lessons.',
    'proj.3c.title': 'Safe Driving Training',
    'proj.3c.desc': 'Training game for a company with a virtual instructor, a 3D city and guided steps about safe riding and road safety.',
    'proj.events.title': 'Events & Activations',
    'proj.events.sub': 'Touch-screen games and quizzes played by visitors at trade shows and institutional events.',
    'proj.totem.title': 'Interactive Totems',
    'proj.totem.desc': 'Games running on totems at real events, played by visitors on the show floor.',
    'proj.vm.title': 'Viva Minas – Racing Game',
    'proj.vm.desc': 'Driving game made for an institutional event.',
    'proj.sesc.title': 'Find the Points Challenge',
    'proj.sesc.desc': 'Quick challenge where visitors discover solutions by finding the hidden points.',
    'proj.quiz.title': 'Integrity Thermometer Quiz',
    'proj.quiz.desc': 'Light-hearted quiz that tests knowledge about integrity, made for a 5-year anniversary.',
    'proj.caixa.title': 'Poupançudos – Drag & Drop',
    'proj.caixa.desc': 'Drag-and-drop financial education game.',
    'proj.detran.title': 'Risk Crush',
    'proj.detran.desc': 'Match-style game about traffic awareness.',
    'proj.cta.title': 'Like what you see?',
    'proj.cta.desc': 'Let us talk about your next project.',

    // About
    'about.hero.title': 'About Me',
    'about.hero.sub': 'My background, technical skills and experience in game development.',
    'about.photo.caption': 'Zakopane, Poland',
    'about.hello': 'Hi, I am',
    'about.role': 'Game Programmer · Unity Developer · Systems & Gameplay',
    'about.p1': 'Game programmer from Brazil with solid experience building educational, corporate and commercial games with Unity.',
    'about.p2': 'Experience across <strong>PC, Mobile, VR and AR</strong>, specialised in gameplay systems, immersive interactive experiences and <em>serious games</em>.',
    'about.p3': 'Bachelor in Digital Games from PUC Minas (2021 – 2025). I build robust solutions, from rapid prototyping to scalable systems architecture and multiplayer.',
    'about.contact': 'Get in Touch',
    'about.skills.title': 'Expertise & Tools',
    'about.skills.sub': 'Engines, languages, systems and game pipelines I work with',
    'skill.unity': 'Unity (3D / Mobile / VR / AR)',
    'skill.csharp': 'C#',
    'skill.gameplay': 'Gameplay & Systems',
    'skill.netcode': 'Netcode & Multiplayer',
    'skill.vrar': 'VR & AR Development',
    'skill.ui': 'UI Systems',
    'skill.blender': 'Blender (3D)',
    'skill.git': 'Git / Version Control',
    'skill.ai': 'AI Tools & Integration',
    'skill.proto': 'Rapid Prototyping',
    'about.english': 'English Proficiency',
    'about.reading': 'Reading',
    'about.listening': 'Listening',
    'about.speaking': 'Speaking',
    'about.writing': 'Writing',
    'about.exp.title': 'Professional Experience',
    'about.exp.free.title': 'Freelancer',
    'about.exp.free.role': 'Game Developer & Programmer',
    'about.exp.free.desc': 'Development of educational, government, corporate and event-focused games.',
    'about.exp.kria.role': 'Game Developer & Programmer',
    'about.exp.kria.desc': 'Development of corporate training games and simulations for PC, Mobile and VR.',
    'about.exp.mentor.role': 'Programming Mentor',
    'about.exp.mentor.desc': 'Technical mentoring in game programming and logic for undergraduate students.',
    'about.exp.nurv.role': 'Game Programmer',
    'about.exp.nurv.desc': 'Development of commercial and educational games with Unity.',
    'about.edu.degree': 'Bachelor in Digital Games',
    'about.edu.desc': 'Degree focused on game development and engineering, gameplay, physics, computer graphics and artificial intelligence.',
    'about.present': 'Present',

    // Contact
    'contact.hero.title': 'Get in Touch',
    'contact.hero.sub': 'Have a proposal, a project idea or a job offer? Let us talk.',
    'contact.info.title': 'Let us build something together!',
    'contact.info.desc': 'Feel free to reach out about project proposals, job offers or any idea you would like to bring to life. I will get back to you as soon as possible.',
    'contact.email': 'E-mail',
    'contact.itch': 'Itch.io',
    'contact.itch.v': 'My games on Itch.io',
    'contact.github': 'GitHub',
    'contact.github.v': 'Repositories on GitHub',
    'contact.name': 'Your Name',
    'contact.name.ph': 'e.g. Jane Smith',
    'contact.email.label': 'Your E-mail',
    'contact.email.ph': 'you@company.com',
    'contact.subject': 'Subject',
    'contact.subject.ph': 'Project proposal / Job offer...',
    'contact.message': 'Message',
    'contact.message.ph': 'Hi Luan, I liked your work and would like to talk about...',
    'contact.send': 'Send Message',
    'contact.sending': 'Sending...',
    'contact.success.title': 'Message sent!',
    'contact.success.desc': 'Thank you for reaching out. I will reply to you by e-mail soon.',
    'contact.error': 'Something went wrong while sending. Please try again or write to me directly by e-mail.',

    // Lightbox
    'lb.close': 'Close'
  },

  pt: {
    'title.home': 'Luan A Procópio | Game Programmer',
    'title.projects': 'Projetos | Luan A Procópio',
    'title.about': 'Sobre Mim | Luan A Procópio',
    'title.contact': 'Contato | Luan A Procópio',

    'nav.home': 'Início',
    'nav.projects': 'Projetos',
    'nav.about': 'Sobre Mim',
    'nav.contact': 'Contato',
    'nav.menu': 'Menu',
    'footer.tagline': 'Game programmer apaixonado por criar experiências interativas memoráveis.',
    'footer.nav': 'Navegação',
    'footer.links': 'Links',
    'footer.rights': 'Luan A Procópio · Game Programmer.',

    'home.prev': 'Anterior',
    'home.next': 'Próximo',
    'home.cta.view': 'Ver Projetos',
    'home.badge.ent': 'Entretenimento',
    'home.badge.corp': 'Treinamento Corporativo',
    'home.badge.events': 'Eventos e Ativações',
    'home.slide1.desc': 'Arena shooter feito como meu TCC. Atuei na parte de gameplay e na rede: quick join, lobbies e netcode ligado à gameplay.',
    'home.slide2.desc': 'Jogo mobile disponível na Google Play, desenvolvido no segundo semestre da faculdade. Toda a programação foi feita por mim.',
    'home.slide3.desc': 'Jogo de treinamento de segurança para uma empresa, com instrutora virtual, cidade 3D e cenários de aprendizado guiado.',
    'home.slide4.title': 'Eventos e Ativações',
    'home.slide4.desc': 'Jogos e quizzes para totens, feiras e eventos institucionais, jogados por visitantes reais em telas touch.',
    'home.stat.years': 'Anos de Experiência (desde 2021)',
    'home.cats.title': 'O Que Eu Desenvolvo',
    'home.cats.sub': 'De jogos de entretenimento a serious games para educação, empresas e eventos',
    'home.cat.ent.title': 'Jogos de Entretenimento',
    'home.cat.ent.desc': 'Jogos comerciais e acadêmicos com foco em sistemas de gameplay e multiplayer.',
    'home.cat.serious.title': 'Serious Games',
    'home.cat.serious.desc': 'Jogos com propósito: ensinar, treinar equipes e engajar pessoas em eventos ao vivo.',
    'home.cat.education': 'Educação',
    'home.cat.corporate': 'Empresas',
    'home.cat.events': 'Eventos',
    'home.cat.explore': 'Explorar',
    'home.cta.title': 'Tem uma ideia ou oportunidade?',
    'home.cta.desc': 'Seja uma proposta de projeto, uma oferta de trabalho ou uma ideia para construirmos juntos, vou adorar conversar.',
    'home.cta.contact': 'Entrar em Contato',
    'home.cta.about': 'Sobre Mim',

    'proj.hero.title': 'Projetos',
    'proj.hero.sub': 'Uma visão visual dos jogos em que trabalhei. Clique em qualquer imagem ou vídeo para ampliar.',
    'proj.tab.ent': 'Entretenimento',
    'proj.tab.serious': 'Serious Games',
    'proj.ent.title': 'Jogos de Entretenimento',
    'proj.ent.sub': 'Jogos feitos para se divertir: gameplay, sistemas e multiplayer.',
    'proj.ttk.desc': 'Arena shooter desenvolvido como meu TCC da faculdade. Fui responsável por parte da gameplay e pela rede: servidores, lobby rápido / quick join e o netcode ligado à gameplay.',
    'proj.ttk.play': 'Jogar no itch.io',
    'proj.pd.desc': 'Jogo mobile publicado na Google Play, desenvolvido no segundo semestre da faculdade. Fiz toda a parte de programação.',
    'proj.pd.play': 'Baixar na Google Play',
    'proj.serious.title': 'Serious Games',
    'proj.serious.sub': 'Jogos criados com um propósito além da diversão: educação, treinamento corporativo e eventos ao vivo.',
    'proj.edu.title': 'Educação',
    'proj.edu.sub': 'Aprendizado lúdico para crianças e experiências interativas de ciências.',
    'proj.kids.title': 'Viagem Maluca',
    'proj.kids.desc': 'Minigame educativo para crianças com vidas, tempo e pontuação, feito para toque e mobile.',
    'proj.ar.title': 'Experimento em Realidade Aumentada',
    'proj.ar.desc': 'Experiência de AR na web que coloca uma mesa 3D de circuito elétrico no mundo real para explicar de onde vem a energia.',
    'proj.corp.title': 'Treinamento Corporativo',
    'proj.corp.sub': 'Experiências imersivas que transformam protocolos da empresa em lições interativas.',
    'proj.3c.title': 'Treinamento de Pilotagem Segura',
    'proj.3c.desc': 'Jogo de treinamento para uma empresa com instrutora virtual, cidade 3D e etapas guiadas sobre pilotagem e segurança no trânsito.',
    'proj.events.title': 'Eventos e Ativações',
    'proj.events.sub': 'Jogos e quizzes em tela touch jogados por visitantes em feiras e eventos institucionais.',
    'proj.totem.title': 'Totens Interativos',
    'proj.totem.desc': 'Jogos rodando em totens em eventos reais, jogados por visitantes no evento.',
    'proj.vm.title': 'Viva Minas – Jogo de Corrida',
    'proj.vm.desc': 'Jogo de direção feito para um evento institucional.',
    'proj.sesc.title': 'Desafio Encontre os Pontos',
    'proj.sesc.desc': 'Desafio rápido em que o visitante descobre soluções encontrando os pontos escondidos.',
    'proj.quiz.title': 'Quiz Termômetro da Integridade',
    'proj.quiz.desc': 'Quiz leve que testa conhecimentos sobre integridade, feito para a comemoração de 5 anos.',
    'proj.caixa.title': 'Poupançudos – Arrastar e Soltar',
    'proj.caixa.desc': 'Jogo de arrastar e soltar de educação financeira.',
    'proj.detran.title': 'Risk Crush',
    'proj.detran.desc': 'Jogo estilo match sobre consciência no trânsito.',
    'proj.cta.title': 'Gostou do que viu?',
    'proj.cta.desc': 'Vamos conversar sobre o seu próximo projeto.',

    'about.hero.title': 'Sobre Mim',
    'about.hero.sub': 'Minha trajetória, habilidades técnicas e experiência em desenvolvimento de jogos.',
    'about.photo.caption': 'Zakopane, Polônia',
    'about.hello': 'Olá, sou',
    'about.role': 'Game Programmer · Unity Developer · Systems & Gameplay',
    'about.p1': 'Game programmer brasileiro com sólida experiência no desenvolvimento de jogos educacionais, corporativos e comerciais utilizando Unity.',
    'about.p2': 'Experiência em <strong>PC, Mobile, VR e AR</strong>, com foco em sistemas de gameplay, experiências interativas imersivas e <em>serious games</em>.',
    'about.p3': 'Bacharel em Jogos Digitais pela PUC Minas (2021 – 2025). Crio soluções robustas, da prototipagem rápida à arquitetura de sistemas escaláveis e multiplayer.',
    'about.contact': 'Entre em Contato',
    'about.skills.title': 'Expertise & Ferramentas',
    'about.skills.sub': 'Motores, linguagens, sistemas e pipelines de jogos com os quais trabalho',
    'skill.unity': 'Unity (3D / Mobile / VR / AR)',
    'skill.csharp': 'C#',
    'skill.gameplay': 'Gameplay & Sistemas',
    'skill.netcode': 'Netcode & Multiplayer',
    'skill.vrar': 'Desenvolvimento VR & AR',
    'skill.ui': 'Sistemas de UI',
    'skill.blender': 'Blender (3D)',
    'skill.git': 'Git / Controle de Versão',
    'skill.ai': 'Ferramentas de IA & Integração',
    'skill.proto': 'Prototipagem Rápida',
    'about.english': 'Proficiência em Inglês',
    'about.reading': 'Leitura',
    'about.listening': 'Compreensão Auditiva',
    'about.speaking': 'Fala',
    'about.writing': 'Escrita',
    'about.exp.title': 'Experiência Profissional',
    'about.exp.free.title': 'Freelancer',
    'about.exp.free.role': 'Game Developer & Programmer',
    'about.exp.free.desc': 'Desenvolvimento de jogos educativos, governamentais, corporativos e focados em eventos e ativações.',
    'about.exp.kria.role': 'Game Developer & Programmer',
    'about.exp.kria.desc': 'Desenvolvimento de jogos de treinamento corporativo e simulações para PC, Mobile e VR.',
    'about.exp.mentor.role': 'Mentor de Programação',
    'about.exp.mentor.desc': 'Mentoria técnica em programação de jogos e lógica para estudantes de graduação.',
    'about.exp.nurv.role': 'Game Programmer',
    'about.exp.nurv.desc': 'Desenvolvimento de jogos comerciais e educativos com Unity.',
    'about.edu.degree': 'Bacharelado em Jogos Digitais',
    'about.edu.desc': 'Formação focada em desenvolvimento e engenharia de jogos, gameplay, física, computação gráfica e inteligência artificial.',
    'about.present': 'Presente',

    'contact.hero.title': 'Entre em Contato',
    'contact.hero.sub': 'Tem uma proposta, uma ideia de projeto ou uma oferta de trabalho? Vamos conversar.',
    'contact.info.title': 'Vamos construir algo juntos!',
    'contact.info.desc': 'Fique à vontade para entrar em contato sobre propostas de projeto, ofertas de trabalho ou qualquer ideia que queira tirar do papel. Respondo o mais rápido possível.',
    'contact.email': 'E-mail',
    'contact.itch': 'Itch.io',
    'contact.itch.v': 'Meus jogos no Itch.io',
    'contact.github': 'GitHub',
    'contact.github.v': 'Repositórios no GitHub',
    'contact.name': 'Seu Nome',
    'contact.name.ph': 'Ex: Ana Souza',
    'contact.email.label': 'Seu E-mail',
    'contact.email.ph': 'exemplo@empresa.com',
    'contact.subject': 'Assunto',
    'contact.subject.ph': 'Proposta de projeto / Oferta de trabalho...',
    'contact.message': 'Mensagem',
    'contact.message.ph': 'Olá Luan, gostei do seu trabalho e gostaria de conversar sobre...',
    'contact.send': 'Enviar Mensagem',
    'contact.sending': 'Enviando...',
    'contact.success.title': 'Mensagem enviada!',
    'contact.success.desc': 'Obrigado pelo contato. Responderei por e-mail em breve.',
    'contact.error': 'Algo deu errado ao enviar. Tente novamente ou me escreva diretamente por e-mail.',

    'lb.close': 'Fechar'
  }
};

const I18N = {
  current: 'en',

  t(key) {
    return (TRANSLATIONS[this.current] && TRANSLATIONS[this.current][key]) || TRANSLATIONS.en[key] || key;
  },

  apply() {
    document.documentElement.lang = this.current === 'pt' ? 'pt-BR' : 'en';

    document.querySelectorAll('[data-i18n]').forEach(el => {
      el.textContent = this.t(el.dataset.i18n);
    });
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      el.innerHTML = this.t(el.dataset.i18nHtml);
    });
    document.querySelectorAll('[data-i18n-attr]').forEach(el => {
      el.dataset.i18nAttr.split(';').forEach(pair => {
        const [attr, key] = pair.split(':').map(s => s.trim());
        if (attr && key) el.setAttribute(attr, this.t(key));
      });
    });

    const titleKey = document.body.dataset.title;
    if (titleKey) document.title = this.t(titleKey);

    document.querySelectorAll('.lang-toggle [data-lang]').forEach(opt => {
      opt.classList.toggle('active', opt.dataset.lang === this.current);
    });
  },

  set(lang) {
    if (!TRANSLATIONS[lang]) return;
    this.current = lang;
    try { localStorage.setItem('lang', lang); } catch (e) {}
    this.apply();
  },

  init() {
    let saved = null;
    try { saved = localStorage.getItem('lang'); } catch (e) {}
    // Default language is English
    this.current = saved && TRANSLATIONS[saved] ? saved : 'en';
    this.apply();

    document.querySelectorAll('.lang-toggle [data-lang]').forEach(opt => {
      opt.addEventListener('click', () => this.set(opt.dataset.lang));
    });
  }
};

document.addEventListener('DOMContentLoaded', () => I18N.init());
