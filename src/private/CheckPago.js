import React from 'react';
import styles from '../styles/styles';
import { NativeBaseProvider, Center, Box, 
   Text, Button, HStack} from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons'; 
import Footer from '../components/Footer';
import { TouchableOpacity } from 'react-native';

const CheckPago = () => {
  const navigation =useNavigation();
  return (
    <NativeBaseProvider>
      <Box bg={"white"} h="91%" w="100%">

        
          <Text  fontSize={38}  m={6} style={styles.Texts}>
            Agregar método de pago
          </Text>

          {/**BOX CON OPCIONES DE PAGO */}
          <Box w="90%" mx="5%">
            {/**BOTON TARJETA CREDITO */}
            <TouchableOpacity onPress={()=> navigation.navigate("AgregarTarjeta") }>
              <Box bg="#FFFFFF"  rounded={20} shadow={7} m={3}>
                <HStack m={4}>
                  <Center mr={4}>
                    <MaterialCommunityIcons name="credit-card-plus" size={34} color="black"  />
                  </Center>
                  <Center mr={20}>
                    <Text style={styles.Texts} >
                      Tarjeta de Crédito/Débito
                    </Text>
                  </Center>
                  <Center>
                    <FontAwesome name="angle-right" size={24} color="black" />
                  </Center>
                </HStack>
              </Box>
            </TouchableOpacity>
            
            {/**BOTON PAGO EFECTIVO */}
            <TouchableOpacity>
              <Box bg="#FFFFFF"  rounded={20} shadow={7} m={3}>
                <HStack m={4}>
                  <Center mr={4}>
                    <MaterialCommunityIcons name="cash-fast" size={34} color="#2a593f" />
                  </Center>
                  <Center >
                    <Text style={styles.Texts}>
                      Pago en efectivo
                    </Text>
                  </Center>
                  <Center ml="43%" >
                    <FontAwesome name="angle-right" size={24} color="black" />
                  </Center>
                </HStack>
              </Box>
            </TouchableOpacity>
          
            {/**BOTON PAYPAL */}
            <TouchableOpacity>
              <Box bg="#FFFFFF"  rounded={20} shadow={7} m={3}>
                <HStack m={4}>
                  <Center mr={4}>
                    <FontAwesome name="cc-paypal" size={34} color="#0096DC" />
                  </Center>
                  <Center>
                    <Text style={styles.Texts}>
                      Paypal
                    </Text>
                  </Center>
                  <Center ml="60%" >
                    <FontAwesome name="angle-right" size={24} color="black" />
                  </Center>
                </HStack>
              </Box>
            </TouchableOpacity>
            

            {/**FIN BOX CON OPCIONES DE PAGO */}

          </Box>
        
        {/**BOTON SIGUIENTE */}
        <Button p={4} mx={20} mt={4}
            onPress={()=> navigation.navigate("CheckCard") } >
              SIGUIENTE
        </Button>

      </Box>
      <Footer/>
        
      
    </NativeBaseProvider>
  )
}
export default CheckPago;