import { Box, Button, Center, FormControl, HStack, Image, Input, NativeBaseProvider, Stack, Text, VStack } from 'native-base';
import React from 'react';
import Footer from '../components/Footer';
import styles from '../styles/styles';

const AgregarTarjeta = () => {
  return (
    <NativeBaseProvider>
        <Box h="91%" w="100%" bg="#FFFFFF" >
                {/**TITULO */}
            <Text fontSize={28} mx={6} my={4} style={styles.Texts}>
                Agregar tarjeta
            </Text>
            {/**IMAGEN TARJETA */}
            <Center my={3}>
                <Image 
                    source={require( "../img/tarjeta.png")
                    } alt="Alternate Text" h={40} resizeMode="contain" />
            </Center>
            {/**Box con INPUTS DE TARJETA */}
            <Box w="90%" mx="5%"  my={3}>
                {/** NO. DE TARJETA */}
                <FormControl isRequired>
                <Stack mx="4">
                    <FormControl.Label>Número de tarjeta</FormControl.Label>
                    <Input type="number"  placeholder="Número de tarjeta" />
                </Stack>
                </FormControl>
            </Box>
            {/**NOMBRE Y APELLIDOS */}
            <HStack w="100%" mx={4} mb={4}>
                <VStack w="48%">
                    <FormControl isRequired>
                    <Stack mx="4">
                        <FormControl.Label>Nombre</FormControl.Label>
                        <Input type="number"  placeholder="Nombre" />
                    </Stack>
                    </FormControl>
                </VStack>

                <VStack w="48%" ml={-5}>
                    <FormControl isRequired>
                    <Stack mx="4">
                        <FormControl.Label>Apellido</FormControl.Label>
                        <Input type="number"  placeholder="Apellido" />
                    </Stack>
                    </FormControl>

                </VStack>

            </HStack>

               {/**EXPIRACIÓN Y CODIGO DE SEGURIDAD */}
               <HStack w="100%" mx={4}>
                <VStack w="48%">
                    <FormControl isRequired>
                    <Stack mx="4">
                        <FormControl.Label>Expiración</FormControl.Label>
                        <Input type="number"  placeholder="Expiración" />
                    </Stack>
                    </FormControl>

                </VStack>

                <VStack w="48%" ml={-5}>
                    <FormControl isRequired>
                    <Stack mx="4">
                        <FormControl.Label>Código de seguridad</FormControl.Label>
                        <Input type="number"  placeholder="Código de seguridad" />
                    </Stack>
                    </FormControl>

                </VStack>

            </HStack>
            <Center >
                <Button  w="40%" rounded={50} mt={7}>
                    <Text fontSize={24} color="#FFFFFF" style={styles.Texts}>Guardar</Text>
                </Button>
            </Center>
            

        </Box>
        <Footer/>

    </NativeBaseProvider>
  )
}
export default AgregarTarjeta;