import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from "./src/public/Home";
import Login from "./src/public/Login";
import SignUp from "./src/public/SignUp";
import InfoApps from "./src/public/InfoApps";
import Promociones from "./src/public/Promociones";
import Paquetes from "./src/public/Paquetes";
import Servicios from "./src/public/Servicios";
import Detalle from "./src/public/Detalle";
import Profile from "./src/private/Profile";
import OpcionTecnico from "./src/private/OpcionTecnico";
import AddCard from "./src/private/AddCard";
import MisPedidos from "./src/private/MisPedidos";
import CheckAdress from "./src/private/CheckAdress";
import CheckPago from "./src/private/CheckPago";
import CheckCard from "./src/private/CheckCard";
import Carrito from "./src/private/Carrito";
import Footer from "./src/components/Footer";


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
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
        <Stack.Screen name="Detalle" component={Detalle}
        options={{title: 'Detalle',
        headerTintColor:"white",
        headerStyle: {
          backgroundColor: "#132039",
        },
        }}/>
        <Stack.Screen name="Servicios" component={Servicios}
        options={{title: 'Servicios',
        headerTintColor:"white",
        headerStyle: {
          backgroundColor: "#132039",
        },
        }}/>
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
        <Stack.Screen name="MisPedidos" component={MisPedidos}
        options={{title: 'Mis pedidos',
        headerTintColor:"white",
        headerStyle: {
          backgroundColor: "#132039",
        },
       }}/>
        
        <Stack.Screen name="Footer" component={Footer}/>
     
        
        
        <Stack.Screen name="Profile" component={Profile} 
        options={{title: 'Mi cuenta',
        headerTintColor:"white",
        headerStyle: {
          backgroundColor: "#132039",
        },
        }}/>
        
        
        
        <Stack.Screen name="Promociones" component={Promociones}/>
        <Stack.Screen name="Paquetes" component={Paquetes}/>
        
        <Stack.Screen name="CheckCard" component={CheckCard}
        options={{title: 'Pasarela de pago',
        headerTintColor:"white",
        headerStyle: {
          backgroundColor: "#132039",
        },
        }}/>

        <Stack.Screen name="CheckAdress" component={CheckAdress}
        options={{title: 'Confirma dirección',
        headerTintColor:"white",
        headerStyle: {
          backgroundColor: "#132039",
        },
        }}/>

        <Stack.Screen name="CheckPago" component={CheckPago}
        options={{title: 'Confirma método de pago',
        headerTintColor:"white",
        headerStyle: {
          backgroundColor: "#132039",
        },
        }}/>

        <Stack.Screen name="AddCard" component={AddCard}/>
        <Stack.Screen name="InfoApps" component={InfoApps}
        options={{title: 'Sobre nosotros',
        headerTintColor:"white",
        headerStyle: {
          backgroundColor: "#132039",
        },
        }}/>

        <Stack.Screen name="Carrito" component={Carrito}
         options={{title: 'Carrito',
         headerTintColor:"white",
         headerStyle: {
           backgroundColor: "#132039",
         },
         }}/>

        <Stack.Screen name="OpcionTecnico" component={OpcionTecnico}
         options={{title: 'Carrito',
         headerTintColor:"white",
         headerStyle: {
           backgroundColor: "#132039",
         },
         }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


