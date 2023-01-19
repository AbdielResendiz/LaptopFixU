import { LinearGradient } from 'expo-linear-gradient';
import { ZStack, Box } from 'native-base';




const Gradiente = () => {

    return(
        <ZStack>
        <Box h="320"  w="100%" bg={{
          linearGradient: {
            colors: [ "#236DB7", '#ffffff'],
            start: [0, 0],
            end: [0, 1]
          }
        }}>
          
        </Box>
      </ZStack>
    )

}

export default Gradiente;