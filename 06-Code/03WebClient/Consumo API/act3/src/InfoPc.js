import React from 'react';
import { useFetch } from './useFetch';

const InfoPc = () => {
    const { data, loading, error } = useFetch(
    `https://httpbin.org/get`
    );
    
    return (
        <div className='card'>
            <center><h1>Información de la PC</h1></center>
            <center><p>Contenido Detallado</p></center>

            
            {error && <li>Error: {error.message}</li>}
            {loading && <li>Loading...</li>}
            {data && (
                <center>
               <table className='info-table'>
               <tbody>
                   <tr>
                       <td><strong>Archivos aceptados:</strong></td>
                       <td>{data.headers?.['Accept']}</td>
                   </tr>
                   <tr>
                       <td><strong>Idioma:</strong></td>
                       <td>{data.headers?.['Accept-Language']}</td>
                   </tr>
                   <tr>
                       <td><strong>Host remoto:</strong></td>
                       <td>{data.headers?.['Host']}</td>
                   </tr>
                   <tr>
                       <td><strong>IP que originó la solicitud:</strong></td>
                       <td>{data.headers?.['origin']}</td>
                   </tr>
                   <tr>
                       <td><strong>Nombre del navegador:</strong></td>
                       <td>{data.headers?.['User-Agent']}</td>
                   </tr>
                   <tr>
                       <td><strong>Sistema operativo:</strong></td>
                       <td>{data.headers?.['Sec-Ch-Ua-Platform']}</td>
                   </tr>
               </tbody>
           </table>
   </center>
            )}
        </div>
    );
};

export default InfoPc;
