import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';

import { Center, Divider, HStack, NativeBaseProvider, Text, VStack, Image, Box} from 'native-base';
import { useNavigation } from '@react-navigation/native';
import Footer from '../components/Footer';

const SobreNosotros = () => {
  const navigation =useNavigation();

  const [nombre, setNombre] = useState("")


  return (
    <NativeBaseProvider>
      {/**Saludo inicial con nombre */}
      <Box bg="white"  w="100%" h="91%">
        <Center>
        <Image source={require("../img/SobreNos/user.png")
                      } alt="Alternate Text"  size="xl" />

        </Center>
      <Center>
        <Text  fontSize={20} italic>Bienvenido </Text>
      </Center>
      <Center>
        <Text ml={3} fontWeight={900} letterSpacing={.8} fontSize={26}>Carlos Abdiel Reséndiz</Text>
      </Center>
      <Center w="50%" mt={1} mb={1}>
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
                  <Image source={require("../img/SobreNos/perfil.png")
                      } m={-3} mt={-5} alt="Alternate Text"  size="xl" />
                </Center>
              </VStack>
            </TouchableOpacity>
            {/**CONTACTANOS */}
            <TouchableOpacity onPress={()=>{navigation.navigate("Contacto")}}>
              <VStack >
                <Center>
                  <Image m={-3} mt={-5} source={require("../img/SobreNos/contacto.png")
                      } alt="Alternate Text"  size="xl" />
                </Center>
              </VStack>
            </TouchableOpacity>
            {/**MIS DIRECCIONES */}
            <TouchableOpacity onPress={()=>{navigation.navigate("MisDirecciones")}}>
              <VStack>
                <Center>
                  <Image m={-1} source={require("../img/SobreNos/direcciones.png")
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
                  <Image m={-5} source={require("../img/SobreNos/id.png")
                      } alt="Alternate Text"  size="xl"/>
                </Center> 
                
              </VStack>
            </TouchableOpacity>
            {/**MIS ORDENES */}
            <TouchableOpacity onPress={()=>{navigation.navigate("MisPedidos")}}>
              <VStack >
                <Center>
                  <Image m={-3} source={require("../img/SobreNos/ordenes.png")
                      } alt="Alternate Text"  size="xl" />
                </Center>
              </VStack>
            </TouchableOpacity>
            
             {/**MAS APPS */}
             <TouchableOpacity onPress={()=>{navigation.navigate("InfoApps")}}>
                <VStack>
                  <Center>
                    <Image  source={require("../img/MasApps.png")
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
                  } alt="Alternate Text" mt={-5} size="xl" shadow={7}/>
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