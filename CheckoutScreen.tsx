import React from 'react';
import { View, Text, Button, Alert, StyleSheet } from 'react-native';

export default function CheckoutScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Checkout Screen</Text>
      <Button title="Checkout" color="#6200ea" onPress={() => {
        Alert.alert('Checkout successful', '', [{ text: 'OK', onPress: () => navigation.navigate('Home') }]);
      }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f4f4f4' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
});
