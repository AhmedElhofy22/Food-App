import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import classes from "./Header.module.css";

const Header = (props) => {
  
  return (
    <Fragment>
       <header>
         <nav>
           <ul> 
             <li><Link to='meals'>Meals</Link></li>
             <li><Link to='drinks'>Drinks</Link></li>
           </ul>
         </nav>
       </header>
      <header className={classes.header}>
        <h1>Cafe and Restaurant</h1>
        <button className={classes.btn} >Cart</button>
      </header>
      <div className={classes["main-image"]}>
        <img
          src="https://media.architecturaldigest.com/photos/5e5e78b2b84db300091bfc65/16:9/w_2560%2Cc_limit/Main-Dining-Room.jpg"
          alt="amazing restaurant"
        />
      </div>
    </Fragment>
  );
};

export default Header;
