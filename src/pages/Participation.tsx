
import { useEffect } from 'react';

const Participation = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-24 pb-20 flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h1 className="font-sans text-3xl md:text-4xl font-bold text-slate-900 mb-4 animate-fade-in">
          Teilnahme & Affiliate-Programm
        </h1>
        <p className="text-slate-600 animate-slide-up delay-100">
          Weitere Informationen folgen in Kürze.
        </p>
      </div>
    </div>
  );
};

export default Participation;
