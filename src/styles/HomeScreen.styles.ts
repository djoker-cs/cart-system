import { StyleSheet } from 'react-native';
import { colors, sharedStyles } from './shared.styles';

export const styles = StyleSheet.create({
  ...sharedStyles,
  productItem: {
    ...sharedStyles.itemContainer,
  },
  productInfo: {
    ...sharedStyles.itemInfo,
  },
  productName: {
    ...sharedStyles.itemName,
  },
  productPrice: {
    ...sharedStyles.itemPrice,
  },
  addButton: {
    backgroundColor: colors.primary,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 6,
    marginLeft: 12,
  },
  cartButton: {
    ...sharedStyles.successButton,
    margin: 16,
  },
  buttonText: {
    ...sharedStyles.buttonText,
  },
}); 