import { Code, Database, Brain, Network, Palette, Cloud } from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: Code,
      title: 'Développement Web',
      skills: [
        { name: 'React / Next.js', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'Node.js', level: 85 },
        { name: 'Python', level: 80 },
      ],
    },
    {
      icon: Database,
      title: 'Data & Analytics',
      skills: [
        { name: 'SQL / PostgreSQL', level: 90 },
        { name: 'Python (Pandas, NumPy)', level: 85 },
        { name: 'Power BI / Tableau', level: 80 },
        { name: 'ETL Pipelines', level: 75 },
      ],
    },
    {
      icon: Brain,
      title: 'Intelligence Artificielle',
      skills: [
        { name: 'Machine Learning', level: 75 },
        { name: 'TensorFlow / PyTorch', level: 70 },
        { name: 'NLP', level: 65 },
        { name: 'Computer Vision', level: 60 },
      ],
    },
    {
      icon: Network,
      title: 'Réseaux & DevOps',
      skills: [
        { name: 'Docker / Kubernetes', level: 80 },
        { name: 'CI/CD', level: 85 },
        { name: 'AWS / GCP', level: 75 },
        { name: 'Linux Administration', level: 80 },
      ],
    },
    {
      icon: Palette,
      title: 'Design & UX',
      skills: [
        { name: 'Figma', level: 85 },
        { name: 'UI/UX Design', level: 80 },
        { name: 'Tailwind CSS', level: 95 },
        { name: 'Motion Design', level: 70 },
      ],
    },
    {
      icon: Cloud,
      title: 'Outils & Méthodes',
      skills: [
        { name: 'Git / GitHub', level: 95 },
        { name: 'Agile / Scrum', level: 90 },
        { name: 'Jira / Notion', level: 85 },
        { name: 'API REST / GraphQL', level: 90 },
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
