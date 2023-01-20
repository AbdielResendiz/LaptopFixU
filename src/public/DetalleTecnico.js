import React, {useEffect, useState} from 'react';
import { TouchableOpacity } from 'react-native';
import { Box, Heading, VStack, FormControl, Input, Link, 
  Button, HStack, Center, Text, NativeBaseProvider, ScrollView, View, Image, ZStack } from "native-base";
  import { FontAwesome5, MaterialIcons } from '@expo/vector-icons'; 
  import { useNavigation } from '@react-navigation/native';
//import de componentes y  configuraciones
import Footer from "../components/Footer"
import fetchPost from '../private/api/fetchPost';
import config from '../private/api/config';
import Gradiente from '../components/Gradiente';
import URL from '../private/api/URL';

const DetalleTecnico = (props) => {
  const navigation =useNavigation();
  const BASE_URL = URL.BASE_URL;

  const [ tecnico, setTecnico ] = useState([]);

  const idTecnico = props.route.params.idTecnico;
  console.log("id Tecnico UWU: ", idTecnico);
  const dataTecnico = new FormData();
        dataTecnico.append("idU", idTecnico);

  const getDatos = async() => {
    const url = `${BASE_URL}api/tecnicos/detalle_tecnico`
    const options = {
      method:'POST',
      body: dataTecnico
    };
    const res = await fetchPost(url, options);
    setTecnico(res.data[0]);
    console.log("res", tecnico.nombreU);
}

useEffect(() => {
    getDatos();
  }, []);

  
  
  return (
    <NativeBaseProvider config={config}>
      <Box bg="#FFFFFF" h="91%" >
        <ZStack mb={10}>
          <Gradiente/>
          
          <Image source={{
           uri: "https://www.ccsipro.com/wp-content/uploads/2021/01/iStock-1144570833.jpg"
            }} alt="Alternate Text" w="80%" h={200} mx="10%" rounded={20} />
         
          
          
        </ZStack>

        <Center>
          <Box w={151} h={151}  rounded={100} mt={20} >
          <Image source={{
           uri: tecnico.image_url
            }} alt="Alternate Text" w={150} h={150}  rounded={100} resizeMode="contain" />
          </Box>
          

        </Center>
        <Center mt={5}>
          <Text bold color="#236DB7" fontSize={26}>{tecnico.nombreU + " " + tecnico.apellidos}</Text>
        </Center>
        <Center>
          <Text fontSize={20}>Técnico</Text>
        </Center>
       
       <ScrollView  >
        {/**inicia MENU CON 4 OPCIONES */}
      <Center>
        <HStack mx={4}    >
          {/**COLUMNA IZQUIERDA */}
          <VStack mr={6}>
            {/**MI PERFIL */}
            <TouchableOpacity onPress={()=>{navigation.navigate("DetalleTecnico")}}>
              <VStack >
                <Center>
                  <Image source={require("../img/detalleTecnico/info.png")
                      }   alt="Alternate Text"  size="lg" resizeMode='contain' />
                </Center>
                <Center>
                  <Text>Información Personal</Text>
                </Center>
              </VStack>
            </TouchableOpacity>
            {/**CONTACTANOS */}
            <TouchableOpacity onPress={()=>{navigation.navigate("DetalleTecnico")}}>
              <VStack >
                <Center>
                  <Image source={require("../img/detalleTecnico/contacto.png")
                      } alt="Alternate Text"  size="lg" resizeMode='contain'/>
                </Center>
                <Center>
                  <Text>Contactame</Text>
                </Center>
              </VStack>
            </TouchableOpacity>
          
            {/**MAS APPS */}
          </VStack>
          {/**FIN COLUMNA IZQUIERDA */}
          {/**COLUMNA DERECHA */}
          <VStack >
            {/**ACERCA DE*/}
            <TouchableOpacity onPress={()=>{navigation.navigate("DetalleTecnico")}}>
              <VStack >
                <Center>
                  <Image  source={require("../img/detalleTecnico/costos.png")
                      } alt="Alternate Text"  size="lg" resizeMode='contain'  />
                </Center> 
                <Center>
                  <Text>Costos de Servicios</Text>
                </Center>
                
              </VStack>
            </TouchableOpacity>
            {/**MIS ORDENES */}
            <TouchableOpacity onPress={()=>{navigation.navigate("DetalleTecnico")}}>
              <VStack >
                <Center>
                  <Image  source={require("../img/detalleTecnico/credenciales.png")
                      } alt="Alternate Text"  size="lg" resizeMode='contain'/>
                </Center>
                <Center>
                  <Text>Credenciales</Text>
                </Center>
              </VStack>
            </TouchableOpacity>
            
            
          </VStack>
        </HStack>
        
      </Center>
      {/**FIN DE MENU */}

        
       

       </ScrollView>

      </Box>
      

      <Footer/>
    </NativeBaseProvider>
  )
}
export default DetalleTecnico;