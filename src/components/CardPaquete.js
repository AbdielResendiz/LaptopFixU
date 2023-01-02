import React from 'react';
import { Text, View, TouchableOpacity, ImageBackground} from 'react-native';
import { NativeBaseProvider, HStack, Center, Box, 
    ScrollView , Stack, AspectRatio, Image, Heading} from 'native-base';



    const CardPaquete = (props) => {

        return(
            <Box style={{borderRadius:10, marginHorizontal:10}} bg="white" >
                
                
              
                <Image source={require("../img/descarga.png")} 
                 alt="image" style={{width: 100,
                 height: 80, resizeMode: "contain"}}/>
                <Text style={{fontWeight:"bold", }}>Paquete ejemplo</Text>
              
              
            </Box>
        )
    }
export default CardPaquete;