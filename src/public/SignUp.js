import  React, {useState} from "react";
import { Box, Text, Heading, VStack, FormControl, Input, 
  Button, HStack, Center, NativeBaseProvider, Image, ScrollView } from "native-base";
  import { TouchableOpacity, Alert } from "react-native";
import { useNavigation } from '@react-navigation/native';
import fetchPost from "../private/api/fetchPost";
const SignUp = () => {

  const navigation =useNavigation();

  const [correo, setCorreo]= useState("aa@aa.com");
  const [contrasenia, setContrasenia] = useState("12345");
  const [contrasenia2, setContrasenia2] = useState("123455");
  const [nombreU, setNombreU] = useState("macaco")
  const [apellidos, setApellidos] = useState("aldair");
  const [telefono, setTelefono] = useState("4423334444");

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
    
    const dataLogin = new FormData();
    
      dataLogin.append("correo", correo);
      dataLogin.append("contrasenia", contrasenia);
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
            { text: 'OK',  onPress: () => {navigation.navigate("Login")}  },
          ],
          { cancelable: false },
        );
      } 
    }
  









  return <Center w="100%">
      <Box safeArea p="2" w="90%" maxW="290" py="2">
        <Center>
          <Heading size="lg" color="coolGray.800" _dark={{
          color: "warmGray.50"
          }} fontWeight="semibold">
          Bienvenido
        </Heading>

        </Center>
        
        <Heading mt="1" color="coolGray.600" _dark={{
        color: "warmGray.200"
      }} fontWeight="medium" size="xs">
          Registrate para continuar
        </Heading>
        <VStack space={3} mt="3">
          <FormControl>
            <FormControl.Label>Correo electrónico</FormControl.Label>
            <Input placeholder='Correo electrónico'
                    keyboardType='email-address'
                    onChangeText={(val) => setCorreo(val)}
                    autoCapitalize='none'
                    value={correo}/>
          </FormControl>
          <FormControl>
            <FormControl.Label>Contraseña</FormControl.Label>
            <Input type="password" 
                    placeholder='Contraseña'
                    onChangeText={(val) => setContrasenia(val)}
                    value={contrasenia} />
          </FormControl>
          <FormControl>
            <FormControl.Label>Confirma Contraseña</FormControl.Label>
            <Input type="password" 
                    placeholder='Confirma contraseña'
                    onChangeText={(val) => setContrasenia2(val)}
                    value={contrasenia} />
          </FormControl>

          <FormControl>
            <FormControl.Label>Nombre</FormControl.Label>
            <Input type="text" 
                    placeholder='Nombre'
                    onChangeText={(val) => setNombreU(val)}
                    value={nombreU}/>
          </FormControl>

          <FormControl>
            <FormControl.Label>Apellidos</FormControl.Label>
            <Input type="default" 
                    placeholder='Apellidos'
                    onChangeText={(val) => setApellidos(val)}
                    value={apellidos}
            />
          </FormControl>

          <FormControl>
            <FormControl.Label>Telefono</FormControl.Label>
            <Input type="phone-pad" 
                    placeholder='Teléfono'
                    onChangeText={(val) => setTelefono(val)}
                    value={telefono}/>
          </FormControl>
          {/**Botón REGISTRARSE */}
          <Center>
            <TouchableOpacity onPress={validacion}>
              <Box mt="2" bg="#236DB7" w="60%" rounded={30} p={3} shadow={7}>
                <Text color="white" fontSize={18} letterSpacing={0.9} fontWeight={700}> Registarse </Text>
              </Box>
            </TouchableOpacity>
          </Center>
          <HStack mt="2" justifyContent="center">
            <Text fontSize="lg" color="coolGray.600" _dark={{
            color: "warmGray.200"
          }}>
              ¿Ya tienes cuenta?{" "}
            </Text>
            <TouchableOpacity onPress={() => {
                  navigation.navigate("Login");
                }}>
            <Text 
            color= "#236DB7"
            fontWeight= "medium"
            fontSize= "lg"
           >
              Iniciar sesión
            </Text>
            </TouchableOpacity>
          </HStack>
        </VStack>
      </Box>
    </Center>;
};

    export default () => {
        return (
          <NativeBaseProvider>
            <ScrollView>
            <Center flex={1} px="3">
              <Image 
                source={require( "../img/Logo1Run.png")
                } alt="Alternate Text" size="40" mt={4} />
                <SignUp />
            </Center>

            </ScrollView>

           
          </NativeBaseProvider>
        );
    };