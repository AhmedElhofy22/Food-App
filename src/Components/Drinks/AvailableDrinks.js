import React from 'react'
import Card from '../UI/Card';
import classes from './AvailableDrinks.module.css'
import DrinkItem from './DrinkItem';

const DUMMY_DRINKS = [
  {
    id: 'm1',
    name: 'Orange Juice',
    description: 'Fresh and Soft',
    price: 5.99,
  },
  {
    id: 'm2',
    name: 'Hot Chocolate',
    description: 'Amazing in the evening',
    price: 10.5,
  },
  {
    id: 'm3',
    name: 'Milk check',
    description: 'Wonderful at any time',
    price: 8.99,
  },
  {
    id: 'm4',
    name: 'Sobia',
    description: 'The daily drink',
    price: 3.99,
  },
];

const AvailableDrinks = () => {

  const drinksList = DUMMY_DRINKS.map((drink) => <DrinkItem key={drink.id} name={drink.name} description={drink.description} price={drink.price}/>)

  return (
    <section className={classes.drinks}>
     <Card>
      {drinksList}
      </Card>
    </section>
  )
}

export default AvailableDrinks