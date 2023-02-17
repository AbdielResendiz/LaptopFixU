import React, {useState} from 'react';
import {  TouchableOpacity, Alert} from 'react-native';
import { NativeBaseProvider, ScrollView, Text, Box, HStack, Center, VStack, View, Image, Divider} from 'native-base';
import { useNavigation } from '@react-navigation/native';
import Footer from '../components/Footer';
import styles from '../styles/styles';

const MisPedidos = () => {
  const navigation =useNavigation();

  const Detalle = (id)=>{ 
    Alert.alert(
      "Detalle de orden #0192",
      "Tecnico: Elmer Homero \nFecha de orden: 06/01/2023\nStatus:En proceso",
      [
        {text:"volver"}
      ]
    )
  }

  const [ select, setSelect ] = useState(0);
  /**
   * select:
   *  0 = todos
   *  1 = completos
   *  2 = en proceso
   *  3 = cancelados
   */

console.log("Seleccionado", select);

  return (
   <NativeBaseProvider>
    <View  h="91%" w="100%">
    

    
    {/**Menu de categorias pedidos */}
    <HStack  bg={"#FFFFFF"}  w="100%">
      <TouchableOpacity onPress={()=>setSelect(0)}>
        <Center  style={styles.Color}  py={3}  mr={1}  px={2}>
          <Text fontSize={14} color="#FFFFFF" style={styles.Texts} letterSpacing={0.5}>TODOS</Text>
          
        </Center>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>setSelect(1)}>
        <Center bg="#00AF63"   mr={1}  py={3} px={2}>
          <Text fontSize={14} color="#FFFFFF" style={styles.Texts} letterSpacing={0.5}>COMPLETOS</Text>
          
        </Center>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>setSelect(2)}>
        <Center bg="#FFAA32"    py={3}  mr={1} px={2}>
          <Text fontSize={14} color="#ffffff" style={styles.Texts}>EN PROCESO</Text>
            
        </Center>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>setSelect(3)}>
        <Center bg="#FF2832" py={3}  px={2}>
          <Text fontSize={14} color="#ffffff" style={styles.Texts}>CANCELADOS</Text>
          
        </Center>
      </TouchableOpacity>
      
      </HStack>
      {/**DIVISOR COLOR RESPONSIVO */}
      <Divider thickness={10} bg={(select==0) ? "#236DB7" : 
      ((select==1) ? "#00AF63" 
      : (select==2) ? "#FFAA32" : "#FF2832")
      }/>

      {/**SCROLL de pedidos */}
      <ScrollView bg="#FFFFFF">
        <TouchableOpacity onPress={()=>{navigation.navigate("DetalleOrden")}}>
          <Box  bg={"white"} h={120} w="94%" mx={"3%"} mt={3} mb={4} rounded={1}>
              {/**CARD COMPLETADO */}
            <HStack>
              <Center w={120} m={2}  p={3} rounded={30}>
              <Image source={require("../img/MisOrdenes/completoIcon.png")} 
                  alt="image"  size={"xl"}style={{ resizeMode: "contain"}}/>
              </Center>
              <VStack>
                <Text  ml={1} style={styles.Texts} fontSize={18} mt={2}>Orden ID #000986 </Text>
                <Text ml={10} style={styles.Texts}>Completada</Text>
              </VStack>
              
                
              
            </HStack>
          </Box>
        </TouchableOpacity>
        {/**DIVISOR */}
        <Center>
          <Divider thickness={2} bg={"#236DB7"} w="80%"/>
        </Center>
        

           {/**CARD en proceso */}
          <TouchableOpacity onPress={()=>{navigation.navigate("DetalleOrden")}}>
            <Box  bg={"white"} h={120} w="94%" mx={"3%"} mt={3} mb={4} rounded={10}>
              <HStack>
                <Center w={120} m={2}  p={3} rounded={30}>
                <Image source={require("../img/MisOrdenes/EnprocesoIcon.png")} 
                    alt="image" size="xl" style={{ resizeMode: "contain"}}/>
                </Center>
                <VStack>
                  <Text  ml={1} style={styles.Texts} fontSize={18} mt={2}>Orden ID #000986 </Text>
                  <Text ml={10} style={styles.Texts}>En proceso</Text>
                </VStack>
                
                 
                
              </HStack>
            </Box>
          </TouchableOpacity>
        {/**DIVISOR */}
        <Center>
          <Divider thickness={2} bg={"#236DB7"} w="80%"/>
        </Center>
        

        {/**CARD cancelado */}
        <TouchableOpacity onPress={()=>{navigation.navigate("DetalleOrden")}}>
          <Box  bg={"white"} h={120} w="94%" mx={"3%"} mt={3} mb={4} rounded={10} >
            <HStack>
              <Center w={120} m={2} p={3} rounded={30}>
              <Image source={require("../img/MisOrdenes/canceladosIcon.png")} 
                  alt="image"  size="xl" style={{ resizeMode: "contain"}}/>
              </Center>
              <VStack>
                <Text  ml={1} style={styles.Texts} fontSize={18} mt={2}>Orden ID #000986 </Text>
                <Text ml={10} style={styles.Texts}>Cancelada</Text>
              </VStack>
            </HStack>
          </Box>
        </TouchableOpacity>
        {/**DIVISOR */}
        <Center>
          <Divider thickness={2} bg={"#236DB7"} w="80%"/>
        </Center>
        
      
      </ScrollView>

      </View>

      <Footer/>
    
      
    
   </NativeBaseProvider>
  )
}
export default MisPedidos;