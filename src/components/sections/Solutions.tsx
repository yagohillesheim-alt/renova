import React from 'react';
import { motion } from 'motion/react';
import { services } from '../../data/mockData';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const Solutions = () => {
  return (
    <section id="solucoes" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold text-brand-lime uppercase tracking-[0.2em] mb-4">Portfólio de Soluções</h2>
            <h3 className="text-4xl md:text-5xl font-plus-jakarta font-extrabold text-brand-black leading-tight">
              Transformação industrial para um futuro <span className="text-brand-green">sustentável</span>.
            </h3>
          </div>
          <p className="text-brand-gray-dark max-w-md text-lg">
            Oferecemos soluções integradas que unem tecnologia, conformidade ambiental e eficiência operacional para grandes geradores.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-3xl overflow-hidden border border-gray-100 hover:shadow-2xl hover:shadow-gray-200 transition-all duration-500"
            >
              <div className="h-48 overflow-hidden relative">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black/70 to-transparent" />
                <div className="absolute bottom-4 left-6">
                  <h4 className="text-xl font-bold text-white">{service.name}</h4>
                </div>
              </div>
              
              <div className="p-8">
                <p className="text-brand-gray-dark mb-6 leading-relaxed min-h-[80px]">
                  {service.description}
                </p>
                
                <div className="space-y-3 mb-8">
                  {service.benefits.slice(0, 3).map((benefit) => (
                    <div key={benefit} className="flex items-start gap-2">
                      <CheckCircle2 size={18} className="text-brand-green mt-0.5 shrink-0" />
                      <span className="text-sm font-medium text-brand-gray-dark">{benefit}</span>
                    </div>
                  ))}
                </div>

                <button className="w-full flex items-center justify-between px-6 py-4 rounded-xl bg-white border border-gray-200 text-brand-black font-bold hover:bg-brand-lime hover:text-white hover:border-brand-lime transition-all group/btn">
                  Solicitar avaliação
                  <ArrowRight size={18} className="transition-transform group-hover/btn:translate-x-1" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
