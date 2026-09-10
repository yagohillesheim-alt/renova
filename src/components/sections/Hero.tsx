import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Zap, ShieldCheck, BarChart3 } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-brand-black">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=2000"
          alt="Industrial Plant"
          className="w-full h-full object-cover opacity-40 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/80 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-green/20 border border-brand-green/30 text-brand-lime text-xs font-bold uppercase tracking-wider mb-6">
              <Zap size={14} />
              Tecnologia e Valorização Industrial
            </span>
            <h1 className="text-5xl md:text-7xl font-plus-jakarta font-extrabold text-white leading-[1.1] mb-6">
              Resíduos transformados em <span className="text-brand-lime">valor</span>, energia e novas possibilidades.
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-10 max-w-2xl">
              O Grupo Renova utiliza tecnologia de ponta para transformar desafios ambientais em soluções eficientes, seguras e economicamente viáveis para a indústria brasileira.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-brand-lime hover:bg-brand-lime/90 text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-3 transition-all shadow-lg shadow-brand-lime/20">
                Conhecer as soluções
                <ArrowRight size={20} />
              </button>
              <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center transition-all">
                Solicitar avaliação
              </button>
            </div>
          </motion.div>

          {/* Impact Stats Overlay */}
            <div className="mt-20 grid grid-cols-2 md:grid-cols-3 gap-8 border-t border-white/10 pt-10">
            <div>
              <div className="flex items-center gap-2 text-brand-lime mb-1">
                <ShieldCheck size={20} />
                <span className="text-3xl font-bold text-white">38+</span>
              </div>
              <p className="text-sm text-gray-400 uppercase tracking-widest font-semibold">Anos de História</p>
            </div>
            <div>
              <div className="flex items-center gap-2 text-brand-lime mb-1">
                <BarChart3 size={20} />
                <span className="text-3xl font-bold text-white">7+</span>
              </div>
              <p className="text-sm text-gray-400 uppercase tracking-widest font-semibold">Unidades no Brasil</p>
            </div>
            <div className="hidden md:block">
              <div className="flex items-center gap-2 text-brand-lime mb-1">
                <Zap size={20} />
                <span className="text-3xl font-bold text-white text-[1.5rem] lg:text-3xl">ISO 14001</span>
              </div>
              <p className="text-sm text-gray-400 uppercase tracking-widest font-semibold">Gestão Ambiental</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
