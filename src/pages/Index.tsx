
import { ArrowRight, Users, DollarSign, CheckCircle, Award } from 'lucide-react';
import { useEffect } from 'react';
import Hero from '@/components/Hero';
import StatisticCard from '@/components/StatisticCard';
import ProgramOption from '@/components/ProgramOption';
import Requirements from '@/components/Requirements';

const Index = () => {
  useEffect(() => {
    const handleReveals = () => {
      const reveals = document.querySelectorAll('.reveal');
      for (const reveal of Array.from(reveals)) {
        const revealTop = reveal.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (revealTop < windowHeight - 100) {
          reveal.classList.add('reveal-visible');
        }
      }
    };
    
    window.addEventListener('scroll', handleReveals);
    handleReveals(); // Run once on mount
    
    return () => window.removeEventListener('scroll', handleReveals);
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Hero />
      
      {/* Statistics Section */}
      <section id="statistics" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12 reveal">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Unsere Erfolgsgeschichte in Zahlen
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Seit drei Jahren bieten wir unseren Mitgliedern ein bewährtes System mit transparenten Abläufen und garantierten Gewinnen.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StatisticCard 
              title="Gesamtgewinn aller Mitspieler"
              value="1.250.000 €"
              subtitle="Durch unser erprobtes System"
              delay={0}
            />
            <StatisticCard 
              title="Ausgezahlte Provisionen"
              value="950.000 €"
              subtitle="Für unsere Affiliates"
              delay={200}
            />
            <StatisticCard 
              title="Jährlich platzierte Wetteinsätze"
              value="6 Millionen €"
              subtitle="Wachsende Tendenz"
              delay={400}
            />
          </div>
        </div>
      </section>
      
      {/* Programs Section */}
      <section className="py-20 relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-navy-200 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-navy-200 to-transparent" />
        
        {/* Decorative Elements */}
        <div className="absolute top-40 left-10 w-40 h-40 border border-navy-100 rounded-full -z-10 opacity-50" />
        <div className="absolute bottom-20 right-20 w-60 h-60 border border-navy-100 rounded-full -z-10 opacity-50" />
        
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 reveal">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Verdiene als Spieler oder Affiliate
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Wähle deinen Weg zum Erfolg – mit unserem bewährten System kannst du sowohl als aktiver Spieler als auch durch Empfehlungen profitieren.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ProgramOption
              title="Als Affiliate"
              description="Möchtest du als Affiliate durch Empfehlungen ein passives Einkommen aufbauen?"
              features={[
                "Monatlich 10.000€+ an Provisionen möglich",
                "Umfangreiche Marketing-Materialien",
                "Detaillierte Statistiken und Tracking",
                "Persönlicher Ansprechpartner",
                "Regelmäßige Auszahlungen"
              ]}
              icon={<Users size={24} />}
              delay={0}
            />
            <ProgramOption
              title="Als Spieler"
              description="Interessiert an Matched Betting? Starte als Spieler und nutze risikofreie Strategien."
              features={[
                "250€ Willkommensbonus zum Start",
                "Risikofreie Strategien zur Gewinnmaximierung",
                "Detaillierte Anleitungen für Anfänger",
                "Persönliche Betreuung und Support",
                "Regelmäßige Gewinnmöglichkeiten"
              ]}
              icon={<DollarSign size={24} />}
              delay={300}
            />
          </div>
          
          <div className="mt-16 text-center reveal">
            <a
              href="#"
              className="inline-block px-8 py-3 rounded-md bg-primary text-white font-medium transition-all hover:bg-primary/90 active:scale-95 flex items-center gap-2 mx-auto"
            >
              Dein Weg zum Erfolg
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>
      
      {/* Requirements Section */}
      <section className="bg-slate-50">
        <Requirements />
      </section>
      
      {/* Trust Section */}
      <section className="py-20 relative">
        <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-full h-px bg-gradient-to-r from-transparent via-navy-200 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 reveal">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Rechtlich geprüft und transparent
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Unsere Plattform ist rechtlich geprüft und basiert auf klaren, nachvollziehbaren Mechanismen.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 reveal">
            {[
              {
                icon: <CheckCircle size={32} />,
                title: "Rechtlich abgesichert",
                description: "Unsere Plattform operiert im vollen Einklang mit deutschen und europäischen Rechtsnormen."
              },
              {
                icon: <Award size={32} />,
                title: "Bewährtes System",
                description: "Seit drei Jahren bieten wir ein System mit transparenten Abläufen und garantierten Gewinnen."
              },
              {
                icon: <Users size={32} />,
                title: "Zufriedene Teilnehmer",
                description: "Viele unserer Teilnehmer erzielen stabile monatliche Einkommen von bis zu 10.000€."
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-xl p-8 shadow-sm text-center border border-slate-100">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-navy-50 text-primary mb-6">
                  {item.icon}
                </div>
                <h3 className="font-serif text-xl font-semibold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-16 flex justify-center items-center gap-6 reveal">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-navy-50 flex items-center justify-center">
                <span className="text-navy-800 text-xs font-bold">⭐</span>
              </div>
              <div>
                <p className="text-lg font-medium text-slate-900">Trustpilot</p>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg key={i} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
            
            <a
              href="#"
              className="text-primary font-medium hover:text-primary/80 transition-colors flex items-center gap-1"
            >
              Bewertungen ansehen
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-navy-900 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-navy-800 rounded-full opacity-30 -z-10 transform translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-navy-800 rounded-full opacity-30 -z-10 transform -translate-x-1/2 translate-y-1/2" />
        
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-white mb-6 reveal">
            Bereit, dein finanzielles Potenzial zu entfalten?
          </h2>
          <p className="text-navy-100 max-w-2xl mx-auto mb-10 reveal">
            Starte noch heute und erlebe, wie unser bewährtes System dir hilft, ein stabiles Einkommen aufzubauen – vollkommen ortsunabhängig und ohne jegliche Vorkenntnisse.
          </p>
          <a
            href="#"
            className="inline-block px-10 py-4 rounded-md bg-white text-navy-900 font-medium text-lg transition-all hover:bg-opacity-90 active:scale-95 reveal"
          >
            Jetzt kostenlos starten
          </a>
        </div>
      </section>
    </div>
  );
};

export default Index;
