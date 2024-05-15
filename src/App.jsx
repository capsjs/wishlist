import { useState } from 'react'
import { Provider } from 'react-redux';
import { store } from './redux.js';
import WishlistHeader from './WishlistHeader.jsx';
import WishForm from './WishForm.jsx';
import List from './List.jsx';
import './App.css'

export default function App() {


  return (
    <Provider store={store}>
      <div className='container'>
        <article>
          <WishlistHeader    />
          <List
           />
           <footer>
            <WishForm  />
           </footer>
        </article>
      </div> 
    </Provider>  
  );
};