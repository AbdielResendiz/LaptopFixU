import * as React from "react";
import { Box, Text, Heading, VStack, FormControl, Input, 
  Button, HStack, Center, NativeBaseProvider } from "native-base";
  import { TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
const SignUp = () => {
  return <Center w="100%">
      <Box safeArea p="2" w="90%" maxW="290" py="8">
        <Heading size="lg" color="coolGray.800" _dark={{
        color: "warmGray.50"
      }} fontWeight="semibold">
          Bienvenido
        </Heading>
        <Heading mt="1" color="coolGray.600" _dark={{
        color: "warmGray.200"
      }} fontWeight="medium" size="xs">
          Registrate para continuar
        </Heading>
        <VStack space={3} mt="5">
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
          <Button mt="2" color={"#236DB7"}>
            Registrarse
          </Button>
          <HStack mt="6" justifyContent="center">
            <Text fontSize="sm" color="coolGray.600" _dark={{
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
            fontSize= "sm"
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
            <Center flex={1} px="3">
                <SignUp />
            </Center>
          </NativeBaseProvider>
        );
    };