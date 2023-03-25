import URL from "../../private/api/URL";
import fetchPost from "../../private/api/fetchPost";

const agregarFav = async(idU, idS)=>{
    const BASE_URL= URL.BASE_URL;
        
    const dataFav = new FormData();
    dataFav.append("idU", idU);
    dataFav.append("idS", idS);
    const url = `${BASE_URL}api/favoritos/add_servicio`
    const options = {
      method:'POST',
      body: dataFav
    };
    const res = await fetchPost(url, options);
    console.log("agrega Fav", res);
    return res;
   // 
    
    
  }
  export default agregarFav;