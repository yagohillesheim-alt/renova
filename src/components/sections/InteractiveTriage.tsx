import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, ChevronRight, ChevronLeft, HelpCircle } from 'lucide-react';

const steps = [
  {
    question: "Qual é o perfil da sua organização?",
    options: ["Indústria", "Empresa de serviços", "Construtora", "Município", "Órgão público", "Grande gerador", "Outro"]
  },
  {
    question: "Qual tipo de resíduo é gerado?",
    options: ["Resíduo valorizável", "Resíduo para reciclagem", "Resíduo para beneficiamento", "Resíduo para coprocessamento", "Resíduo para destinação", "Não sei classificar"]
  },
  {
    question: "Qual é sua principal necessidade?",
    options: ["Coleta", "Gerenciamento", "Destinação", "Valorização", "CDR", "Coprocessamento", "Avaliação técnica", "Contrato recorrente"]
  }
];

const InteractiveTriage = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [isFinished, setIsFinished] = useState(false);

  const handleOptionSelect = (option: string) => {
    const newAnswers = [...answers];
    newAnswers[currentStep] = option;
    setAnswers(newAnswers);
    
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsFinished(true);
    }
  };

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-white rounded-[40px] shadow-2xl shadow-gray-200/50 overflow-hidden border border-gray-100">
          <div className="bg-brand-green px-10 py-12 text-white relative">
            <HelpCircle className="absolute top-10 right-10 opacity-20" size={80} />
            <h3 className="text-3xl font-plus-jakarta font-extrabold mb-4">Encontre a solução ideal</h3>
            <p className="text-white/80 max-w-md">
              Responda algumas perguntas rápidas para que nossos especialistas possam entender melhor o seu desafio.
            </p>
          </div>

          <div className="p-10 min-h-[400px] flex flex-col">
            <AnimatePresence mode="wait">
              {!isFinished ? (
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="flex-1"
                >
                  <div className="flex items-center gap-4 mb-8">
                    <div className="flex gap-2">
                      {steps.map((_, i) => (
                        <div
                          key={i}
                          className={`h-1.5 w-8 rounded-full transition-colors ${
                            i <= currentStep ? 'bg-brand-lime' : 'bg-gray-200'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                      Passo {currentStep + 1} de {steps.length}
                    </span>
                  </div>

                  <h4 className="text-2xl font-bold text-brand-black mb-8">{steps[currentStep].question}</h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {steps[currentStep].options.map((option) => (
                      <button
                        key={option}
                        onClick={() => handleOptionSelect(option)}
                        className={`group text-left px-6 py-4 rounded-2xl border-2 transition-all flex items-center justify-between ${
                          answers[currentStep] === option
                            ? 'border-brand-lime bg-brand-lime/5 text-brand-lime'
                            : 'border-gray-100 hover:border-brand-lime bg-white'
                        }`}
                      >
                        <span className="font-semibold">{option}</span>
                        <ChevronRight
                          size={18}
                          className={`transition-transform group-hover:translate-x-1 ${
                            answers[currentStep] === option ? 'text-brand-lime' : 'text-gray-300'
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-10"
                >
                  <div className="w-20 h-20 bg-brand-lime/10 text-brand-lime rounded-full flex items-center justify-center mx-auto mb-8">
                    <CheckCircle2 size={40} />
                  </div>
                  <h4 className="text-3xl font-extrabold text-brand-black mb-4">Tudo pronto!</h4>
                  <p className="text-brand-gray-dark max-w-lg mx-auto mb-10 text-lg leading-relaxed">
                    Suas respostas ajudam a iniciar a avaliação. Nossa equipe analisará as características do material e indicará os próximos passos.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="bg-brand-lime text-white px-8 py-4 rounded-xl font-bold hover:bg-brand-lime/90 transition-all shadow-lg shadow-brand-lime/20">Solicitar avaliação completa</button>
                    <button className="border-2 border-gray-200 px-8 py-4 rounded-xl font-bold hover:bg-gray-50 transition-all">Falar com especialista</button>
                  </div>

                  <p className="mt-8 text-xs text-gray-400 uppercase tracking-widest font-bold">
                    Esta ferramenta é uma triagem comercial inicial.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            {!isFinished && currentStep > 0 && (
              <button
                onClick={() => setCurrentStep(currentStep - 1)}
                className="mt-10 flex items-center gap-2 text-gray-400 font-bold hover:text-brand-gray-dark self-start transition-all"
              >
                <ChevronLeft size={18} />
                Voltar
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveTriage;
