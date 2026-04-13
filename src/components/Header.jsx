import React from 'react';

export default function Header({ logo, nav, onOpenContact }) {
  return (
    <header className="p-6 bg-[#FFFFF0] text-[#D4AF37] shadow-sm flex justify-between items-center sticky top-0 z-20 font-['Champagne_&_Limousines','Josefin_Sans',sans-serif]">
      {/* Logo a la izquierda */}
      <h1 className="text-4xl font-light tracking-[0.2em]">{logo}</h1>
      
      {/* Controles a la derecha */}
      <div className="flex items-center gap-8">
        
        {/* Botones desplegables */}
        {nav && nav.map((item, index) => (
          <div key={index} className="relative group cursor-pointer py-4">
            <span className="font-light text-lg tracking-[0.2em] group-hover:text-[#B8860B] transition-colors duration-300 flex items-center gap-1 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[1px] after:bottom-0 after:left-0 after:bg-[#D4AF37] after:origin-bottom-right after:transition-transform after:duration-300 group-hover:after:scale-x-100 group-hover:after:origin-bottom-left">
              {item.title} <span className="text-xs transform transition-transform duration-300 group-hover:rotate-180">▼</span>
            </span>
            
            {/* Menú desplegable */}
            <div className="absolute top-full right-0 mt-2 bg-[#FFFFF0] border border-[#D4AF37]/20 shadow-xl rounded-2xl overflow-hidden opacity-0 translate-y-4 group-hover:translate-y-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-500 ease-out min-w-[180px] z-50">
              {item.dropdown.map((subItem, subIndex) => (
                <button key={subIndex} className="block w-full text-left px-5 py-3 font-light tracking-[0.15em] hover:bg-[#D4AF37]/10 hover:text-[#B8860B] hover:pl-7 transition-all duration-300">
                  {subItem}
                </button>
              ))}
            </div>
          </div>
        ))}

        {/* Icono de Contacto */}
        <button onClick={onOpenContact} className="hover:text-[#B8860B] hover:scale-110 transition-all duration-300 ml-2 cursor-pointer" aria-label="Contacto">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
          </svg>
        </button>
        
      </div>
    </header>
  );
}