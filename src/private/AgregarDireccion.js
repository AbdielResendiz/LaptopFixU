import React from 'react';
import { TouchableOpacity } from 'react-native';
import { NativeBaseProvider, Text, View, Center, Divider, HStack } from 'native-base';
import { FontAwesome5, Entypo } from '@expo/vector-icons'; 

import Footer from '../components/Footer';

const AgregarDireccion = (props) => {
  //obtenemos ID de usuario
  const id = props.route.params.idU;
  const idU = parseInt(id);
  console.log("idUU: ", id);




  return (
    <NativeBaseProvider>
      <View w="100%" h="91%" bg="white">
        <Center>
            <Text>HOLA</Text>
            <Text>{idU}</Text>
        </Center>
       


      </View>
      <Footer/>
    </NativeBaseProvider>
  )
}
export default AgregarDireccion;