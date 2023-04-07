import React from 'react'
import classes from './Cart.module.css'


const Cart = (props) => {
    console.log ('cart rendered')
    const cartItems = <ul className={classes['cart-items']}>{[{id: 'c1', name:'sushi', amount: 2, price:12.99}].map((item)=> <li key={item.id}>{item.name}</li>)}</ul>
  return (
    <div >
    <div>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
      </div>
    </div>
  )
}

export default Cart
