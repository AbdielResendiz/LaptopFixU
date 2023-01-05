import React from 'react';
import { FontAwesome5, FontAwesome, Ionicons } from '@expo/vector-icons'; 
import { NativeBaseProvider, ZStack, Box, VStack, Button, Text, Center, HStack, Container } from 'native-base';
import Footer from '../components/Footer';
import { TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const Profile2 = () => {
  {/**COPIA DE PERFIL, CON COLORES ORIGINALES, EL OTRO ES COPIA PARA ESTILO RAPPI */}
  return (
    <NativeBaseProvider>
      {/** Inicia Fondo azul, icono perfil y circulo */}
      <Box flex={1} bg="#BDC5C8" w="100%">
      <ZStack bg="">
        <Box    h={500} w="100%">
          <LinearGradient colors={["#132039",  "#236DB7", "#BDC5C8"]} style={{width:"100%", height:"100%"}}>
            
          </LinearGradient>
        </Box>
        <Center bg="#ffffff" h={130} w={150} mx="35%" mt={10} rounded={100}>
        <FontAwesome5 name="user-alt" size={74} color="black" />
        </Center>
      </ZStack>
      {/** Termina Fondo azul, icono perfil y circulo */}
      {/** Inicia nombre y correo  */}
      <VStack  mt={200}  mx="10%">
        <Center mb={3}>
          <Text fontSize={18} color="white" fontWeight={"bold"}>Carlos Abdiel Reséndiz Vargas</Text>
          <Text fontSize={16} color="white">cabdielr94@gmail.com</Text>
        </Center>

        <Box >
          {/**BOTON mi información */}
          <TouchableOpacity >
          <HStack  bg="white" rounded={10} p={3}>
            <Center mx={3} bg="#236DB7" p={2} rounded={5}>
              <Ionicons name="person" size={24} color="white" />
            </Center >
            <Text fontSize={18} mr="28%" mt={1}>Mi información </Text>
            <Center alignContent={"flex-end"}>
              <FontAwesome name="angle-right" size={24} color="black" />
            </Center>
          </HStack>
          </TouchableOpacity>

          {/**BOTON MIS ORDENES */}
          <TouchableOpacity >
          <HStack mt={3} bg="white" rounded={10} p={3}>
            
            <Center mx={3} bg="#236DB7" p={2} rounded={5}>
              <FontAwesome5 name="running" size={24} color="white" />
            </Center >

            
            
            <Text fontSize={18} mr="38%">Mis ordenes </Text>
            <Center alignContent={"flex-end"}>
              <FontAwesome name="angle-right" size={24} color="black" />
            </Center>
          </HStack>
          </TouchableOpacity>

          {/**Boton MIS DIRECCIONES */}
          <TouchableOpacity >
          <HStack mt={3} bg="white" rounded={10} p={3}>
            <Center mx={3} bg="#236DB7" p={2} rounded={5}>
              <FontAwesome5 name="map-marker-alt" size={24} color="white" />
            </Center >
            <Text fontSize={18} mr="28%">Mis direcciones </Text>
            <Center alignContent={"flex-end"}>
              <FontAwesome name="angle-right" size={24} color="black" />
            </Center>
          </HStack>
          </TouchableOpacity>
        </Box>

        {/**Boton Cerrar Sesion */}
          <TouchableOpacity >
          <HStack mt={20} bg="white" rounded={10} p={3}>
            <Center mx={3} bg="#236DB7" p={2} rounded={5}>
              <FontAwesome name="power-off" size={24} color="white" />
            </Center >
            <Text fontSize={18} mr="35%">Cerrar sesión </Text>
            <Center alignContent={"flex-end"}>
              <FontAwesome name="angle-right" size={24} color="black" />
            </Center>
          </HStack>
          </TouchableOpacity>

        </VStack>
        </Box>
    </NativeBaseProvider>
  )
}
export default Profile2;