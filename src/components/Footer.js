import React, {useState, useEffect} from 'react';
import { NativeBaseProvider, Box, HStack, Center, Pressable, Icon, Text } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import baseColor from '../private/api/baseColor';
import { MaterialCommunityIcons, Ionicons, AntDesign } from '@expo/vector-icons';


    const Footer = (props) => {
      
       
       const [selected, setSelected] = useState(props.selected2);
       
       

        const navigation =useNavigation();
        const IrInicio = () => {
          setSelected(0)
          navigation.navigate('Home');
        };

        const IrServicios = () => {
          setSelected(1)
          navigation.navigate('Servicios');
        };
        const IrBuscar = () => {
          setSelected(2)
          navigation.navigate('Buscar');
        };

        const IrAsesoria = () => {
          setSelected(3)
          navigation.navigate('Soporte');
        };
        
        const IrCuenta = () => {
          setSelected(4)
          navigation.navigate('Login');
        };

        

        return (
            
         <NativeBaseProvider>
            <Box flex={1} safeAreaTop width="100%" h="11%" alignSelf="center"  >
              
              <HStack bg={baseColor.bg}  alignItems="center" safeAreaBottom shadow={6} borderTopRadius={35} >
                <Pressable cursor="pointer" opacity={selected === 0 ? 1 : 0.5}  flex={1} 
                  onPress={() => {IrInicio()}}>
                  <Center >
                    <Center  borderRadius={100} p={3} bg={baseColor.footerIconBg}>
                      <Icon  as={<Ionicons name={selected === 0 ? 'home' : 'home-outline'} />} color={baseColor.footerIcon} size="lg" />
                      
                    </Center>
                  </Center>
                </Pressable>
                <Pressable cursor="pointer" opacity={selected === 1 ? 1 : 0.5} py="2" flex={1} onPress={() => {IrServicios()}}>
                  <Center>
                    <Center borderRadius={100} p={3} bg={baseColor.footerIconBg}>
                      <Icon mb="1" as={<MaterialCommunityIcons name={selected === 1 ? 'percent' : 'percent-outline'} />} color={baseColor.footerIcon} size="lg" />
                      
                    </Center>
                  </Center>
                </Pressable>
                <Pressable cursor="pointer" opacity={selected === 2 ? 1 : 0.6} py="2" flex={1} onPress={() => {IrBuscar()} }>
                  <Center>
                    <Center borderRadius={100} p={3} bg={baseColor.footerIconBg}> 
                      <Icon mb="1" as={<Ionicons name={selected ===2 ? "ios-search" : "ios-search-outline"}/>} color={baseColor.footerIcon} size="lg" />
                     
                    </Center>
                  </Center>
                </Pressable>
                <Pressable cursor="pointer" opacity={selected === 3 ? 1 : 0.5} py="2" flex={1} onPress={() => {IrAsesoria()} }>
                  <Center>
                    <Center borderRadius={100} p={3} bg={baseColor.footerIconBg}> 
                      <Icon mb="1" as={<AntDesign name="customerservice"  />} color={baseColor.footerIcon} size="lg" />
                      
                    </Center>
                  </Center>
                </Pressable>
                <Pressable cursor="pointer" opacity={selected === 4 ? 1 : 0.5} py="2" flex={1} onPress={() => {IrCuenta()} }>
                  <Center>
                    <Center borderRadius={100} p={3} bg={baseColor.footerIconBg}> 
                      <Icon mb="1" as={<MaterialCommunityIcons name={selected === 4 ? 'account' : 'account-outline'} />} color={baseColor.footerIcon} size="lg" />
                      
                    </Center>
                  </Center>
                </Pressable>
              </HStack>
            </Box>
        </NativeBaseProvider>


        );
    };
    export default Footer;