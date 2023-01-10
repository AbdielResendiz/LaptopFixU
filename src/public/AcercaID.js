import React from 'react';
import {  View } from 'react-native';
import { NativeBaseProvider, Image, Center, AspectRatio, Box, VStack, Text, HStack, Divider } from 'native-base';

const AcercaID = () => {
  return (
    <NativeBaseProvider>

        <Box bg="white" flex={1}>
            <VStack>
                {/**LOGO ID */}
                <Center my={2}>
                    <Image source={require("../img/logoID.png")
                    } alt="Alternate Text"  />
                </Center>
                {/**DESCRIPCION ID */}
                <Center mx={5} mb={1} >
                    <Text textAlign={"justify"} lineHeight={18} fontSize={16} mx={3}>
                        Logramos que las tecnologías de la información mejoren el desempeño y hagan crecer los negocios de nuestros clientes.
                    </Text>
                </Center>
                <Center mx={5} my={2} >
                    <Text textAlign={"justify"} lineHeight={18} fontWeight="bold" fontSize={18}>
                        Nos especializamos en:
                    </Text>
                </Center>
                <Center>
                <Divider thickness={3} w="50%" bg="#236DB7" my={3}/>
                </Center>
                
                 
                <HStack w="100%" >
                    {/** PRIMERA COLUMNA */}
                    <VStack w="33%" >
                        <Center>
                            <Image 
                            source={require( "../img/webID.png")
                            } alt="Alternate Text" size={"sm"} resizeMode="contain" />
                        </Center>

                        <Center mb={7}>
                            <Text fontSize={17} mb={3}>
                                Páginas Web
                            </Text>
                        </Center>

                        <Center>
                            <Image 
                            source={require( "../img/hostID.png")
                            } alt="Alternate Text" size={"sm"} resizeMode="contain" />
                        </Center>

                        <Center>
                            <Text fontSize={17} mb={3}>
                                Hosting y Dominios
                            </Text>
                        </Center>

                        <Center>
                            <Image 
                            source={require( "../img/seoID.png")
                            } alt="Alternate Text" size={"sm"} resizeMode="contain" />
                        </Center>

                        <Center>
                            <Text fontSize={17} mb={3}>
                                SEO{"\n"}SEM
                            </Text>
                        </Center>

                    </VStack>

                    {/** SEGUNDA COLUMNA */}
                    <VStack w="33%" >
                        <Center>
                            <Image 
                            source={require( "../img/ecommID.png")
                            } alt="Alternate Text" size={"sm"} resizeMode="contain" />
                        </Center>

                        <Center>
                            <Text fontSize={17} mb={3}>Universe{"\n"}Ecommerce
                            </Text>
                        </Center>

                        <Center>
                            <Image 
                            source={require( "../img/appsID.png")
                            } alt="Alternate Text" size={"sm"} resizeMode="contain" />
                        </Center>

                        <Center>
                            <Text fontSize={17} mb={3}>
                                Apps{"\n"}Móviles
                            </Text>
                        </Center>

                        <Center>
                            <Image 
                            source={require( "../img/bigID.png")
                            } alt="Alternate Text" size={"sm"} resizeMode="contain" />
                        </Center>

                        <Center>
                            <Text fontSize={17} mb={3}>
                                Big Branding
                            </Text>
                        </Center>

                    </VStack>
                     {/** Tercera */}
                     <VStack w="33%" >
                        <Center>
                            <Image 
                            source={require( "../img/softID.png")
                            } alt="Alternate Text" size={"sm"} resizeMode="contain" />
                        </Center>

                        <Center>
                            <Text fontSize={17} mb={3}>
                                Software{"\n"}a la medida
                            </Text>
                        </Center>

                        <Center>
                            <Image 
                            source={require( "../img/ciberID.png")
                            } alt="Alternate Text" size={"sm"} resizeMode="contain" />
                        </Center>

                        <Center>
                            <Text fontSize={17} mb={3}>
                                Ciber{"\n"}Seguridad
                            </Text>
                        </Center>

                        <Center>
                            <Image 
                            source={require( "../img/inboundID.png")
                            } alt="Alternate Text" size={"sm"} resizeMode="contain" />
                        </Center>

                        <Center>
                            <Text fontSize={17} mb={3}>
                                Inbound{"\n"}Marketing
                            </Text>
                        </Center>

                    </VStack>
                </HStack>
                
            </VStack>
        </Box>

    </NativeBaseProvider>
  )
}
export default AcercaID;