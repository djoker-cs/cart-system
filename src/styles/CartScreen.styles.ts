import { StyleSheet } from 'react-native';
import { colors, sharedStyles } from './shared.styles';

export const styles = StyleSheet.create({
  ...sharedStyles,
  cartItem: {
    ...sharedStyles.itemContainer,
  },
  itemInfo: {
    ...sharedStyles.itemInfo,
  },
  itemName: {
    ...sharedStyles.itemName,
  },
  itemPrice: {
    ...sharedStyles.itemPrice,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    backgroundColor: colors.primary,
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  quantityButtonText: {
    color: colors.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
  quantity: {
    marginHorizontal: 12,
    fontSize: 16,
    fontWeight: 'bold',
  },
  footer: {
    backgroundColor: colors.white,
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  total: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  checkoutButton: {
    ...sharedStyles.successButton,
  },
  buttonText: {
    ...sharedStyles.buttonText,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  emptyText: {
    fontSize: 18,
    color: colors.text.secondary,
    marginBottom: 16,
  },
  continueButton: {
    ...sharedStyles.primaryButton,
  },
}); 