# Documentation Technique - Lumina Portfolio

Cette documentation présente les aspects techniques et l'architecture du projet **Lumina Portfolio**, un portfolio moderne et interactif construit avec les dernières technologies web.

## 🚀 Technologies Utilisées

- **Framework**: [React 18](https://reactjs.org/) avec [Vite](https://vitejs.dev/) pour un environnement de développement ultra-rapide.
- **Langage**: [TypeScript](https://www.typescriptlang.org/) pour un typage statique et une meilleure maintenabilité.
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) pour un design responsive et moderne via des classes utilitaires.
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/) (basé sur Radix UI) pour des composants accessibles et personnalisables.
- **Animations/3D**: [Spline](https://spline.design/) pour les arrière-plans et éléments 3D interactifs.
- **Gestion des Formulaires**: [React Hook Form](https://react-hook-form.com/) & [Zod](https://zod.dev/) pour la validation.
- **Icônes**: [Lucide React](https://lucide.dev/) pour une bibliothèque d'icônes cohérente.

---

## 📁 Architecture du Projet

Le projet suit une structure modulaire standard pour les applications React modernes :

- `/src` : Dossier principal contenant le code source.
  - `/assets` : Ressources statiques (images, logos).
  - `/components` : Composants de l'interface utilisateur.
    - `/ui` : Composants de base réutilisables (boutons, inputs, etc., via shadcn).
  - `/hooks` : Crochets (hooks) React personnalisés.
  - `/lib` : Fonctions utilitaires et configurations tierces.
  - `/pages` : Pages principales de l'application (Vues).

---

## 📄 Liste et Rôle des Fichiers

### 🏠 Racine du Projet
- `index.html` : Point d'entrée HTML de l'application.
- `package.json` : Liste des dépendances et scripts du projet (dev, build, lint).
- `tailwind.config.ts` : Configuration personnalisée pour Tailwind CSS (couleurs, polices, animations).
- `vite.config.ts` : Configuration de l'outil de build Vite.
- `tsconfig.json` & `tsconfig.app.json` : Configuration de TypeScript pour le projet.
- `postcss.config.js` : Configuration pour le traitement du CSS avec PostCSS.
- `eslint.config.js` : Règles de linting pour maintenir la qualité du code.
- `components.json` : Configuration spécifique pour l'outil shadcn/ui.
- `README.md` : Guide d'utilisation rapide du projet.

### 💻 Dossier `src/`
- `main.tsx` : Point d'entrée JavaScript qui monte l'application React sur le DOM.
- `App.tsx` : Composant racine gérant le routage et la structure globale.
- `index.css` : Styles globaux et directives Tailwind CSS.
- `App.css` : Styles spécifiques au composant App (si nécessaire).

### 🧩 Dossier `src/components/`
- `Navigation.tsx` : Barre de navigation collante avec liens fluides.
- `HeroSection.tsx` : Section d'accueil avec titre accrocheur et appel à l'action.
- `AboutSection.tsx` : Section de présentation personnelle.
- `SkillsSection.tsx` : Affichage visuel des compétences techniques.
- `ExperienceSection.tsx` : Chronologie du parcours professionnel.
- `PortfolioSection.tsx` : Galerie des projets réalisés (incluant désormais le **Projet Orion** issu d'un hackathon).
- `ContactSection.tsx` : Formulaire de contact avec validation.
- `Footer.tsx` : Pied de page contenant les crédits et liens réseaux sociaux.
- `SplineBackground.tsx` : Intégration de l'arrière-plan 3D interactif.
- `NavLink.tsx` : Petit composant utilitaire pour les liens de navigation.
- `ui/*.tsx` : Contient tous les composants atomiques de shadcn/ui (Button, Card, Input, etc.).

### 📑 Dossier `src/pages/`
- `Index.tsx` : Page principale assemblant toutes les sections du portfolio.
- `NotFound.tsx` : Page d'erreur 404 pour les routes inexistantes.

### 🛠️ Autres dossiers
- `src/lib/utils.ts` : Contient des fonctions utilitaires comme `cn` pour la fusion de classes Tailwind.
- `src/hooks/use-mobile.tsx` : Hook pour détecter si l'utilisateur est sur un appareil mobile.
