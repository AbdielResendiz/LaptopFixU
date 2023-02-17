import React, {useState, useEffect} from 'react';
//import {  View } from 'react-native';
import { Box, HStack, Center, Text, NativeBaseProvider, ScrollView, Image, Button} from "native-base";
  import { Entypo, AntDesign } from '@expo/vector-icons'; 
  //componentes y config
import Footer from "../components/Footer";
import URL from "../private/api/URL";
import config from "../private/api/config";
import fetchPost from "../private/api/fetchPost";
import styles from '../styles/styles';
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
      <Center horizontal={true} margin={3}   >
        <Image 
          source={{uri:servicio.image_url}}
            alt="Alternate Text" 
          size={40}  resizeMode="contain" marginRight={3}/>
      </Center>
        {/**DETALLE DE SERVICIO */}
        
          <Box  mx={3}  pl={5} mt={8}>
            
          <Center ml={"2%"} >
                <HStack w="98%">
                  <Text fontSize={16} style={styles.Texts} >{servicio.nombreS}</Text>
                  <Text fontSize={16}  ml={"30%"} style={{fontFamily: "CircularApp"}}> Precio: </Text>
                  <Text fontSize={16} style={styles.Texts} color={"#236DB7"}>${servicio.PrecioS}</Text>
                </HStack>

            </Center>
          </Box>
          {/**Cantidad para carrito */}
          
            <HStack ml={"10%"} my={5}>
              <Button onPress={decrementCount} bg="#E6E6E6" borderRadius={100} py={1} px={1}>
                <Entypo name="minus" size={12} color="#B4B4B4" />
              </Button>
              <Center>
                <Text fontSize={12} mx={3} bold>{count}</Text>
              </Center>
            
              <Button onPress={incrementCount} style={styles.Color} borderRadius={100} py={1} px={1}>
                <Entypo name="plus" size={12} color="white"  />
              </Button>
            </HStack>
          

          <Text ml={"10%"} style={styles.Texts} my={3} underline color="#236DB7" fontSize={12} >Descripción</Text>
          {/**DESCRIPCION DE SERVICIO */}
          <Center borderColor={"#555555"} borderWidth={1} mx={"10%"} h="20%" borderRadius={10}>
            <ScrollView>
              <Text  fontSize={12} mx={3} px={3} py={2} textAlign="justify" color={"#888888"} style={{fontFamily: "CircularApp"}}> {servicio.desS}</Text>
            </ScrollView>
            
          </Center>
         
                {/**BOTON CARRITO */}
                <Center mx={10} mt={3} >
                <Box  style={styles.Color} rounded={10} shadow={4} w={210}>
                  <TouchableOpacity onPress={()=>botonCarrito()}>
                    <Center py={2} px={2}>
                      <HStack>
                        <Center>
                        <AntDesign name="shoppingcart" size={16} color="white" />
                        </Center>
                        <Center>
                          <Text color="#fff"  fontSize={"sm"} mx={2} maxW={150} lineHeight={20} style={{fontFamily: "CircularApp"}}> Añadir a Carrito</Text>
                        </Center>
                      </HStack>
                    </Center>
                  </TouchableOpacity>
                </Box>
              </Center>

                {/**BOTON contratacion */}
                <Center mx={10} mt={1} >
                <Box  bg="#000" rounded={10} shadow={4} w={210}>
                  <TouchableOpacity onPress={()=>botonCarrito()}>
                    <Center py={2} px={2}>
                      <HStack>
                        <Center>
                          <Text color="#fff"   fontSize={"sm"} mx={2} maxW={150} lineHeight={20} style={{fontFamily: "CircularApp"}}> Contratación</Text>
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