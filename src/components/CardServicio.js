import React from 'react';
import { TouchableOpacity, ImageBackground} from 'react-native';
import { NativeBaseProvider, HStack, Center, Box, 
    ScrollView , Stack, AspectRatio, Image, Text} from 'native-base';




    const CardServicio = (props) => {

        return(
            <Box>
                
                
              <Center>
              <Image source={require("../img/footer/perfil.png") } 
                 alt="image" style={{width: 80,
                 height: 80, resizeMode: "contain"}} borderColor="black" borderWidth={3} rounded={100} mx={1.5}/>

              </Center>
                
                 <Center>
                 <Text bold>Nombre</Text>
                 <Text >Tecnico</Text>

                 </Center>
                
              
              
            </Box>
        )
    }
export default CardServicio;