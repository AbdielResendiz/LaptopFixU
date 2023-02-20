import * as React from 'react';
import {NavigationContainer, useNavigationContainerRef} from '@react-navigation/native';
import {Image, NativeBaseProvider} from 'native-base';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { View, TouchableOpacity} from 'react-native';
import { FontAwesome,  AntDesign } from '@expo/vector-icons'; 

import Home from "./src/public/Home";
import Login from "./src/public/Login";
import SignUp from "./src/public/SignUp";
import InfoApps from "./src/public/InfoApps";
import Promociones from "./src/public/Promociones";
import Paquetes from "./src/public/Paquetes";
import Servicios from "./src/public/Servicios";
import Detalle from "./src/public/Detalle";


import OpcionTecnico from "./src/private/OpcionTecnico";
import AddCard from "./src/private/AddCard";
import MisPedidos from "./src/private/MisPedidos";
import CheckAdress from "./src/private/CheckAdress";
import CheckPago from "./src/private/CheckPago";
import CheckCard from "./src/private/CheckCard";
import Carrito from "./src/private/Carrito";
import Footer from "./src/components/Footer";

import SobreNosotros from './src/public/SobreNosotros';
import AcercaID from './src/public/AcercaID';
import Contacto from './src/public/Contacto';
import MisDirecciones from './src/private/MisDirecciones';
import DetalleOrden from './src/private/DetalleOrden';
import Buscar from './src/public/Buscar';
import Soporte from './src/public/Soporte';
import MiPerfil from './src/private/MiPerfil';
import Tecnicos from './src/public/Tecnicos';
import AgregarTarjeta from './src/private/AgregarTarjeta';
import DetalleServicio from './src/public/DetalleServicio';
import DetalleTecnico from './src/public/DetalleTecnico';
import Skeletor from './src/components/Skeletor';
import SkeletonServicio from './src/components/SkeletonServicio';
import SkeletonPerfil from './src/components/SkeletonPerfil';
import AgregarDireccion from './src/private/AgregarDireccion';
import EditarDireccion from './src/private/EditarDireccion';
import Test from './src/public/Test'


import * as Font from 'expo-font';
import  { useState, useEffect } from 'react';
import { Text } from 'react-native';
import baseColor from './src/private/api/baseColor';
//font






const Stack = createNativeStackNavigator();


