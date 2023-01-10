import React from 'react';
import {  TouchableOpacity, View } from 'react-native';
import { FontAwesome5, MaterialCommunityIcons, Fontisto } from '@expo/vector-icons'; 
import { Box, NativeBaseProvider, Center, HStack, VStack, Text, Divider } from 'native-base';

const Contacto = () => {
  return (
    <NativeBaseProvider>
      {/**Inicia caja con ubicación y email */}
      <Box mx={4} rounded={20} bg="white" shadow={4} mt={5} >
        {/**Inicia Ubicación */}
       <HStack my={3}>
        <Center mx={3}>
          <FontAwesome5 name="map-marker-alt" size={34} color="#EA4335" />
        </Center>
        <VStack ml={2}>
          <Text fontWeight={900} letterSpacing={0.6} fontSize={18}>Ubicación:</Text>
          <Text fontWeight={500} letterSpacing={0.6} fontSize={17}>Av Paseo de la Constitución #100</Text>
          <Text fontWeight={500} letterSpacing={0.6} fontSize={17}>Col. Villas del Parque</Text>
          <Text fontWeight={500} letterSpacing={0.6} fontSize={17}>Querétaro, México.</Text>
        </VStack>
       </HStack>
       {/**Fin Ubicación */}
        <Divider/>

        {/**inicia Correo electrónico */}
       <HStack my={2}>
        <Center mx={3}>
          <MaterialCommunityIcons name="email-outline" size={34} color="black" />
        </Center>
        <VStack >
          <Text fontWeight={900} letterSpacing={0.6} fontSize={18}>Correo electrónico:</Text>
          <VStack>
            <Text fontWeight={500} letterSpacing={0.6} fontSize={16}>contacto@impactosdigitales.com</Text>
            <Text fontWeight={500} letterSpacing={0.6} fontSize={16}>appsmoviles@impactosdigitales.com</Text>
          </VStack>
         
        </VStack>
       </HStack>
       {/**Fin correo e */}

      </Box>
      {/**Fin caja con ubicación y email */}

      <Center>
        <Text mt={9} mb={3} fontWeight={900} letterSpacing={0.7} fontSize={18}>
          Nuestras redes sociales:
        </Text>
      </Center>

       <HStack  mx={2} my={3}>
        {/**PRIMERA COLUMNA */}
        <VStack mr={2}>
          {/**FACEBOOK botton */}
          <TouchableOpacity>
            <HStack mb={3}  rounded={10}  bg="white" p={2} shadow={7}>
              <Center p={2} mr={1}>
                <Fontisto name="facebook" size={24} color="#006AFF" />
              </Center>
              <VStack>
                <Text fontWeight={"bold"}>Facebook</Text>
                <Text>@impactosdigitales</Text>
              </VStack>
            </HStack>
          </TouchableOpacity>
          
          
        {/**Instagram botton */}
          <TouchableOpacity>
            <HStack bg="white" p={2} rounded={10} shadow={7}>
              <Center p={2} mr={1}>
                <FontAwesome5 name="instagram" size={24} color="#C13584" />
              </Center>
              <VStack>
                <Text fontWeight={"bold"}>Instagram</Text>
                <Text>@impactosdigitales</Text>
              </VStack>
            </HStack>
          </TouchableOpacity>

        </VStack>
        
      {/**SEGUNDA COLUMNA */}
        <VStack >
          {/**WHATSAPP BOTON */}
          <TouchableOpacity>
            <HStack mb={3} bg="white" p={2} rounded={10} shadow={7}>
              <Center p={2} mr={1}>
                <Fontisto name="whatsapp" size={24} color="#25D366" />
              </Center>
              <VStack>
                <Text fontWeight={"bold"}>Whatsapp</Text>
                <Text>442 219 8567</Text>
              </VStack>
            </HStack>
          </TouchableOpacity>
          {/**LINKEDIN BOTON */}
          <TouchableOpacity>
            <HStack bg="white" p={2} rounded={10} shadow={7}>
              <Center p={2} mr={1}>
                <FontAwesome5 name="linkedin-in" size={24} color="#0077B5" />
              </Center>
              <VStack>
                <Text fontWeight={"bold"}>LinkedIn</Text>
                <Text>@impactosdigitales</Text>
              </VStack>
            </HStack>
          </TouchableOpacity>
          
        </VStack>
       </HStack>

    </NativeBaseProvider>
  )
}
export default Contacto;