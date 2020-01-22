import React, { useContext, useState } from 'react';
import { ItemContext } from '../contexts/ItemContext';

const NavBar = () => {
    const { items } = useContext(ItemContext);
    console.log(items)
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Navbar</a>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Items Count {items.length}</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;