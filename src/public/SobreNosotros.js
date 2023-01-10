import React from 'react';
import { TouchableOpacity } from 'react-native';

import { Center, Divider, HStack, NativeBaseProvider, Text, VStack, Image, Box} from 'native-base';
import { useNavigation } from '@react-navigation/native';
import Footer from '../components/Footer';

const SobreNosotros = () => {
  const navigation =useNavigation();

  return (
    <NativeBaseProvider>
      {/**Saludo inicial con nombre */}
      <Box bg="white"  w="100%" h="90%">
      <Center>
        <Text m={3} fontSize={20} italic>Bienvenido </Text>
      </Center>
      <Center>
        <Text ml={3} fontWeight={900} letterSpacing={.8} fontSize={26}>Carlos Abdiel Reséndiz</Text>
      </Center>
      <Center w="50%" mt={3} mb={5}>
        <Divider bg="#0081C1" thickness={2} ml="100%"/>
      </Center>
      {/**inicia MENU CON 4 OPCIONES */}
      <Center>
        <HStack mx={4}    >
          {/**COLUMNA IZQUIERDA */}
          <VStack mr={6}>
            {/**MI PERFIL */}
            <TouchableOpacity onPress={()=>{navigation.navigate("MiPerfil")}}>
              <VStack >
                <Center>
                  <Image source={require("../img/MiPerfil.png")
                      } alt="Alternate Text"  size="xl" />
                </Center>
              </VStack>
            </TouchableOpacity>
            {/**CONTACTANOS */}
            <TouchableOpacity onPress={()=>{navigation.navigate("Contacto")}}>
              <VStack >
                <Center>
                  <Image source={require("../img/Contacto.png")
                      } alt="Alternate Text"  size="xl" />
                </Center>
              </VStack>
            </TouchableOpacity>
            {/**MIS DIRECCIONES */}
            <TouchableOpacity onPress={()=>{navigation.navigate("MisDirecciones")}}>
              <VStack>
                <Center>
                  <Image source={require("../img/MisDirecciones.png")
                      } alt="Alternate Text"  size="xl" />
                </Center>
              </VStack>
            </TouchableOpacity>
            {/**MAS APPS */}
          </VStack>
          {/**FIN COLUMNA IZQUIERDA */}
          {/**COLUMNA DERECHA */}
          <VStack >
            {/**ACERCA DE*/}
            <TouchableOpacity onPress={()=>{navigation.navigate("AcercaID")}}>
              <VStack >
                <Center>
                  <Image source={require("../img/AcecaDe.png")
                      } alt="Alternate Text"  size="xl"/>
                </Center> 
                
              </VStack>
            </TouchableOpacity>
            {/**MIS ORDENES */}
            <TouchableOpacity onPress={()=>{navigation.navigate("MisPedidos")}}>
              <VStack >
                <Center>
                  <Image source={require("../img/MisOrdenes.png")
                      } alt="Alternate Text"  size="xl" />
                </Center>
              </VStack>
            </TouchableOpacity>
            
             {/**MAS APPS */}
             <TouchableOpacity onPress={()=>{navigation.navigate("InfoApps")}}>
                <VStack>
                  <Center>
                    <Image source={require("../img/MasApps.png")
                        } alt="Alternate Text"  size="xl" />
                  </Center>
                </VStack>
             </TouchableOpacity>   
          </VStack>
        </HStack>
        {/**Cerrar */}
        <TouchableOpacity onPress={()=>{navigation.navigate("Login")}}>
          <VStack >
            <Center>
              <Image source={require("../img/Salir.png")
                  } alt="Alternate Text"  size="xl" shadow={7}/>
            </Center>
          </VStack>
        </TouchableOpacity>
      </Center>
      {/**FIN DE MENU */}
      
      </Box>
      <Footer/>
      
    </NativeBaseProvider>
  )
}
export default SobreNosotros;