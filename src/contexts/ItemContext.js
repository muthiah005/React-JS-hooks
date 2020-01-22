import React, { createContext, Component, useState,useEffect } from 'react';

export const ItemContext = createContext();

const ItemContextProvider = (props) => {
    const [items, setItems] = useState([]);

    useEffect(()=>{
        const allItems =  [{"id":1,"name":"Product1","decription":"Product item 1","price":50},{"id":2,"name":"Product2","decription":"Product item 2","price":100},{"id":3,"name":"Product3","decription":"Product item 3","price":500},{"id":4,"name":"Product4","decription":"Product item 4","price":600}];
        localStorage.setItem('items',JSON.stringify(allItems));
    },[items])

    const addItem = (name,price,description) => {
        setItems([...items, { id: items.length + 1, name: name,price:price,description:description }])
    }

    const removeItem = (item) => {
        const res =  items.filter(el => {
            return el.id !== item.id;
        });
        setItems(res);
    }

    return (
        <ItemContext.Provider value={{ items, addItem, removeItem }} >
            {props.children}
        </ItemContext.Provider>
    )

}

export default ItemContextProvider;