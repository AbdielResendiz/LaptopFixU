import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NativeBaseProvider, VStack, Center, Box, 
    ScrollView ,  Image, Divider, Text, Button, HStack, View, Stack} from 'native-base';
import { useNavigation } from '@react-navigation/native';
import Footer from '../components/Footer';
import fetchPost from './api/fetchPost';
import URL from './api/URL';
import SkeletonServicio from '../components/SkeletonServicio';
      

const Carrito = () => {
    const navigation =useNavigation();

  const [ IdU, setIdU ] = useState(null);
  const [ IdC, setIdC ] = useState(null);
  const [ carrito, setCarrito ] = useState([]);
  console.log("Carrito0", carrito);

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
  
  console.log("IdU", IdU);
  console.log("IdCarrito", IdC)

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
    getCarrito();
  }, [IdC]);
 



  return (
    <NativeBaseProvider  >
        <View  h="91%" >
            <Center bg="#FFFFFF" mx={8} mt={5} mb={3} p={2} h={380} rounded={10} borderWidth={2} borderColor={"#BDC5C8"}>
                <ScrollView style={{paddingHorizontal:10}}  horizontal={false} w="100%">
                    {/**Item carrito ejemplo */}
                   

                    {
                        (carrito===[]) ? 
                        (<SkeletonServicio/>) :
                        (
                            <Box>
                        {carrito.map( (item, index) =>{
                            return(
                                <Center key={index} h={110} marginBottom={2} bg="white">
                                    <HStack>
                                        <Image 
                                        source={require( "../img/descarga.png")
                                        } alt="Alternate Text" 
                                        size="lg" rounded={"lg"}  marginRight={3}/>
                                        <VStack>
                                            <Text>{item.nombreS}</Text>
                                            <Text>Servicio</Text>
                                            <HStack>
                                                <Text ml={"40%"}>$300.00</Text>
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
                <Text fontSize="28" fontWeight="800" mb={2} >
                            Detalle de Compra
                </Text>

            </Center>
            

            <Center>
                <Stack direction="row" space={10}>
                    <Text   mr={20} fontSize="md">
                        Total de ordenes
                    </Text>
                    <Text  fontSize="md" >
                        $200.00
                    </Text>
                </Stack>
            </Center>
           

            <Center >
                <Divider thickness={2}  my={1} w="82%"/>
           </Center>
           <Center>
                <HStack space={10}>
                    <Text mr={40} fontSize="md">
                        Envío
                    </Text>
                    <Text  fontSize="md">
                        $600.00
                    </Text>
                </HStack>
            </Center>                  
        
        
           <Center >
                <Divider thickness={2} my={1} w="82%"/>
           </Center>
           <Center>
            <HStack>
                    <Text mr={10} ml={12} fontSize="md">Total por ordenes</Text>
                    <Text mr={12} ml={20} fontSize="md">$650.00</Text>

                </HStack>
           </Center>
           
      <Center>
        <Button m={5} w="60%" onPress={ ()=> navigation.navigate("CheckAdress")} >
                <Text color={"#FFFFFF"} fontSize="lg" fontWeight={800} letterSpacing={0.8}>PAGAR</Text>
                    
            </Button>

      </Center>

            

            
        
        
        </View>
        <Footer />
        
    </NativeBaseProvider>
  )
}
export default Carrito;