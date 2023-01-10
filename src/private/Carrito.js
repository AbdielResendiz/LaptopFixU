import React from 'react';

import { NativeBaseProvider, VStack, Center, Box, 
    ScrollView ,  Image, Divider, Text, Button, HStack, View} from 'native-base';
import { useNavigation } from '@react-navigation/native';
import Footer from '../components/Footer';
      

const Carrito = () => {
    const navigation =useNavigation();

  return (
    <NativeBaseProvider  >
        <View flex={1} h="100%" >
            <Box bg="#BDC5C8" m={5} p={3}  >
                <ScrollView style={{paddingHorizontal:10}} h={350} horizontal={false}>
                    
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
                        <Center h={110} marginBottom={2} bg="white">Carrito</Center>
                      
                    
                </ScrollView>
            </Box>

            <Text fontSize="lg" fontWeight="bold" ml={10} mb={2} >
                Detalle de compra
            </Text>

            <Box >
                <HStack>
                    <VStack ml={9}>
                        <Text>Total por ordenes</Text>
                        <Text>Envío</Text>
                    </VStack>
                    <VStack ml="30%">
                        <Text>$600.00</Text>
                        <Text>$50.00</Text>
                    </VStack>
                </HStack>
            </Box>
        
        
            <Divider  ml={12} mr={12} mt={3} mb={3} _light={{
            bg: "muted.300"
            }} _dark={{
             bg: "muted.90"
            }} />
            <HStack>
                <Text ml={9}>Total por ordenes</Text>
                <Text ml="30%">$650.00</Text>

            </HStack>
      

            <Button m={10} onPress={ ()=> navigation.navigate("CheckAdress")} >
                Pagar
            </Button>

            <Footer />
        
        
        </View>
        
    </NativeBaseProvider>
  )
}
export default Carrito;