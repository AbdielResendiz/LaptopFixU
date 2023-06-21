import React, { useState, useEffect } from 'react';
import { Box, HStack, Center, Text, NativeBaseProvider, ScrollView, View, Image, Pressable } from "native-base";
import { FontAwesome } from '@expo/vector-icons'; 
/**Componentes */
import fetchPost from '../private/api/fetchPost';
import config from '../private/api/config';
import Gradiente from '../components/Gradiente';
import URL from '../private/api/URL';
import SkeletonServicio from '../components/SkeletonServicio';
import styles from '../styles/styles';
import baseColor from '../private/api/baseColor';
import SwiperList from '../components/SwiperList';
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

      <ScrollView flex={1} bg={baseColor.bg}  >
        <Gradiente/>
        <Box w="96%" h={150}  bg="white" my={2} mx="2%">
              {/**CARRUSEL */}
            <SwiperList/>
            </Box>
        


        {/**Scrool con SERVICIOS */}
        {
          (loading===true) ?
          (<SkeletonServicio/>) :
          (
            
              <View mb={2}>

                  {servicios.map( (servicio, index) => {
                      return(
                      
                          <Pressable
                            key={index} onPress={() => detalleServicio(servicio.idS)}
                            mx={4} my={1} borderRadius={10} p={3} bg={"white"} shadow={7}>
                              <HStack>
                                  <Image 
                                      source={{
                                      uri: servicio.image_url
                                      }}alt="Imagen" size="md" roundedLeft={"lg"} resizeMode="contain" />
                                  <Box w="60%" mt={5} ml={4}>
                                      <Text style={styles.textColor} fontSize={20}  >
                                        {servicio.nombreS}
                                      </Text>
                                      <Text color="#4d4d4d" style={styles.Texts}>
                                         + Ver más información
                                      </Text>
                                  </Box>
                                  <Center >
                                  <FontAwesome name="angle-right" size={28} color="black" />
                                  </Center>
                              </HStack>
                          </Pressable>
                      
                      );
                  } )}
                {/**Box de producto */}

              </View>
           
          )
        }

        

      </ScrollView>
      
      
      
   
    </NativeBaseProvider>
    
  )
}
export default Servicios;