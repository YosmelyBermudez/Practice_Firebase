import React from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Detalle() {
    const [monedas,setMonedas] = useState([])
    const { id } = useParams()
    console.log(id)

    const ConsumirDatos = async() => {
    const respuesta = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1')
    const monedaunica = respuesta.data.filter(moneda => moneda.id == id)
    console.log(monedaunica)
    console.log(respuesta.data)
    setMonedas(monedaunica[0])
    
  }
    
  useEffect (() => {
    ConsumirDatos()
  },[])
    
    return (
       <div>
        <img src={monedas.image} alt={monedas.name} style={{width: '15%'}} />
                <span>
                    {monedas.name}
                    </span>
                    <span> {monedas.symbol}</span>
                    <p> Precio: {monedas.current_price} USD</p>
                    <p> Última Actualización: {monedas.last_updated}</p>
                    <button>Comprar</button>
       </div>

    );
}
export default Detalle