import React, { useContext } from 'react';
import { ItemContext } from '../contexts/ItemContext';

const CartItem = ({ item }) => {
    const { removeItem } = useContext(ItemContext);
    return (
        <li  key={item.id}>
            <div className="card"  >
                <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{item.price}</h6>
                    <p className="card-text">Some quick example text to build on.</p>
                    <a href="#" className="card-link" onClick={ () => removeItem(item) }> Remove Item</a>
                </div>
            </div>
        </li>
    )
}

export default CartItem;