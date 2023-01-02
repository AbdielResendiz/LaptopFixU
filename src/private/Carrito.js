import React from 'react';
import {  View } from 'react-native';
import { NativeBaseProvider, VStack, Center, Box, 
    ScrollView , Stack, AspectRatio, Image, Heading, Divider, Text, Button, HStack} from 'native-base';

const Carrito = () => {
  return (
    <NativeBaseProvider flex={1} px="3">
        <Box bg="white" m={5} p={3} maxH="60%" >
            <ScrollView style={{paddingHorizontal:10}} horizontal={false}>
                <VStack>
                    <Center h={130} marginBottom={2} bg="#12345678">Carrito</Center>
                    <Center h={130} marginBottom={2} bg="#12345678">Carrito</Center>
                    <Center h={130} marginBottom={2} bg="#12345678">Carrito</Center>
                    <Center h={130} marginBottom={2} bg="#12345678">Carrito</Center>
                    <Center h={130} marginBottom={2} bg="#12345678">Carrito</Center>
                    
                    

                </VStack>
            </ScrollView>
        

        </Box>

        <Text fontSize="lg" fontWeight="bold" ml={10}>
            Detalle de compra
        </Text>
        <Box>
        <HStack>
            <VStack ml={5}>
                <Text>Total por ordenes</Text>
                <Text>Envío</Text>
            </VStack>
            <VStack ml={20}>
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
        <Text ml={12}>$650.00</Text>

      </HStack>
      

      <Button m={10}>
        Pagar
      </Button>
        
        

        
    </NativeBaseProvider>
  )
}
export default Carrito;