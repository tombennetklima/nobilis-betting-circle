
import { ArrowRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface ProgramOptionProps {
  title: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
  delay?: number;
}

const ProgramOption = ({ title, description, features, icon, delay = 0 }: ProgramOptionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      { threshold: 0.1 }
    );
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [delay]);

  return (
    <div 
      ref={cardRef}
      className={cn(
        "bg-white rounded-xl p-8 shadow-sm border border-slate-100 transition-all duration-700 transform h-full",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      )}
    >
      <div className="h-full flex flex-col">
        <div className="mb-6">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-navy-50 text-primary mb-4">
            {icon}
          </div>
          <h3 className="font-serif text-xl font-semibold text-slate-900 mb-2">{title}</h3>
          <p className="text-slate-600">{description}</p>
        </div>
        
        <div className="mt-4 flex-grow">
          <ul className="space-y-2">
            {features.map((feature, i) => (
              <li key={i} className="flex items-start gap-2 text-sm">
                <span className="mt-1 flex-shrink-0 h-4 w-4 bg-navy-50 rounded-full flex items-center justify-center">
                  <span className="h-1.5 w-1.5 bg-primary rounded-full" />
                </span>
                <span className="text-slate-700">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="mt-8 pt-4 border-t border-slate-100">
          <a
            href="#"
            className="inline-flex items-center text-primary font-medium text-sm hover:text-primary/80 transition-colors group"
          >
            Mehr erfahren
            <ArrowRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProgramOption;
