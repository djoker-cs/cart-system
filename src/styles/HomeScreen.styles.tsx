import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { colors, sharedStyles } from './shared.styles.tsx';
import { HomeScreenStyles } from '../types/styles';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create<HomeScreenStyles>({
  ...sharedStyles,
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.text.primary,
    marginBottom: 20,
    textAlign: 'center',
  },
  productCard: {
    backgroundColor: colors.white,
    borderRadius: 12,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  productImage: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    resizeMode: 'cover',
  },
  productInfo: {
    padding: 16,
  },
  productName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    color: colors.text.primary,
  },
  productDescription: {
    fontSize: 14,
    color: colors.text.secondary,
    marginBottom: 8,
  },
  productPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: 12,
  },
  addButton: {
    backgroundColor: colors.primary,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  cartButton: {
    ...sharedStyles.successButton,
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    ...sharedStyles.buttonText,
    fontSize: 16,
  },
  listContainer: {
    padding: 16,
    paddingBottom: 100, // Space for the floating cart button
  },
}); 