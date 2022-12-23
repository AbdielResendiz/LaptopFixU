import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { FontAwesome, Ionicons, AntDesign } from '@expo/vector-icons'; 
import { NativeBaseProvider, HStack, Center, Box, 
  ScrollView , Stack, AspectRatio, Image, Heading} from 'native-base';
import Footer from "../components/Footer"
import Card from "../components/Card"
import CardServicio from "../components/CardServicio"
import CardPaquete from "../components/CardPaquete"


const Home = () => {
  return (
    <NativeBaseProvider flex={1} px="3">
      {/**Row stack de bienvenida */}
        <HStack>
            <Center h="20" w="60%" bg="#BDC5C8"  >
              <Text>Bienvenido</Text>
            </Center>
            <Center h="20" w="15%" bg="#BDC5C8"  >
            <FontAwesome name="bell-o" size={24} color="black" />
            </Center>
            <Center h="20" w="25%" bg="#132039" >
            <AntDesign name="infocirlce" size={34} color="white" />
            </Center>
        </HStack>
        {/** scrool vertical para contenido*/}
        <ScrollView style={{paddingHorizontal:10}} horizontal={false}>
          <HStack style={{justifyContent: "flex-end"}}>
            <Center h="10" w="30%">OFERTAS</Center>
            <Center h="10" w="30%">Ver todas</Center>
          </HStack>
          <ScrollView horizontal={true}>
            <Card/>
            <Card/>
            <Card/>
          </ScrollView>

          <HStack style={{justifyContent: "flex-end"}}>
            <Center h="10" w="30%">SERVICIOS</Center>
            <Center h="10" w="30%">Ver todas</Center>
          </HStack>
          <ScrollView horizontal={true}>
            <CardServicio/>
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
            <CardPaquete/>
            <CardPaquete/>
            <CardPaquete/>
            <CardPaquete/>
            <CardPaquete/>
            

          </ScrollView>

        </ScrollView>
        <Footer/>
        
    </NativeBaseProvider>
  )
}
export default Home;