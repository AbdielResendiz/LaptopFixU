import React from 'react';
import {  TouchableOpacity, Alert} from 'react-native';
import { NativeBaseProvider, ScrollView, Text, Box, HStack, Center, VStack, View } from 'native-base';
import { MaterialCommunityIcons, Entypo } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';

const MisPedidos = () => {
  const navigation =useNavigation();

  const Detalle = (id)=>{ 
    Alert.alert(
      "Detalle de orden #0192",
      "Tecnico: Elmer Homero \nFecha de orden: 06/01/2023\nStatus:En proceso",
      [
        {text:"volver"}
      ]
    )
  }

  return (
   <NativeBaseProvider>
    

    
    {/**Menu de categorias pedidos */}
    <HStack  bg={"#BDC5C8"} >
      <TouchableOpacity>
        <Center  bg="white" h={45}  mt={3} ml={3} roundedTop={15} px={1}>
          <Text fontSize={18}>Todos</Text>
          <Center bg={"#236DB7"} h={1} w={"100%"}></Center>
        </Center>
      </TouchableOpacity>

      <TouchableOpacity>
        <Center bg="white" h={45}  mt={3} ml={2} roundedTop={15} px={1}>
          <Text fontSize={16}>Completados</Text>
          <Center bg={"#00AF63"} h={1} w={"100%"}></Center>
        </Center>
      </TouchableOpacity>

      <TouchableOpacity>
        <Center bg="white" h={45}  mt={3} ml={2} roundedTop={15} px={1}>
          <Text fontSize={16}>En proceso</Text>
          <Center bg={"#FFAA32"} h={1} w={"100%"}></Center>
        </Center>
      </TouchableOpacity>

      <TouchableOpacity>
        <Center bg="white" h={45}  mt={3} ml={2} roundedTop={15} px={1}>
          <Text fontSize={16}>Cancelados</Text>
          <Center bg={"#FF2832"} h={1} w={"100%"}></Center>
        </Center>
      </TouchableOpacity>
      
      </HStack>

      {/**SCROLL de pedidos */}
      <ScrollView bg="#BDC5C8">
        <Box  bg={"white"} h={104} w="94%" mx={"3%"} mt={3} rounded={10}>
             {/**CARD COMPLETADO */}
          <HStack>
            <Center w={100} m={2} bg="#00AF63" p={3} rounded={30}>
              <MaterialCommunityIcons name="run-fast" size={65} color="white" />
            </Center>
            <VStack>
              <Text  ml={1} fontWeight="bold" fontSize={18} mt={2}>Orden ID #000986 </Text>
              <Text ml={10}>Completada</Text>
            </VStack>
            <TouchableOpacity onPress={()=>{navigation.navigate("DetalleOrden")}}>
              <Center ml={10} mt={5}>
              <Entypo name="popup" size={44} color="black" />
              </Center>
            </TouchableOpacity>
          </HStack>
        </Box>

           {/**CARD en proceso */}
        <Box  bg={"white"} h={104} w="94%" mx={"3%"} mt={3} rounded={10}>
          <HStack>
            <Center w={100} m={2} bg="#FFEECE" p={3} rounded={30}>
              <MaterialCommunityIcons name="run-fast" size={65} color="#FFAA32" />
            </Center>
            <VStack>
              <Text  ml={1} fontWeight="bold" fontSize={18} mt={2}>Orden ID #000986 </Text>
              <Text ml={10}>En proceso</Text>
            </VStack>
            <TouchableOpacity onPress={()=>{navigation.navigate("DetalleOrden")}}>
              <Center ml={10} mt={5}>
              <Entypo name="popup" size={44} color="black" />
              </Center>
            </TouchableOpacity>
          </HStack>
        </Box>

        {/**CARD cancelado */}
        <Box  bg={"white"} h={104} w="94%" mx={"3%"} mt={3} rounded={10} >
          <HStack>
            <Center w={100} m={2} bg="#FF2832" p={3} rounded={30}>
              <MaterialCommunityIcons name="run-fast" size={65} color="white" />
            </Center>
            <VStack>
              <Text  ml={1} fontWeight="bold" fontSize={18} mt={2}>Orden ID #000986 </Text>
              <Text ml={10}>Cancelada</Text>
            </VStack>
            <TouchableOpacity onPress={()=>{navigation.navigate("DetalleOrden")}}>
              <Center ml={10} mt={5}>
              <Entypo name="popup" size={44} color="black" />
              </Center>
            </TouchableOpacity>
          </HStack>
        </Box>
        
      
      </ScrollView>
    
      
    
   </NativeBaseProvider>
  )
}
export default MisPedidos;