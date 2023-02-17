import  React, {useState} from "react";
import { Box, Text, Heading, VStack, FormControl, Input, 
   HStack, Center, NativeBaseProvider, Image, Spinner, ZStack } from "native-base";
  import { TouchableOpacity, Alert } from "react-native";
  import md5 from "md5";
import { useNavigation } from '@react-navigation/native';
import fetchPost from "../private/api/fetchPost";
import styles from "../styles/styles";
const SignUp = () => {

  const navigation =useNavigation();
  const [correo, setCorreo]= useState("");
  const [contrasenia, setContrasenia] = useState("");
  const [contrasenia2, setContrasenia2] = useState("");
  const [nombreU, setNombreU] = useState("")
  const [apellidos, setApellidos] = useState("");
  const [telefono, setTelefono] = useState("");
  const [loading, setLoading] = useState(false);

  const validacion = async() =>{
    if (contrasenia==contrasenia2){
      Registro();
    }else{
      Alert.alert(
        'Contraseñas no coinciden',
        'Favor de revisar las contraseñas',
        [
          { text: 'OK',  onPress: () => {navigation.navigate("Login")}  },
        ],
        { cancelable: false },
      );
    }
  }

  const Registro = async() => {
    setLoading(true);
    
    const dataLogin = new FormData();
      dataLogin.append("correo", correo);
      dataLogin.append("contrasenia", md5(contrasenia));
      dataLogin.append("nombreU", nombreU);
      dataLogin.append("apellidos", apellidos);
      dataLogin.append("telefono", telefono);
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
    
  return (
  <NativeBaseProvider>
    <ZStack h="100%" w="100%">
      <Image source={require('../img/fondo-min.png')} 
      alt={"fondo"}  w="100%" h="100%" resizeMode="stretch"  />

      <Box  h="78%" w="80%" mx="10%" mt="30%" rounded={10} 
      opacity={0.7} bg="black"></Box>

      {/**INICIA LOGIN */}
      <Center w="100%" mt={10}>
        <Image 
          source={require( "../img/Logo1Run.png")
          } alt="Alternate Text" size="md" mt={20} />
        <Box  p="2" w="90%" maxW="290" py="2" >
        <Center>
          <Heading size="md" color="#bfbfbf"  style={styles.Texts}>
            Nuevo usuario
          </Heading>
        </Center>
     
      <VStack space={3} mt="3">
        <FormControl bg="white">
          <Input placeholder='Correo electrónico'
                  keyboardType='email-address'
                  onChangeText={(val) => setCorreo(val)}
                  autoCapitalize='none'
                  value={correo}/>
        </FormControl>
        <FormControl bg="white">
          <Input type="password" 
                  placeholder='Contraseña'
                  onChangeText={(val) => setContrasenia(val)}
                  value={contrasenia} />
        </FormControl>
        <FormControl bg="white">
          <Input type="password" 
                  placeholder='Confirma contraseña'
                  onChangeText={(val) => setContrasenia2(val)}
                  value={contrasenia2} />
        </FormControl>

        <FormControl bg="white">
          <Input type="text" 
                  placeholder='Nombre'
                  onChangeText={(val) => setNombreU(val)}
                  value={nombreU}/>
        </FormControl>

        <FormControl bg="white">
          <Input type="default" 
                  placeholder='Apellidos'
                  onChangeText={(val) => setApellidos(val)}
                  value={apellidos}
          />
        </FormControl>

        <FormControl bg="white">
          <Input type="phone-pad" 
                  placeholder='Teléfono'
                  onChangeText={(val) => setTelefono(val)}
                  value={telefono}/>
        </FormControl>
        {/**Botón REGISTRARSE */}
        <Center>
          <TouchableOpacity onPress={validacion}>
            <Box mt="2" bg="#236DB7" w="60%" rounded={30} p={3} shadow={7}>
              { loading == false ? (
                <Text color="white" fontSize={18} letterSpacing={0.9} style={styles.Texts}> Registarse </Text>
              ) : 
              (<Spinner size={"lg"} color="white"/>)
              }
              
            </Box>
          </TouchableOpacity>
        </Center>
        <HStack mt="2" justifyContent="center">
          <Text fontSize="lg" color="#bfbfbf" mr={2} style={styles.Texts} >
            ¿Ya tienes cuenta?
          </Text>
          <TouchableOpacity onPress={() => {
                navigation.navigate("Login");
              }}>
            <Text color= "#efefef" underline style={styles.Texts} fontSize= "lg">
              Iniciar sesión
            </Text>
          </TouchableOpacity>
        </HStack>
      </VStack>
      </Box>
      </Center>
            </ZStack>
          </NativeBaseProvider>
        );
    };
    export default SignUp;