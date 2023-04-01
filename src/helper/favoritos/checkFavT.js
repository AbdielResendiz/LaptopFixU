import URL from "../../private/api/URL";
import fetchPost from "../../private/api/fetchPost";

const checkFavT = async(idU, idT)=>{
    const BASE_URL= URL.BASE_URL;
        
    const dataFav = new FormData();
    dataFav.append("idU", idU);
    dataFav.append("idT", idT);
    const url = `${BASE_URL}api/favoritos/check_tecnico`
    const options = {
      method:'POST',
      body: dataFav
    };
    const res = await fetchPost(url, options);
    console.log("check:", res);
    return res;
   // 
    
    
  }
  export default checkFavT;