import React from 'react';
//import {  View } from 'react-native';
import { Box, VStack, HStack, Center, Text,
   NativeBaseProvider, ScrollView, Image } from "native-base";
  import { FontAwesome5, MaterialIcons } from '@expo/vector-icons'; 
  import styles from '../styles/styles';

import Footer from "../components/Footer"

const Detalle = () => {
  return (
    <NativeBaseProvider>
      <ScrollView backgroundColor={"#BDC5C8"} h={"100%"}>
        <ScrollView horizontal={true} margin={3}  >
          <Image 
            source={require( "../img/descarga.png")
            } alt="Alternate Text" 
            size="2xl" rounded={"lg"}  marginRight={3}/>
            <Image 
            source={require( "../img/win10.png")
            } alt="Alternate Text" 
            size="2xl" rounded={"lg"}  marginRight={3}/>
            <Image 
            source={require( "../img/descarga.png")
            } alt="Alternate Text" 
            size="2xl" rounded={"lg"}  marginRight={3}/>
            
        </ScrollView>

        <Box background={"white"} margin={3} rounded={10} paddingLeft={5}>
          <HStack>
            <Box w={"70%"}>
              <Text fontSize={18} fontWeight={"bold"} color={"#236DB7"}>Servicio</Text>
              <Text fontSize={20} fontWeight={"bold"}>Formateo de PC</Text>
              <Text fontSize={20} fontWeight={"bold"}>$300.00</Text>
            </Box>
            <Center backgroundColor={"#236DB7"} w={"30%"} roundedRight={10}>
              <FontAwesome5 name="cart-plus" size={44} color="white" />
            </Center>
          </HStack>
          
        </Box>
        <Center background={"white"} margin={5} padding={3} rounded={10}>
          <Text fontSize={16}>
          <Text fontWeight={"bold"}>Descripción: </Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
        </Center>

        <Box  marginLeft={5} padding={1} rounded={10}>
          <HStack>
            <Text fontWeight={"bold"}>Servicios{"\n"}relacionados</Text>
            <Center marginLeft={"45%"}>
              <HStack>
                <Text bold italic color={"#236DB7"}>Mostrar todos</Text>
                <MaterialIcons name="play-arrow" size={24} color="#236DB7"  />
              </HStack>
            </Center>
          </HStack>
        </Box>

        <ScrollView horizontal={true} margin={3}  >
          <VStack>
          <Image 
            source={require( "../img/descarga.png")
            } alt="Alternate Text" 
            size="xl" rounded={"lg"}  marginRight={3}/>
            <Center>
              <Text>Mantenimiento</Text>
            </Center>
            <Center>
              <Text>$400.00</Text>
            </Center>
          </VStack>
          <VStack>
          <Image 
            source={require( "../img/win10.png")
            } alt="Alternate Text" 
            size="xl" rounded={"lg"}  marginRight={3}/>
            <Center>
              <Text>Mantenimiento</Text>
            </Center>
            <Center>
              <Text>$400.00</Text>
            </Center>
          </VStack>
          <VStack>
          <Image 
            source={require( "../img/descarga.png")
            } alt="Alternate Text" 
            size="xl" rounded={"lg"}  marginRight={3}/>
            <Center>
              <Text>Mantenimiento</Text>
            </Center>
            <Center>
              <Text>$400.00</Text>
            </Center>
          </VStack>
          <VStack>
          <Image 
            source={require( "../img/descarga.png")
            } alt="Alternate Text" 
            size="xl" rounded={"lg"}  marginRight={3}/>
            <Center>
              <Text>Mantenimiento</Text>
            </Center>
            <Center>
              <Text>$400.00</Text>
            </Center>
          </VStack>
          
            
            
        </ScrollView>

      </ScrollView>

   
    </NativeBaseProvider>
  )
}
export default Detalle;