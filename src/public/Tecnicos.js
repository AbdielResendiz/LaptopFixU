import React, { useState, useEffect } from 'react';
import { Box,  HStack, Center, Text, NativeBaseProvider, ScrollView, Image, Divider } from "native-base";
  import { FontAwesome } from '@expo/vector-icons'; 

import { TouchableOpacity } from 'react-native';
/**componentes y opciones */
import Footer from "../components/Footer"
import fetchPost from '../private/api/fetchPost';
import config from '../private/api/config';
import Carrusel from '../components/Carrusel';
import Gradiente from '../components/Gradiente';
import URL from '../private/api/URL';

const Tecnicos = (props) => {
    const BASE_URL = URL.BASE_URL;

    const [ tecnicos, setTecnicos ] = useState([]);

    const getDatos = async() => {
        const url = `${BASE_URL}api/tecnicos/ver_tecnicos`
        const options = {
          method:'POST',
        };
        const res = await fetchPost(url, options);
        setTecnicos(res.tecnicos);
        console.log("res", res.tecnicos);
    }

    useEffect(() => {
        getDatos();
      }, []);
  



  return (
    <NativeBaseProvider config={config} >
      <Box h="91%" bg="white">
        <Gradiente/>
        <Center mx={3} >
         <Carrusel/>
        </Center>
        <ScrollView >
              {tecnicos.map( (tecnico, index) => {
                  return(
                  <Box key={index} backgroundColor={"white"} rounded="lg" ml={4} mr={5} mt={2}>
                      <TouchableOpacity>
                          <HStack>
                              
                                   <Image source={{uri:tecnico.image_url} } 
                                     alt={tecnico.nombreU} size="lg" borderColor="black" borderWidth={3} rounded={100} mx={1.5}/>
                              <Box w="60%" mt={5} ml={4}>
                                  <Text bold fontSize={20}  color="#236DB7">{tecnico.nombreU + " " + tecnico.apellidos}</Text>
                                  <Text>Técnico</Text>
                              </Box>
                              <Center >
                               <FontAwesome name="angle-right" size={24} color="black" />
                              </Center>
                          </HStack>
                      </TouchableOpacity>
                      <Center>
                        <Divider mt={1} w="20%" ml="20%" thickness={2} bg="black"/>

                      </Center>
                      
                  </Box>
                    
                  );
              } )}
            {/**Box de producto */}
        </ScrollView>
      </Box>
      <Footer />
    </NativeBaseProvider>
  )
}
export default Tecnicos;