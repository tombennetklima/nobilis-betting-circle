
import { ArrowRight, Users, DollarSign, CheckCircle } from 'lucide-react';
import { useEffect } from 'react';
import Hero from '@/components/Hero';
import StatisticCard from '@/components/StatisticCard';

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
      <section id="statistics" className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10 reveal">
            <h2 className="font-sans text-3xl md:text-4xl font-bold text-slate-900 mb-3">
              Unsere Zahlen
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StatisticCard 
              title="Gesamtgewinn"
              value="1.250.000 €"
              subtitle="Durch unser System"
              delay={0}
            />
            <StatisticCard 
              title="Ausgezahlte Provisionen"
              value="950.000 €"
              subtitle="Für Affiliates"
              delay={200}
            />
            <StatisticCard 
              title="Jährliche Wetteinsätze"
              value="6 Millionen €"
              subtitle="Wachsende Tendenz"
              delay={400}
            />
          </div>
        </div>
      </section>
      
      {/* Programs Section */}
      <section className="py-16 relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-navy-200 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-navy-200 to-transparent" />
        
        {/* Decorative Elements */}
        <div className="absolute top-40 left-10 w-40 h-40 border border-navy-100 rounded-full -z-10 opacity-50" />
        <div className="absolute bottom-20 right-20 w-60 h-60 border border-navy-100 rounded-full -z-10 opacity-50" />
        
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12 reveal">
            <h2 className="font-sans text-3xl md:text-4xl font-bold text-slate-900 mb-3">
              Als Spieler oder Affiliate
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-100 h-full">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-navy-50 text-primary mb-4">
                <Users size={24} />
              </div>
              <h3 className="font-sans text-xl font-semibold text-slate-900 mb-2">Als Affiliate</h3>
              <p className="text-slate-600 mb-4">Durch Empfehlungen ein passives Einkommen aufbauen.</p>
              <a href="/participation" className="text-primary font-medium text-sm hover:text-primary/80 transition-colors flex items-center gap-1">
                Mehr erfahren <ArrowRight size={16} />
              </a>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-100 h-full">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-navy-50 text-primary mb-4">
                <DollarSign size={24} />
              </div>
              <h3 className="font-sans text-xl font-semibold text-slate-900 mb-2">Als Spieler</h3>
              <p className="text-slate-600 mb-4">Matched Betting mit risikofreien Strategien nutzen.</p>
              <a href="/participation" className="text-primary font-medium text-sm hover:text-primary/80 transition-colors flex items-center gap-1">
                Mehr erfahren <ArrowRight size={16} />
              </a>
            </div>
          </div>
          
          <div className="mt-12 text-center reveal">
            <a
              href="/participation"
              className="inline-block px-8 py-3 rounded-md bg-primary text-white font-medium transition-all hover:bg-primary/90 active:scale-95 flex items-center gap-2 mx-auto w-fit"
            >
              Jetzt starten
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>
      
      {/* Requirements Summary */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-10 reveal">
            <h2 className="font-sans text-3xl font-bold text-slate-900 mb-3">
              Teilnahmevoraussetzungen
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 reveal">
            {[
              "Alter zwischen 18 und 55 Jahren",
              "Deutscher Ausweis und Wohnsitz",
              "Konto bei der Deutschen Bank",
              "Keine vorherige Teilnahme an ähnlichen Angeboten"
            ].map((requirement, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <CheckCircle size={16} />
                </div>
                <p className="text-slate-700">{requirement}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-navy-900 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-navy-800 rounded-full opacity-30 -z-10 transform translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-navy-800 rounded-full opacity-30 -z-10 transform -translate-x-1/2 translate-y-1/2" />
        
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-sans text-3xl md:text-4xl font-bold text-white mb-6 reveal">
            Bereit für deinen finanziellen Erfolg?
          </h2>
          <a
            href="/participation"
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
