import { LinearGradient } from 'expo-linear-gradient';
import { ZStack, Box } from 'native-base';
import baseColor from '../private/api/baseColor';




const Gradiente = () => {
  const Color = baseColor.color;

    return(
        <ZStack>
        <Box h="150"  w="100%" bg={{
          linearGradient: {
            colors: [ Color, Color,'#ffffff'],
            start: [0, 0],
            end: [0, 1]
          }
        }}>
          
        </Box>
      </ZStack>
    )

}

export default Gradiente;