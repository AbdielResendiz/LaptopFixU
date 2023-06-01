import React, {useState} from 'react';
import {  TouchableOpacity, Alert} from 'react-native';
import { NativeBaseProvider, ScrollView, Text, Box, HStack, Center, VStack, View, Image, Divider, Pressable} from 'native-base';
import { useNavigation } from '@react-navigation/native';
import Footer from '../components/Footer';
import styles from '../styles/styles';
import baseColor from './api/baseColor';

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
    <View  flex={1}>
    

      
      {/**Menu de categorias pedidos */}
      <ScrollView horizontal={true} bg={"#FFFFFF:alpha10"}  alwaysBounceHorizontal={true}  mb={1}>
        <Pressable bg={"#79E0EE"} p={2} my={2} mx={1} h={9} borderWidth={2} borderColor={"white"} borderRadius={15} 
        onPress={()=>setSelect(0)}>
          
            <Text fontSize={14} style={styles.Texts}    letterSpacing={0.5}>TODOS</Text>
            
          
        </Pressable>

        <Pressable bg="#7DE761"  p={2} my={2} mr={1} h={9} borderWidth={1} borderColor={"white"} borderRadius={15} 
        onPress={()=>setSelect(1)}>
            <Text fontSize={14}  style={styles.Texts} letterSpacing={0.5}>COMPLETOS</Text>
        </Pressable>

        <Pressable bg="#FEC260" p={2} my={2}  borderColor={"white"} mr={1} h={9} borderWidth={1} borderRadius={15} 
          onPress={()=>setSelect(2)}>
            <Text fontSize={14}  style={styles.Texts}>EN PROCESO</Text>
        </Pressable>

        <Pressable bg="#E76161"  p={2} my={2} mr={1} h={9} borderWidth={1} borderColor={"white"} borderRadius={15}  
        onPress={()=>setSelect(3)}>
            <Text fontSize={14} style={styles.Texts}>CANCELADOS</Text>
        </Pressable>
        
      </ScrollView>


      {/**DIVISOR COLOR RESPONSIVO */}
      <Divider thickness={8} bg={(select==0) ? "#236DB7" : 
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


    
      
    
   </NativeBaseProvider>
  )
}
export default MisPedidos;