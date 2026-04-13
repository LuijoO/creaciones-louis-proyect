import React from 'react';

export default function Footer({ companyName }) {
  return (
    <footer className="bg-gray-900 text-gray-400 text-center py-8">
      <p>&copy; {new Date().getFullYear()} {companyName}. Todos los derechos reservados.</p>
    </footer>
  );
}