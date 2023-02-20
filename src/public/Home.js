import React, { useState, useEffect } from 'react';
import {  TouchableOpacity} from 'react-native';
import { NativeBaseProvider, HStack, Center, Box, 
  ScrollView  , Image, Text, VStack} from 'native-base';
import AsyncStorage from '@react-native-async-storage/async-storage';
/**componentes */
import config from '../private/api/config';
import Footer from "../components/Footer";
import fetchPost from '../private/api/fetchPost';
import Carrusel from '../components/Carrusel';
import Gradiente from '../components/Gradiente';
import URL from '../private/api/URL';
import Skeletor from '../components/Skeletor';
import styles from '../styles/styles';
import baseColor from '../private/api/baseColor';

const Home = (props) => {


 

  const [ nombre, setNombre ] = useState(null);
  const [ apellidos, setApellidos ] = useState("");
  const [ id, setId ] = useState(null);
  const [ idC, setIdC ] = useState(null);

  

  const BASE_URL = URL.BASE_URL;
  {/**Funcion que escanea las variables almacenadas en local storage */}
  const detalleServicio= (item) => {
    props.navigation.navigate("DetalleServicio", {
      idServicio: item,
      idUser: id,
      idC: idC
    });
  };

  const detalleTecnico= (item) => {
    props.navigation.navigate("DetalleTecnico", {
      idTecnico: item,
    });
  };
 
  async function fetchData() {
    try {
      
      await AsyncStorage.getItem("idUser").then(async (value) => {
        setId(parseInt(value)); })
      await AsyncStorage.getItem("idCarrito").then(async (value) => {
          setIdC(parseInt(value)); })
    } catch (error) {
      console.log(error);
    }
    
  }
  fetchData();
  
  console.log("idUser", id);
  console.log("idCarrito", idC)

  //OBTIENE DATOS DE LA BD. el nombre y apellido
    const getNombre = async() => {
      const dataUser = new FormData();
      dataUser.append("idU",id)
      const url = `${BASE_URL}api/login/get_info`
      const options = {
        method:'POST',
        body: dataUser
      };
      const res = await fetchPost(url, options);
       console.log("response fetch get nombre:", res.data);
       if (res.data != null){
         
        try{
          setApellidos(res.data.apellidos);
          setNombre(res.data.nombreU);
         
         }catch(e){
          console.log("error getNombre", e);
         }
        
       }else{
        
        console.log("No se ha iniciado sesión", res.data)
       }
    
    }
    getNombre();

  //INICIA Ver TECNICOS
  const [ servicios, setServicios ] = useState([]);

  const getDatos1 = async() => {
      const url = `${BASE_URL}api/servicios/ver_servicios`
      const options = {
        method:'POST',
      };
      const res = await fetchPost(url, options);
      setServicios(res.data);
     // console.log("res", res.data);
      setLoading1(false);
  }

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
      //console.log("res", res.tecnicos);
      setLoading2(false);
  }

  //TERMINA VER SERVICIOS

  const [loading1, setLoading1] = useState(true);
  const [loading2, setLoading2] = useState(true);
 //console.log("id user", id);

  useEffect( () =>{
    getDatos();
    getDatos1();
  }, [])

  return (
    <NativeBaseProvider config={config} >
      {/**Box que contiene toda la vista */}
      <Box  bg={baseColor.bg} h="91%">
        {/**Fondo gradiante */}
      <Gradiente/>
      {/**Row stack de bienvenida */}
      <Center h="12%">
        <HStack  >
            <VStack h="100%" w="95%">
              <Center     >
                <Text  fontSize={24} style={styles.textColor2} >Bienvenido </Text>
              </Center>
              {/**BOTON TESTING */}
                <TouchableOpacity onPress={() => {
                    props.navigation.navigate("Test");
                  }}>
                <Text borderWidth={1} mx={3} px={2} w={60} bg="#ffffff">TEST</Text>
              </TouchableOpacity>
               
              
              <Center   >
                <Text  fontSize={18} mx={1} my={1} style={styles.textColor2} lineHeight={20} >
                  {nombre!==null  ? (nombre+" "+apellidos): "Invitado"}
                </Text>
              </Center>
            </VStack>
        </HStack>
      </Center>
        
        {/** scrool vertical para contenido*/}
          <ScrollView style={{paddingHorizontal:10}} horizontal={false} h="68%" >
            {/**SCROOL HORIZONTAL PROMOCIONES */}
            <Box w="100%"  bg="white" mt={1}>
            <Carrusel/>
            </Box>
                {/**BOTON SERVICIOS Y VER TODOS */} 
            <HStack  mt={3}>
              <Center h="10" w="30%"     rounded={10} ml={3}>
                <Text  fontSize={"md"} letterSpacing={0.8}  style={styles.textColor}>
                  SERVICIOS
                </Text>
              </Center>
              <Center h="10" w="30%"  style={styles.Color} ml="30%" rounded={20} shadow={7}>
                <TouchableOpacity onPress={() => {
                    props.navigation.navigate("Servicios");
                  }}>
                <Text style={styles.textColor2} fontSize= "lg">
                  Ver todos 
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
                    <TouchableOpacity 
                      key={index} onPress={() => detalleServicio(servicio.idS)}>
                    <Box    >
                      <Image source={{uri:servicio.image_url} } 
                      alt="image" size="md" resizeMode="contain"/>
                      <Center mt={2} mr={2}>
                          <Text  fontSize={12} maxW={97} lineHeight={18} style={styles.Texts}>
                            {servicio.nombreS}
                          </Text>
                          
                      </Center>
                    </Box>
                    </TouchableOpacity>
                  );})}
              </ScrollView>
              )
            }

            {/**botones TECNICOS Y VER TODOS */}
            <HStack  my={3}>
              <Center h="10" w="30%"   rounded={10} ml={3} >
                <Text  style={styles.textColor} fontSize="md" letterSpacing={0.8} >
                  TÉCNICOS
                </Text>
              </Center>
              <Center h="10" w="30%"  style={styles.Color} ml="30%" rounded={20} shadow={7}>
                <TouchableOpacity onPress={() => {
                    props.navigation.navigate("Tecnicos");
                  }}>
                <Text  fontSize= "lg" style={styles.textColor2}>
                  Ver todos 
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
                              alt="image" size="md" borderColor="black" borderWidth={3} rounded={100} mx={1.5}/>
                          </Center>
                            <Center>
                              <Text style={styles.Texts}>
                                {tecnico.nombreU}
                              </Text>
                            </Center>
                        </Box>
                      </TouchableOpacity>
                      );} )}
                </ScrollView>
                )
              }
          </ScrollView>
        </Box>
      <Footer />
    </NativeBaseProvider>
  )
}
export default Home;