import React from 'react';
import {  TouchableOpacity, View } from 'react-native';
import { FontAwesome5, MaterialCommunityIcons, Fontisto } from '@expo/vector-icons'; 
import { Box, NativeBaseProvider, Center, HStack, VStack, Text, Divider } from 'native-base';

const Contacto = () => {
  return (
    <NativeBaseProvider>
      <Box mx={9} rounded={20} bg="white" shadow={4}>
       <HStack my={3}>
        <Center mx={3}>
          <FontAwesome5 name="map-marker-alt" size={28} color="black" />
        </Center>
        <VStack >
          <Text fontWeight={"bold"}>Ubicación:</Text>
          <Text>Av Paseo de la Constitución No. 100 </Text>
          <Text>Col. Villas del Parque Querétaro, México.</Text>
        </VStack>
       </HStack>
        <Divider/>

       <HStack my={1}>
        <Center mx={3}>
          <MaterialCommunityIcons name="email-outline" size={24} color="black" />
        </Center>
        <VStack >
          <Text fontWeight={"bold"}>Correo electrónico:</Text>
          <VStack>
            <Text>contacto@impactosdigitales.com</Text>
            <Text>appsmoviles@impactosdigitales.com</Text>
          </VStack>
         
        </VStack>
       </HStack>
      </Box>

       <HStack  mx={7} my={3}>
        <VStack>
          <HStack mb={5}  rounded={10} m={3}>
            <Center>
              <Fontisto name="facebook" size={24} color="#0076ED" />
            </Center>
            <Text>Facebook</Text>
          </HStack>
          

          
          <HStack>
            <Center>
              <FontAwesome5 name="instagram" size={24} color="black" />
            </Center>
            <Text>Instagram</Text>
          </HStack>
          

        </VStack>
        

        <VStack ml={10}>
        <HStack mb={5} >
            <Center >
              <Fontisto name="whatsapp" size={24} color="#009D79" />
            </Center>
            <Text>WhatsApp</Text>
          </HStack>
          <HStack>
            <Center>
              <FontAwesome5 name="linkedin-in" size={24} color="black" />
            </Center>
            <Text>LinkedIn</Text>
          </HStack>
          
        </VStack>
       </HStack>
      
        
       

    </NativeBaseProvider>
  )
}
export default Contacto;