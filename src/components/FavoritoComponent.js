import { Box, Pressable, Icon, Center, Image, Text, Stack} from "native-base";
import {  AntDesign } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';
import { Alert } from "react-native";
import fetchPost from "../private/api/fetchPost";
import URL from "../private/api/URL";
import eliminarFav from "../helper/favoritos/eliminarFav";
import baseColor from "../private/api/baseColor";

const FavoritoComponent = (props)=>{
    const BASE_URL= URL.BASE_URL;
    const navigation =useNavigation();

    const { nombre, precio,  image_url,  idS , idU, idC} =props;



    const detalleServicio= (idU, idC, idS) => {
        navigation.navigate("DetalleServicio", {
        idServicio: idS,
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
            {text: 'Confirmar', onPress: () => eliminarFav(idU, idS)},
          ],
          {cancelable: true}
          );
     }

    return(
        <>
      <Box h={32} w={"90%"} mx={"5%"}  my={2} shadow={6} bg="white" borderRadius={20} >
            <Stack direction={"row"}> 
                <Pressable onPress={()=>eliminarFavorito(idU, idS)}>
                  <Icon as={AntDesign} name="heart" size={6} ml={3}  mt={3} color={"#ff0000"} />
                </Pressable>
               
                
                <Image source={{
                uri: `${image_url}`
                }} alt="Alternate Text" size="lg" mt={4} mx={3} resizeMode="contain" />
                <Stack direction={"column"}   flex={1} mt={2}>
                    <Text  pt={1}> {nombre}</Text>
                    <Text bold fontSize={"lg"}>${precio}</Text>
                    <Box my={1} >
                 
                     <Pressable bg={baseColor.color} borderRadius={10} w={24} h={9}
                     onPress={()=>detalleServicio(idU, idC, idS)} >
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

export default FavoritoComponent;