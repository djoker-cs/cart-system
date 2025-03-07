import { StyleSheet } from 'react-native';
import { colors, sharedStyles } from './shared.styles';

export const styles = StyleSheet.create({
  ...sharedStyles,
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  checkoutItem: {
    ...sharedStyles.itemContainer,
  },
  itemInfo: {
    ...sharedStyles.itemInfo,
  },
  itemName: {
    ...sharedStyles.itemName,
  },
  itemQuantity: {
    fontSize: 14,
    color: colors.text.secondary,
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  footer: {
    marginTop: 20,
    backgroundColor: colors.white,
    padding: 16,
    borderRadius: 8,
    elevation: 2,
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  totalLabel: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  totalAmount: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.success,
  },
  checkoutButton: {
    ...sharedStyles.successButton,
  },
  buttonText: {
    ...sharedStyles.buttonText,
  },
}); 