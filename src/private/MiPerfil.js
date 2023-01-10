import React, {useState} from 'react';
import { TouchableOpacity} from 'react-native';
import { Box, NativeBaseProvider, ScrollView, Text, Center, FormControl, Input, VStack, HStack, Icon  } from 'native-base';
import { FontAwesome, FontAwesome5, Entypo } from '@expo/vector-icons'; 
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
                        <Input InputLeftElement={<Icon as={<FontAwesome5 name="user-alt" size={24}  />} size={5} ml="4" color="muted.400" />}
                        placeholder='Nombres'/>
                    </FormControl>
                    {/**APELLIDOS */}
                    <FormControl>
                        <FormControl.Label ml={4}>Apellidos</FormControl.Label>
                        <Input InputLeftElement={<Icon as={<FontAwesome5 name="user-alt" size={24}  />} size={5} ml="4" color="muted.400" />}
                        placeholder='Apellidos'/>
                    </FormControl>
                    {/**Numero IDENTIDAD */}
                    <FormControl>
                        <FormControl.Label ml={4}>Número de identidad</FormControl.Label>
                        <Input InputLeftElement={<Icon as={<FontAwesome name="id-card" size={24}  />} size={5} ml="3" color="muted.400" />}
                        placeholder='Número de identidad'/>
                    </FormControl>
                    {/**EMAIL */}
                    <FormControl>
                        <FormControl.Label ml={4}>Correo electrónico</FormControl.Label>
                        <Input InputLeftElement={<Icon as={<Entypo name="email" size={24}  />} size={5} ml="4" color="muted.400" />}
                        InputRightElement={<Icon as={<FontAwesome name="lock" size={24}  />} size={5} ml="4" color="#FF554E" />}
                        placeholder='Correo electrónico'/>
                    </FormControl>
                    {/**CELULAR */}
                    <FormControl>
                        <FormControl.Label ml={4}>Celular</FormControl.Label>
                        <Input InputLeftElement={<Icon as={<FontAwesome5 name="phone-alt" size={24}  />} size={5} ml="4" color="muted.400" />}
                        placeholder='Celular'/>
                    </FormControl>
                    {/**FECHA NACIMIENTO */}
                    <FormControl>
                        <FormControl.Label ml={4}>Fecha de nacimiento</FormControl.Label>
                        <Input InputLeftElement={<Icon as={<FontAwesome name="birthday-cake" size={24}  />} size={5} ml="4" color="muted.400" />}
                        placeholder='Fecha de nacimiento'/>
                    </FormControl>
                        {/**SEXO */}
                    <FormControl.Label ml={4}>Sexo</FormControl.Label>
                    <HStack  rounded={20} bg="#efefef">
                        
                            <Center  w="50%" roundedLeft={10} p={2} bg={selected===0 ? '#132039' : '#efefef'} >
                                <TouchableOpacity onPress={()=>{setSelected(0)}}>
                                    <Text fontSize={18} color={selected === 0 ? "white" : "black"}> Hombre </Text>  
                                </TouchableOpacity>
                            </Center>
                        
                        
                        
                            <Center  w="50%"  roundedRight={10} p={2} bg={selected===1 ? '#132039' : '#efefef'}>
                                <TouchableOpacity onPress={()=>{setSelected(1)}}>
                                    <Text fontSize={18} color={selected === 1 ? "white" : "black"} > Mujer </Text> 
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