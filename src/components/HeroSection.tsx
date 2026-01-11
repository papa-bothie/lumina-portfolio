import { ArrowDown, Mail, Github, Linkedin } from 'lucide-react';
import profilePhoto from '@/assets/profile-photo.jpg';
import SplineBackground from './SplineBackground';

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToPortfolio = () => {
    const element = document.querySelector('#portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="accueil"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Spline 3D Background */}
      <SplineBackground />
      
      {/* Overlay gradient for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/70 via-background/50 to-background z-[1]" />

      <div className="section-container relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left opacity-0 animate-fade-up">
            <p className="text-primary font-medium mb-4 tracking-wide">
              Bienvenue sur mon portfolio
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 leading-tight">
              Alexandre <span className="gold-gradient-text">Martin</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-light">
              Développeur Web & Data Analyst
            </p>
            <p className="text-muted-foreground max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed">
              Passionné par la technologie et l'innovation, je crée des expériences 
              digitales élégantes et des solutions data-driven qui transforment les idées en réalité.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <button onClick={scrollToContact} className="btn-gold">
                <Mail className="inline-block mr-2 h-4 w-4" />
                Contactez-moi
              </button>
              <button onClick={scrollToPortfolio} className="btn-outline-gold">
                Voir mon portfolio
              </button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-muted hover:bg-primary/20 text-muted-foreground hover:text-primary transition-all duration-300"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-muted hover:bg-primary/20 text-muted-foreground hover:text-primary transition-all duration-300"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:contact@example.com"
                className="p-3 rounded-full bg-muted hover:bg-primary/20 text-muted-foreground hover:text-primary transition-all duration-300"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex-shrink-0 opacity-0 animate-fade-up stagger-2">
            <div className="relative">
              {/* Decorative ring */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-primary/20 to-transparent blur-xl" />
              <div className="avatar-ring">
                <img
                  src={profilePhoto}
                  alt="Alexandre Martin"
                  className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <a
            href="#apropos"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#apropos')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors"
          >
            <span className="text-xs mb-2 tracking-widest uppercase">Découvrir</span>
            <ArrowDown size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
