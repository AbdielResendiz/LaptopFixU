import React, { useState, useEffect } from 'react';
import {  TouchableOpacity, Dimensions} from 'react-native';
import { FontAwesome,  AntDesign } from '@expo/vector-icons'; 
import { NativeBaseProvider, HStack, Center, Box, 
  ScrollView , Stack, AspectRatio, Image, Heading, Text, VStack, View, ZStack} from 'native-base';
import Footer from "../components/Footer"
import Card from "../components/Card"
import CardServicio from "../components/CardServicio"
import CardPaquete from "../components/CardPaquete"
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LinearGradient } from 'expo-linear-gradient';
import { SwiperFlatList } from 'react-native-swiper-flatlist';

const Home = (props) => {
  const [ nombre, setNombre ] = useState("");
  const [ apellidos, setApellidos ] = useState("");
  const [ correo, setCorreo ] = useState("");
  const [ id, setId ] = useState("");

  const colors = ['tomato', 'thistle', 'skyblue', '#00ff00'];

  const [ conectado, setConectado ] = useState(false);
  {/**Funcion que escanea las variables almacenadas en local storage */}
  const status = () => {
    if (id!=="") {
      setConectado(true)
      console.log("conectado?", conectado)
     }
     else{
      console.log("conectado?", conectado)
     }

  };
  useEffect( ()=>{
    status();
  }
  )
  const config = {
    dependencies: {
      'linear-gradient': LinearGradient
    }
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
    
        await AsyncStorage.getItem("correoAS").then(async (value) => {
        setCorreo(value);
        console.log("Correo effect: ", correo);
        });
    
        await AsyncStorage.getItem("idAS").then(async (value) => {
          setId(value);
          console.log("ID effect: ", id);
         
        });
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  });
  




  


  return (
    <NativeBaseProvider config={config} >
    

      <Box  bg="white" h="91%">
       
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
      {/**Row stack de bienvenida */}
      <Center h="10%">
        <HStack  >
            <VStack h="100%" w="60%">
              <Center     >
                <Text bold fontSize={24} color="#FFFFFF" >Bienvenido </Text>
              </Center>
              <Center   >
                <Text  fontSize={24} mx={1} color="#FFFFFF">{nombre!==null ? (nombre + " " + apellidos): "Invitado"}</Text>
              </Center>
            </VStack>
        </HStack>

      </Center>
        

        {/** scrool vertical para contenido*/}
        <ScrollView style={{paddingHorizontal:10}} horizontal={false} h="68%" mt={3}>
          {/**SCROOL HORIZONTAL PROMOCIONES */}
          <Box w="100%" h={200} bg="white">
          <SwiperFlatList
              autoplay
              autoplayDelay={4}
              autoplayLoop
              index={2}
              showPagination
              data={colors}
              
              renderItem={({ item }) => (
                <Box bg={item} w={Dimensions.get('window').width} > 
                  <Text >{item}</Text>
                </Box>
              )}
            />
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
          <ScrollView horizontal={true}>
          <TouchableOpacity onPress={() => {
                  props.navigation.navigate("Detalle");
                }}>
            <CardPaquete/>
            </TouchableOpacity>
            <CardPaquete/>
            <CardPaquete/>
            <CardPaquete/>
            <CardPaquete/>
            

          </ScrollView>

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
          <ScrollView horizontal={true}>
            <TouchableOpacity onPress={() => {
                  props.navigation.navigate("Detalle");
                }}>
              <CardServicio/>
            </TouchableOpacity>
            <CardServicio/>
            <CardServicio/>
            <CardServicio/>
            <CardServicio/>
            

          </ScrollView>


        </ScrollView>
        
        </Box>
        <Footer />
        
    </NativeBaseProvider>
  )
}
export default Home;