import React from 'react';
import {  TouchableOpacity, Linking } from 'react-native';
import { NativeBaseProvider, Image, Center, Box, VStack, Text, HStack, Divider } from 'native-base';
import styles from '../styles/styles';

const AcercaID = () => {
  return (
    <NativeBaseProvider>

        <Box bg="white" flex={1}>
            <VStack>
                {/**LOGO ID */}
                <TouchableOpacity onPress={ ()=>{ Linking.openURL('https://impactosdigitales.com/')}}>
                    <Center my={2}>
                        <Image source={require("../img/logoID.png")
                        } alt="Alternate Text"  />
                    </Center>
                </TouchableOpacity>
                
                {/**DESCRIPCION ID */}
                <Center mx={5} mb={1} >
                    <Text textAlign={"justify"} lineHeight={18} fontSize={16} mx={3} style={styles.Texts}>
                        Logramos que las tecnologías de la información mejoren el desempeño y hagan crecer los negocios de nuestros clientes.
                    </Text>
                </Center>
                <Center mx={5} my={2} >
                    <Text textAlign={"justify"} lineHeight={20} fontSize={22} style={styles.Texts}>
                        Nos especializamos en:
                    </Text>
                </Center>
                <Center>
                <Divider thickness={3} w="50%" bg="#236DB7" my={3}/>
                </Center>
                
                 
                <HStack w="100%" >
                    {/** PRIMERA COLUMNA */}
                    <VStack w="33%" >
                        {/**PÁGINAS WEB BOTON */}
                        <TouchableOpacity onPress={ ()=>{ Linking.openURL('https://impactosdigitales.com/creacion-de-paginas-web-en-queretaro-2/')}}>
                            <Center>
                                <Image 
                                source={require( "../img/AcercaID/Web.png")
                                } alt="Alternate Text" size={"xl"} resizeMode="contain" />
                            </Center>

                            
                        </TouchableOpacity>
                        {/**hosting y dominios */}
                        <TouchableOpacity onPress={ ()=>{ Linking.openURL('https://impactosdigitales.com/compra-de-dominio-y-hosting-en-queretaro/')}}>
                            <Center>
                                <Image 
                                source={require( "../img/AcercaID/Hosting.png")
                                } alt="Alternate Text" size={"xl"} resizeMode="contain" />
                            </Center>

                            
                        </TouchableOpacity>
                       
                        <TouchableOpacity onPress={ ()=>{ Linking.openURL('https://impactosdigitales.com/inbound-marketing-agencia-en-queretaro/')}}>
                            <Center>
                                <Image 
                                source={require( "../img/AcercaID/SEO.png")
                                } alt="Alternate Text" size={"xl"} resizeMode="contain" />
                            </Center>

                            
                        </TouchableOpacity>
                        

                    </VStack>

                    {/** SEGUNDA COLUMNA */}
                    <VStack w="33%" >
                        {/**ECOMMERCE */}
                        <TouchableOpacity onPress={ ()=>{ Linking.openURL('https://impactosdigitales.com/universe-ecommerce/')}}>
                            <Center>
                                <Image 
                                source={require( "../img/AcercaID/Ecommerce.png")
                                } alt="Alternate Text" size={"xl"} resizeMode="contain" />
                            </Center>

                            
                        </TouchableOpacity>
                        
                        {/**APPS MOVILES */}
                        <TouchableOpacity onPress={ ()=>{ Linking.openURL('https://impactosdigitales.com/desarrolladores-de-app-en-queretaro/')}}>
                            <Center>
                                <Image 
                                source={require( "../img/AcercaID/Apps.png")
                                } alt="Alternate Text" size={"xl"} resizeMode="contain" />
                            </Center>

                           
                        </TouchableOpacity>
                        
                        {/**BIG BRANDING */}
                        <TouchableOpacity onPress={ ()=>{ Linking.openURL('https://impactosdigitales.com/agencias-de-marketing-digital-queretaro-2/')}}>
                            <Center>
                                <Image 
                                source={require( "../img/AcercaID/Branding.png")
                                } alt="Alternate Text" size={"xl"} resizeMode="contain" />
                            </Center>
                           
                        </TouchableOpacity>
                        

                    </VStack>
                     {/** Tercera */}
                     <VStack w="33%" >
                        <TouchableOpacity onPress={ ()=>{ Linking.openURL('https://impactosdigitales.com/software-a-la-medida-queretaro/')}}>
                            <Center>
                                <Image 
                                source={require( "../img/AcercaID/Software.png")
                                } alt="Alternate Text" size={"xl"} resizeMode="contain" />
                            </Center>
                           
                        </TouchableOpacity>
                      
                        <TouchableOpacity onPress={ ()=>{ Linking.openURL('https://impactosdigitales.com/especialista-en-ciberseguridad-en-queretaro/')}}>
                            <Center>
                                <Image 
                                source={require( "../img/AcercaID/Seguridad.png")
                                } alt="Alternate Text" size={"xl"} resizeMode="contain" />
                            </Center>
                            
                        </TouchableOpacity>
                       
                        {/**INBOUND MARKETING */}
                        <TouchableOpacity onPress={ ()=>{ Linking.openURL('https://impactosdigitales.com/inbound-marketing-agencia-en-queretaro/')}}>
                            <Center>
                                <Image 
                                source={require( "../img/AcercaID/Marketing.png")
                                } alt="Alternate Text" size={"xl"} resizeMode="contain" />
                            </Center>

                           
                        </TouchableOpacity>
                        

                    </VStack>
                </HStack>
                
            </VStack>
        </Box>

    </NativeBaseProvider>
  )
}
export default AcercaID;