
import { useCart } from '../context/CartContext';
import { ShoppingCart, X, Plus, Minus, Send } from 'lucide-react';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Cart({ isOpen, onClose }: CartProps) {
  const { items, removeFromCart, updateQuantity, totalItems, totalPrice } = useCart();

  const handleCheckout = () => {
    const phoneNumber = '554699709955';
    const message = encodeURIComponent(
      `Olá! Gostaria de fazer um pedido:\n\n${items
        .map(item => `${item.name} (${item.quantity}x) - R$ ${item.price}`)
        .join('\n')}\n\nTotal: R$ ${totalPrice}`
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl transform transition-transform duration-300">
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 border-b">
            <div className="flex items-center space-x-2">
              <ShoppingCart className="h-6 w-6 text-[#B8860B]" />
              <h2 className="text-xl font-semibold">Carrinho</h2>
              <span className="bg-[#B8860B] text-white px-2 py-1 rounded-full text-sm">
                {totalItems}
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {items.length === 0 ? (
              <div className="text-center text-gray-500 py-8">
                <ShoppingCart className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <p>Seu carrinho está vazio</p>
              </div>
            ) : (
              items.map(item => (
                <div
                  key={item.id}
                  className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-md"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-[#B8860B]">R$ {item.price}</p>
                    <div className="flex items-center space-x-2 mt-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-1 hover:bg-gray-100 rounded-full transition-colors"
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-1 hover:bg-gray-100 rounded-full transition-colors"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="p-2 hover:bg-red-50 text-red-500 rounded-full transition-colors"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
              ))
            )}
          </div>

          {items.length > 0 && (
            <div className="border-t p-4 space-y-4">
              <div className="flex justify-between items-center font-semibold text-lg">
                <span>Total:</span>
                <span>R$ {totalPrice}</span>
              </div>
              <button
                onClick={handleCheckout}
                className="w-full bg-[#B8860B] hover:bg-[#8B6508] text-white py-3 rounded-lg flex items-center justify-center space-x-2 transition-colors"
              >
                <Send className="h-5 w-5" />
                <span>Finalizar no WhatsApp</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
