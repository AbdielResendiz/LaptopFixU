import React from 'react';
import { NativeBaseProvider, Box, Text, Icon, HStack, Center, Pressable, Image, Divider } from 'native-base';
import { ToucheableOpacity } from 'react-native';
import { MaterialCommunityIcons, MaterialIcons, Fontisto } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


    const Footer = () => {
        const [selected, setSelected] = React.useState(0);
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
                <Pressable cursor="pointer"  py="3" flex={1} 
                  onPress={() => {setSelected(0); IrInicio();}}>
                  <Center>
                    <Image 
                                source={require( "../img/InicioF.png")
                                } alt="Alternate Text" 
                                size="7" rounded={"lg"}  />
                    <Text fontSize="12">
                      Inicio
                    </Text>
                  </Center>
                </Pressable>
                <Divider orientation='vertical' h={5} mb={5} thickness={2} bg="black"/>
              
                <Pressable cursor="pointer"  py="2" flex={1} onPress={() => {setSelected(2); navigation.navigate('Servicios')}}>
                  <Center>
                  <Image 
                                source={require( "../img/PromoF.png")
                                } alt="Alternate Text" 
                                size="7" rounded={"lg"}  />
                    <Text  fontSize="12">
                      Promociones
                    </Text>
                  </Center>
                </Pressable>
                <Divider orientation='vertical' h={5} mb={5} thickness={2} bg="black"/>

                <Pressable cursor="pointer"  py="2" flex={1} onPress={() => {setSelected(3); navigation.navigate('Buscar')}} >
                  <Center>
                    <Image 
                                source={require( "../img/BuscarF.png")
                                } alt="Alternate Text" 
                                size="7" rounded={"lg"}  />
                    <Text  fontSize="12">
                      Buscar
                    </Text>
                  </Center>
                </Pressable>
                <Divider orientation='vertical' h={5} mb={5} thickness={2} bg="black"/>

                <Pressable cursor="pointer"  py="2" flex={1} onPress={() => {setSelected(4); navigation.navigate('Soporte')}}>
                  <Center>
                    <Image 
                                source={require( "../img/SoporteF.png")
                                } alt="Alternate Text" 
                                size="7" rounded={"lg"}  />
                    <Text  fontSize="12">
                      Soporte
                    </Text>
                  </Center>
                </Pressable>
                <Divider orientation='vertical' h={5} mb={5} thickness={2} bg="black"/>

                <Pressable cursor="pointer"  py="2" flex={1} onPress={() => {setSelected(5); IrCuenta();}}>
                  <Center>
                    <Image 
                                source={require( "../img/PerfilF.png")
                                } alt="Alternate Text" 
                                size="7" rounded={"lg"}  />
                    <Text  fontSize="12">
                      Mi Perfil
                    </Text>
                  </Center>
                </Pressable>
              </HStack>
            </Box>
          </NativeBaseProvider>


        );
    };
    export default Footer;