export default function App() {
  
  const navigationRef = useNavigationContainerRef();
  //variable para cambiar COLOR
  const color = baseColor.color;
  //const color = "#FF0000";

  const [fontLoaded, setFontLoaded] = useState(false);
//CARGAR FUENTE, EDITAR SI QUIERE INSTALAR OTRA FUENTE
  useEffect(() => {
    async function loadFont() {
      await Font.loadAsync({
        'CircularApp': require('./assets/fonts/Circular/Circular.ttf'),
      });
      setFontLoaded(true);
    }
    loadFont();
  }, []);
  if (!fontLoaded) {
    return null;
  }



  return (
    
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>
      <Stack.Screen
            name="Home"
            component={Home}
            options={{title: '',
              headerTintColor:baseColor.colorFont2,
              headerStyle: {
                backgroundColor: color,
              },
              headerShadowVisible: false,
              headerRight: () => (
                <View style={{flexDirection: 'row'}}>
                <TouchableOpacity onPress={()=>navigationRef.navigate("Carrito")} style={{marginRight:20}}>
                  <AntDesign name="shoppingcart" size={34} color={baseColor.colorFont2} />
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>navigationRef.navigate("SobreNosotros")} style={{marginRight:10, marginTop:5}}>
                  <FontAwesome name="gears" size={24} color={baseColor.colorFont2} />
                </TouchableOpacity>
              </View>
              ),
              headerLeft: ()=>(
                <NativeBaseProvider>
                 <Image source={require("./assets/icon.png")} 
                     alt={"logo"}  size={"sm"}  />

                  
                </NativeBaseProvider>
              )
             
              
            }}
          />
        <Stack.Screen name="Detalle" component={Detalle}
        options={{title: 'Detalle',
        headerTintColor:baseColor.colorFont2,
        headerStyle: {
          backgroundColor: color,
        },
        }}/>
        <Stack.Screen name="Servicios" component={Servicios}
        options={{title: 'Servicios',
          headerTintColor:baseColor.colorFont2,
          headerStyle: {
            backgroundColor: color,
          },
          headerShadowVisible: false,
          headerRight: () => (
            <View style={{flexDirection: 'row'}}>
            <TouchableOpacity onPress={()=>navigationRef.navigate("Carrito")} style={{marginRight:20}}>
              <AntDesign name="shoppingcart" size={34} color={baseColor.colorFont2} />
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>navigationRef.navigate("SobreNosotros")} style={{marginRight:10, marginTop:5}}>
              <FontAwesome name="gears" size={24} color={baseColor.colorFont2} />
            </TouchableOpacity>
          </View>
          ),
        }}
        />
        <Stack.Screen name="Login" component={Login}
        options={{headerShown:true,
          headerTransparent:true, 
          headerTintColor:baseColor.colorFont2,
          title:"Inicio de sesión"
        
        }}/>
        
        <Stack.Screen name="SignUp" component={SignUp}
        options={{headerShown:true,
          headerTransparent:true, 
          headerTintColor:baseColor.colorFont2,
          title:"Registro"
        
        }}/>
        
        <Stack.Screen name="MisPedidos" component={MisPedidos}
        options={{title: 'Mis ordenes',
        headerTintColor:baseColor.colorFont2,
        headerStyle: {
          backgroundColor: color,
        },
        headerShadowVisible: false,
        headerRight: () => (
          <View style={{flexDirection: 'row'}}>
          <TouchableOpacity onPress={()=>navigationRef.navigate("Carrito")} style={{marginRight:20}}>
            <AntDesign name="shoppingcart" size={34} color={baseColor.colorFont2} />
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>navigationRef.navigate("SobreNosotros")} style={{marginRight:10, marginTop:5}}>
            <FontAwesome name="gears" size={24} color={baseColor.colorFont2} />
          </TouchableOpacity>
        </View>
        ),
      }}
      />
        
        <Stack.Screen name="Footer" component={Footer}/>
        <Stack.Screen name="Contacto" component={Contacto}
         options={{title: 'Contáctanos',
         headerTintColor:baseColor.colorFont2,
          headerStyle: {
            backgroundColor: color,
          },
          headerShadowVisible: false,
          headerRight: () => (
            <View style={{flexDirection: 'row'}}>
            <TouchableOpacity onPress={()=>navigationRef.navigate("Carrito")} style={{marginRight:20}}>
              <AntDesign name="shoppingcart" size={34} color={baseColor.colorFont2} />
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>navigationRef.navigate("SobreNosotros")} style={{marginRight:10, marginTop:5}}>
              <FontAwesome name="gears" size={24} color={baseColor.colorFont2} />
            </TouchableOpacity>
          </View>
          ),
        }}
        />
     
        
        

      
        
        
        
        <Stack.Screen name="Promociones" component={Promociones}/>
        <Stack.Screen name="Paquetes" component={Paquetes}/>
        
        <Stack.Screen name="CheckCard" component={CheckCard}
        options={{title: 'Pasarela de pago',
        headerTintColor:baseColor.colorFont2,
        headerStyle: {
          backgroundColor: color,
        },
        }}/>

        <Stack.Screen name="CheckAdress" component={CheckAdress}
        options={{title: 'Confirma dirección',
        headerTintColor:baseColor.colorFont2,
        headerStyle: {
          backgroundColor: color,
        },
        }}/>

        <Stack.Screen name="CheckPago" component={CheckPago}
        options={{title: 'Confirma método de pago',
        headerTintColor:baseColor.colorFont2,
        headerStyle: {
          backgroundColor: color,
        },
        }}/>

        <Stack.Screen name="AddCard" component={AddCard}/>
        <Stack.Screen name="InfoApps" component={InfoApps}
        options={{title: 'Nuestras otras apps',
        headerTintColor:baseColor.colorFont2,
        headerStyle: {
          backgroundColor: color,
        },
        }}/>

        <Stack.Screen name="Carrito" component={Carrito}
         options={{title: 'Carrito',
         headerTintColor:baseColor.colorFont2,
         headerStyle: {
           backgroundColor: color,
         },
         headerShadowVisible: false,
         headerRight: () => (
           <View style={{flexDirection: 'row'}}>
           <TouchableOpacity onPress={()=>navigationRef.navigate("SobreNosotros")} style={{marginRight:10, marginTop:5}}>
             <FontAwesome name="gears" size={24} color={baseColor.colorFont2} />
           </TouchableOpacity>
         </View>
         ),
       }}
       />

        <Stack.Screen name="OpcionTecnico" component={OpcionTecnico}
         options={{title: 'Selecciona una opción',
         headerTintColor:baseColor.colorFont2,
         headerStyle: {
           backgroundColor: color,
         },
         }}/>
         <Stack.Screen name="SobreNosotros" component={SobreNosotros}
         options={{title: 'Opciones',
         headerTintColor:baseColor.colorFont2,
          headerStyle: {
            backgroundColor: color,
          },
          headerShadowVisible: false,
          headerRight: () => (
            <View style={{flexDirection: 'row'}}>
            <TouchableOpacity onPress={()=>navigationRef.navigate("Carrito")} style={{marginRight:20}}>
              <AntDesign name="shoppingcart" size={34} color={baseColor.colorFont2} />
            </TouchableOpacity>
          </View>
          ),
        }}
        />
         <Stack.Screen name="MisDirecciones" component={MisDirecciones}
         options={{title: 'Mis Direcciones',
         headerTintColor:baseColor.colorFont2,
          headerStyle: {
            backgroundColor: color,
          },
          headerShadowVisible: false,
          headerRight: () => (
            <View style={{flexDirection: 'row'}}>
            <TouchableOpacity onPress={()=>navigationRef.navigate("Carrito")} style={{marginRight:20}}>
              <AntDesign name="shoppingcart" size={34} color={baseColor.colorFont2} />
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>navigationRef.navigate("SobreNosotros")} style={{marginRight:10, marginTop:5}}>
              <FontAwesome name="gears" size={24} color={baseColor.colorFont2} />
            </TouchableOpacity>
          </View>
          ),
        }}
        />

        <Stack.Screen name="AcercaID" component={AcercaID}
        options={{title: 'Acerca de Impactos Digitales',
        headerTintColor:baseColor.colorFont2,
          headerStyle: {
            backgroundColor: color,
          },
          headerShadowVisible: false,
          headerRight: () => (
            <View style={{flexDirection: 'row'}}>
            <TouchableOpacity onPress={()=>navigationRef.navigate("Carrito")} style={{marginRight:20}}>
              <AntDesign name="shoppingcart" size={34} color={baseColor.colorFont2} />
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>navigationRef.navigate("SobreNosotros")} style={{marginRight:10, marginTop:5}}>
              <FontAwesome name="gears" size={24} color={baseColor.colorFont2} />
            </TouchableOpacity>
          </View>
          ),
        }}
        />

        <Stack.Screen name="DetalleOrden" component={DetalleOrden}
        options={{title: 'Detalle de orden',
        headerTintColor:baseColor.colorFont2,
        headerStyle: {
          backgroundColor: color,
        },
        }}/>    

        <Stack.Screen name="Buscar" component={Buscar}
        options={{title: 'Buscar',
        headerTintColor:baseColor.colorFont2,
          headerStyle: {
            backgroundColor: color,
          },
          headerShadowVisible: false,
          headerRight: () => (
            <View style={{flexDirection: 'row'}}>
            <TouchableOpacity onPress={()=>navigationRef.navigate("Carrito")} style={{marginRight:20}}>
              <AntDesign name="shoppingcart" size={34} color={baseColor.colorFont2} />
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>navigationRef.navigate("SobreNosotros")} style={{marginRight:10, marginTop:5}}>
              <FontAwesome name="gears" size={24} color={baseColor.colorFont2} />
            </TouchableOpacity>
          </View>
          ),
        }}
        />   

      <Stack.Screen name="Soporte" component={Soporte}
        options={{title: 'Soporte Técnico',
        headerTintColor:baseColor.colorFont2,
          headerStyle: {
            backgroundColor: color,
          },
          headerShadowVisible: false,
          headerRight: () => (
            <View style={{flexDirection: 'row'}}>
            <TouchableOpacity onPress={()=>navigationRef.navigate("Carrito")} style={{marginRight:20}}>
              <AntDesign name="shoppingcart" size={34} color={baseColor.colorFont2} />
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>navigationRef.navigate("SobreNosotros")} style={{marginRight:10, marginTop:5}}>
              <FontAwesome name="gears" size={24} color={baseColor.colorFont2} />
            </TouchableOpacity>
          </View>
          ),
        }}
        />

        <Stack.Screen name="MiPerfil" component={MiPerfil}
        options={{title: 'Mi Perfil',
          headerTintColor:baseColor.colorFont2,
          headerStyle: {
            backgroundColor: color,
          },
          headerShadowVisible: false,
          headerRight: () => (
            <View style={{flexDirection: 'row'}}>
            <TouchableOpacity onPress={()=>navigationRef.navigate("Carrito")} style={{marginRight:20}}>
              <AntDesign name="shoppingcart" size={34} color={baseColor.colorFont2} />
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>navigationRef.navigate("SobreNosotros")} style={{marginRight:10, marginTop:5}}>
              <FontAwesome name="gears" size={24} color={baseColor.colorFont2} />
            </TouchableOpacity>
          </View>
          ),
        }}
        /> 

        <Stack.Screen name="Tecnicos" component={Tecnicos}
        options={{title: 'Técnicos',
          headerTintColor:baseColor.colorFont2,
          headerStyle: {
            backgroundColor: color,
          },
          headerShadowVisible: false,
          headerRight: () => (
            <View style={{flexDirection: 'row'}}>
            <TouchableOpacity onPress={()=>navigationRef.navigate("Carrito")} style={{marginRight:20}}>
              <AntDesign name="shoppingcart" size={34} color={baseColor.colorFont2} />
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>navigationRef.navigate("SobreNosotros")} style={{marginRight:10, marginTop:5}}>
              <FontAwesome name="gears" size={24} color={baseColor.colorFont2} />
            </TouchableOpacity>
          </View>
          ),
        }}
        />

        <Stack.Screen name="DetalleServicio" component={DetalleServicio}
        options={{title: 'Detalle del servicio',
          headerTintColor:baseColor.colorFont2,
          headerStyle: {
            backgroundColor: color,
          },
          headerShadowVisible: false,
          headerRight: () => (
            <View style={{flexDirection: 'row'}}>
            <TouchableOpacity onPress={()=>navigationRef.navigate("Carrito")} style={{marginRight:20}}>
              <AntDesign name="shoppingcart" size={34} color={baseColor.colorFont2} />
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>navigationRef.navigate("SobreNosotros")} style={{marginRight:10, marginTop:5}}>
              <FontAwesome name="gears" size={24} color={baseColor.colorFont2} />
            </TouchableOpacity>
          </View>
            ),
          }}
          />

        <Stack.Screen name="DetalleTecnico" component={DetalleTecnico}
        options={{title: 'Detalle del técnico',
          headerTintColor:baseColor.colorFont2,
          headerStyle: {
            backgroundColor: color,
          },
          headerShadowVisible: false,
          headerRight: () => (
            <View style={{flexDirection: 'row'}}>
            <TouchableOpacity onPress={()=>navigationRef.navigate("Carrito")} style={{marginRight:20}}>
              <AntDesign name="shoppingcart" size={34} color={baseColor.colorFont2} />
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>navigationRef.navigate("SobreNosotros")} style={{marginRight:10, marginTop:5}}>
              <FontAwesome name="gears" size={24} color={baseColor.colorFont2} />
            </TouchableOpacity>
          </View>
            ),
          }}
          />

        <Stack.Screen name="AgregarTarjeta" component={AgregarTarjeta}
        options={{title: 'Agregar tarjeta',
        headerTintColor:baseColor.colorFont2,
        headerStyle: {
          backgroundColor: color,
        },
        }}/> 


        <Stack.Screen name="Skeletor" component={Skeletor}
        options={{title: 'skeletor',
        headerTintColor:baseColor.colorFont2,
        headerStyle: {
          backgroundColor: color,
        },
        }}/> 
        <Stack.Screen name="SkeletonServicio" component={SkeletonServicio}
        options={{title: 'skeleton servicio',
        headerTintColor:baseColor.colorFont2,
        headerStyle: {
          backgroundColor: color,
        },
        }}/> 
         <Stack.Screen name="SkeletonPerfil" component={SkeletonPerfil}
        options={{title: 'skeleton perfil',
        headerTintColor:baseColor.colorFont2,
        headerStyle: {
          backgroundColor: color,
        },
        }}/> 
        <Stack.Screen name="AgregarDireccion" component={AgregarDireccion}
        options={{title: 'Agregar Dirección',
          headerTintColor:baseColor.colorFont2,
          headerStyle: {
            backgroundColor: color,
          },
          headerShadowVisible: false,
          headerRight: () => (
            <View style={{flexDirection: 'row'}}>
            <TouchableOpacity onPress={()=>navigationRef.navigate("Carrito")} style={{marginRight:20}}>
              <AntDesign name="shoppingcart" size={34} color={baseColor.colorFont2} />
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>navigationRef.navigate("SobreNosotros")} style={{marginRight:10, marginTop:5}}>
              <FontAwesome name="gears" size={24} color={baseColor.colorFont2} />
            </TouchableOpacity>
          </View>
            ),
          }}
          />

        <Stack.Screen name="EditarDireccion" component={EditarDireccion}
        options={{title: 'Editar dirección',
          headerTintColor:baseColor.colorFont2,
          headerStyle: {
            backgroundColor: color,
          },
          headerShadowVisible: false,
          headerRight: () => (
            <View style={{flexDirection: 'row'}}>
            <TouchableOpacity onPress={()=>navigationRef.navigate("Carrito")} style={{marginRight:20}}>
              <AntDesign name="shoppingcart" size={34} color={baseColor.colorFont2} />
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>navigationRef.navigate("SobreNosotros")} style={{marginRight:10, marginTop:5}}>
              <FontAwesome name="gears" size={24} color={baseColor.colorFont2} />
            </TouchableOpacity>
          </View>
            ),
          }}
          />

<Stack.Screen name="Test" component={Test}
        options={{title: 'skeleton perfil',
        headerTintColor:baseColor.colorFont2,
        headerStyle: {
          backgroundColor: color,
        },
        }}/> 


      </Stack.Navigator>
    </NavigationContainer>
  );
}


