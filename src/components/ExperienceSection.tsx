import { Briefcase, GraduationCap, Download } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      type: 'work',
      title: 'Lead Developer',
      company: 'TechCorp Innovation',
      period: '2022 - Présent',
      description: "Direction technique d'une équipe de 5 développeurs. Conception et développement d'applications web à fort trafic.",
    },
    {
      type: 'work',
      title: 'Full Stack Developer',
      company: 'StartupFlow',
      period: '2020 - 2022',
      description: 'Développement de plateformes SaaS B2B. Mise en place de pipelines CI/CD et optimisation des performances.',
    },
    {
      type: 'education',
      title: 'Master Informatique',
      company: 'Université Paris-Saclay',
      period: '2018 - 2020',
      description: 'Spécialisation en Data Science et Intelligence Artificielle. Projet de fin d\'études sur le NLP.',
    },
    {
      type: 'work',
      title: 'Développeur Junior',
      company: 'Digital Agency',
      period: '2018 - 2020',
      description: 'Création de sites web et applications pour divers clients. Formation continue en React et Node.js.',
    },
    {
      type: 'education',
      title: 'Licence Informatique',
      company: 'Université de Lyon',
      period: '2015 - 2018',
      description: 'Formation en programmation, algorithmique et bases de données. Stage de fin d\'études en développement web.',
    },
  ];

  return (
    <section id="experience" className="py-20">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title">
            Mon <span className="gold-gradient-text">Parcours</span>
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Expériences professionnelles et académiques qui ont forgé mon expertise
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="timeline-line" />

            {/* Timeline items */}
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-12">
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-card border-2 border-primary flex items-center justify-center">
                    {exp.type === 'work' ? (
                      <Briefcase className="w-4 h-4 text-primary" />
                    ) : (
                      <GraduationCap className="w-4 h-4 text-primary" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="card-premium">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                      <h3 className="font-serif font-semibold text-lg">{exp.title}</h3>
                      <span className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-primary font-medium text-sm mb-3">{exp.company}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Download CV Button */}
          <div className="text-center mt-12">
            <a
              href="#"
              className="btn-gold inline-flex items-center gap-2"
              onClick={(e) => {
                e.preventDefault();
                alert('Fonctionnalité de téléchargement CV à configurer');
              }}
            >
              <Download size={18} />
              Télécharger mon CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
