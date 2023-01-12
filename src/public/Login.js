import * as React from "react";
import { useState } from "react";
import { Box, Text, Heading, VStack, FormControl, Input, Link, 
  Button, HStack, Center, NativeBaseProvider, Image } from "native-base";
import { TouchableOpacity, Alert, AsyncStorage } from "react-native";
import { useNavigation } from '@react-navigation/native';
import URL from "../private/api/URL";
import axios from "axios";

const Login = (props) => {
  const navigation =useNavigation();

    //datos usuario

    const [correo, setCorreo] = useState("aa@aa.com");
    const [contrasenia, setContrasenia] = useState("12346");

    const Login2 = async() => {
      try{
      const dataLogin = new FormData();
      
        dataLogin.append("correo", correo);
        dataLogin.append("contrasenia", contrasenia);
    
        console.log("data", dataLogin)
        await fetch('https://laptopfix.com.mx/laptopfixrun/api/login/inicio_sesion',{
          method:'POST',
          body: dataLogin
        })
        .then((response) => response.json())
        .then((resultados) => {
        console.log('Data:', resultados.data);
        //console.log('Nombre:', resultados.data.nombreU);
        //console.log('apellido:', resultados.data.apellidos);
        console.log('Mensaje:', resultados.mensaje);
        if (resultados.data===null){
          
            Alert.alert(
              'Inicio de sesión fallido',
              'Correo o contraseña incorrectos. \nPor favor intenta de nuevo.',
              [
                { text: 'OK', onPress: () => console.log('OK Pressed') },
              ],
              { cancelable: false },  
            );
          
        }
        else{

          
          
          Alert.alert(
            'Inicio de sesion exitoso',
            'BIENVENIDO',
            [
              { text: 'OK',  onPress: () => {navigation.navigate("Home")}  },
            ],
            { cancelable: false },
          );

        }
        
        
        })
        .catch((ex) => {
          console.log('Error:', ex);
          Alert.alert('ERROR', 'Ups... algo salio mal, intenta de nuevo');
        });
      
      
    }
    catch{
      console.log('hay error')
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
                        <Text color="white" fontSize={18} letterSpacing={0.9} fontWeight={700}> Iniciar sesión </Text>
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