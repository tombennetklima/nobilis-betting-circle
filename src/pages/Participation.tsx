
import { useEffect } from 'react';
import { Users, DollarSign, ArrowRight, CheckCircle, AlertCircle } from 'lucide-react';
import Requirements from '@/components/Requirements';
import ProgramOption from '@/components/ProgramOption';

const Participation = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Header Section */}
      <div className="bg-navy-50 py-16 mb-12 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-navy-100 rounded-full opacity-30 -z-10 transform translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-navy-100 rounded-full opacity-30 -z-10 transform -translate-x-1/3 translate-y-1/3" />
        
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 mb-4 animate-fade-in">
            Teilnahme & Affiliate-Programm
          </h1>
          <p className="text-slate-700 max-w-2xl mx-auto animate-slide-from-top">
            Wähle deinen Weg zum finanziellen Erfolg und starte heute mit unserem bewährten System.
          </p>
        </div>
      </div>
      
      {/* Programs Section */}
      <section className="mb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl font-bold text-slate-900 mb-4">
              Verdiene als Spieler oder Affiliate
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Wähle die Option, die am besten zu dir passt – beide bieten einzigartige Vorteile und Gewinnmöglichkeiten.
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
                "Regelmäßige Auszahlungen",
                "Lebenslange Provisionen für geworbene Kunden"
              ]}
              icon={<Users size={24} />}
            />
            <ProgramOption
              title="Als Spieler"
              description="Interessiert an Matched Betting? Starte als Spieler und nutze risikofreie Strategien."
              features={[
                "250€ Willkommensbonus zum Start",
                "Risikofreie Strategien zur Gewinnmaximierung",
                "Detaillierte Anleitungen für Anfänger",
                "Persönliche Betreuung und Support",
                "Regelmäßige Gewinnmöglichkeiten",
                "Ortsunabhängiges Arbeiten"
              ]}
              icon={<DollarSign size={24} />}
            />
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="py-16 bg-slate-50 mb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl font-bold text-slate-900 mb-4">
              So funktioniert es
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Unser Prozess ist einfach und transparent – folge diesen Schritten für deinen Erfolg.
            </p>
          </div>
          
          <div className="relative">
            {/* Connection line */}
            <div className="absolute top-0 left-1/2 w-px h-full bg-navy-200 -translate-x-1/2 hidden md:block" />
            
            <div className="space-y-16 relative z-10">
              {[
                {
                  number: "01",
                  title: "Registrierung",
                  description: "Melde dich auf unserer Plattform an und wähle zwischen Spieler- oder Affiliate-Programm.",
                  icon: <CheckCircle size={24} />
                },
                {
                  number: "02",
                  title: "Verifizierung",
                  description: "Verifiziere deine Identität und richte dein Konto bei der Deutschen Bank ein, falls noch nicht vorhanden.",
                  icon: <CheckCircle size={24} />
                },
                {
                  number: "03",
                  title: "Einführung",
                  description: "Erhalte Zugang zu unseren detaillierten Anleitungen und genieße persönliche Betreuung.",
                  icon: <CheckCircle size={24} />
                },
                {
                  number: "04",
                  title: "Erfolg erzielen",
                  description: "Setze die Strategien um und erziele regelmäßige Gewinne oder Provisionen.",
                  icon: <CheckCircle size={24} />
                }
              ].map((step, idx) => (
                <div key={idx} className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className={`${idx % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                    <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-100 relative">
                      {/* Number indicator for mobile */}
                      <div className="md:hidden absolute -top-5 -left-2 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">
                        {step.number}
                      </div>
                      
                      <h3 className="font-serif text-xl font-semibold text-navy-900 mb-2">{step.title}</h3>
                      <p className="text-slate-600">{step.description}</p>
                    </div>
                  </div>
                  
                  <div className={`hidden md:flex items-center ${idx % 2 === 0 ? 'md:order-2 justify-start' : 'md:order-1 justify-end'}`}>
                    <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center relative">
                      {step.icon}
                      
                      {/* Number indicator */}
                      <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-white text-primary flex items-center justify-center font-bold text-xs border border-primary">
                        {step.number}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Requirements Section */}
      <Requirements />
      
      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl font-bold text-slate-900 mb-4">
              Häufig gestellte Fragen
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Hier findest du Antworten auf die am häufigsten gestellten Fragen zu unserem Programm.
            </p>
          </div>
          
          <div className="space-y-6">
            {[
              {
                question: "Ist Matched Betting legal?",
                answer: "Ja, Matched Betting ist in Deutschland vollkommen legal. Es handelt sich um eine mathematische Strategie, die Wettanbieter-Angebote nutzt, um risikofreie Gewinne zu erzielen."
              },
              {
                question: "Benötige ich Vorkenntnisse?",
                answer: "Nein, du benötigst keinerlei Vorkenntnisse. Unsere detaillierten Anleitungen führen dich Schritt für Schritt durch den Prozess, und unser Support-Team steht dir jederzeit zur Verfügung."
              },
              {
                question: "Wie hoch sind die potenziellen Gewinne?",
                answer: "Die Höhe der Gewinne variiert je nach Engagement und verfügbarer Zeit. Viele unserer Teilnehmer erzielen stabile monatliche Einkommen von bis zu 10.000€, sowohl als Spieler als auch als Affiliate."
              },
              {
                question: "Warum benötige ich ein Konto bei der Deutschen Bank?",
                answer: "Ein Konto bei der Deutschen Bank ist Teil unseres Sicherheitskonzepts und optimiert die Zahlungsabwicklung. Falls du bereits ein Konto dort hast, kannst du dieses natürlich verwenden."
              },
              {
                question: "Wie lange dauert es, bis ich erste Gewinne erziele?",
                answer: "Die meisten Teilnehmer erzielen bereits in der ersten Woche ihre ersten Gewinne. Mit zunehmender Erfahrung steigern sich die Erträge kontinuierlich."
              }
            ].map((faq, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
                <h3 className="font-medium text-navy-900 mb-2">{faq.question}</h3>
                <p className="text-slate-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-navy-900 py-16 rounded-xl max-w-7xl mx-auto px-6 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-navy-800 rounded-full opacity-30 -z-10 transform translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-navy-800 rounded-full opacity-30 -z-10 transform -translate-x-1/3 translate-y-1/3" />
        
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-navy-800 text-white mb-6">
            <AlertCircle size={32} />
          </div>
          <h2 className="font-serif text-3xl font-bold text-white mb-4">
            Noch Fragen?
          </h2>
          <p className="text-navy-100 mb-8">
            Falls du weitere Fragen hast oder Unterstützung benötigst, zögere nicht, uns zu kontaktieren. Unser Team steht dir gerne zur Verfügung.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#"
              className="px-8 py-3 rounded-md bg-white text-navy-900 font-medium transition-all hover:bg-opacity-90 active:scale-95 w-full sm:w-auto"
            >
              Jetzt teilnehmen
            </a>
            <a
              href="#"
              className="px-8 py-3 rounded-md bg-transparent text-white border border-white font-medium transition-all hover:bg-white/10 active:scale-95 w-full sm:w-auto"
            >
              Kontakt aufnehmen
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Participation;
