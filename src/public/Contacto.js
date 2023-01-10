import React from 'react';
import {  TouchableOpacity, View } from 'react-native';
import { FontAwesome5, MaterialCommunityIcons, Fontisto } from '@expo/vector-icons'; 
import { Box, NativeBaseProvider, Center, HStack, VStack, Text, Divider, ScrollView, Image} from 'native-base';
import Footer from '../components/Footer';

const Contacto = () => {
  return (
    <NativeBaseProvider>
      <ScrollView w="100%" h="82%" bg="white">
        {/**UBICACIÓN */}
        <Box ml={7} mt={7}>
          <HStack>
            <Image 
                source={require( "../img/UbicacionIcon.png")
                } alt="Alternate Text" size={"xs"} resizeMode="contain" />
                <Text fontSize={32} fontWeight={800}>Ubicación</Text>
          </HStack>
          <Divider w={40} thickness="3"  bg="#236DB7"/>
          <HStack ml={6} mt={5}>
            <Box h={5} w={5} bg="#afafaf" shadow={7} rounded={100}/>
            <Box ml={4}>
              <VStack>
                <Text fontSize={16}>Av Paseo la Constitución #100</Text>
                <Text fontSize={16}>Col. Villas del Parque</Text>
                <Text fontSize={16}>Querétaro, México.</Text>
              </VStack>
            </Box>
          </HStack>
        </Box>


        {/**EMAIL */}
        <Box ml={7} mt={3}>
          <HStack>
            <Center>
            <Image 
                source={require( "../img/CorreoContacto.png")
                } alt="Alternate Text" size={"xs"} resizeMode="contain" mt={7} mr={3}/>

            </Center>
            <Center>
           <Text fontSize={32} fontWeight={800} mb={-3}>Correo Electrónico</Text>
            </Center>
            
                
                 
                  
                
          </HStack>
          <Divider w={40} thickness="3"  bg="#236DB7"/>
          <HStack ml={6} mt={3}>
            <Box h={5} w={5} bg="#afafaf" shadow={7} rounded={100}/>
            <Box ml={4}>
              <VStack>
                <Text fontSize={16}>contacto@impactosdigitales.com</Text>
                <Text fontSize={16}>appsmoviles@impactosdigitales.com</Text>
              </VStack>
            </Box>
          </HStack>
        </Box>


           {/**REDES SOCIALES */}
           
           <Box ml={7} mt={3}>
          <HStack>
            <Center>
              <Image 
                source={require( "../img/redes.png")
                } alt="Alternate Text" size={"xs"} resizeMode="contain" mt={7} mr={3}/>
            </Center>
            <Center>
              <Text fontSize={32} fontWeight={800} mb={-3}>Redes Sociales</Text>
            </Center>
            
                
                 
                  
                
          </HStack>
          <Divider w={40} thickness="3"  bg="#236DB7"/>
          {/**FACEBOOK */}
          <HStack ml={6} mt={5}>
            <Image 
                source={require( "../img/FB.png")
                } alt="Alternate Text" size={"xs"} resizeMode="contain" />
            
            <Center>
              <Text fontSize={16}>@impactosdigitales</Text>
            </Center>
          </HStack>

           {/**INSTAGRAM */}
           <HStack ml={6} mt={5}>
            <Image 
                source={require( "../img/IG.png")
                } alt="Alternate Text" size={"xs"} resizeMode="contain" />
            
            <Center>
              <Text fontSize={16}>@impactosdigitales</Text>
            </Center>
          </HStack>

           {/**WHATSAPP */}
           <HStack ml={6} mt={5}>
            <Image 
                source={require( "../img/WA.png")
                } alt="Alternate Text" size={"xs"} resizeMode="contain" />
            <Center>
              <Text fontSize={16}>442 219 8567</Text>
            </Center>
            
          </HStack>

           {/**LINKEDIN */}
           <HStack ml={6} mt={5}>
            <Image 
                source={require( "../img/IN.png")
                } alt="Alternate Text" size={"xs"} resizeMode="contain" />
            <Center>
              <Text fontSize={16}>@impactosdigitales</Text>
            </Center>
              
          </HStack>
        </Box>
        
        



      </ScrollView>

       <Footer/>

    </NativeBaseProvider>
  )
}
export default Contacto;