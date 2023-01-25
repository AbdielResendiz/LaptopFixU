import * as React from "react";
import { useState } from "react";
import { Box, Text, Heading, VStack, FormControl, Input, Link, 
  Button, HStack, Center, NativeBaseProvider, Image, Spinner } from "native-base";
import { TouchableOpacity, Alert } from "react-native";
import { useNavigation } from '@react-navigation/native';
import URL from "../private/api/URL";
import AsyncStorage from '@react-native-async-storage/async-storage';

import fetchPost from "../private/api/fetchPost";

const Login = (props) => {
  const navigation =useNavigation();
  const BASE_URL = URL.BASE_URL;

    //datos usuario

    const [correo, setCorreo] = useState("aa@aa.com");
    const [contrasenia, setContrasenia] = useState("123456");

    const [loading, setLoading] = useState(false);

 

  


    const Login2 = async() => {
      {/**se mandan los datos al controlador */}
      setLoading(true);
      const dataLogin = new FormData();
        dataLogin.append("correo", correo);
        dataLogin.append("contrasenia", contrasenia);
        console.log("data", dataLogin)
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
          await AsyncStorage.setItem('nombreAS', res.data.nombreU);
          await AsyncStorage.setItem('apellidosAS', res.data.apellidos);
          await AsyncStorage.setItem('correoAS', res.data.correo);
          await AsyncStorage.setItem('idAS', res.data.idU);
          await AsyncStorage.setItem('conectado', "conectado");
          
        } catch (e) {
          console.log("Error login:", e);
        }

        Alert.alert(
          'Inicio de sesion exitoso',
          'BIENVENIDO',
          [
            { text: 'OK',  onPress: () => {navigation.navigate("Home")}  },
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
            <Center flex={1} px="3">
              <Image 
                source={require( "../img/Logo1Run.png")
                } alt="Alternate Text" size="40" mt={-16} />
              <Center w="100%">
              <Box safeArea p="2" py="1" w="90%" maxW="290">
                <Center>
                  <Heading size="lg" fontWeight="600" color="coolGray.800" _dark={{
                  color: "warmGray.50"
                  }}>
                    Bienvenido
                  </Heading>
                  
                </Center>
                
                <Heading mt="1" _dark={{
                color: "warmGray.200"
              }} color="coolGray.600" fontWeight="medium" size="xs">
                  ¡Ingresa tus datos para continuar!
                </Heading>

                <VStack space={3} mt={3} >
                  <FormControl >
                    <FormControl.Label>Correo electrónico</FormControl.Label>
                    <Input placeholder='Correo electrónico'
                    keyboardType='email-address'
                    onChangeText={(val) => setCorreo(val)}
                    autoCapitalize='none'
                    value={correo}
                     />
                  </FormControl>
                  <FormControl>
                    <FormControl.Label>Contraseña</FormControl.Label>
                    <Input type="password" 
                    placeholder='Contraseña'
                    onChangeText={(val) => setContrasenia(val)}
                    value={contrasenia}
                     />
                    <Link _text={{
                    fontSize: "xs",
                    fontWeight: "500",
                    color: "indigo.500"
                  }} alignSelf="flex-end" mt="1">
                      ¿Olvidaste tu contraseña?
                    </Link>
                  </FormControl>

                  {/**Botón INICIAR SESIÓN */}
                  <Center>
                    <TouchableOpacity onPress={Login2}>
                      <Box mt="2" bg="#236DB7" w="60%" rounded={30} p={3} shadow={7}>
                        { loading==false ? (
                          <Text color="white" fontSize={18} letterSpacing={0.9} fontWeight={700}> Iniciar sesión </Text>
                        ) :
                        (<Spinner size={"lg"} color="white"/>)
                        }
                        
                      </Box>
                    </TouchableOpacity>
                  </Center>
                  
                  


                  <HStack mt="3" justifyContent="center">
                    <Text fontSize="lg" color="coolGray.600"  _dark={{
                    color: "warmGray.200"
                  }}>
                      ¿Nuevo usuario?{" "}
                    </Text>
                    <TouchableOpacity onPress={() => {
                          navigation.navigate("SignUp");
                        }}>
                    <Text 
                    color= "#236DB7"
                    fontWeight= "medium"
                    fontSize= "lg"
                  >
                      Registrarse
                    </Text>
                    </TouchableOpacity>
                  </HStack>
                </VStack>
              </Box>
            </Center>
            </Center>
          </NativeBaseProvider>
        )
    }
    
    export default Login;