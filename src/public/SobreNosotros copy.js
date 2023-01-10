import React, { useState, useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import { FontAwesome5, AntDesign, Ionicons } from '@expo/vector-icons'; 
import { Center, Divider, HStack, NativeBaseProvider, Text, VStack, Image, View} from 'native-base';
import { useNavigation } from '@react-navigation/native';


const SobreNosotros = () => {
  const navigation =useNavigation();


  return (
    <NativeBaseProvider>
      {/**Saludo inicial con nombre */}
      <View bg="white" flex={1}>
      <Center>
        <Text m={3} fontSize={20} italic>Bienvenido </Text>
      </Center>
      <Center>
        <Text ml={3} fontWeight={900} letterSpacing={.8} fontSize={26}>Carlos Abdiel Reséndiz</Text>
      </Center>
      <Center w="50%" mt={10} mb={5}>
        <Divider bg="#0081C1" thickness={2} ml="100%"/>
      </Center>
      

      {/**inicia MENU CON 4 OPCIONES */}
      <Center>
        <HStack m={4}    p={4}>
          {/**COLUMNA IZQUIERDA */}
          <VStack mr={6}>
            {/**MI PERFIL */}
            <TouchableOpacity onPress={()=>{navigation.navigate("Profile")}}>
              <VStack mb={7}>
                <Center>
                  <Image source={require("../img/MiPerfil.png")
                      } alt="Alternate Text"  size="sm" />
                </Center>
                <Center>
                  <Text fontSize={17} fontWeight={500} letterSpacing={.7}>Mi Perfil</Text>
                </Center>
              </VStack>
            </TouchableOpacity>
            
            {/**CONTACTANOS */}
            <TouchableOpacity onPress={()=>{navigation.navigate("Contacto")}}>
              <VStack mb={7}>
                <Center>
                  <Image source={require("../img/Contacto.png")
                      } alt="Alternate Text"  size="sm" />
                </Center>
                <Center>
                  <Text fontSize={17} fontWeight={500} letterSpacing={.7}>Contáctanos</Text>
                </Center>
              </VStack>
            </TouchableOpacity>
            
            
            {/**MIS DIRECCIONES */}
            <TouchableOpacity onPress={()=>{navigation.navigate("Contacto")}}>
              <VStack>
                <Center>
                  <Image source={require("../img/MisDirecciones.png")
                      } alt="Alternate Text"  size="sm" />
                </Center>
                <Center>
                  <Text fontSize={17} fontWeight={500} letterSpacing={.7}>Mis Direcciones</Text>
                </Center>
              </VStack>
            </TouchableOpacity>
            
            {/**MAS APPS */}
            
          </VStack>
          {/**FIN COLUMNA IZQUIERDA */}

          {/**COLUMNA DERECHA */}
          <VStack >
            {/**ACERCA DE*/}
            <TouchableOpacity onPress={()=>{navigation.navigate("Contacto")}}>
              <VStack mb={7}>
                <Center>
                  <Image source={require("../img/AcecaDe.png")
                      } alt="Alternate Text"  size="sm"/>
                </Center> 
                <Center>
                  <Text fontSize={17} fontWeight={500} letterSpacing={.7}>Acerca de</Text>
                </Center>
              </VStack>
            </TouchableOpacity>
            
            {/**MIS ORDENES */}
            <TouchableOpacity onPress={()=>{navigation.navigate("MisPedidos")}}>
              <VStack mb={7}>
                <Center>
                  <Image source={require("../img/MisOrdenes.png")
                      } alt="Alternate Text"  size="xl" />
                </Center>
                <Center>
                  <Text fontSize={17} fontWeight={500} letterSpacing={.7}>Mis Ordenes</Text>
                </Center>
              </VStack>
            </TouchableOpacity>
            
            
             {/**MAS APPS */}
             <TouchableOpacity onPress={()=>{navigation.navigate("InfoApps")}}>
              <VStack>
              <Center>
                <Image source={require("../img/MasApps.png")
                    } alt="Alternate Text"  size="sm" />
              </Center>
              
                <VStack>
                  <Center>
                    <Text fontSize={17} fontWeight={500} letterSpacing={.7}>Más Apps de esta</Text>
                  </Center>
                  <Center>
                    <Text fontSize={17} fontWeight={900} letterSpacing={.7}>Firma Queretana</Text>
                  </Center>
                  
                </VStack>
              
              </VStack>
             </TouchableOpacity>
            

           
            
          </VStack>
          
        </HStack>
        {/**Cerrar */}
        <TouchableOpacity onPress={()=>{navigation.navigate("Login")}}>
          <VStack mt={3}>
            <Center>
              <Image source={require("../img/Salir.png")
                  } alt="Alternate Text"  size="sm" shadow={7}/>
            </Center>
            <Center>
              <Text fontSize={17} fontWeight={500} letterSpacing={.7}>Cerrar Sesión</Text>
            </Center>
          </VStack>

        </TouchableOpacity>
        
      </Center>
          
      {/**FIN DE MENU */}

      {/**VISTA CONDICIONAL SEGUN LA OPCION SELECCIONADA */}
      
    


      
      </View>
    </NativeBaseProvider>
  )
}
export default SobreNosotros;