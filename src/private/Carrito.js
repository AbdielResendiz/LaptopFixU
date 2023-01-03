import React from 'react';
import {  View } from 'react-native';
import { NativeBaseProvider, VStack, Center, Box, 
    ScrollView ,  Image, Divider, Text, Button, HStack, Input} from 'native-base';
import { useNavigation } from '@react-navigation/native';
      

const Carrito = () => {
    const navigation =useNavigation();

  return (
    <NativeBaseProvider flex={1} px="3">
        <Box bg="#BDC5C8" m={5} p={3} maxH="60%" >
            <ScrollView style={{paddingHorizontal:10}} horizontal={false}>
                <VStack>
                    <Center h={130} marginBottom={2} bg="white">
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
                    
                    <Center h={130} marginBottom={2} bg="white">Carrito</Center>
                    <Center h={130} marginBottom={2} bg="white">Carrito</Center>
                    <Center h={130} marginBottom={2} bg="white">Carrito</Center>
                    <Center h={130} marginBottom={2} bg="white">Carrito</Center>
                    
                    

                </VStack>
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
        
        

        
    </NativeBaseProvider>
  )
}
export default Carrito;