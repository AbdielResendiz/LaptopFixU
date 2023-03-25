import React, { useState, useEffect } from 'react';
import { Box,  HStack, Center, Text, NativeBaseProvider, ScrollView, Image, Divider } from "native-base";
  import { FontAwesome } from '@expo/vector-icons'; 

import { TouchableOpacity } from 'react-native';
/**componentes y opciones */
import Footer from "../components/Footer"
import fetchPost from '../private/api/fetchPost';
import config from '../private/api/config';
import Carrusel from '../components/Carrusel';
import SwiperList from "../components/SwiperList";
import Gradiente from '../components/Gradiente';
import URL from '../private/api/URL';
import SkeletonServicio from '../components/SkeletonServicio';
import styles from '../styles/styles';
import { AntDesign } from '@expo/vector-icons'; 

const Tecnicos = (props) => {
    const BASE_URL = URL.BASE_URL;

    const [ tecnicos, setTecnicos ] = useState([]);
    const [ loading, setLoading ] = useState(true);

    const getDatos = async() => {
        const url = `${BASE_URL}api/tecnicos/ver_tecnicos`
        const options = {
          method:'POST',
        };
        const res = await fetchPost(url, options);
        setTecnicos(res.tecnicos);
        console.log("res", res.tecnicos);
        setLoading(false);
    }

    useEffect(() => {
        getDatos();
      }, []);
  

      const detalleTecnico= (item) => {
        props.navigation.navigate("DetalleTecnico", {
          idTecnico: item,
        });
      };



  return (
    <NativeBaseProvider config={config} >
      <Box flex={1} style={styles.bg}>
        <Gradiente/>
        <Box w="96%" h={150}  bg="white" my={2} mx="2%">
              {/**CARRUSEL */}
            <SwiperList/>
            </Box>

        {
          (loading===true) ?
          (<SkeletonServicio/>) :
          (
          <ScrollView >
                {tecnicos.map( (tecnico, index) => {
                    return(
                    <Box key={index}  rounded="lg" ml={4} mr={5} mt={2}>
                        <TouchableOpacity key={index} onPress={() => detalleTecnico(tecnico.idU)}>
                            <HStack>
                                <Image source={{uri:`${BASE_URL}${tecnico.avatar_usuario}`} } 
                                      alt={tecnico.nombreU} size="lg" borderColor="black" borderWidth={3} rounded={100} mx={1.5}/>
                                <Box w="60%" mt={5} ml={4}>
                                    <Text style={styles.textColor} fontSize={20} >
                                      {tecnico.nombreU + " " + tecnico.apellidos}
                                    </Text>
                                    <HStack>
                                      <AntDesign name="star" size={24} color="#ffcd3c" />
                                      <AntDesign name="star" size={24} color="#ffcd3c" />
                                      <AntDesign name="star" size={24} color="#ffcd3c" />
                                      <AntDesign name="star" size={24} color="#ffcd3c" />
                                      <AntDesign name="star" size={24} color="#ffcd3c" />
                                    </HStack>
                                    <Text style={styles.Texts}>
                                      Técnico
                                    </Text>
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
          </ScrollView>
          )
        }

        
      </Box>
      
    </NativeBaseProvider>
  )
}
export default Tecnicos;