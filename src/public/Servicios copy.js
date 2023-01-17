import React from 'react';
//import {   } from 'react-native';
//import {   } from 'react-native';
import { Box, Heading, VStack, FormControl, Input, Link, 
  Button, HStack, Center, Text, NativeBaseProvider, ScrollView, View, Image } from "native-base";
import Footer from "../components/Footer"

const Servicios2 = () => {
  return (
    <NativeBaseProvider >
      
      <ScrollView backgroundColor={"#BDC5C8"}  maxH={"100%"} h={"83%"} >
        <View>
          {/**Box de producto */}
          <Box backgroundColor={"white"} rounded="lg" marginLeft={5} marginRight={5} marginTop={5}>
            <HStack>
              <Image 
                source={require( "../img/descarga.png")
                } alt="Alternate Text" size="xl" roundedLeft={"lg"} />
                <Center>
                  <Text fontSize={20} marginLeft={4}>Instalación de Linux</Text>
                </Center>
            </HStack>
          </Box>

          {/**Box de producto */}
          <Box backgroundColor={"white"} rounded="lg" marginLeft={5} marginRight={5} marginTop={5}>
            <HStack>
              <Image 
                source={require( "../img/win10.png")
                } alt="Alternate Text" size="xl" roundedLeft={"lg"} />
                <Center>
                  <Text fontSize={20} marginLeft={4}>Instalación de Windows</Text>
                </Center>
            </HStack>
          </Box>

          {/**Box de producto */}
          <Box backgroundColor={"white"} rounded="lg" marginLeft={5} marginRight={5} marginTop={5}>
            <HStack>
              <Image 
                source={require( "../img/win10.png")
                } alt="Alternate Text" size="xl" roundedLeft={"lg"} />
                <Center>
                  <Text fontSize={20} marginLeft={4}>Instalación de Linux</Text>
                </Center>
            </HStack>
          </Box>

          {/**Box de producto */}
          <Box backgroundColor={"white"} rounded="lg" marginLeft={5} marginRight={5} marginTop={5}>
            <HStack>
              <Image 
                source={require( "../img/descarga.png")
                } alt="Alternate Text" size="xl" roundedLeft={"lg"} />
                <Center>
                  <Text fontSize={20} marginLeft={4}>Instalación de Linux</Text>
                </Center>
            </HStack>
          </Box>

          {/**Box de producto */}
          <Box backgroundColor={"white"} rounded="lg" marginLeft={5} marginRight={5} marginTop={5}>
            <HStack>
              <Image 
                source={require( "../img/descarga.png")
                } alt="Alternate Text" size="xl" roundedLeft={"lg"} />
                <Center>
                  <Text fontSize={20} marginLeft={4}>Instalación de Linux</Text>
                </Center>
            </HStack>
          </Box>

          {/**Box de producto */}
          <Box backgroundColor={"white"} rounded="lg" marginLeft={5} marginRight={5} marginTop={5}>
            <HStack>
              <Image 
                source={require( "../img/descarga.png")
                } alt="Alternate Text" size="xl" roundedLeft={"lg"} />
                <Center>
                  <Text fontSize={20} marginLeft={4}>Instalación de Linux</Text>
                </Center>
            </HStack>
          </Box>

          {/**Box de producto */}
          <Box backgroundColor={"white"} rounded="lg" marginLeft={5} marginRight={5} marginTop={5}>
            <HStack>
              <Image 
                source={require( "../img/descarga.png")
                } alt="Alternate Text" size="xl" roundedLeft={"lg"} />
                <Center>
                  <Text fontSize={20} marginLeft={4}>Instalación de Linux</Text>
                </Center>
            </HStack>
          </Box>
           
            


        </View>
      </ScrollView>
      
      <Footer />
    </NativeBaseProvider>
    
  )
}
export default Servicios2;