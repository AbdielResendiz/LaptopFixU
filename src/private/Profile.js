import React from 'react';
import { NativeBaseProvider, ZStack, Box, VStack, Button, Text, Center } from 'native-base';

const Profile = () => {
  return (
    <NativeBaseProvider>
      <ZStack bg="">
        
        <Box bg="#236DB7"   h={285} w="100%"></Box>
        
        <Box bg="#ffffff" h={130} w={150} mx="35%" mt={10} rounded={100}></Box>
        
      </ZStack>
      <VStack  mt={200}  mx="10%">
        <Center mb={3}>
          <Text fontSize={18} color="white" fontWeight={"bold"}>Carlos Abdiel Reséndiz Vargas</Text>
          <Text fontSize={16} color="white">cabdielr94@gmail.com</Text>
        </Center>
          
          <Button bg={"#00ff00"} >
            <Text fontSize={18}>Mi información</Text>
          </Button>
          <Button mt={3}>
          <Text fontSize={18}>Mis ordenes</Text>
          </Button>
          <Button mt={3}>
            <Text fontSize={18}>Direcciónes</Text>
          </Button>
          <Button mt={3} >
            <Text fontSize={18}>Métodos de pago</Text>
            </Button>
          <Button mt={10}>
            <Text fontSize={18}>Cerrar sesión </Text>
          </Button>
        </VStack>
    </NativeBaseProvider>
  )
}
export default Profile;