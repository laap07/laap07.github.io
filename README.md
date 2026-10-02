# 🎮 Portfólio de Game Programmer | Luan A Procópio

Site de portfólio profissional para desenvolvedor de jogos (Unity / C#), com visual inspirado na Steam — carrossel em destaque na página inicial, grade de jogos com filtros (Mobile, PC, Serious Games), páginas de detalhes com galeria de mídia/vídeos, sobre mim e contato.

---

## 📁 Estrutura de Arquivos

```
ProjetoCodigos/
├── index.html          ← Página inicial (carrossel estilo Steam + grade de jogos)
├── projects.html       ← Lista completa de jogos com filtros (Mobile, PC, Serious Games)
├── project.html        ← Página detalhada de cada jogo (carrega dinamicamente via ?id=N)
├── about.html          ← Página "Sobre Mim" (Unity, C#, experiência na Kriativar, Nurv, PUC Minas)
├── contact.html        ← Página de Contato (e-mail: luanprocopio@hotmail.com)
│
├── css/
│   └── style.css       ← Estilos globais (tema escuro estilo Steam)
│
├── js/
│   └── main.js         ← JavaScript do carrossel, filtros, lightbox e dados dos jogos
│
└── assets/
    ├── images/         ← Fotos de perfil e capturas de tela dos jogos
    │   ├── profile.jpg           ← Sua foto de perfil
    │   ├── project1-banner.jpg   ← Past Dreams (banner)
    │   ├── project1-thumb.jpg    ← Past Dreams (thumb)
    │   ├── project2-banner.jpg   ← Time To Kill! (banner)
    │   ├── project2-thumb.jpg    ← Time To Kill! (thumb)
    │   ├── project3-banner.jpg   ← Company Training Game (banner)
    │   ├── project3-thumb.jpg    ← Company Training Game (thumb)
    │   ├── project4-banner.jpg   ← Mini-Games for kids (banner)
    │   └── project4-thumb.jpg    ← Mini-Games for kids (thumb)
    │
    ├── videos/         ← Vídeos de gameplay (.mp4)
    └── cv.pdf          ← Seu currículo em PDF (opcional)
```

---

## 🕹️ Seus Jogos Cadastrados

Os 4 jogos da sua imagem já estão configurados no arquivo `js/main.js`:

1. **Past Dreams** (Mobile / Google Play)
2. **Time To Kill! (Arena Shooter)** (PC / Gameplay 3D)
3. **Company Training Game** (Serious Games / PC & Mobile & VR / Kriativar)
4. **Mini-Games for kids** (Mobile / Educacional)

### Para adicionar mais jogos ou editar detalhes:
Abra `js/main.js` e adicione ou edite no objeto `projects`:

```js
const projects = {
  1: {
    title: "Past Dreams",
    category: "Mobile",
    status: "Disponível na Google Play",
    year: "2023 - 2024",
    role: "Game Programmer (Unity / C#)",
    tech: ["Unity", "C#", "Mobile", "Google Play"],
    banner: "assets/images/project1-banner.jpg",
    desc: `<p>Descrição do jogo aqui...</p>`,
    gallery: [
      { type: "image", src: "assets/images/project1-banner.jpg" },
      { type: "video", src: "assets/videos/gameplay.mp4" }
    ],
    live: "https://link-do-jogo.com",
  },
  // adicione novos com 5, 6...
};
```

---

## 🌐 Como publicar no GitHub Pages

### Passo a Passo:

**1. Crie um repositório no GitHub:**
- Acesse https://github.com/new
- Nome do repositório: `portfolio` (ou `seu-usuario.github.io`)
- Marque como **Public**
- Clique em **Create repository**

**2. No terminal (PowerShell), envie os arquivos:**

```powershell
cd d:\ProjetoSitePort\ProjetoCodigos

# Inicializa o Git
git init

# Adiciona todos os arquivos
git add .

# Cria o commit inicial
git commit -m "Portfólio de Game Programmer - Luan Procópio"

# Conecta ao repositório remoto (substitua com o link do seu GitHub)
git remote add origin https://github.com/SEU_USUARIO/portfolio.git

# Envia os arquivos
git branch -M main
git push -u origin main
```

**3. Ative o GitHub Pages:**
1. Vá na aba **Settings** do seu repositório no GitHub
2. No menu esquerdo, clique em **Pages**
3. Em **Build and deployment > Branch**, selecione **main** e pasta **/ (root)**
4. Clique em **Save**
5. Em cerca de 1 a 2 minutos, o GitHub vai gerar o link do seu site no ar!

---

## 🎨 Ajustes Rápidos

- **Trocar cor de destaque:** No arquivo `css/style.css`, altere a linha 11:
  ```css
  --accent: #7f5af0; /* Mude para azul, vermelho, ciano ou a cor que preferir */
  ```
- **Adicionar vídeos de gameplay:** Coloque arquivos `.mp4` na pasta `assets/videos/` e referencie no objeto `projects` em `js/main.js`.
