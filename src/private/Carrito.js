import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {  Alert } from 'react-native';
import { NativeBaseProvider, VStack, Center, Box, 
    ScrollView ,  Image, Divider, Text, Button, HStack, View, Stack} from 'native-base';
import { useNavigation } from '@react-navigation/native';
import Footer from '../components/Footer';
import fetchPost from './api/fetchPost';
import URL from './api/URL';
import { Feather } from '@expo/vector-icons'; 
import SkeletonServicio from '../components/SkeletonServicio';
import styles from '../styles/styles';
      

const Carrito = () => {
    const navigation =useNavigation();

  const [ IdU, setIdU ] = useState(null);
  const [ IdC, setIdC ] = useState(null);
  const [ carrito, setCarrito ] = useState([]);
 

  const BASE_URL = URL.BASE_URL;
  

  async function fetchData() {
    try {
      
      await AsyncStorage.getItem("idUser").then(async (value) => {
        setIdU(parseInt(value)); })
      await AsyncStorage.getItem("idCarrito").then(async (value) => {
          setIdC(parseInt(value)); })
    } catch (error) {
      console.log("error catch carrito", error);
    }
    
  }
  
  //console.log("IdU", IdU);
  //console.log("IdCarrito", IdC)

  //OBTIENE DATOS DE LA BD. el nombre y apellido
  const getCarrito = async() => {
    const dataC = new FormData();
    dataC.append("idC",IdC)
    const url = `${BASE_URL}api/carrito/contenido_carrito`
    const options = {
      method:'POST',
      body: dataC
    };
    const res = await fetchPost(url, options);
     console.log("response fetch get carrito:", res.data);
     if (res.data != null){
       
      try{
        setCarrito(res.data);
        
       
       }catch(e){
        console.log("error getCarrito", e);
       }
      
     }else{
      
      console.log("No se ha iniciado sesión", res.data)
     }
  
  }

 
 useEffect(() => {
     fetchData();
     console.log("IdU", IdU);
     console.log("IdCarrito", IdC);
     
 
  
  }, [IdC]);


 const borrarBtn = (id, carrito, nombre)=>{
    
        Alert.alert(`¿Seguro que deseas eliminar el servicio `, `${nombre}?`, [
          { 
            text: 'Cancelar',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
            
          },
          {text: 'Eliminar', onPress: () =>borrarConfirm(id)},
        ]);
      
    
 }

 const borrarConfirm= async(id)=>{
    console.log("id borrar", id)
    const dataD = new FormData();
    dataD.append("idC",IdC);
    dataD.append("id",id);
    const url = `${BASE_URL}api/carrito/delete_item`
    const options = {
      method:'POST',
      body: dataD
    };
    const res = await fetchPost(url, options);
     console.log("response fetch delete carrito:", res);
     if (res===true){
        Alert.alert(`Se elimino con éxito`, `Si cambias de opinion, puedes agregarlo de nuevo más tarde`, [
            { 
              text: 'Entendido',
              onPress: () => console.log('entendido boton'),
              
              
            }
          ]);
     }else{
        Alert.alert(`Ocurrió un error`, `Intentalo de nuevo más tarde`, [
            { 
              text: 'Entendido',
              onPress: () => console.log('entendido boton'),
              
              
            }
          ]);
     }
     await getCarrito();
     
    
 }
 
 useEffect(() => {
 
    
    getCarrito();
 
 }, []);


  return (
    <NativeBaseProvider  >
        <View  h="91%" >
            <Center bg="#FFFFFF" mx={4} mt={5} mb={3} p={2} h={255} rounded={10} borderWidth={2} borderColor={"#BDC5C8"}>
                <ScrollView style={{paddingHorizontal:10}}  horizontal={false} w="100%" persistentScrollbar={true} >
                    {/**Item carrito ejemplo */}
                    {
                        (carrito===[]) ? 
                        (<SkeletonServicio/>) :
                        (
                            <Box>
                        {carrito.map( (item, index) =>{
                            return(
                                <Center key={index} h={100} marginBottom={1} bg="white" >
                                    <HStack>
                                        <Center w="40%">
                                        <Image 
                                        source={{uri:item.image_url}}
                                        alt={"imagen de servicio:"+item.servicio}
                                        size="md"   marginRight={3} resizeMode="contain" />
                                        </Center>
                                        <VStack w="60%">
                                            <Text style={styles.Texts} fontSize="lg" >
                                              {item.nombreS}
                                            </Text>
                                            
                                            <HStack>
                                                <VStack w="65%">
                                                    <Text style={styles.Texts} >{"Precio: $"+item.precioS}</Text>
                                                    <Text style={styles.Texts} >{"Cantidad: "+item.cantidad}</Text>
                                                </VStack>
                                                <Button onPress={()=>borrarBtn(item.id, IdC, item.nombreS)}
                                                 p={2} borderRadius={10} m={2}  justifyContent={"flex-end"} bg="#dc3545">
                                                    <Feather name="trash-2" size={20} color="white" />
                                                </Button>
                                            </HStack>
                                           
                                        </VStack>
                                    </HStack>
                                    <Divider thickness={3} bg="#0081C1"/>
                                </Center>
                         )
                        }
                    )}
                            </Box>
                        )
                    }
                     {/** fin Item carrito ejemplo */}
                    
                </ScrollView>
            </Center>
            <Center>
                <Text fontSize="28" style={styles.Texts} mb={2} >
                            Detalle de Compra
                </Text>

            </Center>
            <HStack   ml={10}>
              <VStack>
                <Text    fontSize="md" style={styles.Texts}>
                  SubTotal de ordenes
                </Text>
                <Divider/>
                <Text  fontSize="md" style={styles.Texts}>
                  Envío
                </Text>
                <Divider/>
                <Text  fontSize="md" style={styles.Texts}>
                      Total a pagar
                </Text>
                <Divider/>

              </VStack>

              <VStack>
                <Text  fontSize="md"  ml={20} style={styles.Texts} >
                  $9999.00
                </Text>
                <Divider/>
                <Text  fontSize="md"   ml={20}style={styles.Texts}>
                  $0.00
                </Text>
                <Divider/>
                <Text  ml={20} fontSize="md" style={styles.Texts}>
                  $9999.00
                </Text>
                <Divider/>
               

              </VStack>
            </HStack>

            
           

            
          <Center>
            <Button m={5} w="50%" onPress={ ()=> navigation.navigate("CheckAdress")} shadow={5} borderRadius={10}>
                    <Text color={"#FFFFFF"} fontSize="lg" style={styles.Texts}
                      letterSpacing={0.8}>
                      PAGAR
                    </Text>
                        
                </Button>

          </Center>

        </View>
        <Footer />
        
    </NativeBaseProvider>
  )
}
export default Carrito;