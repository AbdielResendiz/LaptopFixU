import URL from "../../private/api/URL";
import fetchPost from "../../private/api/fetchPost";

const eliminarFav = async(idU, idS)=>{
    const BASE_URL= URL.BASE_URL;
        
    const dataFav = new FormData();
    dataFav.append("idU", idU);
    dataFav.append("idS", idS);
    const url = `${BASE_URL}api/favoritos/delete_servicio`
    const options = {
      method:'POST',
      body: dataFav
    };
    const res = await fetchPost(url, options);
    //console.log("delete fav:", res);
    return res;
   // 
    
    
  }
  export default eliminarFav;