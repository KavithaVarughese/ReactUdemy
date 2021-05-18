import React, { useContext, useEffect, useState } from 'react';
import CartContext from '../../store/cart-context';
import CartIcon from '../Cart/CartIcon';

import classes from './HeaderCartButton.module.css'

const HeaderCartButton = props => {

    const [btnIsHighlighted, setButtonIsHighlighted] = useState(false);
    const cardCtx = useContext(CartContext);
    const numberOfCartItems = cardCtx.items.reduce((curNumber, item)=>{
        return curNumber + item.amount;
    }, 0);

    const { items } = cardCtx;
    const btnclasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`;

    useEffect(() => {
        if (items.length === 0){
            return;
        }
        setButtonIsHighlighted(true);
        
        const timer = setTimeout(() => {
            setButtonIsHighlighted(false)
        }, 300);

        return () => {
            clearTimeout(timer);
        };
    }, [items])
    return (
        <button className={btnclasses} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{numberOfCartItems}</span>
        </button>
    )
}

export default HeaderCartButton;