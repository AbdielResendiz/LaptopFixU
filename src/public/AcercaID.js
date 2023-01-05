import React from 'react';
import { Text, View } from 'react-native';
import { NativeBaseProvider, Image, Center, AspectRatio, Box,  } from 'native-base';

const AcercaID = () => {
  return (
    <NativeBaseProvider>

        <Box bg="white" m={5} rounded={10} shadow={5}>
        <AspectRatio ratio={1} mx="10%" my={2}>
            
            <Image source={require("../img/logoID.png")
            } alt="Alternate Text"  />
        
        </AspectRatio>

        </Box>
        
        
        <Center>
            <Text>Acerca ID</Text>
        </Center>
    
    
    </NativeBaseProvider>
  )
}
export default AcercaID;