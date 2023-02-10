import React from 'react';

import { NativeBaseProvider, VStack, Center, Box, 
    ScrollView ,  Image, Divider, Text, Button, HStack, View, Stack} from 'native-base';
import { useNavigation } from '@react-navigation/native';
import Footer from '../components/Footer';
      

const Carrito = () => {
    const navigation =useNavigation();

    async function loadCarrito(){

    }

  return (
    <NativeBaseProvider  >
        <View  h="91%" >
            <Center bg="#FFFFFF" mx={8} mt={5} mb={3} p={2} h={380} rounded={10} borderWidth={2} borderColor={"#BDC5C8"}>
                <ScrollView style={{paddingHorizontal:10}}  horizontal={false} w="100%">
                    <Center h={110} marginBottom={2} bg="white">
                        <HStack>
                            <Image 
                            source={require( "../img/descarga.png")
                            } alt="Alternate Text" 
                            size="lg" rounded={"lg"}  marginRight={3}/>
                            <VStack>
                                <Text>Formateo de PC</Text>
                                <Text>Servicio</Text>
                                <HStack>
                                    <Text ml={"40%"}>$300.00</Text>
                                </HStack>
                            </VStack>
                        </HStack>
                    </Center>
                    <Divider thickness={3} bg="#0081C1"/>
                        <Center h={110} marginBottom={2} bg="white">
                            <HStack>
                                <Image 
                                source={require( "../img/descarga.png")
                                } alt="Alternate Text" 
                                size="lg" rounded={"lg"}  marginRight={3}/>
                                <VStack>
                                    <Text>Formateo de PC</Text>
                                    <Text>Servicio</Text>
                                    <HStack>
                                        <Text ml={"40%"}>$300.00</Text>
                                    </HStack>
                                </VStack>
                            </HStack>
                        </Center>
                    <Divider thickness={3} bg="#0081C1" />
                    <Center h={110} marginBottom={2} bg="white">
                            <HStack>
                                <Image 
                                source={require( "../img/descarga.png")
                                } alt="Alternate Text" 
                                size="lg" rounded={"lg"}  marginRight={3}/>
                                <VStack>
                                    <Text>Formateo de PC</Text>
                                    <Text>Servicio</Text>
                                    <HStack>
                                        <Text ml={"40%"}>$300.00</Text>
                                    </HStack>
                                </VStack>
                            </HStack>
                        </Center>
                    <Divider thickness={3} bg="#0081C1" />

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