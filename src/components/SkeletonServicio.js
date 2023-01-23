import React from 'react';
import {  View } from 'react-native';
import { Button, NativeBaseProvider, Text, Skeleton, Center, HStack, VStack } from 'native-base';
import { useNavigation } from '@react-navigation/native';

const SkeletonServicio = () => {
  const navigation =useNavigation();
  return (
    <NativeBaseProvider>
        <Center w="100%" mt={10}>
            <HStack w="90%" borderWidth="2" space={8} rounded="md" _dark={{
            borderColor: "coolGray.500"
            }} _light={{
            borderColor: "coolGray.200"
            }} p="4" mt={4}>
            <Skeleton w={90} h={90} rounded={100} startColor="coolGray.400" />
            <VStack flex="3" space="4">
            <Skeleton startColor="blue.300"  rounded={20}/>
            <Skeleton h={4} rounded={20}/>
            <HStack space="2" alignItems="center">
                <Skeleton size="5" rounded="full" />
                <Skeleton h="3" flex="2" rounded="full" />
                <Skeleton h="3" flex="1" rounded="full" startColor="indigo.300" />
            </HStack>
            </VStack>
        </HStack>

        <HStack w="90%" borderWidth="2" space={8} rounded="md" _dark={{
            borderColor: "coolGray.500"
            }} _light={{
            borderColor: "coolGray.200"
            }} p="4" mt={4}>
            <Skeleton w={90} h={90} rounded={100} startColor="coolGray.400" />
            <VStack flex="3" space="4">
            <Skeleton startColor="blue.300"  rounded={20}/>
            <Skeleton h={4} rounded={20}/>
            <HStack space="2" alignItems="center">
                <Skeleton size="5" rounded="full" />
                <Skeleton h="3" flex="2" rounded="full" />
                <Skeleton h="3" flex="1" rounded="full" startColor="indigo.300" />
            </HStack>
            </VStack>
        </HStack>

        <HStack w="90%" borderWidth="2" space={8} rounded="md" _dark={{
            borderColor: "coolGray.500"
            }} _light={{
            borderColor: "coolGray.200"
            }} p="4" mt={4}>
            <Skeleton w={90} h={90} rounded={100} startColor="coolGray.400" />
            <VStack flex="3" space="4">
            <Skeleton startColor="blue.300"  rounded={20}/>
            <Skeleton h={4} rounded={20}/>
            <HStack space="2" alignItems="center">
                <Skeleton size="5" rounded="full" />
                <Skeleton h="3" flex="2" rounded="full" />
                <Skeleton h="3" flex="1" rounded="full" startColor="indigo.300" />
            </HStack>
            </VStack>
        </HStack>

        <HStack w="90%" borderWidth="2" space={8} rounded="md" _dark={{
            borderColor: "coolGray.500"
            }} _light={{
            borderColor: "coolGray.200"
            }} p="4" mt={4}>
            <Skeleton w={90} h={90} rounded={100} startColor="coolGray.400" />
            <VStack flex="3" space="4">
            <Skeleton startColor="blue.300"  rounded={20}/>
            <Skeleton h={4} rounded={20}/>
            <HStack space="2" alignItems="center">
                <Skeleton size="5" rounded="full" />
                <Skeleton h="3" flex="2" rounded="full" />
                <Skeleton h="3" flex="1" rounded="full" startColor="indigo.300" />
            </HStack>
            </VStack>
        </HStack>

        
    </Center>
    </NativeBaseProvider>
  )
}
export default SkeletonServicio;