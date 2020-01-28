import React, { useContext } from 'react';
import { ItemContext } from '../contexts/ItemContext';
import CartItem from './CartItem';

const CartList = () => {
    const { items } = useContext(ItemContext)

    return (items.length ? (
        <div className="cart_items row" >
        {/* <h6>Cart items {items.length}</h6> */}
            <ul>
                {
                    items.map(el => {
                        return (<CartItem key={el.id} item={el}>{el.name}</CartItem>)
                    })
                }
            </ul>
        </div>) : <div className="empty">
            <h6>No items found</h6>
        </div>
    );
}
export default CartList;

