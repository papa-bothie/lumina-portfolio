import { MapPin, Briefcase, GraduationCap, Heart } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.png";

const AboutSection = () => {
  const highlights = [
    { id: "location", icon: MapPin, label: "Basé à", value: "Saint-Louis, Sénégal" },
    { id: "experience", icon: Briefcase, label: "Expérience", value: "Junior" },
    { id: "education", icon: GraduationCap, label: "Formation", value: "Licence Ingénierie Informatique" },
    { id: "passion", icon: Heart, label: "Passion", value: "Innovation & Tech" },
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
                className="w-full aspect-[4/5] object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <h3 className="text-2xl font-serif font-semibold mb-6">
              Développeur Informatique Junior
            </h3>

            <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
              <p>
                Je suis Papa Bothie Diop, étudiant en Licence 3 Ingénierie Informatique à l'Université Assane Seck de Ziguinchor.
                Passionné par le développement logiciel et l'analyse de données, je m'efforce de concevoir des solutions technologiques
                innovantes et performantes.
              </p>
              <p>
                Autodidacte et curieux, j'aime explorer de nouvelles technologies et relever des défis techniques.
                Mes centres d'intérêt incluent la technologie, la lecture, le voyage, le sport et l'engagement associatif,
                qui enrichissent ma vision du monde et mon approche du travail en équipe.
              </p>
              <p>
                Je suis actuellement à la recherche d'opportunités pour mettre en pratique mes compétences
                en développement full-stack, machine learning et ingénierie logicielle au sein de projets ambitieux.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item) => (
                <div
                  key={item.id}
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
