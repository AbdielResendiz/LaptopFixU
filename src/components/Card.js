import React from 'react';
import { Text, View } from 'react-native';
import { NativeBaseProvider, HStack, Center, Box, 
    ScrollView , Stack, AspectRatio, Image, Heading} from 'native-base';


const Card = (props) => {

    return(
        <Box alignItems="center" >
        <Box maxW="80" rounded="md" overflow="hidden" 
        borderColor="coolGray.200" borderWidth="1" _dark={{
                borderColor: "coolGray.600",
                backgroundColor: "gray.700"
                }} _web={{
                shadow: 2,
                borderWidth: 0
                }} _light={{
                backgroundColor: "gray.50"
                }}>
        <Box>
          <AspectRatio w="95%" ratio={16 / 9}>
            <Image source={{
            uri: "https://us.123rf.com/450wm/niroworld/niroworld1411/niroworld141100025/33653760-computer-repair-service-concept-with-work-tools-icons-and-symbol-on-a-green-laptop-computer-key-for-.jpg?ver=6"
          }} alt="image" />
          </AspectRatio>
          <Center bg="#236DB7" _dark={{
          bg: "violet.400"
        }} _text={{
          color: "warmGray.50",
          fontWeight: "700",
          fontSize: "xs"
        }} position="absolute" bottom="0" px="3" py="1.5">
            OFERTA
          </Center>
        </Box>
        <Stack p="3" space={1}>
          <Stack space={1}>
            <Heading size="sm" ml="-1">
              Instalación de Antivirus
            </Heading>
            
          </Stack>
         
          <HStack alignItems="center" space={4} justifyContent="space-between">
            <HStack alignItems="center">
              
            </HStack>
          </HStack>
        </Stack>
      </Box>
    </Box>
    )
}
export default Card;



