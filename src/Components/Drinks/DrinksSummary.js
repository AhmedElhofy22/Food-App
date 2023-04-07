import React from 'react'
import classes from './DrinksSummary.module.css'

const DrinksSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Delicious Drinks, Delivered To You</h2>
      <p>
        Choose your favorite drink from our broad selection of available drinks
        and enjoy it after a delicious lunch or dinner at home.
      </p>
      <p>
        All our drinks are made with high-quality ingredients, just-in-time and
        of course by experienced chefs!
      </p>
    </section>
  )
}

export default DrinksSummary