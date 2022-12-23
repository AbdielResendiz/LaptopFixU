import * as React from "react";
import { Box, Text, Heading, VStack, FormControl, Input, Link, 
  Button, HStack, Center, NativeBaseProvider } from "native-base";

const Login = () => {
  return <Center w="100%">
      <Box safeArea p="2" py="8" w="90%" maxW="290">
        <Heading size="lg" fontWeight="600" color="coolGray.800" _dark={{
        color: "warmGray.50"
      }}>
          Bienvenido
        </Heading>
        <Heading mt="1" _dark={{
        color: "warmGray.200"
      }} color="coolGray.600" fontWeight="medium" size="xs">
          ¡Ingresa tus datos para continuar!
        </Heading>

        <VStack space={3} mt="5">
          <FormControl>
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
          <Button mt="2" color="#236DB7">
            Iniciar sesión
          </Button>
          <HStack mt="6" justifyContent="center">
            <Text fontSize="sm" color="coolGray.600" _dark={{
            color: "warmGray.200"
          }}>
              ¿Nuevo usuario?{" "}
            </Text>
            <Link _text={{
            color: "#236DB7",
            fontWeight: "medium",
            fontSize: "sm"
          }} href="#">
              Registrarse
            </Link>
          </HStack>
        </VStack>
      </Box>
    </Center>;
};

    export default () => {
        return (
          <NativeBaseProvider>
            <Center flex={1} px="3">
                <Login />
            </Center>
          </NativeBaseProvider>
        );
    };