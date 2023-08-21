import { faArrowLeft, faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import './Order.css';

const Order = () => {
  const userInfo = localStorage.getItem("userInfo");
  
  const params = useParams();
  const { id } = params;

  const navigate = useNavigate();

  const [order, setOrder] = useState([]);


  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const { data } = await axios.get(`/api/orders/${id}`);

        console.log(data);
        setOrder(data);
      } catch (err) {
        alert("Orden no encontrada!");
      }
    };

    if (!userInfo) {
      return navigate("/");
    }

    fetchOrder();
  }, [id, navigate, userInfo]);

  function formatDate(date) {
    const d = new Date(date);
    const day = d.getDate().toString().padStart(2, '0');
    const month = (d.getMonth() + 1).toString().padStart(2, '0');
    const year = d.getFullYear().toString().slice(0);
    return `${day}/${month}/${year}`;
  }

  return (

    <div className="order-row">
    <button className="back-button">
     <Link className="back" to="/account">
     <FontAwesomeIcon icon={faArrowLeft} /> ATRAS
     </Link>
     </button> 
     <div className="ctn-order" >
     
     <h1 className="order-title">FACTURA</h1> 
     <div className="order-info">
           <img className="logo-img"
             src="../assets/images/others/logo.jpg"
             alt=""
           />
           <div className="order-number">
             <div className="client">
               <h3>Nº Orden:</h3><br/>
               <h4>{order._id}</h4>
             </div>
           </div>
         </div>

         <div className="header">
         <div className="client-info">
             <div className="client">
               <span>Nombre: </span>
               <span>{order.name}</span>
             </div>

             <div className="client">
               <span>Correo electrónico: </span>
               <span>{order.email}</span>
             </div>

             <div className="client">
               <span>Teléfono: </span>
               <span>{order.phone}</span>
             </div>

             <div className="client">
               <span>Dirección: </span>
               <span>{order.address}</span>
             </div>

             <div className="client">
               <span>Fecha de emisión: </span>
               <span>{formatDate(order.createdAt)}</span>
             </div>
           </div>
         </div>         
       <table className="products"> 
         <thead>
           <tr class="highlight">
             <th>Descripción</th>
             <th>Cantidad</th>
             <th>Precio Unitario</th>
             <th>Precio Total</th>
           </tr>
         </thead>
 
         <thead>
         <tr >
             <th>
               {order.orderItems?.map((item) => (
                 <p style={{ textAlign: "center" }}>{item.name} </p> 
               ))}
             </th>
             <th>
               {order.orderItems?.map((item) => (
                 <p style={{ textAlign: "center" }}>{item.quantity}</p> 
               ))}
             </th>
             <th>
             {order.orderItems?.map((item) => (
                 <p style={{ textAlign: "center" }} className="price">${item.price.toFixed(2)}</p>
               ))}  
             </th>
             <th>
               {order.orderItems?.map((item) => (
                 <p style={{ textAlign: "center" }} className="price">${((item.price)*(item.quantity)).toFixed(2)}</p>
               ))}   
             </th>
           </tr>
         </thead>
           <tbody >
             <td colSpan={2}></td>
             <th><p>Subtotal:</p></th>
             <th><span>${order.totalPrice?.toFixed(2)}</span></th>
           </tbody>
           <tbody >
             <td colSpan={2}></td>
             <th><p>IVA (0%):</p></th>
             <th><span>${order.taxPrice?.toFixed(2)}</span></th>
           </tbody>
           <tbody>
             <td colSpan={2}></td>
             <th><p>Total:</p></th>
             <th><span>${order.totalPrice?.toFixed(2)}</span></th>
           </tbody> 
           <th rowSpan={2}></th>
           <tbody>
             <td colSpan={2}></td>
             <th><p>Estado de Pago :</p></th>
             <th>
           
           {order.isPaid ? (
                 <span>  Pago Realizado en {order.paidAt} </span>
               ) : (
                 <span>No pagado</span>
               )}
           </th>
           </tbody>
           <tbody>
             <td colSpan={2}></td>
             <th><p>Estado de Entrega:</p></th>
             <th>
               {order.isDelivered ? (
                 <span> La orden fue entregada :{order.deliveredAt} </span>
               ) : (
                 <span>No entregado</span>
               )}
           </th>
         </tbody>  
           
     </table>
     </div>
   </div>


  
  );
};

export default Order;
