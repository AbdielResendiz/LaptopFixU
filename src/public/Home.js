import React, { useState, useEffect } from 'react';
import {  TouchableOpacity} from 'react-native';
import { FontAwesome,  AntDesign } from '@expo/vector-icons'; 
import { NativeBaseProvider, HStack, Center, Box, 
  ScrollView , Stack, AspectRatio, Image, Heading, Text, VStack, View} from 'native-base';
import Footer from "../components/Footer"
import Card from "../components/Card"
import CardServicio from "../components/CardServicio"
import CardPaquete from "../components/CardPaquete"
import AsyncStorage from '@react-native-async-storage/async-storage';


const Home = (props) => {
  const [ nombre, setNombre ] = useState("");
  const [ apellidos, setApellidos ] = useState("");
  const [ correo, setCorreo ] = useState("");
  const [ id, setId ] = useState("");

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
    <NativeBaseProvider >
      <View flex={1} bg="white">
      {/**Row stack de bienvenida */}
        <HStack  h="15%">
            <VStack h="100%" w="60%">
              <Center   h="40%"  >
                <Text italic fontSize={18}>Bienvenido </Text>
              </Center>
              <Center  h="60%" >
                <Text bold fontSize={17} mx={1}>{conectado===true ? (nombre + " " + apellidos): "Invitado"}</Text>
              </Center>

            </VStack>
            {/**Boton CARRITO DE COMPRAS */}
            <Center h="100%" w="20%"  >
              <Center bg="#EEEEEE"  p={2} rounded={100} mr={1}>
                <TouchableOpacity onPress={()=>props.navigation.navigate("Carrito")}>
                  <AntDesign name="shoppingcart" size={34} color="#464646" />
                </TouchableOpacity>
              </Center>
            </Center>
            {/**BOTON CARRITO */}
            <Center h="100%" w="20%" bg="#132039" >
              <Center bg="#EEEEEE"  p={2} rounded={100} mr={1}>
                <TouchableOpacity onPress={()=>props.navigation.navigate("SobreNosotros")}>
                  <FontAwesome name="gears" size={24} color="#0f0f0f" />
                </TouchableOpacity>
              </Center>
            </Center>
            
        </HStack>
        {/** scrool vertical para contenido*/}
        <ScrollView style={{paddingHorizontal:10}} horizontal={false} h="68%">
          <HStack style={{justifyContent: "flex-end"}}>
            <Center h="10" w="30%" >
              <Text bold fontSize={16} letterSpacing={0.8}>OFERTAS</Text>
            </Center>
            <Center h="10" w="30%">
              <TouchableOpacity onPress={() => {
                  props.navigation.navigate("Servicios");
                }}>
              <Text color= "#236DB7"
              fontWeight= "bold"
              fontSize= "md">Ver todas 
              </Text>
              </TouchableOpacity>
            </Center>
          </HStack>
          <ScrollView horizontal={true}>
            <TouchableOpacity onPress={() => {
                  props.navigation.navigate("Detalle");
                }}>
              <Card />
            </TouchableOpacity>
            <Card/>
            <Card/>
          </ScrollView>

          <HStack style={{justifyContent: "flex-end"}} mt={3}>
            <Center h="10" w="30%" >
              <Text bold fontSize={16} letterSpacing={0.8}>TÉCNICOS</Text>
            </Center>
            <Center h="10" w="30%">
              <TouchableOpacity onPress={() => {
                  props.navigation.navigate("Servicios");
                }}>
              <Text color= "#236DB7"
              fontWeight= "bold"
              fontSize= "md">Ver todas 
              </Text>
              </TouchableOpacity>
            </Center>
          </HStack>
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

          <HStack style={{justifyContent: "flex-end"}} mt={3}>
            <Center h="10" w="30%" >
              <Text bold fontSize={16} letterSpacing={0.8}>PAQUETES</Text>
            </Center>
            <Center h="10" w="30%">
              <TouchableOpacity onPress={() => {
                  props.navigation.navigate("Servicios");
                }}>
              <Text color= "#236DB7"
              fontWeight= "bold"
              fontSize= "md">Ver todos 
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

        </ScrollView>
        <Footer />
        </View>
        
    </NativeBaseProvider>
  )
}
export default Home;