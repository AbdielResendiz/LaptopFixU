import React from 'react';
import { View, TouchableOpacity, ImageBackground} from 'react-native';
import { NativeBaseProvider, HStack, Center, Box, 
    ScrollView , Stack, AspectRatio, Image, Text} from 'native-base';



    const CardPaquete = (props) => {

        return(
            <Box style={{borderRadius:10, marginHorizontal:10}} bg="white" >
                
                
              
                <Image source={require("../img/descarga.png")} 
                 alt="image" size="md" resizeMode='content' />
                 <Center mt={2}>
                    <Text bold>Servicio</Text>
                    <Text>Descripción</Text>
                 </Center>
                
              
              
            </Box>
        )
    }
export default CardPaquete;