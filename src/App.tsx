import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Collections from './components/Collections';
import Catalog from './components/Catalog';
import Contact from './components/Contact';
import WhatsAppButton from './components/WhatsAppButton';
import CartButton from './components/CartButton';
import Cart from './components/Cart';
import { CartProvider } from './context/CartContext';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <CartProvider>
      <div className="min-h-screen">
        <Navbar />
        <Hero />
        <Collections />
        <Catalog />
        <Contact />
        <WhatsAppButton />
        <CartButton onClick={() => setIsCartOpen(true)} />
        <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
        <footer className="bg-gray-900 text-white py-8">
          <div className="container mx-auto px-4 text-center">
            <p>&copy; 2024 Eterno Lux. Todos os direitos reservados.</p>
          </div>
        </footer>
      </div>
    </CartProvider>
  );
}

export default App;