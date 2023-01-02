import React from 'react';
import { NativeBaseProvider, Box, Text, Icon, HStack, Center, Pressable } from 'native-base';
import { ToucheableOpacity } from 'react-native';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
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
                
            <Box flex={0} bg="black" safeAreaTop width="100%"  alignSelf="center">
              
              <HStack bg="#236DB7" alignItems="center" safeAreaBottom shadow={6}>
                <Pressable cursor="pointer" opacity={selected === 0 ? 1 : 0.5} py="3" flex={1} 
                  onPress={() => {setSelected(0); IrInicio();}}>
                  <Center>
                    <Icon mb="1" as={<MaterialCommunityIcons name={selected === 0 ? 'home' : 'home-outline'} />} color="white" size="sm" />
                    <Text color="white" fontSize="12">
                      Inicio
                    </Text>
                  </Center>
                </Pressable>
              
                <Pressable cursor="pointer" opacity={selected === 2 ? 1 : 0.6} py="2" flex={1} onPress={() => {setSelected(2); navigation.navigate('Carrito')}}>
                  <Center>
                    <Icon mb="1" as={<MaterialCommunityIcons name={selected === 2 ? 'cart' : 'cart-outline'} />} color="white" size="sm" />
                    <Text color="white" fontSize="12">
                      Carrito
                    </Text>
                  </Center>
                </Pressable>
                <Pressable cursor="pointer" opacity={selected === 3 ? 1 : 0.5} py="2" flex={1} onPress={() => {setSelected(3); IrCuenta();}}>
                  <Center>
                    <Icon mb="1" as={<MaterialCommunityIcons name={selected === 3 ? 'account' : 'account-outline'} />} color="white" size="sm" />
                    <Text color="white" fontSize="12">
                      Cuenta
                    </Text>
                  </Center>
                </Pressable>
              </HStack>
            </Box>
          </NativeBaseProvider>


        );
    };
    export default Footer;