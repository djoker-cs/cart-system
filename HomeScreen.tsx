import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useShoppingCart, products } from './src/context/ShoppingCartContext';
import { styles } from './src/styles/HomeScreen.styles';

type RootStackParamList = {
  Home: undefined;
  Cart: undefined;
  Checkout: undefined;
};

type NavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

export default function HomeScreen() {
  const navigation = useNavigation<NavigationProp>();
  const { addToCart } = useShoppingCart();

  const renderItem = ({ item }) => (
    <View style={styles.productItem}>
      <View style={styles.productInfo}>
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productPrice}>${item.price.toFixed(2)}</Text>
      </View>
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => {
          addToCart(item);
        }}
      >
        <Text style={styles.buttonText}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContainer}
      />
      <TouchableOpacity
        style={styles.cartButton}
        onPress={() => navigation.navigate('Cart')}
      >
        <Text style={styles.buttonText}>Go to Cart</Text>
      </TouchableOpacity>
    </View>
  );
}