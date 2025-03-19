
import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface StatisticCardProps {
  title: string;
  value: string;
  subtitle: string;
  delay?: number;
}

const StatisticCard = ({ title, value, subtitle, delay = 0 }: StatisticCardProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedValue, setAnimatedValue] = useState('0');
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
  
  useEffect(() => {
    if (!isVisible) return;
    
    // Extract the numeric part of the value
    const numericValue = parseInt(value.replace(/[^\d]/g, ''), 10);
    const duration = 2000; // 2 seconds
    const steps = 50;
    const stepTime = duration / steps;
    
    // Prepare the display format
    const valueHasEuro = value.includes('€');
    const valueHasMillion = value.toLowerCase().includes('million');
    
    let currentStep = 0;
    
    const interval = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      const currentValue = Math.floor(numericValue * progress);
      
      let formattedValue = currentValue.toLocaleString('de-DE');
      if (valueHasEuro) formattedValue = formattedValue + ' €';
      if (valueHasMillion) formattedValue = formattedValue + ' Millionen';
      
      setAnimatedValue(formattedValue);
      
      if (currentStep === steps) {
        clearInterval(interval);
        setAnimatedValue(value); // Ensure we end up with the exact value
      }
    }, stepTime);
    
    return () => clearInterval(interval);
  }, [isVisible, value]);

  return (
    <div 
      ref={cardRef}
      className={cn(
        "bg-white rounded-xl p-6 shadow-sm transition-all duration-700 transform",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      )}
    >
      <h3 className="text-sm font-medium text-slate-500 mb-2">{title}</h3>
      <p className="font-serif text-3xl md:text-4xl font-bold text-navy-900 mb-1">{animatedValue}</p>
      <p className="text-sm text-slate-600">{subtitle}</p>
      
      {/* Decorative element */}
      <div className="mt-4 h-1 w-12 bg-gradient-to-r from-primary to-accent rounded-full" />
    </div>
  );
};

export default StatisticCard;
