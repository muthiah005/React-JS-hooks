import React from 'react';
import ItemContextProvider from './contexts/ItemContext';
import NavBar from './components/NavBar';
import CartList from './components/CartList';
import AddItem from './components/AddItem';

function App () {
  return (
    <div className="app">
      <ItemContextProvider>
        <header>
          <NavBar />
        </header>
        <main>
          <AddItem />
          <CartList />
        </main>
      </ItemContextProvider>
    </div>
  );
}

export default App;
