import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';
import * as Font from 'expo-font';

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
    <Text style={{ fontFamily: 'Test', fontSize: 100 }}>Hello World</Text>
   
  );
}
