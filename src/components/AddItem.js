import React, { useContext, useState } from 'react';
import { ItemContext } from '../contexts/ItemContext';

const AddItem = () => {
    const { addItem } =  useContext(ItemContext);
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [decription, setDescription] = useState('');

    const handleSubmit = ( e ) => {
        e.preventDefault();
        addItem(name,price,decription);
        setName('');
        setPrice('');
        setDescription('');
        console.debug(name,price,decription)
    }

    return (
        <form onSubmit= {  handleSubmit }>
            <div className="form-group">
                <label htmlFor="name">Item name</label>
                <input type="text" className="form-control" id="name" required  value={name} onChange={(e) => { setName(e.target.value) }} />
            </div>
            <div className="form-group">
                <label htmlFor="price">Item price</label>
                <input type="text" className="form-control" id="price" required name="item_price" value={price} onChange={(e) => { setPrice(e.target.value) }} />
            </div>
            <div className="form-group">
                <label htmlFor="description">Item Description</label>
                <input type="text" className="form-control" id="description" required  name="item_decription" value={decription} onChange={(e) => { setDescription(e.target.value) }} />
            </div>
            <button type="submit" className="btn btn-primary">Save</button>
        </form>
    )
}

export default AddItem;