import { NativeBaseProvider, ScrollView, Text, View } from "native-base";
import baseColor from "./api/baseColor";
import styles from "../styles/styles";
import React, {useState, useEffect} from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import URL from "./api/URL";
import fetchPost from "./api/fetchPost";
import FavoritoComponent from "../components/FavoritoComponent";

const Favoritos = (props)=>{

    const BASE_URL = URL.BASE_URL;
    const [ idU, setIdU ] = useState(null);
    const [ idC, setIdC ] = useState(null);
    const [ favoritos, setFavoritos ] = useState([]);

    async function fetchData() {
        try {
          
          await AsyncStorage.getItem("idUser").then(async (value) => {
            setIdU(parseInt(value)); })
          await AsyncStorage.getItem("idCarrito").then(async (value) => {
              setIdC(parseInt(value)); })
        } catch (error) {
          console.log(error);
        }
        
      }

      const getServicios = async() => {
        const dataServicio = new FormData();
        dataServicio.append("idU", idU);
        const url = `${BASE_URL}api/favoritos/get_items`
        const options = {
          method:'POST',
          body: dataServicio
        };
        const responseFav = await fetchPost(url, options);
        if (responseFav !== null){
          setFavoritos(responseFav.data);
        }else{
          setFavoritos([]);
        }
    }
  



      useEffect(() => {
        fetchData();
       // console.log("id carrito Favorito: ", idC);
       // console.log("idUser fav: ", idU);
        getServicios();
        //console.log("favoritos", favoritos)
      }, [idU, idC, favoritos]);




    return(
    <NativeBaseProvider>
        <View flex={1} bg={baseColor.bg}>
            <Text bold  style={styles.texto} textAlign="center"  fontSize={24} py={3}>Favoritos</Text>
            <ScrollView mx={6} my={4} borderWidth={1} borderRadius={10} shadow={6} bg={"white"} borderColor={"#fcfcfc"}>
                <Text bold textAlign={"center"} fontSize={16} mt={20}>Por el momento no tienes favoritos</Text>

                { favoritos.map( (impreso, index)=>{
            return(
              <FavoritoComponent
              key={index} nombre={impreso.nombreS} 
              precio = {impreso.precioS}
              image_url={impreso.image_url}
              idS={impreso.idS}
              idU={idU}
              idC={idC}/>
            ) 
          } )

          }
            </ScrollView>
        </View>

    </NativeBaseProvider>
    )
}

export default Favoritos;