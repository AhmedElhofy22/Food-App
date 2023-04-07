import React , {Fragment} from 'react'
import AvailableDrinks from './AvailableDrinks'
import DrinksSummary from './DrinksSummary'
import Header from '../Layout/Header'

const Drinks = () => {
  return (
    <Fragment>
      
      
      <DrinksSummary />
      <AvailableDrinks />
    </Fragment>
  )
}

export default Drinks