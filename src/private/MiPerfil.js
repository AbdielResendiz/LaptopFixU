import React, {useState} from 'react';
import { TouchableOpacity} from 'react-native';
import { Box, NativeBaseProvider, ScrollView, Text, Center, FormControl, Input, VStack, HStack  } from 'native-base';
import Footer from '../components/Footer';


const MiPerfil = () => {

 const [selected, setSelected]= useState(0)


  return (
    <NativeBaseProvider>
        <Center h="8%" >
            <Text fontSize={18} fontWeight={500} letterSpacing={0.7}>Actualiza tus datos personales.</Text>
        </Center>
        <ScrollView h="74%" bg={"#FFFFFF"} mx={4} mb={3} p={3} rounded={20} shadow={7}>
            
            <Box>
                <VStack>
                    {/**NOMBRES */}
                    <FormControl>
                        <FormControl.Label ml={4}>Nombres</FormControl.Label>
                        <Input placeholder='Nombres'/>
                    </FormControl>
                    {/**APELLIDOS */}
                    <FormControl>
                        <FormControl.Label ml={4}>Apellidos</FormControl.Label>
                        <Input placeholder='Apellidos'/>
                    </FormControl>
                    {/**APELLIDOS */}
                    <FormControl>
                        <FormControl.Label ml={4}>Número de identidad</FormControl.Label>
                        <Input placeholder='Número de identidad'/>
                    </FormControl>
                    {/**APELLIDOS */}
                    <FormControl>
                        <FormControl.Label ml={4}>Correo electrónico</FormControl.Label>
                        <Input placeholder='Correo electrónico'/>
                    </FormControl>
                    {/**APELLIDOS */}
                    <FormControl>
                        <FormControl.Label ml={4}>Celular</FormControl.Label>
                        <Input placeholder='Celular'/>
                    </FormControl>
                    {/**APELLIDOS */}
                    <FormControl>
                        <FormControl.Label ml={4}>Fecha de nacimiento</FormControl.Label>
                        <Input placeholder='Fecha de nacimiento'/>
                    </FormControl>

                    <FormControl.Label ml={4}>Sexo</FormControl.Label>
                    <HStack  rounded={20} bg="#efefef">
                        
                            <Center  w="50%" roundedLeft={10} p={2} bg={selected===0 ? '#132039' : '#efefef'} >
                                <TouchableOpacity onPress={()=>{setSelected(0)}}>
                                    <Text fontSize={18} color={selected === 0 ? "white" : "black"}>Hombre</Text>  
                                </TouchableOpacity>
                            </Center>
                        
                        
                        
                            <Center  w="50%"  roundedRight={10} p={2} bg={selected===1 ? '#132039' : '#efefef'}>
                                <TouchableOpacity onPress={()=>{setSelected(1)}}>
                                    <Text fontSize={18} color={selected === 1 ? "white" : "black"} >Mujer</Text> 
                                </TouchableOpacity>
                            </Center>
                       
                    </HStack>

                </VStack>
            </Box>

            
        </ScrollView>

        <Footer/>
    </NativeBaseProvider>
  )
}
export default MiPerfil;