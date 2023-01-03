import React from 'react';

import { NativeBaseProvider, Center, Box, 
  ScrollView ,  Image, Checkbox, Text, Button, HStack, Input, AspectRatio} from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome5, FontAwesome } from '@expo/vector-icons'; 

const CheckPago = () => {
  const navigation =useNavigation();
  return (
    <NativeBaseProvider>
      <Box bg={"white"} flex={1}>
      <Image source={require( "../img/procesoPago.png")
                            } alt="Alternate Text" w="100%" resizeMode="contain"
                             rounded={"lg"}  marginRight={3}/>
      

        <Box bg="#DFE7EA" h={20} rounded={10} m={3} ml={8} mr={8}>
        
          
        <Center>
          
          <HStack>
            
            <FontAwesome5 name="money-bill-alt" size={60} color="#236DB7" style={{marginTop:10, marginLeft:3}} />
            <Text fontSize={20} ml={4} mr={10} mt={6} fontWeight="bold" >EFECTIVO</Text>
            <Checkbox mt={7} size="lg" ml={6} value={1} accessibilityLabel="This is a dummy checkbox" />
        

          </HStack>
        </Center>
        

        </Box>
        <Box bg="#DFE7EA" h={20} rounded={10} m={3} ml={8} mr={8}>
          
          <Center >

            <HStack>
              <FontAwesome name="credit-card" size={60} color="#236DB7"  style={{marginTop:10, marginLeft:7}}/>
              <Text fontSize={20} ml={6} mr={12} mt={6} fontWeight="bold">TARJETA</Text>
              <Checkbox mt={7} size="lg" ml={6} value={2} accessibilityLabel="This is a dummy checkbox" />
            </HStack>
          </Center>
        </Box>
        

          <Button p={4} mx={20} mt={4}
            onPress={()=> navigation.navigate("CheckCard") } >
              SIGUIENTE
          </Button>
      </Box>
        
      
    </NativeBaseProvider>
  )
}
export default CheckPago;