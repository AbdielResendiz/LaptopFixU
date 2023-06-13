import React, { useState, useEffect } from 'react';
import { NativeBaseProvider, Text,  ScrollView, Button, Divider } from 'native-base';
import styles from '../styles/styles';


const Soporte = () => {

  const [ itemRender, setItemRender] = useState("hola");
  useEffect(() => {
    console.log("uwu",itemRender);
    
  }, [itemRender]);

  const BotonxD = (props)=>{
    const { text, idRender} = props;
    return(
      <>
      <Button mx={5} my={2} py={2} onPress={()=>setItemRender(idRender)}>
          <Text color={"white"} alignSelf={"center"} textAlign={"center"}>{text}</Text>
      </Button>
      </>
    )
  }



  const renderizarTexto = () => {
    switch (itemRender) {
      case 1:
        return (
          <>
            <Text>Verifica si los cables de alimentación están
              correctamente conectados y si el tomacorriente funciona
            </Text>

            <BotonxD text="boton 1" idRender={30}/> 
            <BotonxD text="boton 2" idRender={1.1}/>
            <BotonxD text="boton 3" idRender={30}/>
            <BotonxD text="boton 4" idRender={30}/>
          </>
          
          );
      case 2:
        return (
          <>
               <BotonxD text="boton2" idRender="valor1"/>
               <BotonxD text="boton2" idRender="valor1"/>
               <BotonxD text="boton2" idRender="valor1"/>
               <BotonxD text="boton2" idRender="valor1"/>
          </>
        );
      case 3:
        return  (
          <>
            <Text>Verifica si los cables de alimentación están
              correctamente conectados y si el tomacorriente funciona
            </Text>

            <BotonxD text="boton 1" idRender={30}/> 
            <BotonxD text="boton 2" idRender={1.1}/>
            <BotonxD text="boton 3" idRender={30}/>
            <BotonxD text="boton 4" idRender={30}/>
          </>
          
          );

        case 4:
        return <Text>Texto para valor 4</Text>;

      case 5:
          return <Text>Texto para valor hola</Text>;

      case 1.1:
          return <Text>Texto para valor uwu</Text>;


      default:
        return (
          <>
          <Text style={styles.Texts} fontSize={"md"} alignSelf={"center"}>¿Qué le ocurre a tu equipo?</Text>
          <BotonxD text="La computadora no enciende" idRender={1}/>
          <BotonxD text="La computadora se apaga repentinamente" idRender={2}/>
          <BotonxD text="La computadora se congela o se bloquea" idRender={3}/>
          <BotonxD text="La computadora muestra errores o mensajes de error" idRender={4}/>
          <BotonxD text="La computadora funciona lentamente" idRender={1.1}/>
          </>
        );
    }
  };


  


  return (
    <NativeBaseProvider>
        <ScrollView flex={1} bg="#FFFFFF" >
         
            <Text style={styles.Texts} fontSize={"lg"} alignSelf={"center"}>SOPORTE TÉCNICO ({itemRender})</Text>
      
           
            {renderizarTexto()} 


            <Divider mb={5}/>
            <BotonxD text="Ir al inicio del cuestionario" idRender={0} />

        </ScrollView>

    </NativeBaseProvider>
  )
}
export default Soporte;