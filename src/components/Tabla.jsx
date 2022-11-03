import React from 'react';
import Fila from './Fila';

const titles = ["#", "Coin", "Price", "Price Change","24h Volume"];

const Tabla = ({monedas,buscar}) => {
    const monedasFiltradas = monedas.filter((moneda) => 
        moneda.name.toLowerCase().includes(buscar.toLowerCase()) | moneda.symbol.toLowerCase().includes(buscar.toLowerCase()));
    return (
        <table>
           <thead>
                <tr className='titulos'>
                    {titles.map((title,index) => (
                        <td key={index}>{title}</td>
                    ))}
                </tr>
            </thead> 
            <tbody>
                {monedasFiltradas.map((moneda,index) => (
                    <Fila moneda={moneda} key={index} index={index + 1} />
                ))}
            </tbody>
        </table>
    )
}

export default Tabla