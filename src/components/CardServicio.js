import React from 'react';
import { Text, View, TouchableOpacity, ImageBackground} from 'react-native';
import { NativeBaseProvider, HStack, Center, Box, 
    ScrollView , Stack, AspectRatio, Image, Heading} from 'native-base';



    const CardServicio = (props) => {

        return(
            <Box style={{borderRadius:10, marginHorizontal:10}} bg="white" >
                
                
              <TouchableOpacity>
                <ImageBackground source={require("../img/laptopfx.jpeg")} 
                 style={{width: 100,
                 height: 80, resizeMode: "contain"}}/>
                <Text style={{fontWeight:"bold", }}>Mantenimiento PC</Text>
              </TouchableOpacity>
              
            </Box>
        )
    }
export default CardServicio;