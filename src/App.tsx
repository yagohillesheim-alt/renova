import React from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import Solutions from './components/sections/Solutions';
import InteractiveTriage from './components/sections/InteractiveTriage';
import CircularEconomy from './components/sections/CircularEconomy';
import ContactForm from './components/sections/ContactForm';
import Footer from './components/layout/Footer';
import { motion } from 'motion/react';
import { ShieldCheck, Zap, BarChart3, Users, ChevronRight } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen font-inter bg-white">
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Impact Message Section */}
        <section className="py-24 bg-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-5xl font-plus-jakarta font-extrabold text-brand-black leading-[1.1] mb-8">
                  Não tratamos resíduos apenas como descarte. <span className="text-brand-green">Valorizamos recursos.</span>
                </h2>
                <p className="text-xl text-brand-gray-dark leading-relaxed mb-10">
                  Trabalhamos para encontrar caminhos de valorização, reaproveitamento e destinação adequada, conectando a indústria aos preceitos mais modernos da sustentabilidade global.
                </p>
                <div className="grid grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <Zap className="text-brand-green" size={32} />
                    <h4 className="font-bold text-lg text-brand-black">Tecnologia</h4>
                    <p className="text-sm text-brand-concrete leading-tight">Processos industriais de alta performance e inovação constante.</p>
                  </div>
                  <div className="space-y-2">
                    <BarChart3 className="text-brand-green" size={32} />
                    <h4 className="font-bold text-lg text-brand-black">Eficiência</h4>
                    <p className="text-sm text-brand-concrete leading-tight">Redução de riscos, custos e passivos para nossos parceiros.</p>
                  </div>
                  <div className="space-y-2">
                    <ShieldCheck className="text-brand-green" size={32} />
                    <h4 className="font-bold text-lg text-brand-black">Sustentabilidade</h4>
                    <p className="text-sm text-brand-concrete leading-tight">Soluções que promovem a verdadeira economia circular.</p>
                  </div>
                  <div className="space-y-2">
                    <Users className="text-brand-green" size={32} />
                    <h4 className="font-bold text-lg text-brand-black">Resultado</h4>
                    <p className="text-sm text-brand-concrete leading-tight">Segurança jurídica e operacional para grandes geradores.</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="aspect-square bg-gray-100 rounded-[40px] overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1530124560677-bdaea02c9a5b?auto=format&fit=crop&q=80&w=1000"
                    alt="Processo Industrial"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  />
                </div>
                <div className="absolute -bottom-10 -right-10 bg-white p-10 rounded-[32px] shadow-2xl border border-gray-100 hidden md:block">
                  <span className="block text-4xl font-extrabold text-brand-green mb-1">38+</span>
                  <span className="text-sm font-bold text-brand-concrete uppercase tracking-widest">Anos de expertise</span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <Solutions />
        
        {/* CDR Highlight */}
        <section id="cdr" className="py-24 bg-brand-black text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-green/10 blur-[150px] -z-1" />
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
            <div>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-green/30 border border-brand-green/50 text-brand-lime text-xs font-bold uppercase tracking-wider mb-6">
                Tecnologia Energética
              </span>
              <h2 className="text-4xl md:text-6xl font-plus-jakarta font-extrabold mb-8 leading-[1.1]">
                CDR não é lixo queimado. <span className="text-brand-lime">É tecnologia aplicada.</span>
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed mb-10">
                O Combustível Derivado de Resíduos (CDR) é o ápice da valorização. Transformamos o descarte industrial em uma fonte de energia limpa e eficiente para fornos de cimento, substituindo o carvão mineral.
              </p>
              <ul className="space-y-6 mb-12">
                {[
                  'Alto poder calorífico controlado',
                  'Processamento rigoroso de triagem mecânica',
                  'Substituição de matriz energética fóssil',
                  'Aterro Zero: transformação total'
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-brand-lime" />
                    <span className="text-lg font-medium text-gray-200">{item}</span>
                  </li>
                ))}
              </ul>
              <button className="bg-brand-lime hover:bg-brand-lime/90 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all flex items-center gap-3 shadow-lg shadow-brand-lime/20">
                Falar com um especialista em CDR
                <Zap size={20} />
              </button>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] bg-white/5 rounded-[40px] overflow-hidden border border-white/10 backdrop-blur-sm">
                <img
                  src="https://images.unsplash.com/photo-1565106430482-8f6e74349ca1?auto=format&fit=crop&q=80&w=1000"
                  alt="CDR Technology"
                  className="w-full h-full object-cover opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </div>
          </div>
        </section>

        <InteractiveTriage />
        <CircularEconomy />
        
        {/* Units / Presence Section */}
        <section id="unidades" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-sm font-bold text-brand-lime uppercase tracking-[0.2em] mb-4">Presença Nacional</h2>
              <h3 className="text-4xl md:text-5xl font-plus-jakarta font-extrabold text-brand-black mb-6">
                Mais de 7 unidades preparadas para <span className="text-brand-green">atender sua demanda</span>.
              </h3>
              <p className="text-lg text-brand-gray-dark">
                O Grupo Renova possui infraestrutura robusta em pontos estratégicos do Brasil, garantindo agilidade logística e excelência técnica.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: 'Unidade Arujá - Matriz', state: 'São Paulo', icon: 'SP' },
                { name: 'Unidade Ijaci', state: 'Minas Gerais', icon: 'MG' },
                { name: 'Unidade Farroupilha', state: 'Rio Grande do Sul', icon: 'RS' },
                { name: 'Unidade Balsa Nova', state: 'Paraná', icon: 'PR' },
                { name: 'Unidade Pojuca', state: 'Bahia', icon: 'BA' },
                { name: 'Unidade Guarulhos', state: 'São Paulo', icon: 'SP' }
              ].map((unit) => (
                <div key={unit.name} className="bg-gray-50 p-8 rounded-3xl border border-gray-100 hover:border-brand-green transition-all group">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-gray-200 flex items-center justify-center font-bold text-brand-green mb-6 group-hover:bg-brand-green group-hover:text-white transition-all">
                    {unit.icon}
                  </div>
                  <h4 className="font-bold text-lg text-brand-black mb-2">{unit.name}</h4>
                  <p className="text-brand-gray-dark mb-6">{unit.state}</p>
                  <button className="text-sm font-bold text-brand-green flex items-center gap-1 group-hover:gap-2 transition-all">
                    Detalhes da Unidade
                    <ChevronRight size={16} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ContactForm />
      </main>
      
      <Footer />

      {/* Floating Contact Button Mobile */}
      <div className="fixed bottom-6 right-6 z-40 md:hidden">
        <button className="bg-brand-lime text-white p-4 rounded-full shadow-2xl flex items-center gap-2 font-bold transition-all transform active:scale-95">
          <Zap size={24} />
          Avaliar Resíduo
        </button>
      </div>
    </div>
  );
}

export default App;
