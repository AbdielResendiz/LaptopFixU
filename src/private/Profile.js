import React from 'react';
import { FontAwesome5, FontAwesome, Ionicons, AntDesign } from '@expo/vector-icons'; 
import { NativeBaseProvider, ZStack, Box, VStack, Button, Text, Center, HStack, Container, ScrollView } from 'native-base';
import Footer from '../components/Footer';
import { TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const Profile = () => {





  return (
    <NativeBaseProvider>
      {/** Inicia Fondo azul, icono perfil y circulo */}
      <ScrollView>
      
      {/** Termina Fondo azul, icono perfil y circulo */}
      {/** Inicia nombre y correo  */}
      <VStack    mx="10%">
        

        <Box >
          {/**BOTON mi información */}
          <TouchableOpacity  >
          <HStack  bg="white" rounded={10} p={3}>
            <Center mx={3} bg="#236DB7" p={2} rounded={5}>
              <Ionicons name="person" size={24} color="white" />
            </Center >
            <Center>
              <Text fontSize={18} mr="28%" mt={1}>Mi información </Text>
            </Center>
            
            <Center alignContent={"flex-end"}>
              <FontAwesome name="angle-right" size={24} color="black" />
            </Center>
          </HStack>
          </TouchableOpacity>

          {/**BOTON MIS ORDENES */}
          <TouchableOpacity >
          <HStack mt={2} bg="white" rounded={10} p={3}>
            
            <Center mx={3} bg="#236DB7" p={2} rounded={5}>
              <FontAwesome5 name="running" size={28} color="white" />
            </Center >

            
            <Center>
              <Text fontSize={18} mr="38%">Mis ordenes </Text>
            </Center>
            
            <Center alignContent={"flex-end"}>
              <FontAwesome name="angle-right" size={24} color="black" />
            </Center>
          </HStack>
          </TouchableOpacity>

          {/**Boton MIS DIRECCIONES */}
          <TouchableOpacity >
          <HStack mt={2} bg="white" rounded={10} p={3}>
            <Center mx={3} bg="#236DB7" p={2} rounded={5}>
              <FontAwesome5 name="map-marker-alt" size={28} color="white" />
            </Center >
            <Center>
              <Text fontSize={18} mr="28%">Mis direcciones </Text>
            </Center>
            
            <Center alignContent={"flex-end"}>
              <FontAwesome name="angle-right" size={24} color="black" />
            </Center>
          </HStack>
          </TouchableOpacity>

          {/**BOTON MAS APPS DE ESTA FIRMA */}
          <TouchableOpacity >
          <HStack mt={2} bg="white" rounded={10} p={3}>
            <Center mx={3} bg="#236DB7" px={2} my={1} rounded={5}>
              <AntDesign name="appstore-o" size={28} color="white" />
            </Center >
            <VStack mr={10}>
              <Text fontSize={18} >Más APPS de esta </Text>
              <Text fontSize={18} fontWeight={"bold"}>Firma Queretana</Text>

            </VStack>
               
            <Center alignContent={"flex-end"} ml={3}>
              <FontAwesome name="angle-right" size={24} color="black" />
            </Center>
          </HStack>
          </TouchableOpacity>


        </Box>

        {/**Boton Cerrar Sesion */}
          <TouchableOpacity >
          <HStack mt={10} bg="white" rounded={10} p={3}>
            <Center mx={3} bg="#236DB7" p={2} rounded={5}>
              <FontAwesome name="power-off" size={24} color="white" />
            </Center >
            <Center>
              <Text fontSize={18} mr="35%">Cerrar sesión </Text>
            </Center>
            
            <Center alignContent={"flex-end"}>
              <FontAwesome name="angle-right" size={24} color="black" />
            </Center>
          </HStack>
          </TouchableOpacity>

        </VStack>
        </ScrollView>
    </NativeBaseProvider>
  )
}
export default Profile;