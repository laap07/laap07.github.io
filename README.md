# 🚀 Meu Portfólio Pessoal

Site de portfólio com visual inspirado na Steam — carrossel em destaque, grade de projetos com filtros, páginas individuais por projeto, galeria de mídia com lightbox e formulário de contato.

---

## 📁 Estrutura de Arquivos

```
ProjetoCodigos/
├── index.html          ← Página inicial (carousel + grade de projetos)
├── projects.html       ← Lista completa de projetos com filtros
├── project.html        ← Página individual de cada projeto (carregada via ?id=N)
├── about.html          ← Página "Sobre Mim"
├── contact.html        ← Página de Contato
│
├── css/
│   └── style.css       ← Estilos globais (tema escuro)
│
├── js/
│   └── main.js         ← JavaScript: carousel, filtros, lightbox, dados dos projetos
│
└── assets/
    ├── images/         ← Suas fotos e screenshots (coloque aqui!)
    │   ├── project1-banner.jpg   (imagem grande do banner - ~1600x900px)
    │   ├── project1-thumb.jpg    (miniatura lateral - ~300x200px)
    │   ├── project1-screen1.jpg  (screenshot da galeria)
    │   ├── project2-banner.jpg
    │   ├── project2-thumb.jpg
    │   ├── ...
    │   └── profile.jpg           (sua foto de perfil)
    │
    ├── videos/         ← Seus vídeos de demonstração (.mp4 recomendado)
    │   ├── project1-demo.mp4
    │   └── ...
    │
    └── cv.pdf          ← Seu currículo (opcional)
```

---

## ✏️ Como Personalizar

### 1. Informações pessoais
Edite os seguintes itens em **todos os arquivos HTML** (use Ctrl+H para substituir em massa no VS Code):

| Texto de exemplo | Substituir por |
|---|---|
| `Luan Augusto Procópio` | Luan Augusto Procópio real |
| `luanprocopio@hotmail.com` | Seu e-mail |
| `laap07` | Seu usuário do GitHub |
| `www.linkedin.com/in/luanprocopio` | Sua URL do LinkedIn |
| `Desenvolvedor de Jogos` | Sua descrição profissional |

### 2. Adicionar seus projetos
Abra `js/main.js` e edite o objeto `projects`. Cada projeto tem:

```js
const projects = {
  1: {
    title: "Nome do Projeto",           // Título
    badge: "Em Destaque",               // Badge (Em Destaque, Novo, Popular...)
    category: "Web",                    // Categoria (Web, Mobile, Backend)
    status: "Concluído",               // Status do projeto
    year: "2024",                       // Ano
    role: "Full Stack Developer",       // Seu papel
    tech: ["React", "Node.js"],        // Tecnologias usadas
    banner: "assets/images/p1-banner.jpg",
    desc: `<p>Descrição HTML aqui...</p>`,
    gallery: [
      { type: "image", src: "assets/images/p1-screen1.jpg" },
      { type: "video", src: "assets/videos/p1-demo.mp4" },
    ],
    github: "https://github.com/laap07/repo",
    live: "https://seu-projeto.vercel.app",
  },
  // adicione mais projetos com IDs 2, 3, 4...
};
```

### 3. Adicionar mais projetos na grade
Em `index.html` e `projects.html`, copie um bloco `<article class="project-card">` e altere:
- `data-category="web"` → categoria do filtro (`web`, `mobile`, `backend`)
- `href="project.html?id=N"` → ID correspondente no objeto `projects` do JS
- Textos, imagens e tags

### 4. Adicionar slides ao carousel
Em `index.html`, copie um bloco `<div class="carousel-slide">` e adicione uma nova miniatura `.thumb` no bloco `.carousel-thumbs`.

**Usar vídeo no lugar de imagem no carousel:**
```html
<!-- Substitua <img ...> por: -->
<video class="slide-media" autoplay muted loop playsinline>
  <source src="assets/videos/meu-video.mp4" type="video/mp4">
</video>
```

---

## 🌐 Como publicar no GitHub Pages

### Passo a Passo Completo:

**1. Instale o Git** (se ainda não tiver):
→ Baixe em https://git-scm.com/downloads e instale

**2. Crie uma conta no GitHub** (se ainda não tiver):
→ Acesse https://github.com e cadastre-se

**3. Crie um repositório no GitHub:**
- Clique em **"New repository"**
- Nome: `laap07.github.io` (para o site ficar em `laap07.github.io`)
  - **OU** qualquer nome como `portfolio` (ficará em `laap07.github.io/portfolio`)
- Deixe como **Public**
- **NÃO** marque nenhuma opção de inicialização
- Clique em **"Create repository"**

**4. No PowerShell, dentro da pasta do projeto:**

```powershell
# Navegue até a pasta
cd d:\ProjetoSitePort\ProjetoCodigos

# Inicie o Git
git init

# Adicione todos os arquivos
git add .

# Faça o primeiro commit
git commit -m "Primeiro commit: portfólio completo"

# Conecte ao repositório do GitHub (substitua com seu usuário e nome do repo)
git remote add origin https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git

# Envie os arquivos
git push -u origin main
```

**5. Ative o GitHub Pages:**
- No repositório do GitHub, clique em **Settings**
- Role até **"Pages"** no menu lateral esquerdo
- Em **"Source"**, selecione **"Deploy from a branch"**
- Em **"Branch"**, selecione **`main`** e **`/ (root)`**
- Clique em **Save**
- Aguarde ~2 minutos e seu site estará no ar! 🎉

**6. Para atualizar o site depois:**
```powershell
git add .
git commit -m "Atualizei os projetos"
git push
```

---

## 💡 Dicas Extras

- **Tamanho das imagens:** Use imagens otimizadas. Banners: ~1600x900px, miniaturas: ~600x400px
- **Formato de vídeo:** `.mp4` com codec H.264 para máxima compatibilidade
- **Compressão:** Use [squoosh.app](https://squoosh.app) para comprimir imagens antes de subir
- **Vídeos grandes:** Considere hospedar no YouTube e embedar com `<iframe>` em vez de arquivo local
- **Domínio personalizado:** No GitHub Pages > Settings > Pages você pode adicionar seu domínio

---

## 🎨 Personalizando o Visual

As cores principais estão definidas como variáveis CSS no topo de `css/style.css`:

```css
:root {
  --accent:   #7f5af0;   /* Cor roxa principal - mude aqui! */
  --accent-2: #2cb67d;   /* Verde secundário */
  --bg-dark:  #0d0d0f;   /* Fundo escuro */
}
```

Troque `--accent` por qualquer cor hex para mudar o tema inteiro.
