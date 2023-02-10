import React, { useState, useEffect } from 'react';
import { Box, HStack, Center, Text, NativeBaseProvider, ScrollView, View, Image, Divider } from "native-base";
import { TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 
/**Componentes */
import Footer from "../components/Footer"
import fetchPost from '../private/api/fetchPost';
import config from '../private/api/config';
import Gradiente from '../components/Gradiente';
import Carrusel from '../components/Carrusel';
import URL from '../private/api/URL';
import SkeletonServicio from '../components/SkeletonServicio';

const Servicios = (props) => {

    const [ servicios, setServicios ] = useState([]);
    const [ loading, setLoading ] = useState(true);
  
    const BASE_URL = URL.BASE_URL;

    const getDatos = async() => {
        const url = `${BASE_URL}api/servicios/ver_servicios`
        const options = {
          method:'POST',
        };
        const res = await fetchPost(url, options);
        setServicios(res.data);
        console.log("res", res.data);
        setLoading(false);
    }

    useEffect(() => {
        getDatos();
      }, []);


  const detalleServicio= (item) => {
    props.navigation.navigate("DetalleServicio", {
      idServicio: item,
    });
  };




  return (
    <NativeBaseProvider config={config} >

      <Box h="91%" w="100%" bg="#ffffff"  >
        <Gradiente/>
        <Center mx={3}>
        <Carrusel/>

        </Center>
        


        {/**Scrool con SERVICIOS */}
        {
          (loading===true) ?
          (<SkeletonServicio/>) :
          (
            <ScrollView  bg="white" >
              <View mb={2}>

                  {servicios.map( (servicio, index) => {
                      return(
                      <Box key={index} backgroundColor={"white"} rounded="lg" marginLeft={5} marginRight={5} marginTop={2}>
                          <TouchableOpacity
                            key={index} onPress={() => detalleServicio(servicio.idS)}>
                              <HStack>
                                  <Image 
                                      source={{
                                      uri: servicio.image_url
                                      }}alt="Imagen" size="md" roundedLeft={"lg"} resizeMode="contain" />
                                  <Box w="60%" mt={5} ml={4}>
                                      <Text bold fontSize={20} color="#236DB7" >{servicio.nombreS}</Text>
                                      <Text color="#4d4d4d"> + Ver más información</Text>
                                  </Box>
                                  <Center >
                                  <FontAwesome name="angle-right" size={28} color="black" />
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
          )
        }

        

      </Box>
      
      
      
      <Footer />
    </NativeBaseProvider>
    
  )
}
export default Servicios;