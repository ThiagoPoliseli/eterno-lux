import React, { createContext, useContext, useState, useCallback } from 'react';

interface CartItem {
    id: number;
    name: string;
    price: string;
    image: string;
    category: string;
    quantity: number;
}

interface CartContextType {
    items: CartItem[];
    addToCart: (product: Omit<CartItem, 'quantity'>) => void;
    removeFromCart: (productId: number) => void;
    updateQuantity: (productId: number, quantity: number) => void;
    clearCart: () => void;
    totalItems: number;
    totalPrice: string;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
    const [items, setItems] = useState<CartItem[]>([]);

    const addToCart = useCallback((product: Omit<CartItem, 'quantity'>) => {
    setItems(currentItems => {
    const existingItem = currentItems.find(item => item.id === product.id);

    if (existingItem) {
        return currentItems.map(item =>
        item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
    }

    return [...currentItems, { ...product, quantity: 1 }];
    });
}, []);

    const removeFromCart = useCallback((productId: number) => {
    setItems(currentItems => currentItems.filter(item => item.id !== productId));
}, []);

    const updateQuantity = useCallback((productId: number, quantity: number) => {
    if (quantity < 1) return;
    
    setItems(currentItems =>
    currentItems.map(item =>
        item.id === productId ? { ...item, quantity } : item
    )
    );
}, []);

    const clearCart = useCallback(() => {
    setItems([]);
}, []);

    const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

    const totalPrice = items
    .reduce((sum, item) => {
    const price = parseFloat(item.price.replace(',', '.'));
      return sum + price * item.quantity;
    }, 0)
    .toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

return (
    <CartContext.Provider
    value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalItems,
        totalPrice,
    }}
    >
    {children}
    </CartContext.Provider>
);
}

export function useCart() {
    const context = useContext(CartContext);
    if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
}
return context;
}