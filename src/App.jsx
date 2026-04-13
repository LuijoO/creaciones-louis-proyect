import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Swimwear from './components/Swimwear';
import Features from './components/Features';
import Underwear from './components/Underwear';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';
import CollectionModal from './components/CollectionModal';
import { landingContent } from './data/content';

function App() {
  const { header, hero, swimwear, features, underwear, footer, collectionModal } = landingContent;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCollectionModalOpen, setIsCollectionModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      
      <Header logo={header.logo} nav={header.nav} onOpenContact={() => setIsModalOpen(true)} />

      <main>
        <Hero {...hero} onOpenCollection={() => setIsCollectionModalOpen(true)} />
        <Swimwear {...swimwear} />
        <Features title={features.title} items={features.items} onOpenContact={() => setIsModalOpen(true)} />
        <Underwear {...underwear} />
      </main>

      <Footer companyName={footer.companyName} />

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <CollectionModal isOpen={isCollectionModalOpen} onClose={() => setIsCollectionModalOpen(false)} data={collectionModal} />
    </div>
  )
}

export default App;
