import { ExternalLink, Github } from "lucide-react";
import { ICON_SIZES } from "@/lib/constants";
import project1 from "@/assets/project-1.jpg";
import project3 from "@/assets/project-3.jpg";
import projectOrion from "@/assets/project-orion.png";
import projectScraping from "@/assets/project-scraping.png";

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
}

const ProjectCard = ({ project }: { project: Project }) => (
  <article className="group card-premium overflow-hidden p-0">
    {/* Project Image */}
    <div className="relative overflow-hidden">
      <img
        src={project.image}
        alt={project.title}
        className="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />

      {/* Overlay Links */}
      <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-background/60">
        <a
          href={project.liveUrl}
          className="p-3 rounded-full bg-primary text-primary-foreground hover:scale-110 transition-transform"
          title="Voir le projet"
          aria-label={`Voir le projet ${project.title}`}
        >
          <ExternalLink size={ICON_SIZES.MEDIUM} />
        </a>
        <a
          href={project.githubUrl}
          className="p-3 rounded-full bg-muted text-foreground hover:scale-110 transition-transform"
          title="Voir le code"
          aria-label={`Voir le code source de ${project.title}`}
        >
          <Github size={ICON_SIZES.MEDIUM} />
        </a>
      </div>
    </div>

    {/* Project Info */}
    <div className="p-6">
      <h3 className="font-serif font-semibold text-xl mb-3 group-hover:text-primary transition-colors">
        {project.title}
      </h3>
      <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
        {project.description}
      </p>

      {/* Technologies */}
      <div className="flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  </article>
);

const PortfolioSection = () => {
  const projects: Project[] = [
    {
      id: "orion",
      title: "Projet Orion (Hackathon)",
      description: "Une solution mobile et web dédiée à la gestion des interventions de secours. Inclut deux applications mobiles et un tableau de bord web pour le suivi en temps réel.",
      image: projectOrion,
      technologies: ["React Native", "React", "Node.js", "Firebase"],
      liveUrl: "#",
      githubUrl: "https://github.com/papa-bothie",
    },
    {
      id: "gestion-voitures",
      title: "Gestion de Location de Voitures",
      description: "Application complète pour gérer le parc automobile, les clients et les contrats de location. Interface administrative robuste.",
      image: project1,
      technologies: ["Java", "JPA / Hibernate", "MySQL", "Swing"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: "web-scraping",
      title: "Extraction de Données (Projet de Fin de Cycle)",
      description: "Module Python spécialisé dans l'extraction automatisée d'articles de presse sur les accidents de la route. Utilise des techniques avancées de NLP.",
      image: projectScraping,
      technologies: ["Python", "BeautifulSoup", "newspaper3k", "spaCy", "Regex"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: "prediction-credit",
      title: "Prédiction Score Crédit",
      description: "Modèle de Machine Learning pour prédire la solvabilité des clients. Analyse de données bancaires et classification.",
      image: project3,
      technologies: ["Python", "Scikit-learn", "Pandas", "Matplotlib"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-navy-deep/50">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title">
            Mes <span className="gold-gradient-text">Projets</span>
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Une sélection de projets qui illustrent mon expertise et ma créativité
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/papa-bothie"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-gold inline-flex items-center gap-2"
          >
            <Github size={ICON_SIZES.SMALL} />
            Voir plus sur GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;

