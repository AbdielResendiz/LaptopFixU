import React, {useState, useEffect} from 'react';
//import {  View } from 'react-native';
import { Box, HStack, Center, Text, NativeBaseProvider, ScrollView, Image, Divider } from "native-base";
  import { FontAwesome5 } from '@expo/vector-icons'; 
  //componentes y config
import Footer from "../components/Footer";
import URL from "../private/api/URL";
import config from "../private/api/config";
import fetchPost from "../private/api/fetchPost";
import Gradiente from '../components/Gradiente';
import { TouchableOpacity, Alert } from 'react-native';


const DetalleServicio = (props) => {
  const idServicio = props.route.params.idServicio;
  console.log("id Servicio UWU: ", idServicio);
  const idCarrito = props.route.params;
  const idUser = props.route.params

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

     const onClickAddCart = (idSer) =>{
      Alert.alert('Servicio seleccionado', `Seleccionaste el servicio con id: ${idSer}`, [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]);

     }






  return (
    <NativeBaseProvider config={config}>
      <Box h="91%"  bg="#fff">
        <Gradiente/>
      
        {/**IMAGEN DE SERVICIO */}
        <Center horizontal={true} margin={3}  >
          <Image 
            source={{uri:servicio.image_url}}
              alt="Alternate Text" 
            size="2xl" rounded={"md"} resizeMode="contain" marginRight={3}/>
        </Center>
          {/**DETALLE DE SERVICIO */}
          
            <Box background={"white"} mx={3}  pl={5}>
              <HStack>
                <Text fontSize={18} > Nombre del servicio: </Text>
                <Text fontSize={18} fontWeight={"bold"} color={"#236DB7"}>{servicio.nombreS}</Text>
              </HStack>
              <HStack>
                <Center>
                  <HStack>
                    <Text fontSize={18} > Precio: </Text>
                    <Text fontSize={18} fontWeight={"bold"} color={"#236DB7"}>${servicio.PrecioS}</Text>
                  </HStack>

                </Center>
                
                 {/**BOTON CARRITO */}
                <Center mx={10} mt={3} >
                  <Box  bg="#236DB7" rounded={50} shadow={4}>
                    <TouchableOpacity onPress={()=>onClickAddCart(servicio.idS)}>
                      <Center py={2} px={2}>
                        <HStack>
                          <Center>
                            <FontAwesome5 name="cart-plus" size={24} color="white" />
                          </Center>
                          <Center>
                            <Text color="#fff"  bold fontSize={"md"} ml={2} maxW={90} lineHeight={20}> Agregar al carrito</Text>
                          </Center>
                        </HStack>
                      </Center>
                    </TouchableOpacity>
                  </Box>
                </Center>
                
                
              </HStack>
             
              
            </Box>
            <Center >   <Divider thickness={1} bg="#000" w="50%"/> </Center>
            <ScrollView mt={-4}>
            {/**DESCRIPCION DE SERVICIO */}
           
          
              <Text bold fontSize={18} mx={3} pl={4} textAlign="justify" > Descripción: <Text  fontWeight={400}  >{servicio.desS}</Text></Text>
              <Center >   <Divider thickness={2} bg="#000" w="50%"/> </Center>
           

        </ScrollView>

      </Box>

      

      <Footer/>
    </NativeBaseProvider>
  )
}
export default DetalleServicio;