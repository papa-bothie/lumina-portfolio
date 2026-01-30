import { Code, Database, Brain, Network, Palette, Cloud } from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: Code,
      title: 'Langages de Programmation',
      skills: [
        { name: 'Java', level: 90 },
        { name: 'Python', level: 85 },
        { name: 'C', level: 70 },
        { name: 'SQL', level: 80 },
      ],
    },
    {
      icon: Palette,
      title: 'Développement Frontend',
      skills: [
        { name: 'HTML / CSS', level: 95 },
        { name: 'Bootstrap', level: 90 },
        { name: 'JavaScript', level: 80 },
        { name: 'Responsive Design', level: 85 },
      ],
    },
    {
      icon: Database,
      title: 'Frameworks & Backend',
      skills: [
        { name: 'Spring Boot', level: 95 },
        { name: 'JPA / Hibernate', level: 80 },
        { name: 'MySQL', level: 85 },
        { name: 'Analyse de Données', level: 65 },
      ],
    },
    {
      icon: Brain,
      title: 'Intelligence Artificielle',
      skills: [
        { name: 'Machine Learning', level: 70 },
        { name: 'Scikit-learn / Pandas', level: 70 },
        { name: 'Prédiction & Classification', level: 70 },
        { name: 'Data Science', level: 40 },
      ],
    },
    {
      icon: Cloud,
      title: 'Outils & Environnement',
      skills: [
        { name: 'Git / GitHub', level: 90 },
        { name: 'IntelliJ / Android Studio', level: 85 },
        { name: 'Postman', level: 80 },
        { name: 'Linux', level: 90 },
      ],
    },
    {
      icon: Network,
      title: 'Compétences Transversales',
      skills: [
        { name: 'Leadership & Communication', level: 95 },
        { name: 'Travail en équipe', level: 95 },
        { name: 'Résolution de problèmes', level: 90 },
        { name: 'Autodidacte', level: 100 },
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
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="card-premium"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-primary/10">
                  <category.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-serif font-semibold text-lg">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-muted-foreground">{skill.name}</span>
                      <span className="text-sm text-primary font-medium">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className="skill-bar-fill"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
