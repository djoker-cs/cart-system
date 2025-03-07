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
    name: 'Versace Eros EDP',
    price: 999.99,
    image: 'https://images.unsplash.com/photo-1659167664742-a592e00f5a29?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dmVyc2FjZSUyMGVyb3N8ZW58MHx8MHx8fDA%3D',
    description: 'Top notes are Mint, Green Apple and Lemon; middle notes are Tonka Bean, Ambroxan and Geranium; base notes are Madagascar Vanilla, Virginian Cedar, Atlas Cedar, Vetiver and Oakmoss.',
  },
  {
    id: 2,
    name: 'Jean Paul Gaultier Le Male Elixir',
    price: 1299.99,
    image: 'https://dutyfree.b-cdn.net/423_0821_d89d75eb86.jpg',
    description: 'Top notes are Lavender and Mint; middle notes are Vanilla and Benzoin; base notes are Honey, Tonka Bean and Tobacco.',
  },
  {
    id: 3,
    name: 'Valentino Uomo Born in Roma Intense',
    price: 249.99,
    image: 'https://www.lookfantastic.com/images?url=https://static.thcdn.com/productimg/original/14234056-6745033295092202.jpg&format=webp&auto=avif&width=1200&height=1200&fit=cover',
    description: 'Top note is Vanilla; middle note is Lavender; base note is Vetiver.',
  },
  {
    id: 4,
    name: 'Tom Ford Tobacco Vanille',
    price: 399.99,
    image: 'https://myer-media.com.au/wcsstore/MyerCatalogAssetStore/images/15/151/1673/100/1/978079330/978079330_3_720x928.webp?w=1920&q=75',
    description: 'Top notes are Tobacco Leaf and Spicy Notes; middle notes are Vanilla, Cacao, Tonka Bean and Tobacco Blossom; base notes are Dried Fruits and Woody Notes.',
  },
  {
    id: 5,
    name: 'Y Eau de Parfum Intense Yves Saint Laurent',
    price: 599.99,
    image: 'https://dutyfree.b-cdn.net/g423_0765_2_8ed7f528bc.jpg',
    description: 'Top notes are Ginger, Juniper Berries and Bergamot; middle notes are Sage, Lavender and Geranium; base notes are Vetiver, Patchouli and Cedar.',
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