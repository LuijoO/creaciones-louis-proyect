import React from 'react';

export default function Footer({ companyName }) {
  return (
    <footer className="bg-[#D4AF37] text-[#FFFFF0] text-center py-10 font-['Josefin_Sans',sans-serif]">
      <p className="tracking-widest font-light text-sm uppercase">&copy; {new Date().getFullYear()} {companyName}. Todos los derechos reservados.</p>
    </footer>
  );
}