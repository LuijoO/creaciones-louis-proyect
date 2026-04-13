import React, { useState } from 'react';

export default function CollectionModal({ isOpen, onClose, data }) {
  const [activeTab, setActiveTab] = useState('completos');

  if (!isOpen || !data) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/70 z-50 flex justify-center items-center p-4 md:p-8 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* Contenedor principal del modal (Mucho más grande y con scroll interno) */}
      <div 
        className="bg-[#FFFFF0] text-[#D4AF37] rounded-3xl shadow-2xl w-full max-w-7xl h-[90vh] flex flex-col relative font-['Josefin_Sans',sans-serif] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Cabecera pegajosa del modal */}
        <div className="flex-none p-6 md:p-8 md:px-12 border-b border-[#D4AF37]/20 relative bg-[#FFFFF0] z-20">
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 md:top-8 md:right-8 text-[#D4AF37]/70 hover:text-[#D4AF37] transition-colors"
            aria-label="Cerrar"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <h3 className="text-2xl md:text-5xl font-light tracking-[0.2em] uppercase text-center mb-6 md:mb-8 pr-6">{data.title}</h3>
          
          {/* Pestañas de navegación */}
          <div className="flex justify-start md:justify-center overflow-x-auto whitespace-nowrap gap-6 md:gap-12 pb-2" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {data.tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`text-sm md:text-lg tracking-widest uppercase pb-2 border-b-2 transition-all duration-300 ${
                  activeTab === tab.id 
                    ? 'border-[#D4AF37] text-[#D4AF37] font-bold' 
                    : 'border-transparent text-[#B8860B]/60 hover:text-[#D4AF37]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Cuerpo del modal con Scroll (Las 4 Cards detalladas) */}
        <div className="flex-1 overflow-y-auto p-6 md:p-12 bg-[#FFFFF0]/50">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 animate-[fade-in-up_0.6s_ease-out_forwards]">
            {data.collections[activeTab]?.map((item) => (
              <div key={item.id} className="group flex flex-col bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-[#D4AF37]/10">
                <div className="relative aspect-[4/5] overflow-hidden bg-[#D4AF37]/5">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute top-4 right-4 bg-[#FFFFF0] text-[#D4AF37] px-4 py-1.5 rounded-full text-sm font-bold tracking-widest shadow-md">
                    {item.price}
                  </div>
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <h5 className="text-xl font-light tracking-widest mb-3 uppercase">{item.title}</h5>
                  <div className="w-12 h-px bg-[#D4AF37]/40 mb-4"></div>
                  <p className="text-[#B8860B] font-light text-sm mb-6 flex-grow">{item.description}</p>
                  
                  <ul className="mb-8 space-y-2">
                    {item.features.map((feat, idx) => (
                      <li key={idx} className="text-xs text-[#B8860B]/80 font-light flex items-center gap-2">
                        <span className="w-1 h-1 bg-[#D4AF37] rounded-full"></span> {feat}
                      </li>
                    ))}
                  </ul>
                  
                  <button className="w-full py-4 bg-transparent border border-[#D4AF37] text-[#D4AF37] uppercase tracking-[0.2em] text-xs font-bold hover:bg-[#D4AF37] hover:text-[#FFFFF0] transition-colors duration-300">
                    Añadir a la bolsa
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}