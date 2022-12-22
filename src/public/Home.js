import React from 'react';
import { Text, View } from 'react-native';
import { FontAwesome, Ionicons } from '@expo/vector-icons'; 



const Home = () => {
  return (
    <View>
        <View style={{flexDirection:"row"}}>
            <Text>Bienvenido</Text>
            <FontAwesome name="bell-o" size={24} color="black" />
            <Ionicons name="person-circle-sharp" size={24} color="black" />

        </View>
        
    </View>
  )
}
export default Home;