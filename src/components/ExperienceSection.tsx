import { Briefcase, GraduationCap, Download } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      type: 'education',
      title: 'Licence Ingénierie Informatique',
      company: 'Université Assane Seck de Ziguinchor',
      period: '2022 - 2025',
      description: 'Formation approfondie en développement logiciel, réseaux, et systèmes d\'information. Niveau Licence 3.',
    },
    {
      type: 'work',
      title: 'Projet: Gestion Location Voitures',
      company: 'Projet Académique',
      period: '2025',
      description: 'Développement d\'une application de bureau en Java avec gestion de persistance des données via JPA/MySQL.',
    },
    {
      type: 'work',
      title: 'Projet: Prédiction Score Crédit',
      company: 'Machine Learning',
      period: '2024',
      description: 'Conception d\'un modèle de classification pour évaluer les risques de crédit (Scikit-learn, Pandas).',
    },
    {
      type: 'work',
      title: 'Projet: Site Web IA',
      company: 'Projet Personnel',
      period: '2024',
      description: 'Création d\'un site web informatif et responsive sur l\'intelligence artificielle avec Bootstrap.',
    },
    {
      type: 'education',
      title: 'Baccalauréat Scientifique (S2)',
      company: 'Lycée Charles De Gaulle, Saint-Louis',
      period: '2021 - 2022',
      description: 'Obtention du baccalauréat série S2 avec mention, solide base en mathématiques et sciences physiques.',
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
