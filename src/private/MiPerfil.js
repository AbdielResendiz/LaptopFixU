import React, {useState, useEffect} from 'react';
import { TouchableOpacity, Alert} from 'react-native';
import { Box, NativeBaseProvider, ScrollView, Text, Center, 
  FormControl, Input, VStack, HStack, Icon , Spinner } from 'native-base';
import { FontAwesome, FontAwesome5, Entypo } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';
import Footer from '../components/Footer';
import fetchPost from './api/fetchPost';
import URL from './api/URL';
import SkeletonPerfil from '../components/SkeletonPerfil';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../styles/styles';

const MiPerfil = (props) => {
    const BASE_URL =   URL.BASE_URL;
    const navigation =useNavigation();

 const [selected, setSelected] = useState(0);
 const [ loading, setLoading ] = useState(true);
 const [ actualizando, setActualizando ] = useState(false);
 const [correo, setCorreo]= useState("");

 const [nombreU, setNombreU] = useState("")
 const [apellidos, setApellidos] = useState("");
 const [telefono, setTelefono] = useState("");

 console.log("selectedc", selected)

 const id = props.route.params.idU;
 const idU = parseInt(id);
 console.log("idUU: ", id);

//OBTIENE DATOS DE LA BD. 
 const getDatos = async() => {
    setLoading(true);
    const dataUser = new FormData();
    dataUser.append("idU",id)
    const url = `${BASE_URL}api/login/get_info`
    const options = {
      method:'POST',
      body: dataUser
    };
    const res = await fetchPost(url, options);
    setApellidos(res.data.apellidos);
    setNombreU(res.data.nombreU);
    setCorreo(res.data.correo);
    setTelefono(res.data.telefono);
   // setSelected( res.data.sexo);
    //console.log("res", res.data.sexo);
    setLoading(false);
}

useEffect(() => {
    getDatos();
  }, []);


  //ACTUALIZA DATOS
  const Actualizar = async() => {
    setActualizando(true);
    if (nombreU.length<2) {
        Alert.alert(
            'Nombre invalido',
            'Ingresa un nombre de al menos 3 carácteres',
            [
              { text: 'OK',  onPress: () => console.log("Arregla el nombre")  },
            ],
            { cancelable: false },
          );
    }else if (apellidos.length<2){
        Alert.alert(
            'Apellido invalido',
            'Ingresa un apellido de al menos 3 carácteres',
            [
              { text: 'OK',  onPress: () => console.log("Arregla el nombre")  },
            ],
            { cancelable: false },
          );

    }else if (telefono.length!==10){
        Alert.alert(
            'Teléfono invalido',
            'Ingresa un numero de al menos 10 carácteres',
            [
              { text: 'OK',  onPress: () => console.log("Arregla el nombre")  },
            ],
            { cancelable: false },
          );
    }else{

        const dataNew = new FormData();
        dataNew.append("nombreU", nombreU);
        dataNew.append("apellidos", apellidos);
        dataNew.append("telefono", telefono);
        dataNew.append("sexo", selected);
        dataNew.append("idU", idU);

        const url =`${BASE_URL}api/login/update_user`
        const options ={
          method:'POST',
          body: dataNew
        };
        {/**respuesta */}
        const response = await fetchPost(url, options);
        console.log("response", response);
        if (response===true) {
           
              try {
                await AsyncStorage.removeItem('nombreAS');
                await AsyncStorage.removeItem('apellidosAS');
                await AsyncStorage.setItem('nombreAS', nombreU);
                
                await AsyncStorage.setItem('apellidosAS', apellidos);
                 
                
              } catch (error) {
                console.log(error);
              }
              Alert.alert(
                '!Se actualizaron tus datos!',
                'Los cambios seran reflejados la proxima vez que inicies sesión',
                [
                  { text: 'OK',  onPress: () => navigation.popToTop()  },
                ],
                { cancelable: false },
              );
            
        }else{
            Alert.alert(
                '!Ups....!',
                'Hubo un error, intenta más tarde',
                [
                  { text: 'OK',  onPress: () => console.log("error editar perfil")  },
                ],
                { cancelable: false },
              );

        }

    }
    setActualizando(false);
    
  }



  return (
    <NativeBaseProvider>
        { ( loading===true ) ? 
            ( <SkeletonPerfil/> ) :
            (

            
        <Box h="100%">
        <Center h="8%" >
            <Text fontSize={18} fontWeight={500} letterSpacing={0.7}>Actualiza tus datos personales.{id}</Text>
        </Center>
        
        <ScrollView h="74%" bg={"#FFFFFF"} mx={4} mb={3} p={3} rounded={20} shadow={7}>
            
            <Box>
                <VStack>
                    {/**NOMBRES */}
                    <FormControl>
                        <FormControl.Label ml={4}>Nombres</FormControl.Label>
                        <Input InputLeftElement={<Icon as={<FontAwesome5 name="user-alt" size={24}  />} size={5} ml="4" color="muted.400" />}
                        placeholder='Nombres' 
                        onChangeText={(val) => setNombreU(val)}
                        value={nombreU}/> 
                    </FormControl>
                    {/**APELLIDOS */}
                    <FormControl>
                        <FormControl.Label ml={4}>Apellidos</FormControl.Label>
                        <Input InputLeftElement={<Icon as={<FontAwesome5 name="user-alt" size={24}  />} size={5} ml="4" color="muted.400" />}
                        placeholder='Apellidos' onChangeText={(val) => setApellidos(val)}
                        value={apellidos}/> 
                    </FormControl>
                    
                    {/**EMAIL */}
                    <FormControl>
                        <FormControl.Label ml={4}>Correo electrónico</FormControl.Label>
                        <Input  isDisabled={true} InputLeftElement={<Icon as={<Entypo name="email" size={24}  />} size={5} ml="4" color="muted.400" />}
                        InputRightElement={<Icon as={<FontAwesome name="lock" size={24}  />} size={5} ml="4" color="#FF554E" />}
                        placeholder='Correo electrónico'> {correo}</Input>
                    </FormControl>
                    {/**CELULAR */}
                    <FormControl>
                        <FormControl.Label ml={4}>Celular</FormControl.Label>
                        <Input keyboardType='phone-pad' maxLength={10} InputLeftElement={<Icon as={<FontAwesome5 name="phone-alt" size={24}  />} size={5} ml="4" color="muted.400" />}
                        placeholder='Celular'
                        onChangeText={(val) => setTelefono(val)}
                        value={telefono}/> 
                    </FormControl>
                   
                        {/**SEXO */}
                    <FormControl.Label ml={4}>Sexo</FormControl.Label>
                    <HStack  rounded={20} bg="#efefef">
                        
                            <Center  w="50%" roundedLeft={10} p={2} bg={selected===0 ? '#132039' : '#efefef'} >
                                <TouchableOpacity onPress={()=>{setSelected(0)}}>
                                    <Text fontSize={18}style={styles.texto}  color={selected === 0 ? "white" : "black"}> Hombre </Text>  
                                </TouchableOpacity>
                            </Center>
                        
                        
                        
                            <Center  w="50%"  roundedRight={10} p={2} bg={selected===1 ? '#132039' : '#efefef'}>
                                <TouchableOpacity onPress={()=>{setSelected(1)}}>
                                    <Text fontSize={18} style={styles.texto} color={selected === 1 ? "white" : "black"} > Mujer </Text> 
                                </TouchableOpacity>
                            </Center>
                       
                    </HStack>

                    <TouchableOpacity onPress={Actualizar}>
                        <Center mt={5} >
                            <HStack style={styles.Color} py={3} px={6} rounded={30} >
                                { (actualizando===true) ?
                                (<Spinner size={"lg"} color="white"/>) :
                                (<FontAwesome name="save" size={24} color="white" />)

                                }
                            
                            <Text bold color="white" ml={3} fontSize="lg" style={styles.texto}>Guardar</Text> 

                            </HStack>
                        </Center>
                    </TouchableOpacity>

                </VStack>
            </Box>

            
        </ScrollView>

     
            
        </Box> )

        }
        
    </NativeBaseProvider>
  )
}
export default MiPerfil;