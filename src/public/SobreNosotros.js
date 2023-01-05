import React from 'react';
import { TouchableOpacity } from 'react-native';
import { FontAwesome5, AntDesign, Ionicons } from '@expo/vector-icons'; 
import { Center, HStack, NativeBaseProvider, Text, VStack } from 'native-base';
import Profile from '../private/Profile';

const SobreNosotros = () => {
  return (
    <NativeBaseProvider>
      <Text m={3} fontSize={20}>Hola</Text>
      <Text ml={3} fontWeight="bold" fontSize={26}>Carlos Abdiel Reséndiz</Text>
      <HStack m={4} shadow="7" bg="white" rounded={20} p={4}>
        <VStack mr={4}>
          <TouchableOpacity>
            <Center bg="#E5E5E5" p={3} rounded={20}>
              <FontAwesome5 name="user" size={30} color="black" />
            </Center>
            <Center>
              <Text fontSize={15}>Mi perfil</Text>
            </Center>
          </TouchableOpacity>
        </VStack>

        <VStack mr={4}>
          <TouchableOpacity>
            <Center bg="#E5E5E5" py={2} mx={2} rounded={20}>
              <Ionicons name="information-circle-outline" size={38} color="black" />
            </Center>
            <Center>
              <Text>Acerca de ID</Text>
            </Center>
          </TouchableOpacity>
        </VStack>

        <VStack mr={4}>
          <TouchableOpacity>
            <Center  bg="#E5E5E5" p={3}  mx={2} rounded={20}>
            <AntDesign name="contacts" size={34} color="black" />
            </Center>
            <Center>
              <Text>Contáctanos</Text>
            </Center>
          </TouchableOpacity>
        </VStack>

        <VStack>
          <TouchableOpacity>
            <Center bg="#E5E5E5" p={3} rounded={20}>
              <AntDesign name="appstore-o" size={34} color="black" />
            </Center>
            <Center>
              <VStack>
                <Text>Más apps </Text>
              </VStack>  
            </Center>
          </TouchableOpacity>

        </VStack>
      </HStack>
      <Profile/>
      
    </NativeBaseProvider>
  )
}
export default SobreNosotros;