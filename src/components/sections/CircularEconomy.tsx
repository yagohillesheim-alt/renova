import React from 'react';
import { motion } from 'motion/react';
import { RefreshCcw, ArrowRight, Factory, Recycle, Zap, BarChart } from 'lucide-react';

const CircularEconomy = () => {
  return (
    <section id="circular" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-sm font-bold text-brand-lime uppercase tracking-[0.2em] mb-4">Economia Circular</h2>
          <h3 className="text-4xl md:text-5xl font-plus-jakarta font-extrabold text-brand-black mb-6">
            O futuro dos resíduos é <span className="text-brand-green">circular</span>.
          </h3>
          <p className="text-lg text-brand-gray-dark leading-relaxed">
            Diferente do modelo linear de extração e descarte, a economia circular foca em manter recursos em uso pelo maior tempo possível, gerando valor em cada etapa.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Visual Diagram Placeholder */}
          <div className="relative">
            <div className="aspect-square bg-gray-50 rounded-[40px] flex items-center justify-center p-12 border border-gray-100">
              <div className="relative w-full h-full flex items-center justify-center">
                {/* Circular path animation mockup */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 border-4 border-dashed border-brand-green/20 rounded-full"
                />
                
                <div className="grid grid-cols-2 gap-8 relative z-10">
                  <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 flex flex-col items-center text-center">
                    <Factory className="text-brand-green mb-4" size={32} />
                    <span className="font-bold text-sm">Produção</span>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 flex flex-col items-center text-center">
                    <Recycle className="text-brand-green mb-4" size={32} />
                    <span className="font-bold text-sm">Reciclagem</span>
                  </div>
                  <div className="bg-brand-green p-6 rounded-2xl shadow-xl border border-brand-green flex flex-col items-center text-center text-white">
                    <Zap className="mb-4" size={32} />
                    <span className="font-bold text-sm text-white">Energia/CDR</span>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 flex flex-col items-center text-center">
                    <BarChart className="text-brand-green mb-4" size={32} />
                    <span className="font-bold text-sm">Valorização</span>
                  </div>
                </div>
                
                <RefreshCcw className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-brand-green/10" size={160} />
              </div>
            </div>
          </div>

          <div className="space-y-12">
            <div className="bg-gray-50 p-8 rounded-3xl border-l-8 border-brand-concrete/30">
              <h4 className="text-xl font-bold text-brand-concrete mb-4 uppercase tracking-wider">Modelo Linear (Tradicional)</h4>
              <p className="text-brand-gray-dark font-medium text-lg">Extrair → Produzir → Usar → Descartar</p>
              <p className="text-sm text-brand-concrete mt-2 italic">Gera desperdício de recursos e passivos ambientais.</p>
            </div>

            <div className="bg-brand-green/5 p-8 rounded-3xl border-l-8 border-brand-green">
              <h4 className="text-xl font-bold text-brand-green mb-4 uppercase tracking-wider">Modelo Circular (Renova)</h4>
              <p className="text-brand-black font-bold text-xl leading-tight">Preparar → Valorizar → Reaproveitar → Transformar → Gerar Valor</p>
              <p className="text-brand-gray-dark mt-4 leading-relaxed">
                Nossas tecnologias garantem que o resíduo industrial retorne à cadeia produtiva como matéria-prima ou combustível renovável (CDR), fechando o ciclo e protegendo o meio ambiente.
              </p>
            </div>

            <button className="flex items-center gap-2 text-brand-green font-bold text-lg group hover:underline underline-offset-4 transition-all">
              Saber mais sobre nossa expertise
              <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CircularEconomy;
