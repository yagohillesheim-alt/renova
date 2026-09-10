import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, PhoneCall } from 'lucide-react';
import { cn } from '../../lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#' },
    { name: 'O Grupo', href: '#sobre' },
    { name: 'Soluções', href: '#solucoes' },
    { name: 'CDR', href: '#cdr' },
    { name: 'Economia Circular', href: '#circular' },
    { name: 'Unidades', href: '#unidades' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300 px-6 py-4',
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-brand-lime rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-sm">
            R
          </div>
          <div className="flex flex-col leading-none">
            <span className={cn(
              'font-plus-jakarta font-extrabold text-2xl tracking-tighter transition-colors',
              isScrolled ? 'text-brand-black' : 'text-white'
            )}>
              RENOVA
            </span>
            <span className={cn(
              'text-[8px] font-bold tracking-[0.3em] uppercase transition-colors',
              isScrolled ? 'text-brand-green' : 'text-brand-lime'
            )}>
              Ambiental
            </span>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={cn(
                'text-sm font-medium hover:text-brand-lime transition-colors underline-offset-4 hover:underline',
                isScrolled ? 'text-brand-gray-dark' : 'text-white/90'
              )}
            >
              {link.name}
            </a>
          ))}
          <button className="bg-brand-lime hover:bg-brand-lime/90 text-white px-5 py-2.5 rounded-full text-sm font-semibold flex items-center gap-2 transition-all transform hover:scale-105 shadow-md shadow-brand-lime/20">
            <PhoneCall size={16} />
            Falar com um especialista
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-brand-black"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} className={isScrolled ? 'text-brand-black' : 'text-white'} /> : <Menu size={28} className={isScrolled ? 'text-brand-black' : 'text-white'} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-xl md:hidden animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="px-6 py-8 flex flex-col gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-lg font-semibold text-brand-black hover:text-brand-lime"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <button className="w-full bg-brand-lime text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2">
              <PhoneCall size={20} />
              Falar com um especialista
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
