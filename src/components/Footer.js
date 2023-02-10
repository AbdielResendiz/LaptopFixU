import React from 'react';
import { NativeBaseProvider, Box, HStack, Center, Pressable, Image, Divider } from 'native-base';
import { useNavigation } from '@react-navigation/native';


    const Footer = () => {
      
        const navigation =useNavigation();
        const IrInicio = () => {
          
          navigation.navigate('Home');
        };
        const IrCuenta = () => {
          
          navigation.navigate('Login');
        };
        return (
            

            
            <NativeBaseProvider style={{justifyContent: "flex-end"}}>
                
            <Box  bg="black" safeAreaTop width="100%"  alignSelf="center">
        
              <HStack bg="#ffffff" alignItems="center" safeAreaBottom shadow={6}>
                <Pressable cursor="pointer"  py="1" flex={1} 
                  onPress={() => { IrInicio();}}>
                  <Center>
                    <Image 
                                source={require( "../img/footer/home.png")
                                } alt="Alternate Text" 
                                size="12" rounded={"lg"}  />
                  
                  </Center>
                </Pressable>
                
                  <Divider orientation='vertical' h={7} my={1} thickness={2} bg="black"/>
               
                
              
                <Pressable cursor="pointer"  py="2" flex={1} onPress={() => { navigation.navigate('Servicios')}}>
                  <Center>
                  <Image 
                                source={require( "../img/footer/servicios.png")
                                } alt="Alternate Text" 
                                size="12" rounded={"lg"}  />
                  
                  </Center>
                </Pressable>
                <Divider orientation='vertical'h={7} my={1} thickness={2} bg="black"/>

                <Pressable cursor="pointer"  py="2" flex={1} onPress={() => { navigation.navigate('Buscar')}} >
                  <Center>
                    <Image 
                                source={require( "../img/footer/buscar.png")
                                } alt="Alternate Text" 
                                size="12" rounded={"lg"}  />
                    
                  </Center>
                </Pressable>
                <Divider orientation='vertical' h={7} my={1} thickness={2} bg="black"/>

                <Pressable cursor="pointer"  py="2" flex={1} onPress={() => {navigation.navigate('Soporte')}}>
                  <Center>
                    <Image 
                                source={require( "../img/footer/tecnico.png")
                                } alt="Alternate Text" 
                                size="12" rounded={"lg"}  />
                    
                  </Center>
                </Pressable>
                <Divider orientation='vertical' h={7} my={1} thickness={2} bg="black"/>

                <Pressable cursor="pointer"  py="2" flex={1} onPress={() => { IrCuenta();}}>
                  <Center>
                    <Image 
                                source={require( "../img/footer/perfil.png")
                                } alt="Alternate Text" 
                                size="12" rounded={"lg"}  />
                   
                  </Center>
                </Pressable>
              </HStack>
            </Box>
          </NativeBaseProvider>


        );
    };
    export default Footer;