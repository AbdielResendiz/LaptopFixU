import * as React from 'react';
import {NavigationContainer, useNavigationContainerRef} from '@react-navigation/native';
import {Image, NativeBaseProvider, Box, HStack, Center, Pressable, Icon, Text} from 'native-base';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { View, TouchableOpacity, StyleSheet} from 'react-native';
import { FontAwesome,  AntDesign , MaterialCommunityIcons, Ionicons} from '@expo/vector-icons'; 

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
import Favoritos from './src/private/Favoritos';

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
import URL from './src/private/api/URL';
import styles from './src/styles/styles';
import * as Font from 'expo-font';
import  { useState, useEffect } from 'react';
import baseColor from './src/private/api/baseColor';




const Stack = createNativeStackNavigator();


export default function App() {
    const [selected, setSelected] = useState(0);
    const [showFooter, setShowFooter] = useState(true);

 
  
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

  function shouldShowFooter(route) {
    if (route.name === "Login") {
      return false; // No mostrar Footer en la ruta "NoFooter"
    } else if (route.name === "SignUp") {
      return false; // No mostrar Footer en la ruta "NoFooter2"
    }else if (route.name === "Home"){
      setSelected(0)
      return true
    } else if (route.name === "Servicios"){
      setSelected(1)
      return true
    }else if (route.name === "Buscar"){
      setSelected(2)
      return true
    }else if (route.name === "Soporte"){
      setSelected(3)
      return true
    }else if (route.name === "Servicios"){
      setSelected(1)
      return true
    }else if (route.name === "DetalleServicio"){
      setSelected(1)
      return true
    }else if (route.name === "Tecnicos"){
      setSelected(3)
      return true
    }else if (route.name === "DetalleTecnico"){
      setSelected(3)
      return true
    }else if (route.name === "Carrito"){
      setSelected(4)
      return true
    }else {
      return true; // Mostrar Footer en todas las demás rutas
    }
   
  }

  const IrInicio = () => {
    setSelected(0)
    navigationRef.navigate('Home');
  };

  const IrServicios = () => {
    setSelected(1)
    navigationRef.navigate('Servicios');
  };
  const IrBuscar = () => {
    setSelected(2)
    navigationRef.navigate('Buscar');
  };

  const IrAsesoria = () => {
    setSelected(3)
    navigationRef.navigate('Soporte');
  };
  
  const IrCuenta = () => {
    setSelected(4)
    navigationRef.navigate('SobreNosotros');
  };
  

  const HeaderRightCustom = ()=>{

    return(
      <View style={{flexDirection: 'row', }}>
        <TouchableOpacity onPress={()=>navigationRef.navigate("Carrito")} style={{marginRight:20, paddingTop:3}}>
          <AntDesign name="shoppingcart" size={32} color={baseColor.colorFont2} />
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>navigationRef.navigate("Favoritos")} style={{marginRight:20, paddingTop:4}}>
          <AntDesign name="hearto" size={32} color={baseColor.colorFont2} />
        </TouchableOpacity>

        {/* <TouchableOpacity onPress={()=>navigationRef.navigate("SobreNosotros")} style={{marginRight:10, marginTop:5}}>
          <FontAwesome name="gears" size={32} color={baseColor.colorFont2} />
        </TouchableOpacity> */}
      </View>
    )
  }




  return (
    
    <NavigationContainer ref={navigationRef}  onStateChange={(state) => setShowFooter(shouldShowFooter(state.routes[state.index]))}>
      <Stack.Navigator style={{flex:1}} >
      <Stack.Screen
            name="Home"
            component={Home}
            options={{title: '',
              headerTintColor:baseColor.colorFont2,
              headerStyle: {
                backgroundColor: baseColor.color,
              },
              headerShadowVisible: false,
              headerRight: () => (
                <HeaderRightCustom/>
              ),
              headerLeft: ()=>(
                <NativeBaseProvider>
                  <Image source={{uri: `${URL.BASE_URL}/public/logo.png`}} 
                  alt="Alternate Text" size="sm" rounded={100} />

                  
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
            <HeaderRightCustom/>
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
          title:"Registro",
         
        
        }}/>
        
        <Stack.Screen name="MisPedidos" component={MisPedidos}
        options={{title: 'Mis ordenes',
        headerTintColor:baseColor.colorFont2,
        headerStyle: {
          backgroundColor: color,
        },
        headerShadowVisible: false,
        headerRight: () => (
          <HeaderRightCustom/>
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
            <HeaderRightCustom/>
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
          <HeaderRightCustom/>
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
            <HeaderRightCustom/>
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
            <HeaderRightCustom/>
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
            <HeaderRightCustom/>
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
            <HeaderRightCustom/>
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
            <HeaderRightCustom/>
          ),
        }}
        />

        <Stack.Screen name="MiPerfil" component={MiPerfil}
        options={{title: 'Mis datos',
          headerTintColor:baseColor.colorFont2,
          headerStyle: {
            backgroundColor: color,
          },
          headerShadowVisible: false,
          headerRight: () => (
            <HeaderRightCustom/>
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
            <HeaderRightCustom/>
          ),
        }}
        />

        <Stack.Screen name="DetalleServicio" component={DetalleServicio}
        options={{title: 'Servicio',
          headerTintColor:baseColor.colorFont2,
          headerStyle: {
            backgroundColor: color,
          },
          headerShadowVisible: false,
          headerRight: () => (
            <HeaderRightCustom/>
            ),
          }}
          />

        <Stack.Screen name="DetalleTecnico" component={DetalleTecnico}
        options={{title: 'Técnico',
          headerTintColor:baseColor.colorFont2,
          headerStyle: {
            backgroundColor: color,
          },
          headerShadowVisible: false,
          headerRight: () => (
            <HeaderRightCustom/>
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
            <HeaderRightCustom/>
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
            <HeaderRightCustom/>
            ),
          }}
          />

        <Stack.Screen name="Favoritos" component={Favoritos}
        options={{title: 'Favoritos',
          headerTintColor:baseColor.colorFont2,
          headerStyle: {
            backgroundColor: color,
          },
          headerShadowVisible: false,
          headerRight: () => (
            <HeaderRightCustom/>
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


      </Stack.Navigator >
      
       {showFooter ? (
        <View style={{height:70}} >
           <NativeBaseProvider>
            <Box flex={1} safeAreaTop width="100%"  alignSelf="center" shadow={6}  >
              
              <HStack bg={baseColor.bg}  alignItems="center" safeAreaBottom shadow={6} borderRadius={35} >
                <Pressable cursor="pointer" opacity={selected === 0 ? 1 : 0.5} py="3" flex={1} 
                  onPress={() => {IrInicio()}}>
                  <Center >
                      <Icon  as={<Ionicons name={selected === 0 ? 'home' : 'home-outline'} />} color={ selected === 0 ? baseColor.footerIconSelect : baseColor.footerIcon} size="lg" />
                      <Text   style={styles.texto} color={ selected === 0 ? baseColor.footerIconSelect : baseColor.footerIcon}>Inicio</Text>
                  </Center>
                </Pressable>
                <Pressable cursor="pointer" opacity={selected === 1 ? 1 : 0.5} py="2" flex={1} onPress={() => {IrServicios()}}>
                  <Center>
                      <Icon  as={<MaterialCommunityIcons name={selected === 1 ? 'percent' : 'percent-outline'} />} color={ selected === 1 ? baseColor.footerIconSelect : baseColor.footerIcon} size="lg" />
                      <Text   style={styles.texto} color={ selected === 1 ? baseColor.footerIconSelect : baseColor.footerIcon}>Servicios</Text>
                  </Center>
                </Pressable>
                <Pressable cursor="pointer" opacity={selected === 2 ? 1 : 0.6} py="2" flex={1} onPress={() => {IrBuscar()} }>
                  <Center>
                      <Icon  as={<Ionicons name={selected ===2 ? "ios-search" : "ios-search-outline"}/>} 
                      color={ selected === 2 ? baseColor.footerIconSelect : baseColor.footerIcon} size="lg" />
                      <Text   style={styles.texto} color={ selected === 2 ? baseColor.footerIconSelect : baseColor.footerIcon}>Buscar</Text>
                  </Center>
                </Pressable>
                <Pressable cursor="pointer" opacity={selected === 3 ? 1 : 0.5} py="2" flex={1} onPress={() => {IrAsesoria()} }>
                  <Center>
                      <Icon  as={<AntDesign name="customerservice"  />} color={ selected === 3 ? baseColor.footerIconSelect : baseColor.footerIcon} size="lg" />
                      <Text  style={styles.texto} color={ selected === 3 ? baseColor.footerIconSelect : baseColor.footerIcon}>Soporte</Text>
                  </Center>
                </Pressable>
                <Pressable cursor="pointer" opacity={selected === 4 ? 1 : 0.5} py="2" flex={1} onPress={() => {IrCuenta()} }>
                  <Center>
                      <Icon  as={<MaterialCommunityIcons name={selected === 4 ? 'account' : 'account-outline'} />} 
                      color={ selected === 4 ? baseColor.footerIconSelect : baseColor.footerIcon} size="lg" />
                      <Text  style={styles.texto} color={ selected === 4 ? baseColor.footerIconSelect : baseColor.footerIcon}>Perfil</Text>
                  </Center>
                </Pressable>
              </HStack>
            </Box>
        </NativeBaseProvider>
        </View>
      ) : null}
      

    </NavigationContainer>
    
  );
}


