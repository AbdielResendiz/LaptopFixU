import React, { useState, useEffect } from 'react';
import { TouchableOpacity, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Center, Divider, HStack, NativeBaseProvider, Text, VStack, Image, Box, ScrollView} from 'native-base';
import { useNavigation } from '@react-navigation/native';
import URL from '../private/api/URL';
import Footer from '../components/Footer';
import fetchPost from '../private/api/fetchPost';
import styles from '../styles/styles';
import baseColor from '../private/api/baseColor';

const SobreNosotros = (props) => {
  const BASE_URL = URL.BASE_URL;
  const navigation =useNavigation();

  const [nombre, setNombre] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [ id, setId] = useState("");
console.log("ID SOBRE NOS : ", id)

    useEffect(() => {
      async function fetchData() {
        try {
         
          await AsyncStorage.getItem("idUser").then(async (value) => {
            setId(value);
            console.log("id uwu: ", id);
          })
        } catch (error) {
          console.log(error);
        }
      }
  
      fetchData();
    }, []);
//Funcion condicional del boton mi perfil, si no esta loggeado, te invita a hacerlo o registrarte
    const MiPerfil= (item) => {
      if (item!==null) {
        console.log("if");
        props.navigation.navigate("MiPerfil", {
          idU: item,
        })
      } else {
        Alert.alert(   
          'Debes iniciar sesión para acceder',
          'Favor de iniciar sesión o registrarse para continuar',
          [
            { text: 'Registrarme', onPress: () => props.navigation.navigate("SignUp") },
            { text: 'Iniciar sesión', onPress: () => props.navigation.navigate("Login") },
          ],
          { cancelable: true },  
        );
      }
    };

    const getNombre = async() => {
      const dataUser = new FormData();
      dataUser.append("idU",id)
      const url = `${BASE_URL}api/login/get_info`
      const options = {
        method:'POST',
        body: dataUser
      };
      const res = await fetchPost(url, options);
       console.log("response fetch get nombre:", res.data);
       if (res.data != null){
         
        try{
          setApellidos(res.data.apellidos);
          setNombre(res.data.nombreU);
         
         }catch(e){
          console.log("error getNombre", e);
         }
        
       }else{
        
        console.log("No se ha iniciado sesión", res.data)
       }
    
    }
    getNombre();

    //Funcion condicional del boton mi mis ordene, si no esta loggeado, te invita a hacerlo o registrarte
    const MisOrdenes= (item) => {
      if (item!==null) {
        console.log("if");
        props.navigation.navigate("MisPedidos", {
          idU: item,
        })
      } else {
        Alert.alert(   
          'Debes iniciar sesión para acceder',
          'Favor de iniciar sesión o registrarse para continuar',
          [
            { text: 'Registrarme', onPress: () => props.navigation.navigate("SignUp") },
            { text: 'Iniciar sesión', onPress: () => props.navigation.navigate("Login") },
          ],
          { cancelable: true },  
        );
      }
    };

    //Funcion condicional del boton mi direcciones, si no esta loggeado, te invita a hacerlo o registrarte
    const MisDirecciones= (item) => {
      if (item!==null) {
        console.log("if");
        props.navigation.navigate("MisDirecciones", {
          idU: item,
        })
      } else {
        Alert.alert(   
          'Debes iniciar sesión para acceder',
          'Favor de iniciar sesión o registrarse para continuar',
          [
            { text: 'Registrarme', onPress: () => props.navigation.navigate("SignUp") },
            { text: 'Iniciar sesión', onPress: () => props.navigation.navigate("Login") },
          ],
          { cancelable: true },  
        );
      }
    };

    const salirAviso = () =>{
      Alert.alert(
        '¿Seguro que deseas cerrar sesión?',
        "",
        
        [
          {
            text: 'Volver',
        onPress: () => console.log('Cancel Pressed'),
          },

          { text: 'Salir',  onPress: () => {logOut()
        }  },
        ],
        { cancelable: false },
      );
    }
    
    const logOut = async() =>{
      
      try{
        await AsyncStorage.clear();
        navigation.reset({
          index: 0,
          routes: [{ name: 'Home' }],
      });

      }catch(error){
        console.log(error);
      }
    }



  return (
    <NativeBaseProvider>
      {/**Saludo inicial con nombre */}
      <Box bg={baseColor.bg}  w="100%" h="91%">
        <Center>
        <Image source={require("../img/SobreNos/user.png")
                      } alt="Alternate Text"  size="lg" />

        </Center>
      <Center>
        <Text  fontSize={18} style={styles.Texts}>Bienvenido </Text>
      </Center>
      <Center  h={10} maxH={60}>
        
        {
          (id===null) ?
          (<Text  fontWeight={800} letterSpacing={.8} fontSize={26} style={styles.Texts}> 
            Invitado 
            </Text>) 
            :
          (<VStack>
            <Center>
              <Text  fontWeight={800} letterSpacing={.8} fontSize={20} style={styles.Texts}> 
               {nombre + " " + apellidos} 
              </Text>
            </Center>
            
          </VStack>
          )
          
        }
        
        
       
      </Center>
      <Center w="50%" mb={1}>
        <Divider bg="#0081C1" thickness={2} ml="100%"/>
      </Center>
      <ScrollView>
          {/**inicia MENU CON 4 OPCIONES */}
        <Center>
          <HStack mx={4}    >
            {/**COLUMNA IZQUIERDA */}
            <VStack mr={6}>
              {/**MI PERFIL */}
              <TouchableOpacity onPress={()=>MiPerfil(id)}>
                <VStack >
                  <Center>
                    <Image source={require("../img/SobreNos/perfil.png")
                        } m={-3} mt={-5} alt="Alternate Text"  size="xl" />
                  </Center>
                </VStack>
              </TouchableOpacity>
              {/**CONTACTANOS */}
              <TouchableOpacity onPress={()=>{navigation.navigate("Contacto")}}>
                <VStack >
                  <Center>
                    <Image m={-3} mt={-5} source={require("../img/SobreNos/contacto.png")
                        } alt="Alternate Text"  size="xl" />
                  </Center>
                </VStack>
              </TouchableOpacity>
              {/**MIS DIRECCIONES */}
              <TouchableOpacity onPress={()=>MisDirecciones(id)}>
                <VStack>
                  <Center>
                    <Image m={-1} source={require("../img/SobreNos/direcciones.png")
                        } alt="Alternate Text"  size="xl" />
                  </Center>
                </VStack>
              </TouchableOpacity>
              {/**MAS APPS */}
            </VStack>
            {/**FIN COLUMNA IZQUIERDA */}
            {/**COLUMNA DERECHA */}
            <VStack >
              {/**ACERCA DE*/}
              <TouchableOpacity onPress={()=>{navigation.navigate("AcercaID")}}>
                <VStack >
                  <Center>
                    <Image m={-5} source={require("../img/SobreNos/id.png")
                        } alt="Alternate Text"  size="xl"/>
                  </Center> 
                  
                </VStack>
              </TouchableOpacity>
              {/**MIS ORDENES */}
              <TouchableOpacity onPress={()=>MisOrdenes(id)}>
                <VStack >
                  <Center>
                    <Image m={-3} source={require("../img/SobreNos/ordenes.png")
                        } alt="Alternate Text"  size="xl" />
                  </Center>
                </VStack>
              </TouchableOpacity>
              
              {/**MAS APPS */}
              <TouchableOpacity onPress={()=>{navigation.navigate("InfoApps")}}>
                  <VStack>
                    <Center>
                      <Image  source={require("../img/MasApps.png")
                          } alt="Alternate Text"  size="xl" />
                    </Center>
                  </VStack>
              </TouchableOpacity>   
            </VStack>
          </HStack>
          {/**Cerrar */}

          { 
          (id!==null) ?
          (<TouchableOpacity onPress={()=>{salirAviso()}}>
          <VStack >
            <Center>
              <Image source={require("../img/Salir.png")
                  } alt="Alternate Text" mt={-5} size="xl" shadow={7}/>
            </Center>
          </VStack>
        </TouchableOpacity>) :
          ( null )
          }
          
        </Center>
        {/**FIN DE MENU  karladailyn19*/}

      </ScrollView>
      
      
      </Box>
      <Footer/>
      
    </NativeBaseProvider>
  )
}
export default SobreNosotros;

// 552 718 6815