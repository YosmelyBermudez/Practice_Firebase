import React from "react";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button'

const Fila = ({moneda,index}) => {
    return (
        <tr>
            <td>{index}</td>
            <td>
            <img src={moneda.image} alt={moneda.name} style={{width: '3%'}} />
                <span>
                    {moneda.name}
                    </span>
                <span> {moneda.symbol}</span>
                <Button variant="info"><Link to={`/Detalle/${moneda.id}`}>Detalle</Link></Button>
                
            </td>
            <td>{moneda.current_price}</td>
            <td  className={
          moneda.price_change_percentage_24h > 0 ? "success" : "danger"
        }>{moneda.price_change_percentage_24h}</td>
            <td>{moneda.total_volume}</td>
        </tr>
    )
}
export default Fila