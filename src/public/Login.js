import * as React from "react";
import { useState } from "react";
import { Box, Text, Heading, VStack, FormControl, Input,  
 HStack, Center, NativeBaseProvider, Image, Spinner, Icon, ScrollView, Pressable } from "native-base";
import { TouchableOpacity, Alert, ImageBackground } from "react-native";
import md5 from "md5";
import { useNavigation } from '@react-navigation/native';
import URL from "../private/api/URL";
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from "../styles/styles";
import fetchPost from "../private/api/fetchPost";
import { MaterialIcons } from '@expo/vector-icons'; 

const Login = (props) => {
  const navigation =useNavigation();
  const BASE_URL = URL.BASE_URL;

    //datos usuario

    const [correo, setCorreo] = useState("");
    const [contrasenia, setContrasenia] = useState("");
    const [show, setShow] = React.useState(false);
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
            <ImageBackground source={require('../img/fondo-min.png')} 
              alt={"fondo"}   style={{flex:1}}  >
                <ScrollView>
              <Center  w="80%" mx="10%" mt={24} rounded={10}  bg="black:alpha.50">
        
                <Image 
                  source={require( "../img/Logo1Run.png")
                  } alt="Alternate Text" size="lg" my={4} />
              <Center w="100%">
                  <Box  w="90%" maxW="290">
                    <VStack space={3}  >
                      <FormControl mb={2}>
                        <Text color={"white"}>Correo electrónico: </Text>
                          <Input placeholder='Correo electrónico' bg="white" _focus={{ bg: 'white' }}
                            keyboardType='email-address'
                            onChangeText={(val) => setCorreo(val)}
                            autoCapitalize='none'
                            value={correo}
                            InputLeftElement={<Icon as={<MaterialIcons name="email" />} size={5} ml="2" color="muted.400" />}
                            />
                      </FormControl>
                      <FormControl >
                        <Text color={"white"}>Contraseña: </Text>
                        <Input type={show ? "text" : "password"}
                                bg="white" _focus={{ bg: 'white' }}
                                placeholder='Contraseña'
                                onChangeText={(val) => setContrasenia(val)}
                                value={contrasenia} 
                                InputLeftElement={<Icon as={<MaterialIcons name="vpn-key" />} size={5} ml="2" color="muted.400" />}
                                InputRightElement={<Pressable onPress={() => setShow(!show)}>
                                  <Icon as={<MaterialIcons name={show ? "visibility" : "visibility-off"} />}size={5} mr="2" color="muted.400" />
                                  </Pressable>} 
                                />
                      </FormControl>

                      {/**Botón INICIAR SESIÓN */}
                      <Center>
                        <TouchableOpacity onPress={Login2}>
                          <Box mt="2" style={styles.Color} w="70%" rounded={10} p={3} shadow={7}>
                            { loading==false ? (
                              <Text color="white" fontSize={18} letterSpacing={0.9} style={styles.textColor2}> Iniciar Sesión </Text>
                            ) :
                            (<Spinner size={"lg"} color="white"/>)
                            }
                            
                          </Box>
                        </TouchableOpacity>
                      </Center>
                      
                      


                      <HStack my="3" justifyContent="center">
                        <Text fontSize="lg"   style={styles.textColor2} >
                          ¿Nuevo usuario?{" "}
                        </Text>
                        <TouchableOpacity onPress={() => {
                              navigation.navigate("SignUp");
                            }}>
                        <Text  style={styles.textColor2}
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
              </ScrollView>
            </ImageBackground>
          

            
            
          </NativeBaseProvider>
        )
    }
    
    export default Login;