import React, {useState, useEffect} from 'react';
//import {  View } from 'react-native';
import { Box, Heading, VStack, FormControl, Input, Link, 
  Button, HStack, Center, Text, NativeBaseProvider, ScrollView, View, Image, Divider } from "native-base";
  import { FontAwesome5, MaterialIcons } from '@expo/vector-icons'; 
  //componentes y config
import Footer from "../components/Footer";
import URL from "../private/api/URL";
import config from "../private/api/config";
import fetchPost from "../private/api/fetchPost";
import Gradiente from '../components/Gradiente';
import { TouchableOpacity } from 'react-native';

const DetalleServicio = (props) => {
  const idServicio = props.route.params.idServicio;
  console.log("id Servicio UWU: ", idServicio);

  const BASE_URL = URL.BASE_URL;


   //INICIA Ver TECNICOS
   const [ servicio, setServicio ] = useState([]);

   const dataServicio = new FormData();
        dataServicio.append("idS", idServicio);

   const getDatos = async() => {
       const url = `${BASE_URL}api/servicios/detalle_servicio`
       const options = {
         method:'POST',
         body: dataServicio
       };
       const res = await fetchPost(url, options);
       setServicio(res.data[0]);
     
       console.log("detalleServicio", servicio.nombreS)
   }
 
   useEffect(() => {
       getDatos();
     }, []);




  return (
    <NativeBaseProvider config={config}>
      <Box h="91%"  bg="#fff">
        <Gradiente/>
      
        {/**IMAGEN DE SERVICIO */}
        <Center horizontal={true} margin={3}  >
          <Image 
            source={{uri:servicio.image_url}}
              alt="Alternate Text" 
            size="2xl" rounded={"md"}  marginRight={3}/>
        </Center>
          {/**DETALLE DE SERVICIO */}
          <ScrollView >
            <Box background={"white"} mx={3}  pl={5}>
              <HStack>
                <Text fontSize={18} > Nombre del servicio: </Text>
                <Text fontSize={18} fontWeight={"bold"} color={"#236DB7"}>{servicio.nombreS}</Text>
              </HStack>
              <HStack>
                <Text fontSize={18} > Categoría: </Text>
                <Text fontSize={18} fontWeight={"bold"} color={"#236DB7"}>{servicio.nombreCS}</Text>
              </HStack>
              <HStack>
                <Text fontSize={18} > Precio: </Text>
                <Text fontSize={18} fontWeight={"bold"} color={"#236DB7"}>${servicio.PrecioS}</Text>
              </HStack>
              
            </Box>
            {/**DESCRIPCION DE SERVICIO */}
            <Center >   <Divider thickness={2} bg="#000" w="50%"/> </Center>
          
              <Text bold fontSize={18} mx={3} pl={4}> Descripción: <Text  fontWeight={400} >{servicio.desS}</Text></Text>
              <Center >   <Divider thickness={2} bg="#000" w="50%"/> </Center>
            {/**BOTON CARRITO */}
            <Center >
              <Box  bg="#236DB7" rounded={50}>
                <TouchableOpacity>
                  <Center py={2} px={4}>
                    <HStack>
                      <Center>
                        <FontAwesome5 name="cart-plus" size={30} color="white" />
                      </Center>
                      
                      <Center>
                        <Text color="#fff" my={2} bold fontSize={"lg"} ml={2}> Agregar al carrito</Text>
                      </Center>
                      

                    </HStack>
                    
                  </Center>
                </TouchableOpacity>
              </Box>
            </Center>

        </ScrollView>

      </Box>

      

      <Footer/>
    </NativeBaseProvider>
  )
}
export default DetalleServicio;