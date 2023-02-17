import React from 'react';
import { Text, View } from 'react-native';
import styles from '../styles/styles';

const AddCard = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}>
      <Text style={styles.Texts}>agregar tarjeta</Text>
    </View>
  )
}
export default AddCard;