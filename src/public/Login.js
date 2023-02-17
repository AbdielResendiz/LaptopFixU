import * as React from "react";
import { useState } from "react";
import { Box, Text, Heading, VStack, FormControl, Input,  
 HStack, Center, NativeBaseProvider, Image, Spinner, ZStack } from "native-base";
import { TouchableOpacity, Alert } from "react-native";
import md5 from "md5";
import { useNavigation } from '@react-navigation/native';
import URL from "../private/api/URL";
import AsyncStorage from '@react-native-async-storage/async-storage';

import fetchPost from "../private/api/fetchPost";

const Login = (props) => {
  const navigation =useNavigation();
  const BASE_URL = URL.BASE_URL;

    //datos usuario

    const [correo, setCorreo] = useState("");
    const [contrasenia, setContrasenia] = useState("");

    const [loading, setLoading] = useState(false);
  

  


    const Login2 = async() => {
      {/**se mandan los datos al controlador */}
      setLoading(true);
      const dataLogin = new FormData();
        dataLogin.append("correo", correo);
        dataLogin.append("contrasenia", md5(contrasenia));
        
        {/**se envia al servidor */}
        const url = `${BASE_URL}api/login/inicio_sesion`
        const options = {
          method:'POST',
          body: dataLogin
        };
        {/**respuesta */}
        const res = await fetchPost(url, options);
        console.log("res", res.data);

        console.log("res", res.mensaje);
        {/**LOGIN INVALIDO */}
        if (res.data===null){

       

          Alert.alert(
            'Inicio de sesión fallido',
            'Correo o contraseña incorrectos. \nPor favor intenta de nuevo.',
            [
              { text: 'OK', onPress: () => setLoading(false) },
            ],
            { cancelable: false },  
          );


       
      }
      
      else{
        {/**LOGIN CORRECTO */}

        try {
          {/**guardamos el nombre en local variables terminan AS (AsyncStorage) */}
          
          await AsyncStorage.setItem('idUser', res.data.idU);
          await AsyncStorage.setItem('idCarrito', res.data.id);
          
          
          
        } catch (e) {
          console.log("Error login:", e);
        }
       








        Alert.alert(
          'Inicio de sesion exitoso',
          'BIENVENIDO',
          [
            { text: 'OK',  onPress: () => {navigation.reset({
              index:0,
              routes:[{name: 'Home'}],
            })
          }  },
          ],
          { cancelable: false },
        );

        try {
          const value = await AsyncStorage.getItem('nombreAS')
          if(value !== null) {
            // value previously stored
            console.log("value nombreAS: ", value)
          }
        } catch(e) {
          // error reading value
        }
        setLoading(false)

      }
    }
  

   




  
        return (
          <NativeBaseProvider>
            

            
            <ZStack h="100%" w="100%">
              <Image source={require('../img/fondo-min.png')} alt={"fondo"}  w="100%" h="100%" resizeMode="stretch"  />
              
              <Box  h="75%" w="80%" mx="10%" mt="30%" rounded={10} opacity={0.7} bg="black"></Box>
              
              <Center  h="100%" w="80%" mx="10%" >
                <Text style={{fontFamily: 'CircularApp'}} color="#bfbfbf" fontSize={25} mx={6}>SERVICIO TÉCNICO </Text>
                <Text style={{fontFamily: 'CircularApp'}}color="#bfbfbf" fontSize={25} mx={6}>Y</Text>
                <Text style={{fontFamily: 'CircularApp'}} color="#bfbfbf" fontSize={25} mx={6}>MANTENIMIENTO</Text>
                <Text style={{fontFamily: 'CircularApp'}} color="#bfbfbf" fontSize={15} letterSpacing={0.9}>DE COMPUTADORAS A</Text>
                <Text style={{fontFamily: 'CircularApp'}} color="#bfbfbf" fontSize={15} letterSpacing={0.9}>DOMICILIO</Text>
                <Image 
                  source={require( "../img/Logo1Run.png")
                  } alt="Alternate Text" size="lg" my={4} />
              <Center w="100%">
                  <Box  w="90%" maxW="290">
                    <VStack space={3}  >
                      <FormControl bg="white" mb={3}>
                        
                        <Input placeholder='CORREO ELECTRÓNICO'
                        keyboardType='email-address'
                        onChangeText={(val) => setCorreo(val)}
                        autoCapitalize='none'
                        value={correo}
                        />
                      </FormControl>
                      <FormControl bg="white" >
                        <Input type="password" 
                        placeholder='CONTRASEÑA'
                        onChangeText={(val) => setContrasenia(val)}
                        value={contrasenia}
                        />
                       
                      </FormControl>

                      {/**Botón INICIAR SESIÓN */}
                      <Center>
                        <TouchableOpacity onPress={Login2}>
                          <Box mt="2" bg="#236DB7" w="60%" rounded={10} p={3} shadow={7}>
                            { loading==false ? (
                              <Text color="white" fontSize={18} letterSpacing={0.9} style={{fontFamily: 'CircularApp'}}> Iniciar Sesión </Text>
                            ) :
                            (<Spinner size={"lg"} color="white"/>)
                            }
                            
                          </Box>
                        </TouchableOpacity>
                      </Center>
                      
                      


                      <HStack mt="3" justifyContent="center">
                        <Text fontSize="lg" color="white"  style={{fontFamily: 'CircularApp'}} >
                          ¿Nuevo usuario?{" "}
                        </Text>
                        <TouchableOpacity onPress={() => {
                              navigation.navigate("SignUp");
                            }}>
                        <Text color= "white" style={{fontFamily: 'CircularApp'}}
                        fontSize= "lg" underline
                      >
                          Registrarse
                        </Text>
                        </TouchableOpacity>
                      </HStack>
                    </VStack>
                  </Box>
                </Center>
              </Center>
            </ZStack>
            
            
            
          </NativeBaseProvider>
        )
    }
    
    export default Login;