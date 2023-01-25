import React, { useState, useEffect } from 'react';
import {  TouchableOpacity, Dimensions} from 'react-native';
import { FontAwesome,  AntDesign } from '@expo/vector-icons'; 
import { NativeBaseProvider, HStack, Center, Box, 
  ScrollView , Stack, AspectRatio, Image, Heading, Text, VStack, View, ZStack} from 'native-base';

import AsyncStorage from '@react-native-async-storage/async-storage';


/**componentes */
import config from '../private/api/config';
import Footer from "../components/Footer";
import fetchPost from '../private/api/fetchPost';
import Carrusel from '../components/Carrusel';
import Gradiente from '../components/Gradiente';
import URL from '../private/api/URL';
import Skeletor from '../components/Skeletor';

const Home = (props) => {


  const [ nombre, setNombre ] = useState("");
  const [ apellidos, setApellidos ] = useState("");
  const [ id, setId ] = useState("");

  const BASE_URL = URL.BASE_URL;



  const [ conectado, setConectado ] = useState(false);
  {/**Funcion que escanea las variables almacenadas en local storage */}


  const detalleServicio= (item) => {
    props.navigation.navigate("DetalleServicio", {
      idServicio: item,
    });
  };

  const detalleTecnico= (item) => {
    props.navigation.navigate("DetalleTecnico", {
      idTecnico: item,
    });
  };

  

 

  useEffect(() => {
    async function fetchData() {
      try {
        await AsyncStorage.getItem("nombreAS").then(async (value) => {
          setNombre(value);
          console.log("Nombre effect: ", nombre);
        });
    
        await AsyncStorage.getItem("apellidosAS").then(async (value) => {
          setApellidos(value);
          console.log("Apellidos effect: ", apellidos);
        });
        await AsyncStorage.getItem("idAS").then(async (value) => {
          setId(value);
          console.log("id uwu: ", id);
        })
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, []);

  //INICIA Ver TECNICOS
  const [ servicios, setServicios ] = useState([]);

  const getDatos1 = async() => {
      const url = `${BASE_URL}api/servicios/ver_servicios`
      const options = {
        method:'POST',
      };
      const res = await fetchPost(url, options);
      setServicios(res.data);
      console.log("res", res.data);
      setLoading1(false);
  }

  useEffect(() => {
      getDatos1();
    }, []);

  //FIN VER TECNICOS

  //INICIA VER SERVICIOS
  const [ tecnicos, setTecnicos ] = useState([]);

  const getDatos = async() => {
      const url = "https://laptopfix.com.mx/laptopfixrun/api/tecnicos/ver_tecnicos"
      const options = {
        method:'POST',
      };
      const res = await fetchPost(url, options);
      setTecnicos(res.tecnicos);
      console.log("res", res.tecnicos);
      setLoading2(false);
  }

  useEffect(() => {
      getDatos();
    }, []);

  //TERMINA VER SERVICIOS

  const [loading1, setLoading1] = useState(true);

  const [loading2, setLoading2] = useState(true);



  return (
    <NativeBaseProvider config={config} >
      {/**Box que contiene toda la vista */}
      <Box  bg="white" h="91%">
        {/**Fondo gradiante */}
      <Gradiente/>
      {/**Row stack de bienvenida */}
      <Center h="10%">
        <HStack  >
            <VStack h="100%" w="90%">
              <Center     >
                <Text bold fontSize={24} color="#FFFFFF" >Bienvenido </Text>
              </Center>
              <Center   >
                <Text  fontSize={24} mx={1} color="#FFFFFF" lineHeight={29}>{nombre!==null  ? (nombre+" "+apellidos): "Invitado"}</Text>
              </Center>
            </VStack>
        </HStack>
      </Center>
        
        {/** scrool vertical para contenido*/}
          <ScrollView style={{paddingHorizontal:10}} horizontal={false} h="68%" mt={3}>
            {/**SCROOL HORIZONTAL PROMOCIONES */}
            <Box w="100%" h={200} bg="white">
            <Carrusel/>
            </Box>
                {/**BOTON SERVICIOS Y VER TODOS */} 
            <HStack  mt={3}>
              <Center h="10" w="30%"   bg="#236DB7"  rounded={10} ml={3}>
                <Text bold fontSize={16} letterSpacing={0.8} color="white">SERVICIOS</Text>
              </Center>
              <Center h="10" w="30%" ml="30%">
                <TouchableOpacity onPress={() => {
                    props.navigation.navigate("Servicios");
                  }}>
                <Text color= "#236DB7"
                fontWeight= "bold"
                fontSize= "lg">Ver todos 
                </Text>
                </TouchableOpacity>
              </Center>
            </HStack>

            {/**CONDICIONAL VISTA, CARGANDO */}

            {
              (loading1===true) ? (<Skeletor/>) 
              :
              (

              <ScrollView horizontal={true} mt={1} mx={2}>
              {servicios.map( (servicio, index) => {
                  return(
                    <TouchableOpacity key={index} onPress={() => detalleServicio(servicio.idS)
                    }>
                    <Box   bg="white" >
                      <Image source={{uri:servicio.image_url} } 
                      alt="image" style={{width: 90,
                      height: 90, resizeMode: "contain"}}/>
                      <Center mt={2}>
                          <Text bold >{servicio.nombreS}</Text>
                          
                      </Center>
                    </Box>
                    </TouchableOpacity>
                  );})}
              </ScrollView>
              )
            }
            
            


            

            {/**botones TECNICOS Y VER TODOS */}
            <HStack  my={3}>
              <Center h="10" w="30%" bg="#236DB7"  rounded={10} ml={3} >
                <Text bold fontSize={16} letterSpacing={0.8} color="white">TÉCNICOS</Text>
              </Center>
              <Center h="10" w="30%" ml="30%" >
                <TouchableOpacity onPress={() => {
                    props.navigation.navigate("Tecnicos");
                  }}>
                <Text color= "#236DB7"
                fontWeight= "bold"
                fontSize= "lg">Ver todos 
                </Text>
                </TouchableOpacity>
              </Center>
            </HStack>
              {/**SCROLL HORIZONTAL CON TECNICOS */}
              {
                (loading2===true) ?
                (<Skeletor/>) :
                (
                  <ScrollView horizontal={true}>
                    {tecnicos.map( (tecnico, index) => {
                      return(
                        <TouchableOpacity key={index} onPress={() => detalleTecnico(tecnico.idU)}>
                          <Box >
                          <Center>
                            <Image source={{uri:tecnico.image_url} } 
                              alt="image" style={{width: 80,
                              height: 80, resizeMode: "contain"}} borderColor="black" borderWidth={3} rounded={100} mx={1.5}/>
                          </Center>
                            <Center>
                              <Text bold>{tecnico.nombreU}</Text>
                              <Text >Técnico</Text>
                            </Center>
                        </Box>
                      </TouchableOpacity>
                      );} )}
                </ScrollView>
                )
              }
            

          </ScrollView>
          
           {/* <TouchableOpacity onPress={() => {
                    props.navigation.navigate("SkeletonServicio")}}>
            <Box bg="#00ff00" h={30}>
              TEST
            </Box>
          </TouchableOpacity>
           */}
           
          
        </Box>
        <Footer />
        
    </NativeBaseProvider>
  )
}
export default Home;