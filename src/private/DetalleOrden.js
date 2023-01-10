import React from 'react';
import { Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const DetalleOrden = () => {
  const navigation =useNavigation();
  
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}>
      <Text>Detalle orden</Text>
    </View>
  )
}
export default DetalleOrden;