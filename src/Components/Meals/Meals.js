import React , {Fragment, useState} from 'react'
import AvailableMeals from './AvailableMeals'
import MealsSummary from './MealsSummary'
import Header from '../Layout/Header'
import Cart from '../Cart/Cart'

const Meals = () => {
  const[cartShown,setCartShown]=useState(false)
  const cartShownHandler = () => {
    console.log("set cart shown to true")
    setCartShown(true)
  }
  const cartHideHandler = () => {
    setCartShown(false)
  }
  console.log(cartShown)
  return (
    <Fragment>
      {cartShown && <Cart onClose={cartHideHandler}/>}
      
      <MealsSummary />
      <AvailableMeals />
    </Fragment>
  )
}

export default Meals
