import React, { useState } from 'react';

export default function Header({ logo, nav, onOpenContact }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState(null);

  const toggleMobileDropdown = (index) => {
    setOpenMobileDropdown(openMobileDropdown === index ? null : index);
  };

  return (
    <header className="p-4 md:p-6 bg-[#FFFFF0] text-[#D4AF37] shadow-sm flex justify-between items-center sticky top-0 z-50 font-['Champagne_&_Limousines','Josefin_Sans',sans-serif]">
      {/* Logo a la izquierda */}
      <h1 className="text-3xl md:text-4xl font-light tracking-[0.2em] relative z-50">{logo}</h1>
      
      {/* Controles a la derecha (Desktop) */}
      <div className="hidden md:flex items-center gap-8">
        
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

      {/* Controles a la derecha (Móvil) */}
      <div className="flex md:hidden items-center gap-4 relative z-50">
        <button onClick={() => { setIsMobileMenuOpen(false); onOpenContact(); }} className="hover:text-[#B8860B] transition-colors" aria-label="Contacto">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
          </svg>
        </button>
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="hover:text-[#B8860B] transition-colors" aria-label="Menú">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            )}
          </svg>
        </button>
      </div>

      {/* Overlay / Menú Móvil */}
      <div className={`fixed inset-0 bg-[#FFFFF0] z-40 flex flex-col pt-24 px-6 transition-transform duration-500 ease-in-out md:hidden overflow-y-auto ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col gap-6 pb-10">
          {nav && nav.map((item, index) => (
            <div key={index} className="flex flex-col border-b border-[#D4AF37]/20 pb-4">
              <button onClick={() => toggleMobileDropdown(index)} className="flex justify-between items-center text-xl font-light tracking-[0.2em] uppercase text-[#D4AF37]">
                {item.title}
                <span className={`text-xs transition-transform duration-300 ${openMobileDropdown === index ? 'rotate-180' : ''}`}>▼</span>
              </button>
              
              <div className={`overflow-hidden transition-all duration-500 flex flex-col gap-3 ${openMobileDropdown === index ? 'max-h-64 opacity-100 mt-4' : 'max-h-0 opacity-0 mt-0'}`}>
                {item.dropdown.map((subItem, subIndex) => (
                  <button key={subIndex} onClick={() => setIsMobileMenuOpen(false)} className="text-left text-lg font-light tracking-[0.15em] text-[#B8860B] pl-4 hover:text-[#D4AF37] transition-all duration-300">
                    {subItem}
                  </button>
                ))}
              </div>
            </div>
          ))}
          <button onClick={() => { setIsMobileMenuOpen(false); onOpenContact(); }} className="mt-6 border border-[#D4AF37] text-[#D4AF37] py-4 text-lg tracking-[0.2em] uppercase hover:bg-[#D4AF37] hover:text-[#FFFFF0] transition-colors duration-500">
            Contáctanos
          </button>
        </div>
      </div>
    </header>
  );
}