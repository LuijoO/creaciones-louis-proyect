import React from 'react';

export default function Features({ title, items }) {
  return (
    <section className="py-24 bg-[#D4AF37] px-4 font-['Josefin_Sans',sans-serif]">
      <div className="max-w-6xl mx-auto text-center">
        <h3 className="text-4xl md:text-5xl font-light text-center mb-16 text-[#FFFFF0] tracking-[0.2em] uppercase">
          {title}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-center">
          {items.map((feature) => (
            <div key={feature.id} className="group relative p-10 rounded-2xl bg-[#FFFFF0] shadow-xl hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 border border-transparent overflow-hidden z-10 cursor-default">
              {/* Fondo decorativo sutil al hacer hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10"></div>
              
              <div className="text-5xl mb-6 transform group-hover:scale-125 group-hover:-translate-y-2 transition-all duration-500 inline-block">{feature.icon}</div>
              <h4 className="text-2xl font-light mb-4 text-[#D4AF37] tracking-widest uppercase group-hover:text-[#B8860B] transition-colors duration-500">{feature.title}</h4>
              <div className="w-12 h-px bg-[#D4AF37]/30 mx-auto mb-6 group-hover:w-24 group-hover:bg-[#D4AF37]/60 transition-all duration-700"></div>
              <p className="text-[#B8860B] font-light tracking-wide leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Botón de llamada a la acción */}
        <div className="mt-20">
          <button className="bg-transparent text-[#FFFFF0] border border-[#FFFFF0] px-12 py-4 text-lg tracking-[0.2em] uppercase hover:bg-[#FFFFF0] hover:text-[#D4AF37] transition-all duration-500 hover:shadow-lg font-bold cursor-pointer">
            Solicita tu pedido
          </button>
        </div>
      </div>
    </section>
  );
}