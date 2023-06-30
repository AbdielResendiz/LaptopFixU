import React from 'react';
import { NativeBaseProvider, Center, Text, ScrollView } from 'native-base';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles/styles';


const OpcionTecnico = () => {
  const navigation =useNavigation();
  return (
    <NativeBaseProvider>
        <ScrollView flex={1} style={styles.bg}>
            <Center>
                <Text mt={10} fontSize={26} mb={5} style={styles.Texts}>¿Quién atenderá tu orden?</Text>
            </Center>
            <TouchableOpacity>
                <Center  style={styles.Color} h={200} w="85%" alignSelf="center" rounded={30}>
                    <Text fontSize={40} fontWeight="bold" color="white" style={styles.TextsW} >Primer técnico disponible</Text>
                </Center>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=> navigation.navigate("ElegirTecnico") }>
                <Center mt={5} bg="#132039" h={200} w="85%" alignSelf="center" rounded={30}>
                    <Text fontSize={40} fontWeight="bold" color="white" style={styles.TextsW}>Elegir el técnico</Text>
                </Center>
            </TouchableOpacity>
        </ScrollView>
    </NativeBaseProvider>
  )
}
export default OpcionTecnico;