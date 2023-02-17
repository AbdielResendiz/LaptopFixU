import React from 'react';
import {  TouchableOpacity} from 'react-native';
import {  NativeBaseProvider, Center, 
    HStack, VStack, Text, ScrollView } from 'native-base';
import styles from '../styles/styles';
const InfoApp = () => {
  return (
    <NativeBaseProvider>
        <ScrollView horizontal={false}>
            <HStack>
    
                <VStack w="50%">

                    <TouchableOpacity>
                        <Center bg={"#BDC5C8"} h={40} w="100%">Laptop Fix</Center>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Center bg={"#132039"} h={40} w="100%"><Text color={"white"}> Car Wash</Text></Center>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Center bg={"#236DB7"} h={40} w="100%">Doctor</Center>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Center bg={"#BDC5C8"} h={40} w="100%">Proximamente</Center>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Center bg={"#132039"} h={40} w="100%">Proximamente</Center> 
                    </TouchableOpacity>
                    
                </VStack>

                <VStack w="50%">
                    <TouchableOpacity>
                        <Center bg={"#236DB7"} h={80}  w="100%">Impactos digitales</Center>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Center bg={"#BDC5C8"} h={40}  w="100%">Plomero</Center>
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <Center bg={"#132039"}  h={40} w="100%"><Text color="white"> Mecánico</Text></Center>
                    </TouchableOpacity>
                    <Center bg={"#236DB7"} h={40}  w="100%">Proximamente</Center>
                    

                    
                </VStack>
            </HStack>

        </ScrollView>
        
       

    </NativeBaseProvider>
  )
}
export default InfoApp;