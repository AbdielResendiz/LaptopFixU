import React, { useState, useEffect } from 'react';
import { NativeBaseProvider, Text,  ScrollView, Button, Divider, Image, HStack, Stack, Box, Center} from 'native-base';
import styles from '../styles/styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import baseColor from '../private/api/baseColor';
import { AntDesign } from '@expo/vector-icons'; 
import { Alert } from 'react-native';

const Soporte = (props) => {


  const [ id, setId ] = useState(null);
  const [ idC, setIdC ] = useState(null);


  async function fetchData() {
    try {
      
      await AsyncStorage.getItem("idUser").then(async (value) => {
        setId(parseInt(value)); })
      await AsyncStorage.getItem("idCarrito").then(async (value) => {
          setIdC(parseInt(value)); })
    } catch (error) {
      console.log(error);
    }
    
  }

  const Alerta = () =>
    Alert.alert('Nos alegra haberte ayudado', 'Continua usando nuestra app.', [
 
      {text: 'OK', onPress: () => console.log('OK Pressed')},
      
    ],
    {cancelable:false});

  useEffect( () =>{
    fetchData();
  }, []);


  const [ itemRender, setItemRender] = useState("uwu");


  const detalleServicio= (item) => {
    
    props.navigation.navigate("DetalleServicio", {
      idServicio: item,
      idUser: id,
      idC: idC
    });
  };

  const BotonxD = (props)=>{
    const { text, idRender} = props;
    return(
      <>
      <Button bg={baseColor.color} mx={4} my={1} py={1} onPress={()=>setItemRender(idRender)} >
        
          <Text color={"white"} alignSelf={"center"} textAlign={"center"}>{text}</Text>
      </Button>
      </>
    )
  }

  const BotonServicio = (props)=>{
    const { text, imagen,  idServicio,} = props;
    return(
      <>
      <Button mx={10} my={2} py={2} onPress={()=> detalleServicio(idServicio)} borderRadius={20} >
        <HStack space={4}>
        <Image source={{
            uri: imagen
          }} alt="Alternate Text" size="sm"  borderRadius={10}/>
          <Text color={"white"} alignSelf={"center"} textAlign={"center"}>{text}</Text>
        </HStack>
        
          
      </Button>
      </>
    )
  }



  const renderizarTexto = () => {
    switch (itemRender) {
      case 1:
            return (
            <Box mx={5} px={3} py={3} mb={4} borderRadius={15} bg={"#dddddd"} shadow={7}>
                <Text bold fontSize={16} mb={2}>Sigue las siguientes indicaciones:</Text>
                <Text alignSelf={"center"} mb={5}>Verifica si los cables de alimentación están
                correctamente conectados y si el tomacorriente funciona.
                </Text>

                <Button bg={baseColor.color} mx={4} my={1} py={1} onPress={()=>Alerta()} >
        
                    <Text color={"white"} alignSelf={"center"} textAlign={"center"}>Funcionó</Text>
                </Button>

                <BotonxD text="No funciono" idRender={1.1}/> 
                
            
            </Box> );

        case 1.1:
            return (
              <>
                <Text>Puede haber un problema con la fuente de alimentación, 
                el interruptor de encendido o la placa base. 
                Sería recomendable revisar los o reemplazarlos si es necesario.
                </Text>
  
                <BotonServicio  text={"Cargador o fuenta de alimentación"} imagen={"https://laptopfix.com.mx/runner/images/9.png"} idServicio={"10"} />
             
              </>);


      case 2:
            return (
                <>

                    <Text>Verifica si los ventiladores están funcionando correctamente y 
                    si hay suficiente ventilación alrededor de la computadora
                    </Text>
                
                    <BotonxD text="Funciono" idRender={2}/> 
                    <BotonxD text="No funciono" idRender={2.1}/> 
                </>
                );

        case 2.1:
                return (
                 <>
                    <Text>Podría ser un problema de sobrecalentamiento a
                    causa dea cumulación depolvo, 
                    seríarecomendable realizar una limpieza.
                    </Text>

                    <Text>También puede haber un problema con la fuente de alimentación
                         o con los componentes de hardware, 
                        como la memoria RAM o el disco duro.
                    </Text>
          
                    <BotonServicio  text={"Limpieza fisica"} imagen={"https://laptopfix.com.mx/runner/images/2.png"} idServicio={"2"} />
                    <BotonServicio  text={"Disco duro o memoria de RAM"} imagen={"https://laptopfix.com.mx/runner/images/6.png"} idServicio={"6"} />
                     
                 </> );
      case 3:
        return  (
           <>
                    <Text>Verifica si hay actualizaciones de controladores disponibles y
                     si el sistema operativo y el software están actualizados
                    </Text>

                    <BotonxD text="Funciono" idRender={3}/> 
                    <BotonxD text="No funciono" idRender={3.1}/>
            
          </>);
          case 3.1:
            return  (
                <>
                    <Text> Puede haber un problema con los controladores 
                           de dispositivo, la incompatibilidad de software o una 
                           sobrecarga del sistema. 

                           Hay que restaurar el SO y (ó)recuperar datos.
                    </Text>
      
                    <BotonServicio  text={"Restauración de SO"} imagen={"https://laptopfix.com.mx/runner/images/4.png"} idServicio={"4"} />
                   </>
                       );

      case 4:
            return  (
                <>
                    <Text>Verifica si hay actualizaciones
                    disponibles para el sistema operativo y el software.
                    </Text>
                    <BotonxD text="Funciono" idRender={4}/> 
                    <BotonxD text="No funciono" idRender={4.1}/>
               </>
                );

            case 4.1:
                return(
                    <>
                         <Text>Puede haber un problema con el sistema operativo, archivos de sistema corruptos.
                            Puede que haya que restaurar el sistema operativo.
                         </Text>

                         <Text>Realiza un escaneo antivirus para detectar una posible infección de malware o virus.
                         </Text>
                         <BotonServicio  text={"Restauración de SO"} imagen={"https://laptopfix.com.mx/runner/images/4.png"} idServicio={"4"} />
                         <BotonServicio  text={"Recuperación de datos"} imagen={"https://laptopfix.com.mx/runner/images/5.png"} idServicio={"5"} />
                   </>
                       );
      case 5:
                return  (
                    <>
                    <Text>Verifica si hay suficiente espacio en el disco y realiza una desfragmentación si esnecesario.
                    </Text>
        
                    <BotonxD text="Funciono" idRender={5}/> 
                    <BotonxD text="No funciono" idRender={5.1}/>

                    </>
                    
                    );

        case 5.1:   return(
                     <>
                        <Text>Puede haber problemas dee spacio end isco,fragmentación del 
                            disco duro o que haya que reemplazarlo. </Text>

                        <Text>Realiza un escaneo antivirus para detectar una posible infección de malware o virus. </Text>
                        
                        <BotonServicio  text={"Recuperación de datos"} imagen={"https://laptopfix.com.mx/runner/images/5.png"} idServicio={"5"} />
                        <BotonServicio  text={"Disco duro o memoria de RAM"} imagen={"https://laptopfix.com.mx/runner/images/6.png"} idServicio={"6"} />
                    </>
                    );

      

      default:
        return (
          <Box   mx={10} bg={"#dddddd"} shadow={7} borderRadius={15} mb={2} pb={2}>
          <Text style={styles.Texts} fontSize={"md"} alignSelf={"center"}>¿Qué le ocurre a tu equipo?</Text>
          <BotonxD text="La computadora no enciende" idRender={1}/>
          <BotonxD text="La computadora se apaga repentinamente" idRender={2}/>
          <BotonxD text="La computadora se congela o se bloquea" idRender={3}/>
          <BotonxD text="La computadora muestra errores o mensajes de error" idRender={4}/>
          <BotonxD text="La computadora funciona lentamente" idRender={5}/>
          </Box>
        );
    }
  };


  


  return (
    <NativeBaseProvider>
        <ScrollView flex={1} bg="#FFFFFF" >
         
            <Text style={styles.Texts} fontSize={"lg"} alignSelf={"center"}>SOPORTE TÉCNICO ({itemRender})</Text>
      
           
            {renderizarTexto()} 


            <Divider mb={5}/>

            <Button variant="outline"  bg={"#dddddd"}  mx={12} my={1} py={1} onPress={()=>setItemRender("hola")} shadow={6} mb={3} >
              <Stack direction={"row"} space={2} px={2}>
                <AntDesign name="back" size={24} color="black" />
                <Text  alignSelf={"center"} textAlign={"center"}>
                  Ir al inicio del cuestionario
                </Text>

              </Stack>
            
            </Button>

        </ScrollView>

    </NativeBaseProvider>
  )
}
export default Soporte;