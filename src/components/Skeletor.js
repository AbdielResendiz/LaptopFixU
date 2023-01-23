import React from 'react';
import { NativeBaseProvider, Text, Skeleton, Center, HStack, VStack } from 'native-base';


const Skeletor = () => {

  return (
    <NativeBaseProvider>
        <Center w="100%" >
            <HStack my={2}>
                <VStack borderWidth={1} borderColor="coolGray.300" ml={2} rounded={10} p={2}>
                    <Center p={1}>
                        <Skeleton w={65} h={65} rounded={100} />
                        <Skeleton  mt={2} h={4} w={61} rounded={30}/>
                    </Center>
                </VStack>
                <VStack borderWidth={1} borderColor="coolGray.300" ml={2} rounded={10} p={2}>
                    <Center p={1}>
                        <Skeleton w={65} h={65} rounded={100} />
                        <Skeleton  mt={2} h={4} w={61} rounded={30}/>
                    </Center>
                </VStack>
                <VStack borderWidth={1} borderColor="coolGray.300" ml={2} rounded={10} p={2}>
                    <Center p={1}>
                        <Skeleton w={65} h={65} rounded={100} />
                        <Skeleton  mt={2} h={4} w={61} rounded={30}/>
                    </Center>
                </VStack>
                <VStack borderWidth={1} borderColor="coolGray.300" ml={2} rounded={10} p={2}>
                    <Center p={1}>
                        <Skeleton w={65} h={65} rounded={100} />
                        <Skeleton  mt={2} h={4} w={61} rounded={30}/>
                    </Center>
                </VStack>
            </HStack>
        </Center>
    </NativeBaseProvider>
  )
}
export default Skeletor;