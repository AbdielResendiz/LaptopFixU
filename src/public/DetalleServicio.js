import React, {useState, useEffect} from 'react';
//import {  View } from 'react-native';
import { Box, HStack, Center, Text, NativeBaseProvider, ScrollView, Image, Button} from "native-base";
  import { AntDesign } from '@expo/vector-icons'; 
  //componentes y config
import Footer from "../components/Footer";
import URL from "../private/api/URL";
import config from "../private/api/config";
import fetchPost from "../private/api/fetchPost";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TouchableOpacity, Alert } from 'react-native';

const DetalleServicio = (props) => {
  const idServicio = props.route.params.idServicio;
  console.log("id Servicio UWU: ", idServicio);
  const idCarrito = props.route.params.idC;
  const idUser = props.route.params.idUser;
  console.log("idUser detalle", idUser);
  console.log("idServicio detalle", idServicio);
  console.log("idCarrito detalle", idCarrito);

//inicia funciones para contar
  const [ count, setCount ] = useState(1);
  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  //fin funciones conteo


  


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

     const botonCarrito = () =>{
      if (isNaN(idCarrito)){
        Alert.alert('Favor de iniciar sesión', `Para agregar a tu carrito, primero inicia sesión`, [
          { 
            text: 'Cancelar',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
            cancelable: true
          },
          {text: 'Iniciar Sesión', onPress: () =>props.navigation.navigate("Login")},
        ]);
      }else{
        Alert.alert(`Servicio seleccionado: ${servicio.nombreS}`, 
         `¿Deseas agregar ${count} servicio de ${servicio.nombreS} al carrito?`, [
          {
            text: 'Cancelar',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {text: 'Agregar', onPress: () => console.log('OK Pressed')},
        ]);
        console.log("si hay carrito")
      }




     }

  return (
    <NativeBaseProvider config={config}>
      <Box h="91%"  bg="#fff" w="100%">
        
        <ScrollView >
      
        {/**IMAGEN DE SERVICIO */}
        <Center horizontal={true} margin={3} mt={3}  >
          <Image 
            source={{uri:servicio.image_url}}
              alt="Alternate Text" 
            size="xl"  resizeMode="contain" marginRight={3}/>
        </Center>
          {/**DETALLE DE SERVICIO */}
          
            <Box  mx={3}  pl={5}>
              
            <Center>
                  <HStack w="98%">
                    <Text fontSize={18} bold>{servicio.nombreS}</Text>
                    <Text fontSize={18} bold ml={5}> Precio: </Text>
                    <Text fontSize={18} fontWeight={"bold"} color={"#236DB7"}>${servicio.PrecioS}</Text>
                  </HStack>

              </Center>
            </Box>
            {/**Cantidad para carrito */}
            <Center mt={4}>
              <HStack>
              <Button onPress={decrementCount} bg="#236DB7" borderRadius={100} py={1} px={2}>
              <AntDesign name="minus" size={18} color="white" />
              </Button>
              <Center>
                <Text fontSize={20} mx={3}>{count}</Text>
              </Center>
              
              <Button onPress={incrementCount} bg="#236DB7" borderRadius={100} py={1} px={2}>
              <AntDesign name="plus" size={18} color="white"  />
              </Button>

              </HStack>

            </Center>

            <Text ml={4} bold my={3} underline color="#236DB7" >Descripción</Text>
            {/**DESCRIPCION DE SERVICIO */}
            <Center borderColor={"#000000"} borderWidth={1} mx={3} h="40%">
              <ScrollView>
                <Text  fontSize={14} mx={3} px={3} py={2} textAlign="justify" color={"#888888"}> {servicio.desS}</Text>
              </ScrollView>
              
            </Center>
           
                  {/**BOTON CARRITO */}
                  <Center mx={10} mt={3} >
                  <Box  bg="#236DB7" rounded={10} shadow={4} w={210}>
                    <TouchableOpacity onPress={()=>botonCarrito()}>
                      <Center py={2} px={2}>
                        <HStack>
                          <Center>
                          <AntDesign name="shoppingcart" size={24} color="white" />
                          </Center>
                          <Center>
                            <Text color="#fff"  bold fontSize={"md"} mx={2} maxW={150} lineHeight={20}> Añadir al carrito</Text>
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