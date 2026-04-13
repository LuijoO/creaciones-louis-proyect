import React from 'react';

export default function Swimwear({ title, items, ctaText }) {
  return (
    <section className="py-16 md:py-24 bg-white px-6 font-['Josefin_Sans',sans-serif]">
      <div className="max-w-6xl mx-auto">
        {/* Título de la sección */}
        <h3 className="text-3xl md:text-5xl font-light text-center mb-6 text-[#D4AF37] tracking-[0.2em] uppercase">
          {title}
        </h3>
        
        {/* Línea de separación principal */}
        <div className="w-24 h-px bg-[#D4AF37]/50 mx-auto mb-12 md:mb-20"></div>

        {/* Contenedor de las Cards (2 Columnas) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 mb-16">
          {items.map((item) => (
            <div key={item.id} className="group cursor-pointer">
              {/* Imagen con efecto hover */}
              <div className="overflow-hidden mb-8 relative aspect-[3/4] bg-[#FFFFF0]/50">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                {/* Borde interior que aparece al hacer hover */}
                <div className="absolute inset-0 border border-[#D4AF37]/0 group-hover:border-[#D4AF37]/40 m-4 transition-colors duration-500 pointer-events-none"></div>
              </div>
              
              {/* Textos de la Card y líneas decorativas */}
              <div className="text-center">
                <h4 className="text-2xl font-light text-[#D4AF37] tracking-widest mb-4 uppercase">{item.title}</h4>
                <div className="w-12 h-px bg-[#D4AF37]/30 mx-auto mb-4"></div>
                <p className="text-[#B8860B] font-light tracking-wide">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Botón Ver Más */}
        <div className="text-center">
          <button className="border border-[#D4AF37] text-[#D4AF37] px-12 py-4 text-lg tracking-[0.2em] uppercase hover:bg-[#D4AF37] hover:text-[#FFFFF0] transition-colors duration-500">
            {ctaText}
          </button>
        </div>
      </div>
    </section>
  );
}