import * as Font from 'expo-font';

async function loadCustomFont() {
    await Font.loadAsync({
      
      
      'CircularStd': require('../../../assets/fonts/Circular/Circular.ttf'),
      
    });
    return true;
  }

  export default loadCustomFont;