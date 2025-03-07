import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ShoppingCartProvider } from './src/context/ShoppingCartContext';
import HomeScreen from './HomeScreen';
import CartScreen from './CartScreen';
import CheckoutScreen from './CheckoutScreen';

const Stack = createStackNavigator();

export default function App() {
  const [hasCompletedPurchase, setHasCompletedPurchase] = useState(false);

  return (
    <NavigationContainer>
      <ShoppingCartProvider>
        <Stack.Navigator
          screenOptions={{
            headerTitleStyle: {
              fontSize: 20,
              fontWeight: 'bold',
            },
            headerTitleAlign: 'center',
          }}
        >
          <Stack.Screen 
            name="Home" 
            component={HomeScreen}
            options={{
              title: 'Products',
              headerLeft: () => null,
              gestureEnabled: false,
              presentation: 'modal',
            }}
          />
          <Stack.Screen 
            name="Cart" 
            component={CartScreen}
            options={{
              title: 'Shopping Cart',
              ...(hasCompletedPurchase && {
                headerLeft: () => null,
                gestureEnabled: false,
              }),
            }}
          />
          <Stack.Screen 
            name="Checkout" 
            component={CheckoutScreen}
            initialParams={{ setHasCompletedPurchase }}
            options={{
              title: 'Checkout',
              ...(hasCompletedPurchase && {
                headerLeft: () => null,
                gestureEnabled: false,
              }),
            }}
          />
        </Stack.Navigator>
      </ShoppingCartProvider>
    </NavigationContainer>
  );
}