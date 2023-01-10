import React, { useState, useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import { FontAwesome5, AntDesign, Ionicons } from '@expo/vector-icons'; 
import { Center, HStack, NativeBaseProvider, Text, VStack } from 'native-base';
import Profile from '../private/Profile';
import AcercaID from './AcercaID';
import Contacto from './Contacto';
import InfoApp from './InfoApps';

const SobreNosotros = () => {
  const [menu, setMenu] = useState(0);
  console.log("menu:",menu);

  const VistaMenu = () => {
    switch(menu){
      case 0:
        return <Profile/>
      case 1:
        return <AcercaID/>
      case 2:
        return <Contacto/>
      case 3:
        return <InfoApp/>
        
    }
  }

  return (
    <NativeBaseProvider>
      {/**Saludo inicial con nombre */}
      <Text m={3} fontSize={20}>Hola</Text>
      <Text ml={3} fontWeight="bold" fontSize={26}>Carlos Abdiel Reséndiz</Text>

      {/**inicia MENU CON 4 OPCIONES */}
      <HStack m={4} shadow="7" bg="white" rounded={20} p={4}>
        <VStack mr={4}>
          {/**BOTÓN MI PERFIL */}
          <TouchableOpacity onPress={()=>{setMenu(0)}}>
            <Center bg="#E5E5E5" p={3} rounded={20}>
              <FontAwesome5 name="user" size={30} color="black" />
            </Center>
            <Center>
              <Text fontSize={15}>Mi perfil</Text>
            </Center>
          </TouchableOpacity>
        </VStack>
        {/**BOTÓN ACERCA DE ID */}
        <VStack mr={4}>
          <TouchableOpacity onPress={()=>{setMenu(1)}}>
            <Center bg="#E5E5E5" py={2} mx={2} rounded={20}>
              <Ionicons name="information-circle-outline" size={38} color="black" />
            </Center>
            <Center>
              <Text>Acerca de ID</Text>
            </Center>
          </TouchableOpacity>
        </VStack>

        {/**BOTÓN CONTÁCTANOS */}
        <VStack mr={4}>
          <TouchableOpacity onPress={()=>{setMenu(2)}}>
            <Center  bg="#E5E5E5" p={3}  mx={2} rounded={20}>
            <AntDesign name="contacts" size={34} color="black" />
            </Center>
            <Center>
              <Text>Contáctanos</Text>
            </Center>
          </TouchableOpacity>
        </VStack>

        {/**BOTÓN MÁS APPS */}
        <VStack>
          <TouchableOpacity onPress={()=>{setMenu(3)}}>
            <Center bg="#E5E5E5" p={3} rounded={20}>
              <AntDesign name="appstore-o" size={34} color="black" />
            </Center>
            <Center>
              <VStack>
                <Text>Más apps </Text>
              </VStack>  
            </Center>
          </TouchableOpacity>

        </VStack>
      </HStack>
      {/**FIN DE MENU */}

      {/**VISTA CONDICIONAL SEGUN LA OPCION SELECCIONADA */}
      



      <VistaMenu/>
      
    </NativeBaseProvider>
  )
}
export default SobreNosotros;