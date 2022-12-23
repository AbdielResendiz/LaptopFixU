import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from "./src/public/Home";
import Login from "./src/public/Login";
import SignUp from "./src/public/SignUp";
import Promociones from "./src/public/Promociones";
import Paquetes from "./src/public/Paquetes";
import Servicios from "./src/public/Servicios";
import Detalle from "./src/public/Detalle";
import Profile from "./src/private/Profile";
import AddCard from "./src/private/AddCard";
import CheckAdress from "./src/private/CheckAdress";
import CheckCard from "./src/private/CheckCard";
import Footer from "./src/components/Footer";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login}
        options={{title: 'Iniciar sesión',
        headerTintColor:"white",
        headerStyle: {
          backgroundColor: "#132039",
        },
      }}/>
        <Stack.Screen name="SignUp" component={SignUp}
        options={{title: 'Registro',
        headerTintColor:"white",
        headerStyle: {
          backgroundColor: "#132039",
        },
      }}/>
        <Stack.Screen
            name="Home"
            component={Home}
            options={{title: 'Inicio',
              headerTintColor:"white",
              headerStyle: {
                backgroundColor: "#236DB7",
              },
            }}
          />
        <Stack.Screen name="Footer" component={Footer}/>
     
        
        
        <Stack.Screen name="Profile" component={Profile} />
        
        
        <Stack.Screen name="Servicios" component={Servicios}/>
        <Stack.Screen name="Promociones" component={Promociones}/>
        <Stack.Screen name="Paquetes" component={Paquetes}/>
        <Stack.Screen name="Detalle" component={Detalle}/>
        <Stack.Screen name="CheckCard" component={CheckCard}/>
        <Stack.Screen name="CheckAdress" component={CheckAdress}/>
        <Stack.Screen name="AddCard" component={AddCard}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


