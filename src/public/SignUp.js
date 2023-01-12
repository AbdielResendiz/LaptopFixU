import * as React from "react";
import { Box, Text, Heading, VStack, FormControl, Input, 
  Button, HStack, Center, NativeBaseProvider, Image, ScrollView } from "native-base";
  import { TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
const SignUp = () => {

  const navigation =useNavigation();





  

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
            <Input />
          </FormControl>
          <FormControl>
            <FormControl.Label>Contraseña</FormControl.Label>
            <Input type="password" />
          </FormControl>
          <FormControl>
            <FormControl.Label>Confirma Contraseña</FormControl.Label>
            <Input type="password" />
          </FormControl>
          {/**Botón REGISTRARSE */}
          <Center>
            <TouchableOpacity onPress={()=>{navigation.navigate("Home")}}>
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