const Carrito = async () => {
    
        {/**CREAR CARRITO EN CASO DE NO TENER */}
        const dataCart = new FormData();
        dataCart.append("idU", idU);
        
        {/**se envia al servidor */}
        const url2= `${BASE_URL}api/servicios/check_carrito`
        const options2 = {
          method:'POST',
          body: dataCart
        };
        {/**respuesta */}
        const respuesta = await fetchPost(url2, options2);
        console.log("result carrito", respuesta.data);
       
       
}

export default Carrito;