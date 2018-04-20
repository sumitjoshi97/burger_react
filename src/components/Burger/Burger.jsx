import React from 'react';
import classes from './Burger.css';
import BurgerIngredients from './BurgerIngredients/BurgerIngredients';

const Burger = (props) => {
    return (
        <div className={classes.Burger}>
            <BurgerIngredients type="bread-top" />
            <BurgerIngredients type="cheese" />
            <BurgerIngredients type="bacon" />
            <BurgerIngredients type="bread-bottom" />
        </div>
    )
}

export default Burger;