import React from 'react';
import { Center, NativeBaseProvider, Spinner, Text } from 'native-base';
import baseColor from '../private/api/baseColor';

const LoadSpinner = () => {
  return (
    <NativeBaseProvider
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <Center my="50%">
         <Spinner color={baseColor.color} size={200} />
            <Text bold mt={5} fontSize={24}>Cargando</Text>
        </Center>
     
    </NativeBaseProvider>
  );
};

export default LoadSpinner;




