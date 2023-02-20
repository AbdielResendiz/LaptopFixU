import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';
import * as Font from 'expo-font';
import Footer2 from '../components/Footer2';
import { NativeBaseProvider, Box } from 'native-base';

export default function Test() {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    async function loadFont() {
      await Font.loadAsync({
        'Test': require('../../assets/fonts/test/Julee-Regular.ttf'),
      });
      setFontLoaded(true);
    }
    loadFont();
  }, []);
  if (!fontLoaded) {
    return null;
  }
 

  return (
    <NativeBaseProvider>
      <Box h="91%" w="100%" borderWidth={3} borderColor="#FF0000">
        <Text style={{ fontFamily: 'Test', fontSize: 100 }}>Hello World</Text>
      </Box>
      <Footer2/>
    </NativeBaseProvider>
    
   
  );
}
