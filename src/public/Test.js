import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';
import LoadingScreen from '../components/LoadSpinner';
import { NativeBaseProvider, Box } from 'native-base';

export default function Test() {


  return (
    <NativeBaseProvider>
      <LoadingScreen/>
      
    </NativeBaseProvider>
    
   
  );
}
