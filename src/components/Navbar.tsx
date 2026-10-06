import { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#home' },
    { name: 'Sobre mí', href: '#about-me' },
    { name: 'Proyectos', href: '#projects' },
    { name: 'Habilidades', href: '#skills' },
    { name: 'Contacto', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-background-900/80 backdrop-blur-md border-b border-background-700/80 py-3 shadow-lg shadow-black/20'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logotipo */}
        <a href="#inicio" className="flex items-center gap-2 group">
          <div className="p-2 rounded-lg bg-background-900 text-primary-400 group-hover:bg-surface-800/20 transition-colors">
            <Code2 size={24} />
          </div>
          <span className="text-xl font-bold tracking-tight text-text-100 group-hover:text-primary-400 transition-colors">
            Dev<span className="text-primary-400">.</span>io
          </span>
        </a>

        {/* Enlaces de escritorio */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-text-100 hover:text-primary-400 transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="px-4 py-2 text-sm font-semibold rounded-lg bg-primary-500 text-background-900 hover:bg-primary-400 transition-all duration-200 shadow-sm hover:shadow-emerald-500/25 shadow-emerald-500/10"
          >
            Contáctame
          </a>
        </nav>

        {/* Botón hamburguesa (Móvil) */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-background-700 transition-colors"
          aria-label="Abrir menú"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Menú desplegable móvil */}
      {isOpen && (
        <div className="md:hidden bg-background-800/95 backdrop-blur-xl border-b border-background-700 px-4 pt-3 pb-6 space-y-3 animate-in fade-in slide-in-from-top-4 duration-200">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)} // Cierra el menú al hacer clic
              className="block px-3 py-2 rounded-md text-base font-medium text-text-100 hover:text-primary-400 hover:bg-surface-700/60 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2">
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="block text-center w-full px-4 py-2 text-sm font-semibold rounded-lg bg-primary-500 text-surface-900 hover:bg-primary-400 transition-colors"
            >
              Contáctame
            </a>
          </div>
        </div>
      )}
    </header>
  );
}