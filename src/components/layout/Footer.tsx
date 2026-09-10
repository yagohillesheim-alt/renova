import React from 'react';
import { Shield, ChevronRight, Mail, Phone, MapPin, Instagram, Linkedin, ExternalLink } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brand-black text-white pt-24 pb-12 overflow-hidden relative">
      {/* Institutional Green Strip (as requested) */}
      <div className="absolute top-0 left-0 w-full h-2 bg-brand-green" />
      
      {/* Decorative Gradient */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-green/10 blur-[150px] -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand */}
          <div className="space-y-8">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-brand-lime rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-brand-lime/20">
                R
              </div>
              <span className="font-plus-jakarta font-extrabold text-2xl tracking-tighter">
                RENOVA
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Transformando resíduos em novas possibilidades. Tecnologia e meio ambiente para uma economia mais circular e indústrias mais eficientes.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/gruporenovadobrasil/" target="_blank" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-brand-lime transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-brand-lime transition-all">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-bold text-lg mb-8 uppercase tracking-widest text-brand-lime">Soluções</h4>
            <ul className="space-y-4">
              {['Coprocessamento', 'CDR', 'Gerenciamento Total (TWM)', 'Reciclagem Industrial', 'Beneficiamento', 'Consultoria Ambiental'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group">
                    <ChevronRight size={14} className="text-brand-green transition-transform group-hover:translate-x-1" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-8 uppercase tracking-widest text-brand-lime">O Grupo</h4>
            <ul className="space-y-4">
              {['Sobre Nós', 'Nossas Unidades', 'Tecnologia & Expertise', 'Transparência', 'Trabalhe Conosco', 'Blog'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group">
                    <ChevronRight size={14} className="text-brand-green transition-transform group-hover:translate-x-1" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal/Transparency */}
          <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
            <h4 className="font-bold text-lg mb-6 flex items-center gap-2">
              <Shield size={20} className="text-brand-lime" />
              Transparência
            </h4>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-sm text-gray-300 hover:text-white flex items-center justify-between group">
                  Código de Conduta
                  <ExternalLink size={14} className="opacity-40 group-hover:opacity-100" />
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-300 hover:text-white flex items-center justify-between group">
                  Política de Privacidade
                  <ExternalLink size={14} className="opacity-40 group-hover:opacity-100" />
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-300 hover:text-white flex items-center justify-between group">
                  Licenças e Certificações
                  <ExternalLink size={14} className="opacity-40 group-hover:opacity-100" />
                </a>
              </li>
            </ul>
            <div className="mt-8 pt-8 border-t border-white/10">
              <p className="text-xs text-gray-500 leading-tight">
                Grupo Renova - Especialista em gestão e valorização de resíduos industriais desde 1986. Certificação NBR ISO 14001:2015.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-500">
          <p>© 2026 Grupo Renova do Brasil. Todos os direitos reservados.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white">LGPD</a>
            <a href="#" className="hover:text-white">Termos de Uso</a>
            <a href="#" className="hover:text-white">Mapa do Site</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
