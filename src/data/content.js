// Importa aquí tus imágenes locales. 
// Asegúrate de que los nombres y las extensiones (.jpg, .png, etc.) coincidan con los de tu carpeta src/images
import swim1 from '../assets/images/image1.jpeg';
import swim2 from '../assets/images/image2.jpeg';
import w1 from '../assets/images/image3.jpeg';
import w2 from '../assets/images/image4.jpeg';
import w3 from '../assets/images/image5.jpeg';
import w4 from '../assets/images/image3.jpeg';
import m1 from '../assets/images/image2.jpeg';
import m2 from '../assets/images/image4.jpeg';
import m3 from '../assets/images/image1.jpeg';
import m4 from '../assets/images/image5.jpeg';

export const landingContent = {
  header: {
    logo: "Louis",
    nav: [
      {
        title: "Trajes de baño",
        dropdown: ["Completos", "Looks", "Accesorios"],
      },
      {
        title: "Ropa interior",
        dropdown: ["Hombre", "Mujer"],
      },
    ],
  },
  hero: {
    title: "Elegancia y Exclusividad\nen Trajes de Baño",
    subtitle: "Descubre nuestra nueva colección de piezas delicadas, diseñadas para realzar la silueta femenina con la máxima sofisticación y un ajuste perfecto.",
    ctaText: "Explorar la Colección",
    note: "Envíos sin costo en compras superiores a $150.",
  },
  swimwear: {
    title: "Nuestra Colección",
    items: [
      {
        id: 1,
        title: "Traje de Baño Completo",
        description: "Elegancia, soporte y máxima sofisticación en una sola pieza.",
        image: swim1,
      },
      {
        id: 2,
        title: "Conjunto Dos Piezas",
        description: "Versatilidad y estilo exclusivo para brillar bajo el sol.",
        image: swim2,
      }
    ],
    ctaText: "Ver más",
  },
  features: {
    title: "Nuestra Esencia",
    items: [
      { id: 1, icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12"><path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.563.563 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.563.563 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" /></svg>', title: "Calidad Premium", description: "Confeccionados con los materiales más finos para garantizar durabilidad y confort en cada uso." },
      { id: 2, icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 4.5h16.5L22.5 9l-10.5 12L1.5 9l2.25-4.5ZM3.75 4.5l5.25 4.5M20.25 4.5l-5.25 4.5M1.5 9h21M12 21V9" /></svg>', title: "Diseño Exclusivo", description: "Cada pieza es cuidadosamente creada pensando en realzar la belleza natural con absoluta elegancia." },
      { id: 3, icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12"><path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" /></svg>', title: "Sostenibilidad", description: "Comprometidos con el medio ambiente, utilizando procesos éticos y responsables en nuestra producción." },
    ],
  },
  underwear: {
    title: "Colección Ropa Interior",
    tabs: [
      { id: 'women', label: 'Mujer' },
      { id: 'men', label: 'Hombre' }
    ],
    collections: {
      women: [
        { id: 'w1', title: 'Conjunto Encaje', description: 'Delicadeza y confort absolutos', image: w1 },
        { id: 'w2', title: 'Bralette de Seda', description: 'Suavidad que acaricia la piel', image: w2 },
        { id: 'w3', title: 'Body Moldeador', description: 'Realza tu silueta natural', image: w3 },
        { id: 'w4', title: 'Conjunto Algodón', description: 'Estilo y comodidad para el día a día', image: w4 }
      ],
      men: [
        { id: 'm1', title: 'Boxer Clásico', description: 'Ajuste ideal y máxima comodidad', image: m1 },
        { id: 'm2', title: 'Brief de Algodón', description: 'Soporte perfecto diario', image: m2 },
        { id: 'm3', title: 'Trunk Deportivo', description: 'Libertad de movimiento sin igual', image: m3 },
        { id: 'm4', title: 'Boxer de Seda', description: 'El toque premium que mereces', image: m4 }
      ]
    }
  },
  collectionModal: {
    title: "Colección Exclusiva",
    tabs: [
      { id: 'completos', label: 'Completos' },
      { id: 'partes', label: 'En Partes' },
      { id: 'accesorios', label: 'Accesorios' }
    ],
    collections: {
      completos: [
        { id: 'c1', title: 'Enterizo Mónaco', description: 'Diseño clásico con escote profundo y tejido modelador.', price: '$120', features: ['Protección UV 50+', 'Copas removibles', 'Doble forro'], image: swim1 },
        { id: 'c2', title: 'Body Saint-Tropez', description: 'Elegancia asimétrica con un solo hombro y detalle dorado.', price: '$135', features: ['Ajuste perfecto', 'Secado rápido', 'Detalles inoxidables'], image: swim2 },
        { id: 'c3', title: 'Bañador Capri', description: 'Estilo vintage con cinturón incorporado para enmarcar la figura.', price: '$140', features: ['Tejido texturizado', 'Soporte medio', 'Efecto reductor'], image: w3 },
        { id: 'c4', title: 'Traje Ibiza', description: 'Minimalismo puro con espalda descubierta y tirantes finos.', price: '$110', features: ['Corte alto en pierna', 'Sin costuras', 'Ultra suave'], image: w1 }
      ],
      partes: [
        { id: 'p1', title: 'Bikini Cannes', description: 'Top triangular con aros y braga de talle alto clásico.', price: '$115', features: ['Soporte extra', 'Tirantes ajustables', 'Tejido premium'], image: w2 },
        { id: 'p2', title: 'Conjunto Amalfi', description: 'Estilo bandeau con textura acanalada y diseño sin tirantes.', price: '$105', features: ['Antideslizante', 'Forro completo', 'Cobertura media'], image: swim2 },
        { id: 'p3', title: 'Dos piezas Tulum', description: 'Corte balconette con detalle de nudo central y braga brasileña.', price: '$125', features: ['Relleno ligero', 'Detalle frontal', 'Corte bajo'], image: w4 },
        { id: 'p4', title: 'Bikini Santorini', description: 'Top tipo sujetador y braga con lazos laterales ajustables.', price: '$95', features: ['Máxima comodidad', 'Ajuste a medida', 'Resistente al cloro'], image: w1 }
      ],
      accesorios: [
        { id: 'a1', title: 'Pareo de Seda', description: 'El complemento perfecto para tu traje de baño, suave y ligero.', price: '$85', features: ['100% Seda natural', 'Estampado exclusivo', 'Múltiples usos'], image: m2 },
        { id: 'a2', title: 'Sombrero Panamá', description: 'Protección con estilo, tejido a mano con palma de iraca.', price: '$150', features: ['Artesanal', 'Ala ancha', 'Cinta dorada'], image: w3 },
        { id: 'a3', title: 'Bolso de Playa', description: 'Espacioso y elegante bolso tejido, ideal para tus días soleados.', price: '$110', features: ['Asas de cuero', 'Forro interior', 'Bolsillo secreto'], image: swim1 },
        { id: 'a4', title: 'Gafas Oversize', description: 'Diseño carey con montura grande y lentes polarizadas.', price: '$195', features: ['Polarizadas', 'Protección 100% UV', 'Estuche rígido'], image: m4 }
      ]
    }
  },
  footer: {
    companyName: "Louis Creation",
  },
};