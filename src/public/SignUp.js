import  React, {useState} from "react";
import { Box, Text, ScrollView, VStack, FormControl, Input, 
   HStack, Center, NativeBaseProvider, Pressable, Spinner, Icon } from "native-base";
  import { TouchableOpacity, Alert, ImageBackground } from "react-native";
  import md5 from "md5";
import { useNavigation } from '@react-navigation/native';
import fetchPost from "../private/api/fetchPost";
import styles from "../styles/styles";
import baseColor from "../private/api/baseColor";
import { MaterialIcons } from '@expo/vector-icons'; 
const SignUp = () => {

  const navigation =useNavigation();
  const [correo, setCorreo]= useState("");
  const [contrasenia, setContrasenia] = useState("");
  const [contrasenia2, setContrasenia2] = useState("");
  const [nombreU, setNombreU] = useState("")
  const [apellidos, setApellidos] = useState("");
  const [telefono, setTelefono] = useState("");
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);


  const Registro = async() => {
    setLoading(true);
    
    const dataLogin = new FormData();
      dataLogin.append("correo", correo.trim());
      dataLogin.append("contrasenia", md5(contrasenia));
      dataLogin.append("nombreU", nombreU.trim());
      dataLogin.append("apellidos", apellidos.trim());
      dataLogin.append("telefono", telefono.trim());
      const url ='https://laptopfix.com.mx/laptopfixrun/api/registro/nuevo_usuario'
      const options ={
        method:'POST',
        body: dataLogin
      };
      {/**respuesta */}
      const res = await fetchPost(url, options);
      console.log("res", res);
      console.log("status", res.status);
      if (res.status===1){
        {/**REGISTRO CORRECTO */}
        Alert.alert(
          'Registro exitoso',
          'Inicia sesión para continuar',
          [
            { text: 'OK',  onPress: () => {navigation.navigate("Login")}  },
          ],
          { cancelable: false },
        );
      }
      else{
        {/**Registro FALLIDO */}
        Alert.alert(
          'Fallo en Registro',
          'El correo o teléfono ya están en uso',
          [
            { text: 'OK',  onPress: () => console.log("error en registro")  },
          ],
          { cancelable: false },
        );
      } 
      setLoading(false);
    }

    const validarRegistro = ()=> {
      let errores = [];
      //validaciones expresiones regulares
      const correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const telefonoRegex = /^[0-9]+$/;


      switch (true) {
        case correo.trim() === "":
          errores.push("El campo correo es requerido");
          break;
        // Aquí puedes agregar más validaciones para el correo si lo deseas
        case !correoRegex.test(correo.trim()):
        errores.push("El campo correo no es válido");
        break;

        case contrasenia.trim() === "":
          errores.push("El campo contraseña es requerido");
          break;
        case contrasenia.trim().length < 5 :
          errores.push("La contraseña debe tener al menos 5 caracteres");
          break;

        case contrasenia2.trim() === "":
          errores.push("El campo confirmar contraseña es requerido");
          break;
        
        case contrasenia2.trim() !== contrasenia:
            errores.push("Las contraseñas deben ser identicas");
            break;
        // Aquí puedes agregar más validaciones para la contraseña si lo deseas
    
        case nombreU.trim() === "":
          errores.push("El campo nombre es requerido");
          break;
        case nombreU.trim().length < 3:
            errores.push("El nombre debe tener al menos 3 letras");
            break;
    
        case apellidos.trim() === "":
          errores.push("El campo apellidos es requerido");
          break;

        case apellidos.trim().length < 3:
          errores.push("El apellido debe tener al menos 3 letras");
          break;
    
        case telefono.trim() === "":
          errores.push("El campo teléfono es requerido");
          break;
          
        case !telefonoRegex.test(telefono.trim()):
          errores.push("El teléfono debe contener solo números");
          break;
        // Aquí puedes agregar más validaciones para el teléfono si lo deseas
    
        default:
          // Si no hay errores, el registro es válido
          console.log("Registro válido");
          Registro()
          break;
      }

      if (errores.length > 0) {
        // Si hay errores, puedes manejarlos de la manera que prefieras,
        // como mostrarlos en la interfaz de usuario o hacer otras acciones
        console.log("Errores en el registro:");
        errores.forEach((error) => console.log(error));
        errores.forEach((error) => alerta(error));
      }
    
      
    }


    const alerta= (error)=>{
      Alert.alert('Error', `Faltan los siguientes campos: ${error}`, [
        {
          text: 'Entendido',
          onPress: () => console.log('Cancel Pressed'),
       
        }
      ]);
    }
    
  return (
  <NativeBaseProvider>
   
        <ImageBackground source={require('../img/fondo-min.png')} 
        alt={"fondo"}   style={{flex:1}}  >
          

        {/* <Box  h="70%" w="90%" mx="5%" mt={20} rounded={10 } borderWidth={1} borderColor={"#ff0000"}
        opacity={0.7} bg="black"></Box> */}
      
        {/**INICIA LOGIN */}
        <Center w="95%" mt={16} mb={2} >
          
            <ScrollView  p={2} bg="#000000:alpha.50" borderRadius={10} >
            <VStack space={3} mt={1} >
            <FormControl >
              <Text color={"white"}>Nombre(s): </Text>
                <Input type="text"  bg="white" _focus={{ bg: 'white' }}
                        placeholder='Nombre'
                        onChangeText={(val) => setNombreU(val.toUpperCase())}
                        value={nombreU}
                        InputLeftElement={<Icon as={<MaterialIcons name="person" />} size={5} ml="2" color="muted.400" />}
                        />
              </FormControl>

              <FormControl >
              <Text color={"white"}>Apellidos: </Text>
                <Input type="default" bg="white" _focus={{ bg: 'white' }}
                        placeholder='Apellidos'
                        onChangeText={(val) => setApellidos(val.toUpperCase())}
                        value={apellidos}
                        InputLeftElement={<Icon as={<MaterialIcons name="person" />} size={5} ml="2" color="muted.400" />}
                />
              </FormControl>

              <FormControl >
              <Text color={"white"}>Teléfono: </Text>
                <Input 
                        placeholder='Teléfono' bg="white" _focus={{ bg: 'white' }}
                        maxLength={10}
                        keyboardType="phone-pad"
                        onChangeText={(val) => setTelefono(val)}
                        value={telefono}
                        InputLeftElement={<Icon as={<MaterialIcons name="local-phone" />} size={5} ml="2" color="muted.400" />}
                        />
              </FormControl>
              <FormControl >
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
              <FormControl >
              <Text color={"white"}>Confirma contraseña: </Text>
                <Input type={show2 ? "text" : "password"}
                       bg="white" _focus={{ bg: 'white' }}
                        placeholder='Confirma contraseña'
                        onChangeText={(val) => setContrasenia2(val)}
                        value={contrasenia2} 
                        InputLeftElement={<Icon as={<MaterialIcons name="vpn-key" />} size={5} ml="2" color="muted.400" />}
                        InputRightElement={<Pressable onPress={() => setShow2(!show2)}>
                          <Icon as={<MaterialIcons name={show2 ? "visibility" : "visibility-off"} />}size={5} mr="2" color="muted.400" />
                          </Pressable>} 
                        />
              </FormControl>

            

            {/**Botón REGISTRARSE */}
              <Center>
                <TouchableOpacity onPress={()=>validarRegistro()}>
                  <Box mt="2" style={styles.Color} w="60%" rounded={30} p={3} shadow={7}>
                    { loading == false ? (
                      <Text  fontSize={18} letterSpacing={0.9} style={styles.textColor2}> Registarse </Text>
                    ) : 
                    (<Spinner size={"lg"} color="white"/>)
                    }
                    
                  </Box>
                </TouchableOpacity>
              </Center>
              <HStack mt="2" justifyContent="center" mb={12}>
                <Text fontSize="lg"  mr={2} style={styles.textColor2} >
                  ¿Ya tienes cuenta?
                </Text>
                <TouchableOpacity onPress={() => {
                      navigation.navigate("Login");
                    }}>
                  <Text color= "#efefef" underline style={styles.textColor2} fontSize= "lg">
                    Iniciar sesión
                  </Text>
                </TouchableOpacity>
              </HStack>
            </VStack>
            </ScrollView>
         
        </Center>
     </ImageBackground>
  </NativeBaseProvider>
        );
    };
    export default SignUp;