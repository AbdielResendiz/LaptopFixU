import { useState } from "react";


  const fetchData = async()=>{
    const [idU, setIdU] = useState(null);
    const [idC, setIdC] = useState(null);

    try {
      
        await AsyncStorage.getItem("idUser").then(async (value) => {
          setIdU(parseInt(value)); })
        await AsyncStorage.getItem("idCarrito").then(async (value) => {
            setIdC(parseInt(value)); })
      } catch (error) {
        console.log(error);
      }
  }


  export default fetchData;