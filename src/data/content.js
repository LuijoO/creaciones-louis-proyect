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
        image: "https://images.unsplash.com/photo-1564859228273-274232fdb516?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: 2,
        title: "Conjunto Dos Piezas",
        description: "Versatilidad y estilo exclusivo para brillar bajo el sol.",
        image: "https://images.unsplash.com/photo-1582639510494-c80bf2fd893e?auto=format&fit=crop&w=800&q=80",
      }
    ],
    ctaText: "Ver más",
  },
  features: {
    title: "Nuestra Esencia",
    items: [
      { id: 1, icon: "✨", title: "Calidad Premium", description: "Confeccionados con los materiales más finos para garantizar durabilidad y confort en cada uso." },
      { id: 2, icon: "💎", title: "Diseño Exclusivo", description: "Cada pieza es cuidadosamente creada pensando en realzar la belleza natural con absoluta elegancia." },
      { id: 3, icon: "🌿", title: "Sostenibilidad", description: "Comprometidos con el medio ambiente, utilizando procesos éticos y responsables en nuestra producción." },
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
        { id: 'w1', title: 'Conjunto Encaje', description: 'Delicadeza y confort absolutos', image: 'https://images.unsplash.com/photo-1616050454359-38e9ba11352f?auto=format&fit=crop&w=600&q=80' },
        { id: 'w2', title: 'Bralette de Seda', description: 'Suavidad que acaricia la piel', image: 'https://images.unsplash.com/photo-1620794341491-9f9ea0beba22?auto=format&fit=crop&w=600&q=80' },
        { id: 'w3', title: 'Body Moldeador', description: 'Realza tu silueta natural', image: 'https://images.unsplash.com/photo-1608643867622-42173ea56209?auto=format&fit=crop&w=600&q=80' },
        { id: 'w4', title: 'Conjunto Algodón', description: 'Estilo y comodidad para el día a día', image: 'https://images.unsplash.com/photo-1600823432704-586bf27e8529?auto=format&fit=crop&w=600&q=80' }
      ],
      men: [
        { id: 'm1', title: 'Boxer Clásico', description: 'Ajuste ideal y máxima comodidad', image: 'https://images.unsplash.com/photo-1619448100585-802c382bb74b?auto=format&fit=crop&w=600&q=80' },
        { id: 'm2', title: 'Brief de Algodón', description: 'Soporte perfecto diario', image: 'https://images.unsplash.com/photo-1582200230679-6f9f30b200b2?auto=format&fit=crop&w=600&q=80' },
        { id: 'm3', title: 'Trunk Deportivo', description: 'Libertad de movimiento sin igual', image: 'https://images.unsplash.com/photo-1563231185-30467b2d56d6?auto=format&fit=crop&w=600&q=80' },
        { id: 'm4', title: 'Boxer de Seda', description: 'El toque premium que mereces', image: 'https://images.unsplash.com/photo-1622320146055-6b3a010d7b00?auto=format&fit=crop&w=600&q=80' }
      ]
    }
  },
  footer: {
    companyName: "Louis Creation",
  },
};