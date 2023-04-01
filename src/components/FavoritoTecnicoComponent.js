import { Box, Pressable, Icon, Center, Image, Text, Stack} from "native-base";
import {  AntDesign } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';
import { Alert } from "react-native";
import URL from "../private/api/URL";
import baseColor from "../private/api/baseColor";
import eliminarFavT from "../helper/favoritos/eliminarFavT";
import styles from "../styles/styles";

const FavoritoTecnicoComponent = (props)=>{
    const BASE_URL= URL.BASE_URL;
    const navigation =useNavigation();

    const { nombre,  image_url,  idT , idU, idC} =props;



    const detalleTecnico= (idT, idC, idU) => {
        navigation.navigate("DetalleTecnico", {
        idTecnico: idT,
        idC: idC,
        idUser: idU
          
          
        }); 
      };





     const eliminarFavorito = ()=>{
        Alert.alert('Borrar Favorito', `¿Deseas borrar ${nombre} de favoritos?`, [
            {
              text: 'Cancelar',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
            {text: 'Confirmar', onPress: () => eliminarFavT(idU, idT)},
          ],
          {cancelable: true}
          );
     }

    return(
        <>
      <Box h={32} w={"90%"} mx={"5%"}  my={2} shadow={6} bg="white" borderRadius={20} >
            <Stack direction={"row"}> 
                <Pressable onPress={()=>eliminarFavorito(idU, idT)}>
                  <Icon as={AntDesign} name="heart" size={6} ml={3}  mt={3} color={"#ff0000"} />
                </Pressable>
               
                
                <Image source={{
                uri: `${image_url}`
                }} alt="Alternate Text" size="lg" mt={4} mx={3} resizeMode="contain" borderRadius={10} />
                <Stack direction={"column"}   flex={1} mt={2}>
                    <Text  pt={1} bold fontSize={"md"} style={styles.texto}> {nombre} </Text>
                    
                    <Box my={1} >
                 
                     <Pressable bg={baseColor.color} borderRadius={10} w={24} h={9}
                     onPress={()=>detalleTecnico(idT, idC, idU)} >
                        <Center >
                            <Stack direction={"row"} mt={1}>
                                
                                <Text bold color={"white"} mt={1}>Ver más</Text>
                            </Stack>
                        </Center>
                    </Pressable>
                   
                    </Box>

                </Stack>


            </Stack>

        </Box>
        
        </>
    );
};

export default FavoritoTecnicoComponent;