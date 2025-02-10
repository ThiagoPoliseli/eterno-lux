import { ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface CartButtonProps {
    onClick: () => void;
}

export default function CartButton({ onClick }: CartButtonProps) {
    const { totalItems } = useCart();

return (
    <button
    onClick={onClick}
    className="fixed top-20 right-6 z-40 bg-[#B8860B] hover:bg-[#8B6508] text-white p-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
    >
    <div className="relative">
        <ShoppingCart className="h-6 w-6" />
        {totalItems > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
            {totalItems}
        </span>
        )}
    </div>
    </button>
);
}