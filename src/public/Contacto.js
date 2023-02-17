import React from 'react';
import {  TouchableOpacity, Linking } from 'react-native';
import styles from '../styles/styles';
import { Box, NativeBaseProvider, Center, HStack, VStack, Text, Divider, ScrollView, Image} from 'native-base';
import Footer from '../components/Footer';

const Contacto = () => {
  return (
    <NativeBaseProvider>
      <ScrollView w="100%" h="82%" bg="white">
        {/**UBICACIÓN */}
        <TouchableOpacity onPress={ ()=>{ Linking.openURL('https://goo.gl/maps/DjsMWzsKZ7CcTE1o6')}} >
          <Box ml={7} mt={2}>
            <HStack>
              <Image 
                  source={require( "../img/contacto/mapa.png")
                  } alt="Alternate Text" size={"md"} resizeMode="contain" />
                  <Center>
                    <Text fontSize={32} style={styles.Texts}>Ubicación</Text>
                  </Center>
                  
            </HStack>
            <Divider w={40} thickness="3"  bg="#236DB7"/>
            <HStack ml={6} mt={5}>
              <Box h={5} w={5} bg="#afafaf" shadow={7} rounded={100}/>
              <Box ml={4}>
                <VStack>
                  <Text fontSize={16} style={styles.Texts} >Av Paseo la Constitución #100</Text>
                  <Text fontSize={16} style={styles.Texts} >Col. Villas del Parque</Text>
                  <Text fontSize={16} style={styles.Texts}>Querétaro, México.</Text>
                </VStack>
              </Box>
            </HStack>
          </Box>
        </TouchableOpacity>
        


        {/**EMAIL */}
        <TouchableOpacity onPress={() => Linking.openURL('mailto:contacto@impactosdigitales.com') }
         title="contacto@impactosdigitales.com">
          <Box ml={7} >
            <HStack>
              <Center>
                <Image 
                  source={require( "../img/contacto/correo.png")
                  } alt="Alternate Text" size={"md"} resizeMode="contain"  mr={3}/>
              </Center>
              <Center>
                <Text fontSize={32} style={styles.Texts} mb={1} lineHeight={30}>Correo {"\n"}Electrónico</Text>
              </Center>
            </HStack>
            <Divider w={40} thickness="3"  bg="#236DB7"/>
            <HStack ml={6} mt={3}>
              <Box h={5} w={5} bg="#afafaf" shadow={7} rounded={100}/>
              <Box ml={4}>
                <VStack>
                  <Text fontSize={16} style={styles.Texts} >contacto@impactosdigitales.com</Text>
                  <Text fontSize={16} style={styles.Texts} >appsmoviles@impactosdigitales.com</Text>
                </VStack>
              </Box>
            </HStack>
          </Box>
        </TouchableOpacity>
        


           {/**REDES SOCIALES */}
           
          <Box ml={7} >
          <HStack>
            <Center>
              <Image 
                source={require( "../img/contacto/redes.png")
                } alt="Alternate Text" size={"md"} resizeMode="contain"  mr={3}/>
            </Center>
            <Center>
              <Text fontSize={32} style={styles.Texts} mb={-3}>Redes Sociales</Text>
            </Center>
          </HStack>
          <Divider w={40} thickness="3"  bg="#236DB7"/>
          {/**FACEBOOK */}
          <TouchableOpacity onPress={ ()=>{ Linking.openURL('https://www.facebook.com/@impactosdigitales')}}>
            <HStack ml={6} mt={2}>
              <Image 
                  source={require( "../img/contacto/fb.png")
                  } alt="Alternate Text" size={"xs"} resizeMode="contain" />
              
              <Center>
                <Text fontSize={16} style={styles.Texts}>@impactosdigitales</Text>
              </Center>
            </HStack>
          </TouchableOpacity>
          

           {/**INSTAGRAM */}
           <TouchableOpacity onPress={ ()=>{ Linking.openURL('https://www.instagram.com/@impactosdigitales')}}>
              <HStack ml={6} mt={3}>
                <Image 
                    source={require( "../img/contacto/ig.png")
                    } alt="Alternate Text" size={"xs"} resizeMode="contain" />
                
                <Center>
                  <Text fontSize={16} style={styles.Texts}>@impactosdigitales</Text>
                </Center>
              </HStack>
           </TouchableOpacity>
           

           {/**WHATSAPP */}
           <TouchableOpacity onPress={ ()=>{ Linking.openURL('whatsapp://send?text=Buen día, me gustaría recibir información de sus servicios&phone=4422198567')}}>
            <HStack ml={6} mt={3}>
              <Image 
                  source={require( "../img/contacto/wa.png")
                  } alt="Alternate Text" size={"xs"} resizeMode="contain" />
              <Center>
                <Text fontSize={16} style={styles.Texts}>442 219 8567</Text>
              </Center>
              
            </HStack>
           </TouchableOpacity>
           

           {/**LINKEDIN */}
           <TouchableOpacity onPress={ ()=>{ Linking.openURL('https://www.linkedin.com/company/impactos-digitales/about/')}}>
            <HStack ml={6} mt={3}>
              <Image 
                  source={require( "../img/contacto/in.png")
                  } alt="Alternate Text" size={"xs"} resizeMode="contain" />
              <Center>
                <Text fontSize={16} style={styles.Texts}>@impactosdigitales</Text>
              </Center>
                
            </HStack>
           </TouchableOpacity>
           
        </Box>
        
        



      </ScrollView>

       <Footer/>

    </NativeBaseProvider>
  )
}
export default Contacto;