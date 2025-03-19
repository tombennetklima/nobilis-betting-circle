
import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-12',
        isScrolled
          ? 'bg-white/80 backdrop-blur-md py-3 shadow-sm'
          : 'bg-transparent py-5'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <NavLink 
          to="/" 
          className="font-serif text-2xl text-primary font-semibold tracking-tight"
        >
          Nobilis<span className="text-accent">Circle</span>
        </NavLink>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              cn(
                'text-sm font-medium transition-colors hover:text-primary',
                isActive ? 'text-primary' : 'text-slate-700'
              )
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/participation"
            className={({ isActive }) =>
              cn(
                'text-sm font-medium transition-colors hover:text-primary',
                isActive ? 'text-primary' : 'text-slate-700'
              )
            }
          >
            Teilnahme & Affiliate
          </NavLink>
          <NavLink
            to="/privacy"
            className={({ isActive }) =>
              cn(
                'text-sm font-medium transition-colors hover:text-primary',
                isActive ? 'text-primary' : 'text-slate-700'
              )
            }
          >
            Datenschutz
          </NavLink>
          <a
            href="#"
            className="px-6 py-2.5 rounded-md bg-primary text-white text-sm font-medium transition-all hover:bg-primary/90 active:scale-95"
          >
            Jetzt Starten
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-slate-800"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          'md:hidden fixed inset-0 top-[60px] bg-white/95 backdrop-blur-sm transition-all duration-300 ease-in-out z-40',
          mobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
      >
        <div className="flex flex-col items-center justify-center space-y-8 h-full">
          <NavLink
            to="/"
            className={({ isActive }) =>
              cn(
                'text-xl font-medium transition-colors',
                isActive ? 'text-primary' : 'text-slate-700'
              )
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/participation"
            className={({ isActive }) =>
              cn(
                'text-xl font-medium transition-colors',
                isActive ? 'text-primary' : 'text-slate-700'
              )
            }
          >
            Teilnahme & Affiliate
          </NavLink>
          <NavLink
            to="/privacy"
            className={({ isActive }) =>
              cn(
                'text-xl font-medium transition-colors',
                isActive ? 'text-primary' : 'text-slate-700'
              )
            }
          >
            Datenschutz
          </NavLink>
          <a
            href="#"
            className="px-8 py-3 rounded-md bg-primary text-white text-base font-medium transition-all hover:bg-primary/90 active:scale-95"
          >
            Jetzt Starten
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
