import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Product, CartItem } from '../types';

interface ShoppingCartContextType {
  cartItems: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  increaseQuantity: (productId: number) => void;
  decreaseQuantity: (productId: number) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
}

export const products: Product[] = [
  {
    id: 1,
    name: 'iPhone 13 Pro',
    price: 999.99,
    image: 'https://images.unsplash.com/photo-1632661674596-618d8b64d641',
    description: 'Latest iPhone model with advanced camera system',
  },
  {
    id: 2,
    name: 'MacBook Pro',
    price: 1299.99,
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8',
    description: 'Powerful laptop for professionals',
  },
  {
    id: 3,
    name: 'AirPods Pro',
    price: 249.99,
    image: 'https://images.unsplash.com/photo-1588156979435-379b9d802b0a',
    description: 'Premium wireless earbuds with noise cancellation',
  },
  {
    id: 4,
    name: 'Apple Watch',
    price: 399.99,
    image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12',
    description: 'Smart watch with health monitoring features',
  },
  {
    id: 5,
    name: 'iPad Air',
    price: 599.99,
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0',
    description: 'Versatile tablet for work and entertainment',
  },
];

const ShoppingCartContext = createContext<ShoppingCartContextType | undefined>(undefined);

export const useShoppingCart = () => {
  const context = useContext(ShoppingCartContext);
  if (!context) {
    throw new Error('useShoppingCart must be used within a ShoppingCartProvider');
  }
  return context;
};

export const ShoppingCartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (product: Product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));
  };

  const increaseQuantity = (productId: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (productId: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId
          ? { ...item, quantity: Math.max(0, item.quantity - 1) }
          : item
      ).filter((item) => item.quantity > 0)
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
    getTotalPrice,
  };

  return (
    <ShoppingCartContext.Provider value={value}>
      {children}
    </ShoppingCartContext.Provider>
  );
}; 