import { ViewStyle, TextStyle, ImageStyle } from 'react-native';

export interface SharedStyles {
  container: ViewStyle;
  listContainer: ViewStyle;
  itemContainer: ViewStyle;
  itemInfo: ViewStyle;
  itemName: TextStyle;
  itemPrice: TextStyle;
  primaryButton: ViewStyle;
  successButton: ViewStyle;
  buttonText: TextStyle;
}

export interface HomeScreenStyles extends SharedStyles {
  headerTitle: TextStyle;
  productCard: ViewStyle;
  productImage: ImageStyle;
  productInfo: ViewStyle;
  productName: TextStyle;
  productDescription: TextStyle;
  productPrice: TextStyle;
  addButton: ViewStyle;
  cartButton: ViewStyle;
}

export interface CartScreenStyles extends SharedStyles {
  headerTitle: TextStyle;
  cartItem: ViewStyle;
  itemImage: ImageStyle;
  quantityContainer: ViewStyle;
  quantityButton: ViewStyle;
  quantityButtonText: TextStyle;
  quantity: TextStyle;
  footer: ViewStyle;
  total: TextStyle;
  checkoutButton: ViewStyle;
  emptyContainer: ViewStyle;
  emptyText: TextStyle;
  continueButton: ViewStyle;
}

export interface CheckoutScreenStyles extends SharedStyles {
  title: TextStyle;
  checkoutItem: ViewStyle;
  itemImage: ImageStyle;
  itemQuantity: TextStyle;
  footer: ViewStyle;
  totalContainer: ViewStyle;
  totalLabel: TextStyle;
  totalAmount: TextStyle;
  checkoutButton: ViewStyle;
} 