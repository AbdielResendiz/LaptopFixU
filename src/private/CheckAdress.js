import React from 'react';
import { View } from 'react-native';
import { NativeBaseProvider, VStack, Center, Box, 
  ScrollView ,  Image, Checkbox, Text, Button, HStack, Input} from 'native-base';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles/styles';

const CheckAdress = () => {
  const navigation =useNavigation();
  return (
    <NativeBaseProvider >
      <ScrollView  mt={5} bg="white">
      
        <Image source={require( "../img/procesoAdress.png")
                            } alt="Alternate Text" w="100%" resizeMode="contain"
                             rounded={"lg"}  marginRight={3}/>
        <Box ml={4}>
        
          <Text style={styles.Texts}>Nombre completo</Text>
          <Input mx="3" placeholder="Nombre" w="90%" />
          <Text style={styles.Texts}>Correo electrónico</Text>
          <Input mx="3" placeholder="Email" w="90%" />
          <Text style={styles.Texts}>Teléfono</Text>
          <Input mx="3" placeholder="Teléfono" w="90%" />
          <Text style={styles.Texts}>Dirección</Text>
          <Input mx="3" placeholder="Calle y numero" w="90%" />
          <HStack w="90%">
            <VStack>
              <Text style={styles.Texts}>Código Postal</Text>
              <Input mx="3" placeholder="C.P" w="100%" />
            </VStack>
            <VStack ml={10}>
              <Text style={styles.Texts}>Ciudad</Text>
              <Input mx="3" placeholder="Ciudad" w="430%" />
            </VStack>

          </HStack>
        </Box>
        <Center m={4}>
          <HStack>
            <Checkbox mr={4} size="lg" value="test" 
            accessibilityLabel="This is a dummy checkbox" defaultIsChecked />
            <Text fontSize={16} style={styles.Texts}>Guardar dirección</Text>
          </HStack>
         
         
        </Center>

        <Button p={4} mx={20} mt={4}
          onPress={()=> navigation.navigate("CheckPago") } >
            SIGUIENTE
        </Button>
        
      </ScrollView>
    </NativeBaseProvider>
  )
}
export default CheckAdress;