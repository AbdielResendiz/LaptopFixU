import * as React from "react";
import { Box, Text, Heading, VStack, FormControl, Input, Link, 
  Button, HStack, Center, NativeBaseProvider, Image } from "native-base";
import { TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';

const Login = (props) => {
  const navigation =useNavigation();

  return <Center w="100%">
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
            <Input />
          </FormControl>
          <FormControl>
            <FormControl.Label>Contraseña</FormControl.Label>
            <Input type="password" />
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
            <TouchableOpacity onPress={()=>{navigation.navigate("MiPerfil")}}>
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
    </Center>;
};

    export default () => {
        return (
          <NativeBaseProvider>
            <Center flex={1} px="3">
              <Image 
                source={require( "../img/Logo1Run.png")
                } alt="Alternate Text" size="40" mt={-16} />
              <Login />
            </Center>
          </NativeBaseProvider>
        );
    };