import React, { useState, useEffect } from 'react';
//import {   } from 'react-native';
//import {   } from 'react-native';
import { Box, Heading, VStack, FormControl, Input, Link, 
  Button, HStack, Center, Text, NativeBaseProvider, ScrollView, View, Image, ZStack } from "native-base";
import Footer from "../components/Footer"
import { LinearGradient } from 'expo-linear-gradient';
import fetchPost from '../private/api/fetchPost';
import { TouchableOpacity } from 'react-native';
const Tecnicos = (props) => {

    const [ tecnicos, setTecnicos ] = useState([]);

    const getDatos = async() => {
        const url = "https://laptopfix.com.mx/laptopfixrun/api/tecnicos/ver_tecnicos"
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

        /**GRADIENTE LINEAR FUNCION PARA NATIVE BASE */
  const config = {
    dependencies: {
      'linear-gradient': LinearGradient
    }
  };
  



  return (
    <NativeBaseProvider config={config} >
      <Box>
      <ZStack>
          <Box h="320"  w="100%" bg={{
            linearGradient: {
              colors: [ "#236DB7", '#ffffff'],
              start: [0, 0],
              end: [0, 1]
            }
          }}>
            
          </Box>
        </ZStack>


      <ScrollView   maxH={"100%"} h={"83%"} >
        

            {tecnicos.map( (tecnico, index) => {
                return(
                <Box key={index} backgroundColor={"white"} rounded="lg" marginLeft={5} marginRight={5} marginTop={5}>
                    <TouchableOpacity>
                        <HStack>
                            <Image 
                                source={{
                                uri: tecnico.image_url
                                }}alt="Alternate Text" size="xl" roundedLeft={"lg"}  />
                            <Center>
                                <Text fontSize={20} marginLeft={4} mr={3}>{tecnico.nombreU}</Text>
                                <Text fontSize={20} marginLeft={4} mr={3}>{tecnico.apellidos}</Text>
                            </Center>
                        </HStack>
                    </TouchableOpacity>
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