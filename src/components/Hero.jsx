import React from 'react';

export default function Hero({ title, subtitle, ctaText, note }) {
  return (
    <section className="py-32 text-center px-4 bg-[#FFFFF0] font-['Champagne_&_Limousines','Josefin_Sans',sans-serif]">
      {/* Definimos la animación directamente en el componente para que funcione el efecto de entrada */}
      <style>
        {`
          @keyframes fade-in-up {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
      
      {/* overflow-hidden previene barras de scroll durante la animación inicial */}
      <div className="max-w-6xl mx-auto overflow-hidden">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-6 text-[#D4AF37] tracking-[0.15em] leading-[1.15] opacity-0 [animation:fade-in-up_1s_ease-out_0.2s_forwards] whitespace-pre-line">
          {title}
        </h2>

        <div className="w-24 h-px bg-[#D4AF37]/50 mx-auto mb-6 opacity-0 [animation:fade-in-up_1s_ease-out_0.4s_forwards]"></div>

        <p className="text-xl md:text-2xl text-[#B8860B] mb-12 max-w-3xl mx-auto font-light tracking-wide leading-relaxed opacity-0 [animation:fade-in-up_1s_ease-out_0.6s_forwards]">
          {subtitle}
        </p>
        <button className="border border-[#D4AF37] text-[#D4AF37] px-10 py-4 text-lg tracking-[0.2em] uppercase hover:bg-[#D4AF37] hover:text-[#FFFFF0] transition-colors duration-500 opacity-0 [animation:fade-in-up_1s_ease-out_0.8s_forwards]">
          {ctaText}
        </button>
        <p className="mt-8 text-sm text-[#D4AF37] tracking-widest uppercase opacity-0 [animation:fade-in-up_1s_ease-out_1s_forwards]">
          {note}
        </p>
      </div>
    </section>
  );
}