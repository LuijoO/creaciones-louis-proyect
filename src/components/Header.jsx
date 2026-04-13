import React, { useState } from 'react';

export default function Header({ logo, nav }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
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
        <button onClick={() => setIsModalOpen(true)} className="hover:text-[#B8860B] hover:scale-110 transition-all duration-300 ml-2 cursor-pointer" aria-label="Contacto">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
          </svg>
        </button>
        
      </div>

      {/* Modal de Contacto */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 bg-black/60 z-50 flex justify-center items-center p-4"
          onClick={() => setIsModalOpen(false)} // Cierra el modal al hacer clic en el fondo
        >
          <div 
            className="bg-[#D4AF37] text-[#FFFFF0] rounded-2xl shadow-2xl p-12 max-w-lg w-full relative font-['Josefin_Sans',sans-serif] overflow-hidden"
            onClick={(e) => e.stopPropagation()} // Evita que el modal se cierre al hacer clic dentro de él
          >
            {/* Imagen de fondo del traje de baño */}
            <img 
              src="https://cdn-icons-png.flaticon.com/512/863/863684.png" 
              alt="Traje de baño decorativo"
              className="absolute -right-6 top-1/2 -translate-y-1/2 w-80 h-auto opacity-15 pointer-events-none object-contain transform -rotate-12"
            />

            {/* Botón para cerrar el modal */}
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-[#FFFFF0]/70 hover:text-[#FFFFF0] transition-colors z-20"
              aria-label="Cerrar modal"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <h4 className="text-4xl font-light tracking-widest mb-10 text-left relative z-10">Contáctanos</h4>
            
            <div className="space-y-8 text-left relative z-10">
              <div>
                <p className="text-lg font-bold uppercase tracking-widest text-[#FFFFF0]">Nombre</p>
                <div className="w-20 h-px bg-[#FFFFF0]/50 my-2"></div>
                <p className="text-xl font-light">Louis C.</p>
              </div>
              <div>
                <p className="text-lg font-bold uppercase tracking-widest text-[#FFFFF0]">Dirección</p>
                <div className="w-20 h-px bg-[#FFFFF0]/50 my-2"></div>
                <p className="text-xl font-light">123 Av. de la Elegancia, Ciudad Glamour</p>
              </div>
              <div>
                <p className="text-lg font-bold uppercase tracking-widest text-[#FFFFF0]">Correo</p>
                <div className="w-20 h-px bg-[#FFFFF0]/50 my-2"></div>
                <a href="mailto:contacto@louiscreation.com" className="text-xl font-light underline hover:opacity-80 transition-opacity">contacto@louiscreation.com</a>
              </div>
              <div>
                <p className="text-lg font-bold uppercase tracking-widest text-[#FFFFF0]">Teléfono</p>
                <div className="w-20 h-px bg-[#FFFFF0]/50 my-2"></div>
                <a href="tel:+15551234567" className="text-xl font-light underline hover:opacity-80 transition-opacity">+1 (555) 123-4567</a>
              </div>
              
              {/* Social Icons */}
              <div className="pt-6">
                <p className="text-lg font-bold uppercase tracking-widest text-[#FFFFF0]">Redes</p>
                <div className="w-20 h-px bg-[#FFFFF0]/50 my-2"></div>
                <div className="flex justify-start items-center gap-6 mt-4">
                  <a href="#" aria-label="Instagram" className="text-[#FFFFF0] hover:opacity-70 transition-opacity">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664-4.771 4.919-4.919C8.416 2.175 8.796 2.163 12 2.163zm0 1.44c-3.117 0-3.492.011-4.71.069-2.76.126-3.955 1.31-4.082 4.082-.057 1.217-.069 1.592-.069 4.71s.012 3.492.069 4.71c.127 2.772 1.322 3.955 4.082 4.082 1.218.057 1.592.069 4.71.069s3.492-.012 4.71-.069c2.76-.126 3.955-1.31 4.082-4.082.057-1.217.069-1.592.069-4.71s-.012-3.492-.069-4.71c-.127-2.772-1.322-3.955-4.082-4.082-1.218-.057-1.592-.069-4.71-.069zm0 3.555c-2.41 0-4.36 1.95-4.36 4.36s1.95 4.36 4.36 4.36 4.36-1.95 4.36-4.36-1.95-4.36-4.36-4.36zm0 7.275c-1.6 0-2.915-1.315-2.915-2.915s1.315-2.915 2.915-2.915 2.915 1.315 2.915 2.915-1.315 2.915-2.915 2.915zM16.95 6.57c-.58 0-1.05.47-1.05 1.05s.47 1.05 1.05 1.05 1.05-.47 1.05-1.05-.47-1.05-1.05-1.05z"/></svg>
                  </a>
                  <a href="#" aria-label="Facebook" className="text-[#FFFFF0] hover:opacity-70 transition-opacity">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
                  </a>
                  <a href="#" aria-label="Pinterest" className="text-[#FFFFF0] hover:opacity-70 transition-opacity">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.288 1.199.605 2.176 1.778 2.176 2.142 0 3.775-2.249 3.775-5.474 0-2.862-2.063-4.86-5.012-4.86-3.41 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.117.223.084.341-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.482-.695-2.423-2.878-2.423-4.629 0-3.775 2.748-7.252 7.92-7.252 4.158 0 7.397 2.967 7.397 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.379l-.749 2.848c-.269 1.023-.998 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}