
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface CatalogItemProps {
  id: number;
  name: string;
  price: string;
  image: string;
  category: string;
}

export default function CatalogItem({ id, name, price, image, category }: CatalogItemProps) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({ id, name, price, image, category });
  };

  return (
    <div className="group relative bg-black text-white rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1">
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-72 object-cover transform group-hover:scale-110 transition-transform duration-500" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
          <button 
            onClick={handleAddToCart}
            className="bg-[#B8860B] hover:bg-[#8B6508] text-white px-6 py-3 rounded-full flex items-center space-x-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 shadow-lg hover:shadow-xl"
          >
            <ShoppingCart className="h-5 w-5" />
            <span>Adicionar ao Carrinho</span>
          </button>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-[#B8860B] font-medium uppercase tracking-wider">{category}</span>
          <span className="text-lg font-bold text-[#B8860B]">R$ {price}</span>
        </div>
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <div className="h-0.5 w-full bg-gradient-to-r from-[#B8860B] to-transparent opacity-50"></div>
      </div>
    </div>
  );
}