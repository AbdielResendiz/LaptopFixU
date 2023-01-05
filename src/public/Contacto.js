import React from 'react';
import { Text, View } from 'react-native';
import { NativeBaseProvider, Image, Center, AspectRatio, Box, Link } from 'native-base';

const Contacto = () => {
  return (
    <NativeBaseProvider>

        <Box bg="white" m={5} rounded={10} shadow={5}>
        <AspectRatio ratio={1} mx="10%" my={2}>
            
            <Image source={require("../img/logoID.png")
            } alt="Alternate Text"  />
        
        </AspectRatio>

        </Box>
        
        
        <Center>
          <Link href="https://api.whatsapp.com/send?phone=5214422198567&text=Hola%20Impactos%20Digitales%2C%20quisiera%20saber%20m%C3%A1s%20sobre%20sus%20servicios.">
          Click here to open documentation.
          </Link>
            <Text>Contacto</Text>
        </Center>
    
    
    </NativeBaseProvider>
  )
}
export default Contacto;