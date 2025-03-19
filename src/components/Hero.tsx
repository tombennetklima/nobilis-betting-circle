
import { ArrowRight } from 'lucide-react';
import { useEffect, useRef } from 'react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const elements = heroRef.current?.querySelectorAll('.animate-on-scroll');
          elements?.forEach((el, i) => {
            setTimeout(() => {
              el.classList.add('animate-fade-in');
            }, i * 200);
          });
        }
      },
      { threshold: 0.1 }
    );
    
    if (heroRef.current) {
      observer.observe(heroRef.current);
    }
    
    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={heroRef}
      className="relative min-h-[80vh] pt-24 pb-16 px-6 flex flex-col justify-center overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-navy-50 rounded-bl-[200px] -z-10 opacity-70" />
      <div className="absolute top-1/3 -left-24 w-48 h-48 border border-navy-200 rounded-full -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 border border-navy-200 rounded-full -z-10" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-navy-200 to-transparent" />
      
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="opacity-0 animate-on-scroll font-sans text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-slate-900">
                Nobilis Circle –<br/>
                <span className="text-gradient">Matched Betting</span><br/>
                Plattform
              </h1>
              
              <p className="opacity-0 animate-on-scroll text-lg text-slate-700 max-w-xl">
                Baue dir ein nachhaltiges Einkommen auf – ohne Vorkenntnisse, vollkommen ortsunabhängig.
              </p>
            </div>
            
            <div className="opacity-0 animate-on-scroll flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <a
                href="/participation"
                className="px-6 py-3 rounded-md bg-primary text-white font-medium transition-all hover:bg-primary/90 active:scale-95 flex items-center gap-2 group"
              >
                Jetzt Starten
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </a>
              
              <a
                href="#statistics"
                className="text-slate-700 font-medium hover:text-primary transition-colors flex items-center gap-1"
              >
                Unsere Erfolge
                <ArrowRight size={16} className="text-primary" />
              </a>
            </div>
          </div>
          
          <div className="relative opacity-0 animate-on-scroll">
            <div className="aspect-square max-w-md mx-auto glass-card rounded-2xl p-6 relative z-10 overflow-hidden">
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-navy-100 rounded-full opacity-50" />
              <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-navy-100 rounded-full opacity-50" />
              
              <div className="relative z-20 h-full flex flex-col justify-center items-center">
                <div className="w-16 h-16 rounded-full bg-navy-50 flex items-center justify-center mb-6">
                  <span className="text-navy-800 text-2xl font-bold">N</span>
                </div>
                <h2 className="font-sans text-2xl font-semibold text-slate-900 mb-2 text-center">
                  Sicheres Matched Betting
                </h2>
                <p className="text-slate-600 text-center mb-6">
                  Transparente Abläufe. Garantierte Gewinne.
                </p>
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg key={i} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-1/3 -right-8 w-16 h-16 border border-navy-200 rounded-full" />
            <div className="absolute bottom-10 -left-8 w-20 h-20 border border-navy-200 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
