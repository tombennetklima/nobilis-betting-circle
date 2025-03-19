
import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';

interface Requirement {
  text: string;
}

const Requirements = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const requirements: Requirement[] = [
    { text: 'Du bist zwischen 18 und 55 Jahre alt' },
    { text: 'Du hast einen deutschen Ausweis sowie einen offiziellen Wohnsitz in Deutschland' },
    { text: 'Du hast bislang nicht an einem ähnlichen Angebot teilgenommen und bist bei maximal drei Wettanbietern registriert' },
    { text: 'Du verfügst über ein Konto bei der Deutschen Bank – Falls du bereits eins hast, setze dich mit uns in Verbindung, um deine Anmeldung abzuschließen' },
  ];
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          requirements.forEach((_, idx) => {
            setTimeout(() => {
              setVisibleItems(prev => [...prev, idx]);
            }, idx * 300);
          });
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div ref={sectionRef} className="pt-16 pb-20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Teilnahmevoraussetzungen
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Um an unserem Programm teilzunehmen, musst du folgende Kriterien erfüllen:
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {requirements.map((requirement, idx) => (
            <div 
              key={idx}
              className={cn(
                "bg-white rounded-xl p-6 shadow-sm border border-slate-100 flex items-start gap-4 transition-all duration-500 transform",
                visibleItems.includes(idx) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
            >
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <Check size={16} />
              </div>
              <div>
                <p className="text-slate-700">{requirement.text}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <a
            href="#"
            className="inline-block px-8 py-3 rounded-md bg-primary text-white font-medium transition-all hover:bg-primary/90 active:scale-95"
          >
            Jetzt Teilnehmen
          </a>
        </div>
      </div>
    </div>
  );
};

export default Requirements;
