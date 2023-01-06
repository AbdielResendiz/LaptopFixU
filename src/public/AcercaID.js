import React from 'react';
import {  View } from 'react-native';
import { NativeBaseProvider, Image, Center, AspectRatio, Box, VStack, Text, HStack } from 'native-base';

const AcercaID = () => {
  return (
    <NativeBaseProvider>

        <Box bg="white" m={5} rounded={10} shadow={5}>
            <VStack>
                {/**LOGO ID */}
                <Center my={2}>
                    <Image source={require("../img/logoID.png")
                    } alt="Alternate Text"  />
                </Center>
                {/**DESCRIPCION ID */}
                <Center mx={5} mb={1} >
                    <Text textAlign={"justify"} lineHeight={18} fontSize={18}>
                        Logramos que las tecnologías de la información mejoren el desempeño y hagan crecer los negocios de nuestros clientes.
                    </Text>
                </Center>
                <Center mx={5} my={2} >
                    <Text textAlign={"justify"} lineHeight={18} fontWeight="bold" fontSize={18}>
                        Nos especializamos en:
                    </Text>
                </Center>
                
                <HStack >
                    {/** PRIMERA COLUMNA */}
                    <VStack mx={3}>
                        <Text fontSize={17} mb={3}>
                            Páginas Web
                        </Text>
                        <Text fontSize={17} mb={3}>
                            Universe Ecommerce
                        </Text>
                        <Text fontSize={17} mb={3}>
                            Software a la medida
                        </Text>
                        <Text fontSize={17} mb={3}>
                            Hosting y dominios
                        </Text>
                    </VStack>

                    {/** SEGUNDA COLUMNA */}
                    <VStack mx={3}>
                            <Text fontSize={17} mb={3}>
                                Apps Móviles
                            </Text>
                            <Text fontSize={17} mb={3}>
                                Ciberseguridad
                            </Text>
                            <Text fontSize={17} mb={3}>
                             Big branding
                            </Text>
                            <VStack>
                                <Text fontSize={17}>
                                Inbound Marketing
                                </Text>
                                <Text fontSize={17} mb={3}>
                                SEO / SEM
                                </Text>
                            </VStack>
                        
                    </VStack>
                </HStack>
                
            </VStack>
        </Box>

    </NativeBaseProvider>
  )
}
export default AcercaID;