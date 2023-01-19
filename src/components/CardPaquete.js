import React from 'react';
import { View, TouchableOpacity, ImageBackground} from 'react-native';
import { NativeBaseProvider, HStack, Center, Box, 
    ScrollView , Stack, AspectRatio, Image, Text} from 'native-base';



    const CardPaquete = (props) => {

        return(
            <Box style={{borderRadius:10, marginHorizontal:10}} bg="white" >
                
                
              
                <Image source={require("../img/descarga.png")} 
                 alt="image" style={{width: 100,
                 height: 80, resizeMode: "contain"}}/>
                 <Center mt={2}>
                    <Text >Servicio</Text>
                 </Center>
                
              
              
            </Box>
        )
    }
export default CardPaquete;