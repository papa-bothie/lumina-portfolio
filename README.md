# 🌟 Portfolio Lumina - Papa Bothie DIOP

[![CI - Build & Test](https://github.com/papa-bothie/lumina-portfolio/workflows/CI%20-%20Build%20&%20Test/badge.svg)](https://github.com/papa-bothie/lumina-portfolio/actions)
[![Deploy to GitHub Pages](https://github.com/papa-bothie/lumina-portfolio/workflows/Deploy%20to%20GitHub%20Pages/badge.svg)](https://github.com/papa-bothie/lumina-portfolio/actions)

> Portfolio personnel moderne et professionnel avec animations 3D et design premium

---

## 🚀 Démo en Ligne

**🔗 [Voir le Portfolio](https://papa-bothie.github.io/lumina-portfolio/)**

---

## ✨ Fonctionnalités

- 🎨 **Design Premium** - Interface moderne avec animations fluides
- 🌐 **Background 3D interactif** - Powered by Spline
- 📱 **Responsive Design** - Optimisé pour tous les écrans
- ⚡ **Performance optimisée** - Build Vite ultra-rapide
- 🎯 **SEO-friendly** - Métadonnées et structure optimisées
- ♿ **Accessible** - ARIA labels et sémantique HTML
- 🔄 **CI/CD** - Déploiement automatique avec GitHub Actions

---

## 🛠️ Technologies Utilisées

### Core
- ⚛️ **React 18** - Framework UI
- 📘 **TypeScript** - Type safety
- ⚡ **Vite** - Build tool ultra-rapide

### Styling
- 🎨 **Tailwind CSS** - Utility-first CSS
- 🧩 **shadcn/ui** - Composants UI réutilisables
- 🎭 **Lucide Icons** - Icônes modernes

### 3D & Animations
- 🌀 **Spline** - Background 3D interactif
- ✨ **Framer Motion** - Animations fluides (via shadcn)

### Dev Tools
- 📏 **ESLint** - Linting
- 💅 **Prettier** - Formatage automatique
- 🔄 **GitHub Actions** - CI/CD

---

## 📦 Installation

### Prérequis
- Node.js >= 18.x
- npm ou yarn

### Configuration Locale

```bash
# 1. Cloner le repo
git clone https://github.com/papa-bothie/lumina-portfolio.git
cd lumina-portfolio

# 2. Installer les dépendances
npm install

# 3. Lancer le serveur de dev
npm run dev

# 4. Ouvrir http://localhost:8080
```

---

## 📜 Scripts Disponibles

### Développement
```bash
npm run dev              # Lance le serveur de dev (http://localhost:8080)
npm run preview          # Prévisualise le build de production
```

### Build
```bash
npm run build            # Build de production
npm run build:dev        # Build de développement
```

### Qualité de Code
```bash
npm run format           # Auto-formate le code avec Prettier
npm run format:check     # Vérifie le formatage (utilisé par CI)
npm run lint             # Vérifie le code avec ESLint
```

---

## 🚀 Déploiement

Le projet utilise **GitHub Actions** pour le déploiement automatique sur GitHub Pages.

### Déploiement Automatique
- ✅ Push vers `main` → Build & Deploy automatique
- ✅ Pull requests → Tests automatiques
- ✅ URL disponible : `https://papa-bothie.github.io/lumina-portfolio/`

### Configuration Manuelle
Voir le guide détaillé : [DEPLOIEMENT_GUIDE.md](./DEPLOIEMENT_GUIDE.md)

---

## 📂 Structure du Projet

```
lumina-portfolio/
├── .github/
│   └── workflows/        # CI/CD workflows
├── public/               # Assets statiques
├── src/
│   ├── assets/          # Images et médias
│   ├── components/      # Composants React
│   │   ├── ui/         # Composants shadcn/ui
│   │   └── *.tsx       # Sections du portfolio
│   ├── lib/            # Utilitaires
│   │   └── constants.ts # Constantes globales
│   ├── pages/          # Pages de l'app
│   ├── App.tsx         # Composant principal
│   └── main.tsx        # Point d'entrée
├── .prettierrc         # Configuration Prettier
├── tailwind.config.ts  # Configuration Tailwind
├── vite.config.ts      # Configuration Vite
└── package.json        # Dépendances
```

---

## 🎯 Sections du Portfolio

1. **🏠 Hero** - Présentation avec photo profile et background 3D
2. **👤 À propos** - Parcours et compétences clés
3. **💡 Compétences** - Technologies maîtrisées (avec niveaux)
4. **💼 Projets** - Portfolio de projets réalisés
5. **📚 Expérience** - Timeline formation & projets
6. **📧 Contact** - Formulaire et liens sociaux

---

## 🔧 Personnalisation

### Modifier les informations personnelles
Fichiers à modifier :
- `src/components/HeroSection.tsx` - Nom, titre, photo
- `src/components/AboutSection.tsx` - Bio et highlights
- `src/components/SkillsSection.tsx` - Compétences et niveaux
- `src/components/PortfolioSection.tsx` - Projets
- `src/components/ExperienceSection.tsx` - Parcours
- `src/components/ContactSection.tsx` - Infos contact

### Modifier les couleurs
Fichier : `src/index.css`
```css
:root {
  --primary: 43 100% 60%;  /* Or doré */
  --background: 228 26% 10%; /* Bleu marine foncé */
  /* ... */
}
```

### Modifier les constantes
Fichier : `src/lib/constants.ts`
```typescript
export const SKILL_LEVELS = {
  EXPERT: 100,
  ADVANCED: 95,
  // ...
};
```

---

## 📊 Qualité du Code

### Métriques
- ✅ **0 erreurs React** (keys, props)
- ✅ **0 magic numbers** (constantes nommées)
- ✅ **Quotes standardisées** (double quotes)
- ✅ **Composants < 100 lignes** (refactoring)
- ✅ **TypeScript strict** (interfaces typées)
- ✅ **Accessibilité** (aria-labels, sémantique)

### Rapports
- 📄 [CORRECTIONS_RAPPORT.md](./CORRECTIONS_RAPPORT.md) - Détails des améliorations
- 📄 [DEPLOIEMENT_GUIDE.md](./DEPLOIEMENT_GUIDE.md) - Guide CI/CD complet

---

## 📝 License

Ce projet est sous licence **MIT**. Voir [LICENSE](./LICENSE) pour plus d'informations.

---

## 👨‍💻 Auteur

**Papa Bothie DIOP**
- 💼 Développeur Informatique Junior
- 📧 Email: [papebothie03@gmail.com](mailto:papebothie03@gmail.com)
- 🔗 LinkedIn: [Papa Bothie DIOP](https://www.linkedin.com/in/papa-bothie-diop-0083b9261/)
- 💻 GitHub: [@papa-bothie](https://github.com/papa-bothie)
- 📱 WhatsApp: [+221 78 181 17 56](https://wa.me/221781811756)

---

## 🌟 Remerciements

- [Vite](https://vitejs.dev/) - Build tool
- [React](https://react.dev/) - Framework UI
- [shadcn/ui](https://ui.shadcn.com/) - Composants UI
- [Tailwind CSS](https://tailwindcss.com/) - CSS Framework
- [Spline](https://spline.design/) - 3D Background
- [Lucide](https://lucide.dev/) - Icônes

---

## 📞 Support

Pour toute question ou suggestion :
- 📧 Email : [papebothie03@gmail.com](mailto:papebothie03@gmail.com)
- 🐛 Issues : [GitHub Issues](https://github.com/papa-bothie/lumina-portfolio/issues)
- 💬 Discussions : [GitHub Discussions](https://github.com/papa-bothie/lumina-portfolio/discussions)

---

<div align="center">

**Fait avec ❤️ par Papa Bothie DIOP**

⭐ Si ce projet vous a aidé, n'hésitez pas à mettre une étoile !

</div>
