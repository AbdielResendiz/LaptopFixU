import { Center, FormControl, HStack, Input, NativeBaseProvider, Image,  ScrollView, Text, View, VStack, Box, Divider } from 'native-base';
import React , {useState, useEffect} from 'react';
import { FontAwesome } from '@expo/vector-icons'; 
import { TouchableOpacity, TextInput, Alert } from 'react-native';
import URL from './api/URL';
import { useNavigation } from '@react-navigation/native';
import Footer from '../components/Footer';
import fetchPost from './api/fetchPost';

const EditarDireccion = (props) => {

    const BASE_URL = URL.BASE_URL;
    const navigation =useNavigation();
 
  //obtenemos ID de usuario
 
  const idDom = props.route.params.idD;
  const idD = parseInt(idDom);


  const [calle, setCalle] = useState("");
  const [colonia, setColonia] = useState("");
  const [numeroExterior, setNumeroExterior] = useState("");
  const [numeroInterior, setNumeroInterior] = useState("");
  const [codigoPostal, setCodigoPostal] = useState("");
  const [municipio, setMunicipio] = useState("");
  const [estado, setEstado] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const [ loading, setLoading] = useState(false);


//OBTIENE DATOS DE LA BD. 
 const getAddress = async() => {
    
    const dataAddress = new FormData();
    dataAddress.append("idD",idD);



    const url = `${BASE_URL}api/pedidos/get_direccion`
    const options = {
      method:'POST',
      body: dataAddress
    };
    const res = await fetchPost(url, options);
    
    console.log("res", res[0]);
    try{
      setCalle(res[0].calle);
      setColonia(res[0].colonia);
      setNumeroExterior(res[0].numeroExterior);
      setNumeroInterior(res[0].numeroInterior);
      setCodigoPostal(res[0].codigoPostal);
      setEstado(res[0].estado);
      setMunicipio(res[0].municipio);
      setDescripcion(res[0].descripcion);
    }catch(e){
      console.log(e)
    }
    
    
}
useEffect(() => {
  getAddress();
}, []);


//editar y guardar cambios en la bd
const editAddress = async() => {
  setLoading(true);

  
  const dataEdit = new FormData();
    dataEdit.append("idD", idD);
    dataEdit.append("calle", calle);
    dataEdit.append("colonia", colonia);
    dataEdit.append("numeroExterior", numeroExterior);
    dataEdit.append("numeorInterior", numeroInterior);
    dataEdit.append("codigoPostal", codigoPostal);
    dataEdit.append("municipio", municipio);
    dataEdit.append("estado", estado);
    dataEdit.append("descripcion", descripcion);
   

    
    const url ='https://laptopfix.com.mx/laptopfixrun/api/pedidos/update_direccion'
    const options ={
      method:'POST',
      body: dataEdit
    };
    {/**respuesta */}
    const res = await fetchPost(url, options);
    console.log("res", res);

    if (res===true){
      {/**REGISTRO CORRECTO */}

      

      Alert.alert(
        'Edición completa',
        'Se guardaron tus cambios con éxito',
        [
          { text: 'OK',  onPress: () => {navigation.navigate("SobreNosotros")}  },
        ],
        { cancelable: false },
      );

      
    }
    else{
      {/**Registro FALLIDO */}
      Alert.alert(
        'Fallo en edición',
        'Intentalo más tarde',
        [
          { text: 'OK',  onPress: () => {navigation.navigate("SobreNosotros")} },
        ],
        { cancelable: false },
      );
    } 
    setLoading(false);
  }






  return (
    <NativeBaseProvider>
      <View w="100%" h="91%" bg="white">
        <HStack>
            <Center>
            <Image 
                  source={require( "../img/contacto/mapa.png")
                  } alt="Alternate Text" size={"md"} resizeMode="contain" />
            </Center>
            <Center>
                <Text bold fontSize="xl" my={2} shadow={4}>Ingresa tu nueva dirección id:{idD}</Text>
            </Center>
        </HStack>
        
        <Center >
         <Divider  w="80%"/>
        </Center>
        

        <ScrollView >
            <FormControl mt={3} mx={4}>
                <HStack>
                    <Center w="20%"  >
                        <FormControl.Label mr={3} >Calle:</FormControl.Label>
                    </Center>
                <Input w="70%" placeholder='Colonia' variant="rounded"
                onChangeText={(val) => setCalle(val)}
                isRequired="true"
                autoCapitalize='none'
                value={calle}/>
                </HStack>
            </FormControl>

            <FormControl mt={3} mx={4}>
                <HStack>
                    <Center w="20%"  >
                        <FormControl.Label mr={3} >Colonia:</FormControl.Label>
                    </Center>
                <Input w="70%" placeholder='Colonia' variant="rounded"
                onChangeText={(val) => setColonia(val)}
                autoCapitalize='none'
                value={colonia}/>
                </HStack>
            </FormControl>

            <FormControl  mt={3} mx={4}>
                <HStack >
                    <Center w="15%">
                        <FormControl.Label  >N.º ext:</FormControl.Label>
                    </Center>
                    <Input  placeholder='Exterior' w="30%" variant="rounded"
                    onChangeText={(val) => setNumeroExterior(val)}
                    autoCapitalize='none'
                    value={numeroExterior}/>
                    <Center  w="15%">
                        <FormControl.Label  >Nº int:</FormControl.Label>
                    </Center>
                    <Input placeholder='Interior' w="30%" variant="rounded"
                    onChangeText={(val) => setNumeroInterior(val)}
                    autoCapitalize='none'
                    value={numeroInterior}/>
                </HStack>
            </FormControl>

            <FormControl mx={4} mt={3}>
                <HStack>
                    <Center w="25%">
                        <FormControl.Label >Código postal:</FormControl.Label>
                    </Center>
                <Input placeholder='Código postal' ml={4} w="60%" variant="rounded"
                onChangeText={(val) => setCodigoPostal(val)}
                autoCapitalize='none'
                value={codigoPostal}/>
                </HStack>
            </FormControl>

            <FormControl mx={4} mt={3}>
                <HStack>
                    <Center w="20%" mr={5}>
                        <FormControl.Label  >Estado:</FormControl.Label>
                    </Center>
                <Input placeholder='Estado' w="65%" variant="rounded"
                onChangeText={(val) => setEstado(val)}
                autoCapitalize='none'
                value={estado}/>
                </HStack>
            </FormControl>

            <FormControl  mx={4} mt={3}>
                <HStack>
                    <Center w="25%">
                        <FormControl.Label mr={3} >Municipio:</FormControl.Label>
                    </Center>
                <Input placeholder='Municipio' w="65%" variant="rounded"
                onChangeText={(val) => setMunicipio(val)}
                autoCapitalize='none'
                value={municipio}/>
                </HStack>
            </FormControl>

            

            <FormControl ml={6} mt={3}>
                <HStack>
                    <Center w="25%">
                        <FormControl.Label mr={3}  >Descripción:</FormControl.Label>
                    </Center>
                    <Box borderColor={"#d4d4d4"} borderWidth={1} w="63%" borderRadius={20} p={2} >
                         <TextInput placeholder='Descripción' w="50%" variant="rounded" numberOfLines={3} multiline maxLength={100}
                         onChangeText={(val) => setDescripcion(val)}
                         autoCapitalize='none'
                         value={descripcion}/>
                    </Box>
                
                </HStack>
            </FormControl>


           
            <Center>
                <TouchableOpacity onPress={editAddress}>
                    <HStack bg="#236DB7" p={5} mt={8} rounded={10} >
                        <FontAwesome name="save" size={24} color="white" />
                            <Text bold color={"#ffffff"} ml={3} fontSize={18} >Guardar</Text>
                    </HStack>
                </TouchableOpacity>
            </Center>
   

        </ScrollView>
        
       
       


      </View>
      <Footer/>
    </NativeBaseProvider>
  )
}
export default EditarDireccion;