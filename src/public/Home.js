import React from 'react';
import {  TouchableOpacity, View } from 'react-native';
import { FontAwesome,  AntDesign } from '@expo/vector-icons'; 
import { NativeBaseProvider, HStack, Center, Box, 
  ScrollView , Stack, AspectRatio, Image, Heading, Text} from 'native-base';
import Footer from "../components/Footer"
import Card from "../components/Card"
import CardServicio from "../components/CardServicio"
import CardPaquete from "../components/CardPaquete"


const Home = (props) => {
  return (
    <NativeBaseProvider flex={1} px="3">
      {/**Row stack de bienvenida */}
        <HStack>
            <Center h="20" w="60%" bg="#BDC5C8"  >
              <Text>Bienvenido</Text>
            </Center>
            <Center h="20" w="15%" bg="#BDC5C8"  >
              <TouchableOpacity onPress={()=>props.navigation.navigate("MisPedidos")}>
                <FontAwesome name="list-ul" size={24} color="black" />
              </TouchableOpacity>
            </Center>
            
            <Center h="20" w="25%" bg="#132039" >
            <TouchableOpacity onPress={()=>props.navigation.navigate("SobreNosotros")}>
            <AntDesign name="infocirlce" size={34} color="white" />
            </TouchableOpacity>
            </Center>
            
        </HStack>
        {/** scrool vertical para contenido*/}
        <ScrollView style={{paddingHorizontal:10}} horizontal={false}>
          <HStack style={{justifyContent: "flex-end"}}>
            <Center h="10" w="30%">OFERTAS</Center>
            <Center h="10" w="30%">
              <TouchableOpacity onPress={() => {
                  props.navigation.navigate("Servicios");
                }}>
              <Text color= "#236DB7"
              fontWeight= "bold"
              fontSize= "md">Ver todas 
              </Text>
              </TouchableOpacity>
            </Center>
          </HStack>
          <ScrollView horizontal={true}>
            <TouchableOpacity onPress={() => {
                  props.navigation.navigate("Detalle");
                }}>
              <Card />
            </TouchableOpacity>
            <Card/>
            <Card/>
          </ScrollView>

          <HStack style={{justifyContent: "flex-end"}}>
            <Center h="10" w="30%">TECNICOS</Center>
            <Center h="10" w="30%">Ver todas</Center>
          </HStack>
          <ScrollView horizontal={true}>
            <TouchableOpacity onPress={() => {
                  props.navigation.navigate("Detalle");
                }}>
              <CardServicio/>
            </TouchableOpacity>
            <CardServicio/>
            <CardServicio/>
            <CardServicio/>
            <CardServicio/>
            

          </ScrollView>

          <HStack style={{justifyContent: "flex-end"}}>
            <Center h="10" w="30%">PAQUETES</Center>
            <Center h="10" w="30%">Ver todas</Center>
          </HStack>
          <ScrollView horizontal={true}>
          <TouchableOpacity onPress={() => {
                  props.navigation.navigate("Detalle");
                }}>
            <CardPaquete/>
            </TouchableOpacity>
            <CardPaquete/>
            <CardPaquete/>
            <CardPaquete/>
            <CardPaquete/>
            

          </ScrollView>

        </ScrollView>
        <Footer />
        
    </NativeBaseProvider>
  )
}
export default Home;