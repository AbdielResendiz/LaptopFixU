import React, { useState, useEffect } from 'react';
import { NativeBaseProvider, Text, Box, Center, ScrollView, Input, Button, Divider } from 'native-base';
import Footer from '../components/Footer';
import styles from '../styles/styles';

const Soporte = () => {

  const [ itemRender, setItemRender] = useState("valor1");
  useEffect(() => {
    console.log("uwu",itemRender);
    
  }, [itemRender]);

  const Boton = (props)=>{
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

          <Boton text="boton 1" idRender="valor2"/> 
          </>
          
          );
      case 2:
        return <Boton text="boton2" idRender="valor1"/>;
      case 3:
        return <Text>Texto para valor3</Text>;
      default:
        return (
          <>
          <Text style={styles.Texts} fontSize={"md"} alignSelf={"center"}>¿Qué le ocurre a tu equipo?</Text>
          <Boton text="La computadora no enciende" idRender={1}/>
          <Boton text="La computadora se apaga repentinamente" idRender={2}/>
          <Boton text="La computadora se congela o se bloquea" idRender={3}/>
          <Boton text="La computadora muestra errores o mensajes de error" idRender={4}/>
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
            <Boton text="Ir al inicio del cuestionario" idRender={0} />

       
            

        </ScrollView>
      




    
      
    </NativeBaseProvider>
  )
}
export default Soporte;