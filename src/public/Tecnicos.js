import React, { useState, useEffect } from 'react';
import { Box,  HStack, Center, Text, NativeBaseProvider, ScrollView, Image, Pressable, Divider, Icon } from "native-base";
import { FontAwesome } from '@expo/vector-icons'; 
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
import renderEstrellas from '../helper/renderEstrellas';

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
  

      const detalleTecnico= (item, calif) => {
        props.navigation.navigate("DetalleTecnico", {
          idTecnico: item,
          calificacion: calif
        });
      };



  return (
    <NativeBaseProvider config={config} >
      <ScrollView flex={1} bg={"#fdfdfd"} >
    
      <Gradiente/>
        <Box w="96%" h={150}  bg="white" my={2} mx="2%">
              {/**CARRUSEL */}
            <SwiperList/>
            </Box>

        {
          (loading===true) ?
          (<SkeletonServicio/>) : 
          (
          
                tecnicos.map( (tecnico, index) => {
                    return(
                 
                        <Pressable key={index} onPress={() => detalleTecnico(tecnico.idU, tecnico.promedio_calif)} 
                          mx={4} my={1} borderRadius={10} p={3} bg={"white"} shadow={7}>
                            <HStack alignContent={"center"} alignItems={"center"}>
                                <Image source={{uri:`${BASE_URL}${tecnico.avatar_usuario}`} } 
                                      alt={tecnico.nombreU} size="lg" borderColor="black" borderWidth={3} rounded={100} mx={1.5}/>
                                <Box w="55%" ml={4}>
                                    <Text style={styles.textColor} fontSize={16} >
                                      {tecnico.nombreU + " " + tecnico.apellidos}
                                    </Text>
                                    <Text>Especialidad: Laptops</Text>
                                    {renderEstrellas(tecnico.promedio_calif)}
                                    {/* <Text style={styles.Texts}>
                                      Técnico ({tecnico.promedio_calif})
                                    </Text> */}
                                </Box>
                                <Icon as={FontAwesome} name="angle-right" size={12} color="black" alignItems={"flex-end"}  />
                                
                                {/* <FontAwesome name="angle-right" size={24} color="black" /> */}
                                
                            </HStack>
                        </Pressable>
                       
                    
                    );
                } )
         
          )
        }

        <Box h={5}/>
      </ScrollView>
      
    </NativeBaseProvider>
  )
}
export default Tecnicos;