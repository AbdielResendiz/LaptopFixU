import { HStack } from "native-base";
import { FontAwesome } from '@expo/vector-icons'; 


const renderEstrellas=(calificacion)=>{
    
        switch (true) {
          case calificacion == null:
            return(
            <HStack>
              <FontAwesome name="star" size={24} color="#ffcd3c" />
              <FontAwesome name="star" size={24} color="#ffcd3c" />
              <FontAwesome name="star" size={24} color="#ffcd3c" />
              <FontAwesome name="star" size={24} color="#ffcd3c" />
              <FontAwesome name="star-o" size={24} color="#ffcd3c" />
            </HStack>
            )
            break;
          case  calificacion<1.5:
            return(
            <HStack>
              <FontAwesome name="star" size={24} color="#ffcd3c" />
              <FontAwesome name="star-o" size={24} color="#ffcd3c" />
              <FontAwesome name="star-o" size={24} color="#ffcd3c" />
              <FontAwesome name="star-o" size={24} color="#ffcd3c" />
              <FontAwesome name="star-o" size={24} color="#ffcd3c" />
            </HStack>)
            
            break;

          case calificacion>= 1.5 && calificacion<2.5:
            return(
            <HStack>
              <FontAwesome name="star" size={24} color="#ffcd3c" />
              <FontAwesome name="star" size={24} color="#ffcd3c" />
              <FontAwesome name="star-o" size={24} color="#ffcd3c" />
              <FontAwesome name="star-o" size={24} color="#ffcd3c" />
              <FontAwesome name="star-o" size={24} color="#ffcd3c" />
            </HStack>)
            
            break;

          case calificacion>= 2.5 && calificacion<3.5:
            return(
            <HStack>
              <FontAwesome name="star" size={24} color="#ffcd3c" />
              <FontAwesome name="star" size={24} color="#ffcd3c" />
              <FontAwesome name="star" size={24} color="#ffcd3c" />
              <FontAwesome name="star-o" size={24} color="#ffcd3c" />
              <FontAwesome name="star-o" size={24} color="#ffcd3c" />
            </HStack>)
            break;

          case calificacion>= 3.5 && calificacion<4.5:
            return(
            <HStack>
              <FontAwesome name="star" size={24} color="#ffcd3c" />
              <FontAwesome name="star" size={24} color="#ffcd3c" />
              <FontAwesome name="star" size={24} color="#ffcd3c" />
              <FontAwesome name="star" size={24} color="#ffcd3c" />
              <FontAwesome name="star-o" size={24} color="#ffcd3c" />
            </HStack>)
            break;

          case calificacion> 4.5:
            return(
            <HStack>
              <FontAwesome name="star" size={24} color="#ffcd3c" />
              <FontAwesome name="star" size={24} color="#ffcd3c" />
              <FontAwesome name="star" size={24} color="#ffcd3c" />
              <FontAwesome name="star" size={24} color="#ffcd3c" />
              <FontAwesome name="star" size={24} color="#ffcd3c" />
            </HStack>
            )
            break;


          default:
            return(
            <HStack>
              <FontAwesome name="star" size={24} color="#ffcd3c" />
              <FontAwesome name="star" size={24} color="#ffcd3c" />
              <FontAwesome name="star" size={24} color="#ffcd3c" />
              <FontAwesome name="star" size={24} color="#ffcd3c" />
              <FontAwesome name="star-o" size={24} color="#ffcd3c" />
            </HStack>)
            break;
        }
      
}
export default renderEstrellas;