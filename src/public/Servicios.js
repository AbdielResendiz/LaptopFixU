import React, { useState, useEffect } from 'react';
import { Box, Heading, VStack, FormControl, Input, Link, 
  Button, HStack, Center, Text, NativeBaseProvider, ScrollView, View, Image, Divider } from "native-base";
import { TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 
/**Componentes */
import Footer from "../components/Footer"
import fetchPost from '../private/api/fetchPost';
import config from '../private/api/config';
import Gradiente from '../components/Gradiente';
import Carrusel from '../components/Carrusel';

const Servicios = (props) => {

    const [ servicios, setServicios ] = useState([]);

    const getDatos = async() => {
        const url = "https://laptopfix.com.mx/laptopfixrun/api/servicios/ver_servicios"
        const options = {
          method:'POST',
        };
        const res = await fetchPost(url, options);
        setServicios(res.data);
        console.log("res", res.data);
    }

    useEffect(() => {
        getDatos();
      }, []);



  return (
    <NativeBaseProvider config={config} >

      <Box h="91%" w="100%" bg="#ffffff"  >
        <Gradiente/>
        <Center mx={3}>
        <Carrusel/>

        </Center>
        


        {/**Scrool con SERVICIOS */}
        <ScrollView   >
          <View mb={2}>

              {servicios.map( (servicio, index) => {
                  return(
                  <Box key={index} backgroundColor={"white"} rounded="lg" marginLeft={5} marginRight={5} marginTop={2}>
                      <TouchableOpacity>
                          <HStack>
                              <Image 
                                  source={{
                                  uri: servicio.image_url
                                  }}alt="Alternate Text" size="lg" roundedLeft={"lg"}  />
                              <Box w="60%" mt={5} ml={4}>
                                  <Text bold fontSize={20} color="#236DB7" >{servicio.nombreS}</Text>
                                  <Text >{servicio.desS}</Text>
                              </Box>
                              <Center >
                               <FontAwesome name="angle-right" size={24} color="black" />
                              </Center>
                          </HStack>
                      </TouchableOpacity>
                      <Center>
                        <Divider mt={1} w="20%" mx="10%" thickness={2} bg="black"/>

                      </Center>
                  </Box>
                  );
              } )}
            {/**Box de producto */}

          </View>
        </ScrollView>

      </Box>
      
      
      
      <Footer />
    </NativeBaseProvider>
    
  )
}
export default Servicios;