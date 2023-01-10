import { NativeBaseProvider, View, Center, Box, VStack, Text, ScrollView, Heading, Input, Icon, HStack, Skeleton} from 'native-base';
import React from 'react';
import Footer from '../components/Footer';
import { MaterialCommunityIcons, MaterialIcons, Fontisto } from '@expo/vector-icons';


const Buscar = () => {
  return (
    <NativeBaseProvider>
         <VStack w="90%" space={5} alignSelf="center" bg="white" my={4}>
       
        <Input placeholder="Busca lo que necesitas" width="100%" borderRadius="4" py="3" px="1" fontSize="14" 
            InputLeftElement={<Icon m="2" ml="3" size="6" color="gray.400" as={<MaterialIcons name="search" />} />}  />
        </VStack>
        
    
        <ScrollView h="70%" >
        <Center w="100%">
            <HStack w="90%" maxW="400" borderWidth="1" space={8} rounded="md" bg="white" _dark={{
            borderColor: "coolGray.500"
            }} _light={{
            borderColor: "coolGray.200"
            }} p="4">
                <Skeleton flex="1" h="150" rounded="md" startColor="coolGray.100" />
                <VStack flex="3" space="4">
                    <Skeleton startColor="amber.300" />
                    <Skeleton.Text />
                    <HStack space="2" alignItems="center">
                        <Skeleton size="5" rounded="full" />
                        <Skeleton h="3" flex="2" rounded="full" />
                        <Skeleton h="3" flex="1" rounded="full" startColor="indigo.300" />
                    </HStack>
                </VStack>
            </HStack>
        </Center>
        </ScrollView>
        
        
        <Footer/>
      
      
      
    </NativeBaseProvider>
  )
}
export default Buscar;