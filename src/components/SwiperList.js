import React from 'react';
import {  Dimensions, StyleSheet, View } from 'react-native';
import { Image, Box } from 'native-base';
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import URL from '../private/api/URL';

const App = () => (
  <View style={styles.container}>
    <SwiperFlatList autoplay autoplayDelay={2} autoplayLoop index={2} //showPagination 
    >
      <Box w={Dimensions.get('window').width}>
      <Image  source={{uri: `${URL.BASE_URL}/public/banner1.jpeg`}} alt="banner1"
       w={(Dimensions.get('window').width)} h="100%" resizeMode="stretch" />
      </Box>
      <Box w={Dimensions.get('window').width}>
      <Image  source={{uri: `${URL.BASE_URL}/public/banner2.jpeg`}} alt="banner1"
       w={(Dimensions.get('window').width)} h="100%" resizeMode="stretch" />
      </Box> 
      <Box w={Dimensions.get('window').width}>
      <Image  source={{uri: `${URL.BASE_URL}/public/banner3.jpeg`}} alt="banner1"
       w={(Dimensions.get('window').width)} h="100%" resizeMode="stretch" />
      </Box>
    </SwiperFlatList>
  </View>
);

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white', height:150 },
  child: { width, justifyContent: 'center' },
  text: { fontSize: width * 0.5, textAlign: 'center' },
});

export default App;