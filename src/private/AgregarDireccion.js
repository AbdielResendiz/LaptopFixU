import { Center, FormControl, HStack, Input, NativeBaseProvider, Image,  ScrollView, Text, View, VStack, Box, Divider } from 'native-base';
import React , {useState, useEffect} from 'react';
import { FontAwesome } from '@expo/vector-icons'; 
import { TouchableOpacity, TextInput, Alert } from 'react-native';
import URL from './api/URL';
import { useNavigation } from '@react-navigation/native';
import Footer from '../components/Footer';
import fetchPost from './api/fetchPost';
import styles from '../styles/styles';
const AgregarDireccion = (props) => {

    const BASE_URL = URL.BASE_URL;
    const navigation =useNavigation();
 
  //obtenemos ID de usuario
  const id = props.route.params.idU;
  const idU = parseInt(id);
  console.log("idU usuario: ", id);

  const [calle, setCalle] = useState("");
  const [colonia, setColonia] = useState("");
  const [numeroExterior, setNumeroExterior] = useState("");
  const [numeroInterior, setNumeroInterior] = useState("");
  const [codigoPostal, setCodigoPostal] = useState("");
  const [municipio, setMunicipio] = useState("");
  const [estado, setEstado] = useState("");
  const [descripcion, setDescripcion] = useState("");


//OBTIENE DATOS DE LA BD. 
 const newAddress = async() => {
    
    const dataAddress = new FormData();
    dataAddress.append("idU",idU);
    dataAddress.append("calle",calle);
    dataAddress.append("colonia",colonia);
    dataAddress.append("numeroExterior",numeroExterior);
    dataAddress.append("numeroInterior",numeroInterior);
    dataAddress.append("codigoPostal",codigoPostal);
    dataAddress.append("municipio",municipio);
    dataAddress.append("estado",estado);
    dataAddress.append("descripcion",descripcion);


    const url = `${BASE_URL}api/pedidos/nueva_direccion`
    const options = {
      method:'POST',
      body: dataAddress
    };
    const res = await fetchPost(url, options);
    
    console.log("res", res);


    Alert.alert(
        'Dirección guardada',
        'Tus cambios se reflejarán pronto',
        [
          { text: 'OK',  onPress: () => {navigation.navigate("SobreNosotros")}  },
        ],
        { cancelable: false },
      );
    
}







  return (
    <NativeBaseProvider>
      <View w="100%" h="100%" bg="white">
        <HStack>
            <Center>
            <Image 
                  source={require( "../img/contacto/mapa.png")
                  } alt="Alternate Text" size={"md"} resizeMode="contain" />
            </Center>
            <Center>
                <Text style={styles.Texts} fontSize="2xl" my={2} shadow={4}>Ingresa tu nueva dirección</Text>
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
                <TouchableOpacity onPress={newAddress}>
                    <HStack style={styles.Color} p={5} mt={8} rounded={10} >
                        <FontAwesome name="save" size={24} color="white" />
                            <Text bold color={"#ffffff"} ml={3} fontSize={18} >Guardar</Text>
                    </HStack>
                </TouchableOpacity>
            </Center>
   

        </ScrollView>
        
       
       


      </View>

    </NativeBaseProvider>
  )
}
export default AgregarDireccion;