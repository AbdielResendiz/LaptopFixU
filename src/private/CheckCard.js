import React from 'react';
import {  View } from 'react-native';
import { Button, NativeBaseProvider, Text } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles/styles';

const CheckCard = () => {
  const navigation =useNavigation();
  return (
    <NativeBaseProvider>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        }}>
        <Text fontSize={20} style={styles.Texts}>Pasarela de pago</Text>
        <Text fontSize={30} style={styles.Texts} >Pendiente</Text>
        <Button p={4} mx={20} mt={4} 
              onPress={()=> navigation.navigate("OpcionTecnico") } >
                SIGUIENTE
            </Button>
      </View>
    </NativeBaseProvider>
  )
}
export default CheckCard;