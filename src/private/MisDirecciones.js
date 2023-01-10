import React from 'react';
import { TouchableOpacity } from 'react-native';
import { NativeBaseProvider, Text, View, Center, Divider, HStack } from 'native-base';
import { FontAwesome5, Entypo } from '@expo/vector-icons'; 

import Footer from '../components/Footer';

const MisDirecciones = () => {
  return (
    <NativeBaseProvider>
      <View w="100%" h="90%" bg="white">
        <Center>
          {/**TITULO  */}
          <Text fontWeight={800} fontSize={30} mt={2}>
            Agrega o escoge una dirección
          </Text>
        </Center>
        {/**DIVIDER */}
        <Center>
          <Divider thickness={1} w="70%" my={4} bg="#236DB7" />
        </Center>

        {/**BOTÓN AGREGAR DIRECCIÓN */}
        <Center >
          <TouchableOpacity>
            <HStack bg="muted.300" p={4} rounded={20}>
              <FontAwesome5 name="map-marker-alt" size={28} color="black"  />
              <Text ml={5} fontSize={18}>Nueva dirección</Text>
            </HStack>
          </TouchableOpacity>
        </Center>
        {/**DIVIDER */}
        <Center>
          <Divider thickness={1} w="70%" mt={4} bg="#236DB7" />
        </Center>
        {/**DIRECCION SELECCIONADA */}
        <Center mt={5}>
          <HStack w="80%" >
            <Center p={3} w="15%">
              <FontAwesome5 name="check" size={24} color="#32C882" />
            </Center>
            <Center w="65%">
              <TouchableOpacity>
                <Text fontSize={18} fontWeight={600} color="#32C882">Av Siempre Viva 123</Text>
              </TouchableOpacity>
            </Center>
            <Center p={3} w="15%">
              <TouchableOpacity>
              <Entypo name="dots-three-horizontal" size={24} color="#32C882" />
              </TouchableOpacity>
            </Center>
          </HStack>
        </Center>
        <Center>
          <Divider thickness={1} w="70%" mt={4} bg="#236DB7" />
        </Center>

                {/**DIRECCION NO SELECCIONADA */}
        <Center mt={6}>
          <HStack w="80%" >
            <Center p={3} w="15%">
              <FontAwesome5 name="map-pin" size={24} color="black" />
            </Center>
            <Center w="65%">
              <TouchableOpacity>
                <Text fontSize={18} fontWeight={600} color="#000000">Av Pie de la cuesta 321</Text>
              </TouchableOpacity>
            </Center>
            <Center p={3} w="15%">
              <TouchableOpacity>
                <Entypo name="dots-three-horizontal" size={24} color="#000000" />
              </TouchableOpacity>
            </Center>
          </HStack>
        </Center>
        <Center>
          <Divider thickness={1} w="70%" mt={4} bg="#236DB7" />
        </Center>
        




      </View>
      <Footer/>
    </NativeBaseProvider>
  )
}
export default MisDirecciones;