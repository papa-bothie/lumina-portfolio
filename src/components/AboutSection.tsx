import { MapPin, Briefcase, GraduationCap, Heart } from 'lucide-react';
import profilePhoto from '@/assets/profile-photo.jpg';

const AboutSection = () => {
  const highlights = [
    { icon: MapPin, label: 'Basé à', value: 'Paris, France' },
    { icon: Briefcase, label: 'Expérience', value: '5+ années' },
    { icon: GraduationCap, label: 'Formation', value: "Master Informatique" },
    { icon: Heart, label: 'Passion', value: 'Innovation digitale' },
  ];

  return (
    <section id="apropos" className="py-20 bg-navy-deep/50">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title">
            À propos de <span className="gold-gradient-text">moi</span>
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Découvrez mon parcours, mes valeurs et ce qui me motive au quotidien
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/10 to-transparent rounded-2xl blur-2xl" />
            <div className="relative rounded-2xl overflow-hidden border border-border">
              <img
                src={profilePhoto}
                alt="À propos de moi"
                className="w-full aspect-[4/5] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <h3 className="text-2xl font-serif font-semibold mb-6">
              Digital Nomad & Créateur d'expériences digitales
            </h3>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
              <p>
                Passionné par la technologie depuis mon plus jeune âge, j'ai fait de ma passion 
                mon métier. Développeur web full-stack et data analyst, je combine créativité 
                et expertise technique pour créer des solutions innovantes.
              </p>
              <p>
                Mon approche ? Allier design élégant, code propre et données pertinentes pour 
                construire des produits qui font la différence. Chaque projet est une opportunité 
                d'apprendre et de repousser mes limites.
              </p>
              <p>
                En tant que digital nomad, j'ai eu la chance de travailler avec des équipes 
                internationales et de m'enrichir de cultures diverses. Cette expérience m'a 
                appris l'importance de la communication et de l'adaptabilité.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="card-premium flex items-center gap-3"
                >
                  <div className="p-2 rounded-lg bg-primary/10">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">{item.label}</p>
                    <p className="text-sm font-medium text-foreground">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
