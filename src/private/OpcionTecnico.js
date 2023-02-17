import React from 'react';
import { NativeBaseProvider, Center, Text } from 'native-base';
import { TouchableOpacity } from 'react-native';
import styles from '../styles/styles';


const OpcionTecnico = () => {
  return (
    <NativeBaseProvider>
        <Center>
            <Text mt={10} fontSize={26} mb={5} style={styles.Texts}>¿Quién atenderá tu orden?</Text>
        </Center>
        <TouchableOpacity>
            <Center  style={styles.Color} h={200} w="85%" alignSelf="center" rounded={30}>
                <Text fontSize={40} fontWeight="bold" color="white" style={styles.Texts} >Primer técnico disponible</Text>
            </Center>
        </TouchableOpacity>

        <TouchableOpacity>
            <Center mt={5} bg="#132039" h={200} w="85%" alignSelf="center" rounded={30}>
                <Text fontSize={40} fontWeight="bold" color="white" style={styles.Texts}>Elegir el técnico</Text>
            </Center>
        </TouchableOpacity>
    </NativeBaseProvider>
  )
}
export default OpcionTecnico;