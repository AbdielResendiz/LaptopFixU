import React, { useState, useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Center, Divider, HStack, NativeBaseProvider, Text, VStack, Image, Box, ScrollView} from 'native-base';
import { useNavigation } from '@react-navigation/native';
import Footer from '../components/Footer';

const SobreNosotros = (props) => {
  const navigation =useNavigation();

  const [nombre, setNombre] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [ id, setId] = useState("");


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

    const MiPerfil= (item) => {

      if (item!=="") {
        console.log("if");
        props.navigation.navigate("MiPerfil", {
          idU: item,
        })
      } else {
        Alert.alert(   
          'Debes iniciar sesión para acceder',
          'Favor de iniciar sesión o registrarse para continuar',
          [
            { text: 'OK', onPress: () => props.navigation.navigate("Login") },
          ],
          { cancelable: false },  
        );
      }

      
    };
    
    const logOut = async() =>{
      
      try{
        await AsyncStorage.clear();
        navigation.reset({
          index: 0,
          routes: [{ name: 'Home' }],
      });

      }catch(error){
        console.log(error);
      }
    }



  return (
    <NativeBaseProvider>
      {/**Saludo inicial con nombre */}
      <Box bg="white"  w="100%" h="91%">
        <Center>
        <Image source={require("../img/SobreNos/user.png")
                      } alt="Alternate Text"  size="xl" />

        </Center>
      <Center>
        <Text  fontSize={20} italic>Bienvenido </Text>
      </Center>
      <Center>
        <Text  fontWeight={900} letterSpacing={.8} fontSize={26}> 
        {
          (nombre===null) ?
          (<Text  fontWeight={900} letterSpacing={.8} fontSize={26}> Invitado </Text>) :
          (<VStack>
            <Center>
              <Text  fontWeight={900} letterSpacing={.8} fontSize={26}> {nombre} </Text>
            </Center>
            
            <Center>
              <Text  fontWeight={900} letterSpacing={.8} fontSize={26}> {apellidos} </Text>
            </Center>

          </VStack>
          )
          
        }
        
        
        </Text>
      </Center>
      <Center w="50%" mb={1}>
        <Divider bg="#0081C1" thickness={2} ml="100%"/>
      </Center>
      <ScrollView>
          {/**inicia MENU CON 4 OPCIONES */}
        <Center>
          <HStack mx={4}    >
            {/**COLUMNA IZQUIERDA */}
            <VStack mr={6}>
              {/**MI PERFIL */}
              <TouchableOpacity onPress={()=>MiPerfil(id)}>
                <VStack >
                  <Center>
                    <Image source={require("../img/SobreNos/perfil.png")
                        } m={-3} mt={-5} alt="Alternate Text"  size="xl" />
                  </Center>
                </VStack>
              </TouchableOpacity>
              {/**CONTACTANOS */}
              <TouchableOpacity onPress={()=>{navigation.navigate("Contacto")}}>
                <VStack >
                  <Center>
                    <Image m={-3} mt={-5} source={require("../img/SobreNos/contacto.png")
                        } alt="Alternate Text"  size="xl" />
                  </Center>
                </VStack>
              </TouchableOpacity>
              {/**MIS DIRECCIONES */}
              <TouchableOpacity onPress={()=>{navigation.navigate("MisDirecciones")}}>
                <VStack>
                  <Center>
                    <Image m={-1} source={require("../img/SobreNos/direcciones.png")
                        } alt="Alternate Text"  size="xl" />
                  </Center>
                </VStack>
              </TouchableOpacity>
              {/**MAS APPS */}
            </VStack>
            {/**FIN COLUMNA IZQUIERDA */}
            {/**COLUMNA DERECHA */}
            <VStack >
              {/**ACERCA DE*/}
              <TouchableOpacity onPress={()=>{navigation.navigate("AcercaID")}}>
                <VStack >
                  <Center>
                    <Image m={-5} source={require("../img/SobreNos/id.png")
                        } alt="Alternate Text"  size="xl"/>
                  </Center> 
                  
                </VStack>
              </TouchableOpacity>
              {/**MIS ORDENES */}
              <TouchableOpacity onPress={()=>{navigation.navigate("MisPedidos")}}>
                <VStack >
                  <Center>
                    <Image m={-3} source={require("../img/SobreNos/ordenes.png")
                        } alt="Alternate Text"  size="xl" />
                  </Center>
                </VStack>
              </TouchableOpacity>
              
              {/**MAS APPS */}
              <TouchableOpacity onPress={()=>{navigation.navigate("InfoApps")}}>
                  <VStack>
                    <Center>
                      <Image  source={require("../img/MasApps.png")
                          } alt="Alternate Text"  size="xl" />
                    </Center>
                  </VStack>
              </TouchableOpacity>   
            </VStack>
          </HStack>
          {/**Cerrar */}

          { 
          (nombre!==null) ?
          (<TouchableOpacity onPress={()=>{logOut()}}>
          <VStack >
            <Center>
              <Image source={require("../img/Salir.png")
                  } alt="Alternate Text" mt={-5} size="xl" shadow={7}/>
            </Center>
          </VStack>
        </TouchableOpacity>) :
          ( <Divider bg="#fff"/> )
          }
          
        </Center>
        {/**FIN DE MENU  karladailyn19*/}

      </ScrollView>
      
      
      </Box>
      <Footer/>
      
    </NativeBaseProvider>
  )
}
export default SobreNosotros;

// 552 718 6815