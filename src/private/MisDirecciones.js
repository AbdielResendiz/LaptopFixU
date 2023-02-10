import React, {useState, useEffect} from 'react';
import { TouchableOpacity, Alert } from 'react-native';
import { NativeBaseProvider, Text, View, Center, Divider,
  HStack, VStack , Box, Heading, Spinner ,ScrollView} from 'native-base';
import { FontAwesome5, Entypo } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';
import Footer from '../components/Footer';
import fetchPost from './api/fetchPost';
import URL from './api/URL';

const MisDirecciones = (props) => {

  const BASE_URL = URL.BASE_URL;

  const navigation =useNavigation();
  //obtenemos ID de usuario
  const id = props.route.params.idU;
  const idU = parseInt(id);
  console.log("id usuario: ", id);

  //loader
  const [loading, setLoading] = useState(true);

//navegacion
  const AgregarDireccionNav= (item) => {
    navigation.navigate("AgregarDireccion", {
      idU: item,
    });
  };


    //INICIA Ver DIRECCIONES
    const [ direcciones, setDirecciones ] = useState([]);
    const dataAddress = new FormData();
    
    dataAddress.append("idU",idU)

    const getDatos1 = async() => {
        const url = `${BASE_URL}api/pedidos/get_direcciones`
        const options = {
          method:'POST',
          body: dataAddress
        };
        const res = await fetchPost(url, options);
        setDirecciones(res);
       console.log("address", res)
       setLoading(false);
        
    }
  
    useEffect(() => {
        getDatos1();
      }, []);
  
    //FIN VER DIRECCIONES



    //FUNCION DE BORRAR/EDITAR ALERT
 const addressOptions = (item) => {
      
  Alert.alert(
    '¿Qué deseas hacer?',
    'Selecciona una opción',
    [
      { text: 'Borrar',  onPress: () => {borrarDireccion(item)}  },
      { text: 'Editar',  onPress: () => props.navigation.navigate( "EditarDireccion", {
        idD: item,
      })  }
    ],
    { cancelable: true },
  );
 }

 //FUNCION BORRARconfirmar
 const borrarDireccion = (item) => {
      
  Alert.alert(
    '¿Seguro que deseas eliminar?',
    '',
    [
      { text: 'Cancelar',  onPress: () => console.log("cancelar borrar", item)  },
      { text: 'Eliminar',  onPress: () => {deleteAddress(item)}  }
    ],
    { cancelable: true },
  );
 }

 //borrar direccion en BD
  const deleteAddress = async(item) =>{
    console.log("borrado seguro id:", item);
    const dataLogin = new FormData();
    
      dataLogin.append("idD", item);
      
  
      
      const url ='https://laptopfix.com.mx/laptopfixrun/api/pedidos/borrar_direccion'
      const options ={
        method:'POST',
        body: dataLogin
      };
      {/**respuesta */}
      const res = await fetchPost(url, options);
      console.log("res", res);
      if (res ===true) {
        Alert.alert(
          'Se ha borrado la dirección con éxito',
          '',
          [
            { text: 'OK',  onPress: () => navigation.navigate("SobreNosotros")  },
            
          ],
          { cancelable: true },
        );
      }else{
        console.log("error al borrar")
      }
      
        
    

  }


  return (
    <NativeBaseProvider>
      <View w="100%" h="91%" bg="white">
        <Center>
          {/**TITULO  */}
          <Text fontWeight={800} fontSize={30} mt={2}>
            Agrega o escoge una dirección 
          </Text>
        </Center>
        {/**DIVIDER */}
        <Center>
          <Divider thickness={1} w="70%" my={4} bg="#236DB7" />
        </Center>

        {/**BOTÓN AGREGAR DIRECCIÓN */}
        <Center >
          <TouchableOpacity onPress={() => AgregarDireccionNav(idU)}>
            <HStack bg="muted.300" p={4} rounded={20}>
              <FontAwesome5 name="map-marker-alt" size={28} color="black"  />
              <Text ml={5} fontSize={18}>Nueva dirección</Text>
            </HStack>
          </TouchableOpacity>
        </Center>
        {/**DIVIDER */}
        <Center>
          <Divider thickness={1} w="70%" mt={4} bg="#236DB7" />
        </Center>
        {/**DIRECCION SELECCIONADA */}

        {/**
         * 
         * <Center mt={5}>
          <HStack w="80%" >
            <Center p={3} w="15%">
              <FontAwesome5 name="check" size={24} color="#32C882" />
            </Center>
            <Center w="65%">
              <TouchableOpacity>
                <Text fontSize={18} fontWeight={600} color="#32C882">Av Siempre Viva 123</Text>
              </TouchableOpacity>
            </Center>
            <Center p={3} w="15%">
              <TouchableOpacity>
              <Entypo name="dots-three-horizontal" size={24} color="#32C882" />
              </TouchableOpacity>
            </Center>
          </HStack>
        </Center>
        <Center>
          <Divider thickness={1} w="70%" mt={4} bg="#236DB7" />
        </Center>
         */}
        

                {/**DIRECCION NO SELECCIONADA */}


      {(loading===true) ? 
        ( <HStack space={2} justifyContent="center" my={10}>
        <Spinner accessibilityLabel="Cargando direcciones" size={80} color="#236DB7"/>
        <Center mt={4}>
          <Heading color="#236DB7" fontSize="xl">
            Cargando direcciones
          </Heading>
        </Center>
        
      </HStack>) 
        :
        ( 
        <ScrollView>
        {direcciones.map( ( direccion, index ) =>{
          return(
            <Center key={index} mt={6}>
                <HStack w="80%" >
                  <Center p={3} w="15%">
                    <FontAwesome5 name="map-pin" size={24} color="black" />
                  </Center>
                <Box w="65%">
                  <VStack>
                    <Text fontSize={18} fontWeight={600} color="#000000">{direccion.calle + " Nº" +direccion.numeroExterior}</Text>
                    <Text fontSize={18} fontWeight={600} color="#000000">{direccion.colonia}</Text>
                  </VStack>
                </Box>
                <Center p={3} w="15%">
                  <TouchableOpacity onPress={ () => addressOptions(direccion.idD)}>
                    <Entypo name="dots-three-horizontal" size={24} color="#000000" />
                  </TouchableOpacity>
                </Center>
              </HStack>
            </Center>
          )
          })}
        </ScrollView> 
        )  
    }
       



        <Center>
          <Divider thickness={1} w="70%" mt={4} bg="#236DB7" />
        </Center>
        




      </View>
      <Footer/>
    </NativeBaseProvider>
  )
}
export default MisDirecciones;