import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ShoppingCartProvider } from './src/context/ShoppingCartContext';
import HomeScreen from './HomeScreen';
import CartScreen from './CartScreen';
import CheckoutScreen from './CheckoutScreen';

const Stack = createStackNavigator();

export default function App() {
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
          initialRouteName="Home"
        >
          <Stack.Screen 
            name="Home" 
            component={HomeScreen}
            options={{
              title: 'Products',
              gestureEnabled: false,
              headerShown: true,
              headerLeft: () => null,
            }}
          />
          <Stack.Screen 
            name="Cart" 
            component={CartScreen}
            options={{
              title: 'Shopping Cart',
            }}
          />
          <Stack.Screen 
            name="Checkout" 
            component={CheckoutScreen}
            options={{
              title: 'Checkout',
            }}
          />
        </Stack.Navigator>
      </ShoppingCartProvider>
    </NavigationContainer>
  );
}