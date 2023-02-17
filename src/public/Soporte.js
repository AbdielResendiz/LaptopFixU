import React from 'react';
import { NativeBaseProvider, Text, Box, Center } from 'native-base';
import Footer from '../components/Footer';
import styles from '../styles/styles';

const Soporte = () => {
  return (
    <NativeBaseProvider>
        <Box h="91%" bg="#FFFFFF" w="100%">
          <Center my={60} >
            <Text style={styles.Texts} fontSize={"4xl"}>SOPORTE TÉCNICO</Text>
          </Center>
            

        </Box>
        <Footer/>
      
    </NativeBaseProvider>
  )
}
export default Soporte;