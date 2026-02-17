import { Code, Database, Brain, Network, Palette, Cloud } from "lucide-react";
import { SKILL_LEVELS } from "@/lib/constants";

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  skills: Skill[];
}

const SkillBar = ({ skill }: { skill: Skill }) => (
  <div>
    <div className="flex justify-between mb-2">
      <span className="text-sm text-muted-foreground">{skill.name}</span>
      <span className="text-sm text-primary font-medium">{skill.level}%</span>
    </div>
    <div className="skill-bar">
      <div
        className="skill-bar-fill"
        style={{ width: `${skill.level}%` }}
        aria-label={`${skill.name} skill level: ${skill.level}%`}
      />
    </div>
  </div>
);

const SkillCategoryCard = ({ category }: { category: SkillCategory }) => (
  <div className="card-premium">
    <div className="flex items-center gap-3 mb-6">
      <div className="p-3 rounded-xl bg-primary/10">
        <category.icon className="w-6 h-6 text-primary" />
      </div>
      <h3 className="font-serif font-semibold text-lg">{category.title}</h3>
    </div>

    <div className="space-y-4">
      {category.skills.map((skill) => (
        <SkillBar key={skill.name} skill={skill} />
      ))}
    </div>
  </div>
);

const SkillsSection = () => {
  const skillCategories: SkillCategory[] = [
    {
      id: "programming",
      icon: Code,
      title: "Langages de Programmation",
      skills: [
        { name: "Java", level: SKILL_LEVELS.VERY_GOOD },
        { name: "Python", level: SKILL_LEVELS.GOOD },
        { name: "C", level: SKILL_LEVELS.BASIC },
        { name: "SQL", level: SKILL_LEVELS.INTERMEDIATE },
      ],
    },
    {
      id: "frontend",
      icon: Palette,
      title: "Développement Frontend",
      skills: [
        { name: "HTML / CSS", level: SKILL_LEVELS.ADVANCED },
        { name: "Bootstrap", level: SKILL_LEVELS.VERY_GOOD },
        { name: "JavaScript", level: SKILL_LEVELS.INTERMEDIATE },
        { name: "Responsive Design", level: SKILL_LEVELS.GOOD },
      ],
    },
    {
      id: "backend",
      icon: Database,
      title: "Frameworks & Backend",
      skills: [
        { name: "Spring Boot", level: SKILL_LEVELS.ADVANCED },
        { name: "JPA / Hibernate", level: SKILL_LEVELS.INTERMEDIATE },
        { name: "MySQL", level: SKILL_LEVELS.GOOD },
        { name: "Analyse de Données", level: SKILL_LEVELS.BEGINNER },
      ],
    },
    {
      id: "ai",
      icon: Brain,
      title: "Intelligence Artificielle",
      skills: [
        { name: "Machine Learning", level: SKILL_LEVELS.BASIC },
        { name: "Scikit-learn / Pandas", level: SKILL_LEVELS.BASIC },
        { name: "Prédiction & Classification", level: SKILL_LEVELS.BASIC },
        { name: "Data Science", level: SKILL_LEVELS.LEARNING },
      ],
    },
    {
      id: "tools",
      icon: Cloud,
      title: "Outils & Environnement",
      skills: [
        { name: "Git / GitHub", level: SKILL_LEVELS.VERY_GOOD },
        { name: "IntelliJ / Android Studio", level: SKILL_LEVELS.GOOD },
        { name: "Postman", level: SKILL_LEVELS.INTERMEDIATE },
        { name: "Linux", level: SKILL_LEVELS.VERY_GOOD },
      ],
    },
    {
      id: "soft-skills",
      icon: Network,
      title: "Compétences Transversales",
      skills: [
        { name: "Leadership & Communication", level: SKILL_LEVELS.ADVANCED },
        { name: "Travail en équipe", level: SKILL_LEVELS.ADVANCED },
        { name: "Résolution de problèmes", level: SKILL_LEVELS.VERY_GOOD },
        { name: "Autodidacte", level: SKILL_LEVELS.EXPERT },
      ],
    },
  ];

  return (
    <section id="competences" className="py-20">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title">
            Mes <span className="gold-gradient-text">Compétences</span>
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Un ensemble de compétences techniques et créatives acquises au fil des années
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <SkillCategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

