import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useShoppingCart } from './src/context/ShoppingCartContext';
import { styles } from './src/styles/CartScreen.styles';

type RootStackParamList = {
  Home: undefined;
  Cart: undefined;
  Checkout: undefined;
};

type NavigationProp = StackNavigationProp<RootStackParamList, 'Cart'>;

export default function CartScreen() {
  const navigation = useNavigation<NavigationProp>();
  const { cartItems, increaseQuantity, decreaseQuantity, getTotalPrice } = useShoppingCart();

  const renderItem = ({ item }) => (
    <View style={styles.cartItem}>
      <View style={styles.itemInfo}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemPrice}>${(item.price * item.quantity).toFixed(2)}</Text>
      </View>
      <View style={styles.quantityContainer}>
        <TouchableOpacity
          style={styles.quantityButton}
          onPress={() => decreaseQuantity(item.id)}
        >
          <Text style={styles.quantityButtonText}>-</Text>
        </TouchableOpacity>
        <Text style={styles.quantity}>{item.quantity}</Text>
        <TouchableOpacity
          style={styles.quantityButton}
          onPress={() => increaseQuantity(item.id)}
        >
          <Text style={styles.quantityButtonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {cartItems.length > 0 ? (
        <>
          <FlatList
            data={cartItems}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={styles.listContainer}
          />
          <View style={styles.footer}>
            <Text style={styles.total}>Total: ${getTotalPrice().toFixed(2)}</Text>
            <TouchableOpacity
              style={styles.checkoutButton}
              onPress={() => navigation.navigate('Checkout')}
            >
              <Text style={styles.buttonText}>Proceed to Checkout</Text>
            </TouchableOpacity>
          </View>
        </>
      ) : (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>Your cart is empty</Text>
          <TouchableOpacity
            style={styles.continueButton}
            onPress={() => navigation.navigate('Home')}
          >
            <Text style={styles.buttonText}>Continue Shopping</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}