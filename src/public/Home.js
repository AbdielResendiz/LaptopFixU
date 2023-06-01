import React, { useState, useEffect } from 'react';
import {  TouchableOpacity} from 'react-native';
import { NativeBaseProvider, HStack, Center, Box, Input, Icon,
  ScrollView  , Image, Text, VStack, FlatList, Divider} from 'native-base';
import AsyncStorage from '@react-native-async-storage/async-storage';
/**componentes */
import config from '../private/api/config';
import { FontAwesome, AntDesign } from '@expo/vector-icons'; 
import fetchPost from '../private/api/fetchPost';
import Gradiente from '../components/Gradiente';
import URL from '../private/api/URL';
import Skeletor from '../components/Skeletor';
import styles from '../styles/styles';
import baseColor from '../private/api/baseColor';
import SwiperList from '../components/SwiperList';

const Home = (props) => {

  const test = false;
 

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
 
  
  console.log("idUser", id);
  console.log("idCarrito", idC)


    

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
    fetchData();
  }, [])
//BUSCAR
  //BUSCAR
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  console.log("resultados busqueda", results);
  const [cargando, setCargando] = useState(true);

  const handleSearch = async () => {

   
    try {
      const response = await fetch(`https://laptopfix.com.mx/laptopfixrun/api/servicios/buscar?q=${searchTerm}`);
      const data = await response.json();
      setResults(data);
      
    } catch (error) {
      console.error(error);
    }
   
  
  };
 
  

  const borrarResultados = async() =>{
    setResults([]);
    setSearchTerm("");
  }

  const Testing = () =>{
    return(
     
      <TouchableOpacity onPress={() => {
          props.navigation.navigate("Test");
        }}>
      <Text borderWidth={1} mx={1} px={2} w={16} bg="#ffffff">TEST</Text>
    </TouchableOpacity>
     
    
    );
  };


  //fin buscar
//Fin Buscar
  return (
    <NativeBaseProvider config={config} >
      {/**Box que contiene toda la vista */}
      <Box  bg={baseColor.bg} flex={1}>
        {/**Fondo gradiante */}
      <Gradiente/>
      {/**Row stack de bienvenida */}
      <Center h={16}>
        <HStack  >
            <VStack h="100%" w="95%">
              <HStack w="100%"> 
                <Center w="15%">
                {/**boton de regresar, testing y busqueda */}
                  { (results.length===0) ? (test===true ? <Testing/> : null) : (
                    <Center mx={3} >
                    <TouchableOpacity onPress={()=>borrarResultados()}>
                    <Icon as={<AntDesign name="arrowleft" />} size={8}  color="muted.100" />
                    </TouchableOpacity>
                  </Center>
                  ) }
                  </Center>
                <Center w="80%"  >
                  <Box bg="#ffffff" borderRadius={25}>
                    <Input variant="rounded" placeholder="Buscar"  
                      bg="#fff" w={"100%"}
                      value={searchTerm}
                      onChangeText={setSearchTerm}
                      onSubmitEditing={handleSearch} 
                      InputLeftElement={<Icon as={<FontAwesome name="search" />} size={5} ml="2" color="muted.400" />}/>
                  </Box>
                </Center>
              </HStack>
             {/**FIN busqueda */}
            </VStack>
        </HStack>
      </Center>
              { (results.length === 0)
               ? (
                <ScrollView style={{paddingHorizontal:10}} horizontal={false} h="68%" >
            {/**SCROOL HORIZONTAL PROMOCIONES */}
            <Box w="100%"  bg="white" mt={1}>
              {/**CARRUSEL */}
            <SwiperList/>
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
                            <Image source={{uri:`${BASE_URL}${tecnico.avatar_usuario}`} } 
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
               )
               : (

                
                    <FlatList data={results} keyExtractor={(item) => item.idS}
                bg={baseColor.bg} renderItem={({ item }) => (
                    <Box bg={"white"} rounded="lg" marginLeft={5} marginRight={5} marginTop={2}>
                    <TouchableOpacity
                      onPress={() => detalleServicio(item.idS)}>
                        <HStack>
                            <Image 
                                source={{
                                uri: item.image_url
                                }}alt="Alternate Text" size="lg" resizeMode='contain' />
                            <Box w="60%" mt={5} ml={4}>
                                <Text style={styles.Texts} fontSize={20} color="#236DB7" >{item.nombreS}</Text>
                                <Text><Text bold>Precio: </Text>${item.precioS}</Text>
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
                )}
                />
                  
                
                
               ) }

        
        {/** scrool vertical para contenido*/}
        
        </Box>

    </NativeBaseProvider>
  )
}
export default Home;