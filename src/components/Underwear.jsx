import React, { useState } from 'react';

export default function Underwear({ title, tabs, collections }) {
  // Estado que guardará si se seleccionó 'women', 'men' o null (ninguno)
  const [activeTab, setActiveTab] = useState(null);

  return (
    <section className="py-24 bg-[#FFFFF0] px-4 font-['Josefin_Sans',sans-serif]">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-4xl md:text-5xl font-light text-center mb-6 text-[#D4AF37] tracking-[0.2em] uppercase">
          {title}
        </h3>
        <div className="w-24 h-px bg-[#D4AF37]/50 mx-auto mb-16"></div>

        {/* Las 2 Cards Primarias (Tabs) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {tabs.map((tab) => (
            <div 
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`cursor-pointer border transition-all duration-500 p-12 text-center rounded-xl ${
                activeTab === tab.id 
                  ? 'bg-[#D4AF37] border-[#D4AF37] text-[#FFFFF0] shadow-2xl scale-105' 
                  : 'bg-transparent border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37]/10'
              }`}
            >
              <h4 className="text-3xl font-light tracking-[0.2em] uppercase">{tab.label}</h4>
              <p className={`mt-4 text-sm tracking-widest uppercase ${activeTab === tab.id ? 'text-[#FFFFF0]/80' : 'text-[#B8860B]'}`}>Explorar Colección</p>
            </div>
          ))}
        </div>

        {/* Se muestran las 4 cards secundarias SOLO si hay un tab activo */}
        {activeTab && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 animate-[fade-in-up_0.8s_ease-out_forwards] opacity-0">
            {collections[activeTab].map((item) => (
              <div key={item.id} className="group cursor-pointer text-center">
                <div className="overflow-hidden mb-6 relative aspect-[3/4] bg-[#D4AF37]/5">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                </div>
                <h5 className="text-xl font-light text-[#D4AF37] tracking-widest mb-2 uppercase">{item.title}</h5>
                <div className="w-8 h-px bg-[#D4AF37]/30 mx-auto mb-3 group-hover:w-16 transition-all duration-500"></div>
                <p className="text-[#B8860B] text-sm font-light tracking-wide">{item.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}