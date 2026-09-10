import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, Upload, Globe } from 'lucide-react';

const ContactForm = () => {
  return (
    <section id="contato" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Info Side */}
          <div>
            <h2 className="text-sm font-bold text-brand-lime uppercase tracking-[0.2em] mb-4">Contato Comercial</h2>
            <h3 className="text-4xl md:text-5xl font-plus-jakarta font-extrabold text-brand-black mb-8 leading-tight">
              Pronto para transformar sua gestão de resíduos?
            </h3>
            <p className="text-lg text-brand-gray-dark mb-12 leading-relaxed">
              Fale com um de nossos especialistas em soluções ambientais B2B. Atendemos grandes geradores em todo o território nacional.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-brand-green/10 rounded-xl flex items-center justify-center text-brand-green shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-brand-black text-lg mb-1">Telefone</h4>
                  <p className="text-brand-gray-dark">(11) 4654-2740 / (11) 4655-2445</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-brand-green/10 rounded-xl flex items-center justify-center text-brand-green shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-brand-black text-lg mb-1">E-mail</h4>
                  <p className="text-brand-gray-dark">comercial@gruporenova.com.br</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-brand-green/10 rounded-xl flex items-center justify-center text-brand-green shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-brand-black text-lg mb-1">Sede Administrativa</h4>
                  <p className="text-brand-gray-dark">Av. Renova, 420 – Jd. Fazenda Rincão, Arujá – SP</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-brand-green/10 rounded-xl flex items-center justify-center text-brand-green shrink-0">
                  <Globe size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-brand-black text-lg mb-1">Redes Sociais</h4>
                  <div className="flex gap-4 mt-2">
                    <a href="https://www.instagram.com/gruporenovadobrasil/" target="_blank" className="text-brand-green hover:underline font-semibold transition-all">Instagram</a>
                    <a href="#" className="text-brand-green hover:underline font-semibold transition-all">LinkedIn</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-gray-50 rounded-[40px] p-8 md:p-12 border border-gray-100 shadow-sm">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-brand-gray-dark ml-1">Nome Completo</label>
                  <input type="text" placeholder="Seu nome" className="w-full px-5 py-4 rounded-2xl bg-white border border-gray-200 focus:border-brand-lime focus:ring-4 focus:ring-brand-lime/10 transition-all outline-none" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-brand-gray-dark ml-1">E-mail Corporativo</label>
                  <input type="email" placeholder="email@empresa.com.br" className="w-full px-5 py-4 rounded-2xl bg-white border border-gray-200 focus:border-brand-lime focus:ring-4 focus:ring-brand-lime/10 transition-all outline-none" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-brand-gray-dark ml-1">Empresa</label>
                  <input type="text" placeholder="Nome da empresa" className="w-full px-5 py-4 rounded-2xl bg-white border border-gray-200 focus:border-brand-lime focus:ring-4 focus:ring-brand-lime/10 transition-all outline-none" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-brand-gray-dark ml-1">Telefone / WhatsApp</label>
                  <input type="tel" placeholder="(00) 00000-0000" className="w-full px-5 py-4 rounded-2xl bg-white border border-gray-200 focus:border-brand-lime focus:ring-4 focus:ring-brand-lime/10 transition-all outline-none" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-brand-gray-dark ml-1">Tipo de Resíduo / Necessidade</label>
                <select className="w-full px-5 py-4 rounded-2xl bg-white border border-gray-200 focus:border-brand-lime focus:ring-4 focus:ring-brand-lime/10 transition-all outline-none appearance-none cursor-pointer">
                  <option>Selecione uma opção</option>
                  <option>Coprocessamento</option>
                  <option>CDR (Combustível Derivado de Resíduos)</option>
                  <option>Gerenciamento Total (TWM)</option>
                  <option>Reciclagem / Beneficiamento</option>
                  <option>Avaliação Técnica</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-brand-gray-dark ml-1">Mensagem ou Observações</label>
                <textarea rows={4} placeholder="Descreva brevemente sua necessidade..." className="w-full px-5 py-4 rounded-2xl bg-white border border-gray-200 focus:border-brand-lime focus:ring-4 focus:ring-brand-lime/10 transition-all outline-none resize-none"></textarea>
              </div>

              <div className="bg-brand-green/5 border-2 border-dashed border-brand-green/20 rounded-2xl p-6 text-center cursor-pointer hover:bg-brand-green/10 transition-all group">
                <Upload size={32} className="mx-auto text-brand-green mb-2 transition-transform group-hover:-translate-y-1" />
                <p className="text-sm font-bold text-brand-green">Anexar fotos ou documentos dos resíduos</p>
                <p className="text-xs text-brand-concrete mt-1">PDF, JPG, PNG (máx. 10MB)</p>
              </div>

              <div className="flex items-start gap-3 mt-4">
                <input type="checkbox" id="lgpd" className="mt-1 w-5 h-5 rounded border-gray-300 text-brand-green focus:ring-brand-green" />
                <label htmlFor="lgpd" className="text-sm text-brand-gray-dark leading-tight">
                  Autorizo o Grupo Renova a utilizar meus dados para entrar em contato conforme nossa <a href="#" className="text-brand-green underline transition-all">Política de Privacidade</a>.
                </label>
              </div>

              <button className="w-full bg-brand-lime hover:bg-brand-lime/90 text-white py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 transition-all shadow-xl shadow-brand-lime/10">
                Enviar pedido de avaliação
                <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
