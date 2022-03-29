import Image from 'next/image';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from '../redux/cart.slice';
import styles from '../styles/CartPage.module.css';
import { FaPlus, FaMinus, FaTimes } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form'
import FloatingLabel from 'react-bootstrap/FloatingLabel'

const CartPage = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();  
  const[data, setData] = useState({
    fullName: "",
    phone: 0,
    notes: ""
  });
  

  const getTotalPrice = () => {
    return cart.reduce(
      (accumulator, item) => accumulator + item.quantity * item.price,
      0
    );
  };

  const handleChange = (event) => {
setData({
  ...data,
  [event.target.name] : event.target.value
})
  }

  const order = (
    `_¡Hola! Te paso el resumen de mi pedido:_%0a*Nombre:* ${data.fullName} %0a*Teléfono:* ${data.phone} ${data.notes != "" ? '%0a*Aclaración:* ' + data.notes : ''} %0a%0a_Mi pedido es:_ ${cart.map((item) => ('%0a' +item.quantity + 'x ' + item.product + ' (' + (item.category == 'individuales' ? item.category.substring(0, item.category.length - 2) : item.category.slice(0, -1)) + '): $'+item.price + " Subtotal: $" + item.quantity*item.price))} *TOTAL: $${getTotalPrice()}* %0a%0a_Espero tu respuesta para confirmar mi pedido._`
  )
  const urlWithOrder = `https://wa.me/3834619507/?text=${order}`


  return (
    <div className={styles.container}>
      {cart.length === 0 ? (
        <h1>El carrito está vacío.</h1>
      ) : (
        <>
         <Form className={styles.form}>
           <p>Anotá tus datos</p>
            <FloatingLabel label="Nombre y apellido" className="mb-3" controlId="formBasicEmail">
              <Form.Control type="text" onChange={handleChange} placeholder="Ingresá tu nombre y apellido" name="fullName" required />
            </FloatingLabel>

            <FloatingLabel label="Teléfono" className="mb-3" controlId="formBasicPassword">
              <Form.Control type="number" name="phone" onChange={handleChange} placeholder="Teléfono" required />
            </FloatingLabel>
            <FloatingLabel label="Observaciones" className="mb-3" controlId="formBasicEmail">
              <Form.Control as="textarea" onChange={handleChange} name="notes" />
            </FloatingLabel>
            
<div className={styles.items}>
  <p>Tu pedido</p>
          {cart.map((item) => (
            <div className={styles.body}>
              <div className={styles.imagecontainer}>
                <div className={styles.image}>
                  <Image src={item.image} layout="fill" />
                </div>
                <div className={styles.detailed}>
                  <p>{item.product} ({(item.category == 'individuales' ? item.category.substring(0, item.category.length - 2) : item.category.slice(0, -1))})</p>
                  <div className={styles.buttons}>
                  <a onClick={() => dispatch(decrementQuantity(item.id))}>
                      <FaMinus />
                    </a>
                    <span>{item.quantity}</span>
                    <a onClick={() => dispatch(incrementQuantity(item.id))}>
                      <FaPlus />
                    </a>                    
                    
                  </div>
                </div>
              </div>
              <div className={styles.remove}>
                <a onClick={() => dispatch(removeFromCart(item.id))}>
                  <FaTimes />
                </a>
                <p>$ {item.quantity * item.price}</p>
              </div>
            </div>
          ))}
          </div>
          <h2 className={styles.total}>Total: ${getTotalPrice()}</h2>

          <button type="submit" id="whatsapp-link" className={styles.whatsapp} href={urlWithOrder}>Pedir por WhatsApp</button>
          
          </Form>
         
        </>
      )}
    </div>
  );
};

export default CartPage;
