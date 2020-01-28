import React, { useContext, useState } from 'react';
import { ItemContext } from '../contexts/ItemContext';

const NavBar = () => {
    const { items } = useContext(ItemContext);
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">React Hooks</a>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">
                            <span>Count</span> 
                            <span className="badge badge-secondary ml7">{items.length}</span>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;