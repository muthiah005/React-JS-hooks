import React, { useContext, useState } from 'react';
import { ItemContext } from '../contexts/ItemContext';

const AddItem = () => {
    const { addItem } =  useContext(ItemContext);
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('');

    const handleChange = (e) =>{
        // const names = ['name','price','description']
        const {name,value} = e.target;
        console.debug(name,value)
        if(name === 'name'){
            setName(value);
        }else if(name === 'price'){
            setPrice(value);
        }else if(name === 'description'){
            setDescription(value);
        }
    }

    const handleSubmit = ( e ) => {
        e.preventDefault();
        addItem(name,price,description);
        setName('');
        setPrice('');
        setDescription('');
        console.debug(name,price,description)
    }

    return (
        <div className="form_holder">
        <form onSubmit= {  handleSubmit }>
            <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input type="text" className="form-control" id="name" 
                required name="name"  value={name} onChange={(e) => { handleChange(e) }} />
            </div>
            <div className="form-group">
                <label htmlFor="price">Price:</label>
                <input type="text" className="form-control" name="price" 
                id="price" required  value={price} onChange={(e) => { handleChange(e) }} />
            </div>
            <div className="form-group">
                <label htmlFor="description">Description:</label>
                <input type="text" className="form-control"  name="description"  
                id="description" required value={description} onChange={(e) => { handleChange(e) }} />
            </div>
            <button type="submit" className="btn btn-primary">Save</button>
        </form>
        </div>
    )
}

export default AddItem;