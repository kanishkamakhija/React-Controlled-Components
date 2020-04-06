import React from 'react';
import logo from './logo.svg';
import FormType from './FormType.js';

function Content(props) {
  
  const {value, items, addItem, handleChange, deleteLastItem, inputIsEmpty, noItemsFound } = props 
  
return (
    <div className="App">
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <h2>Shopping List</h2>
        { <FormType handleChange={handleChange} addItem={addItem} inputIsEmpty={inputIsEmpty} values={value} items={items}/> }
        <button onClick={deleteLastItem} disabled={noItemsFound()}> Delete Last Item </button>
        <p className="items">Items</p>
      	<ol className="item-list">
      		{items.map((item, index) => <li key={index}>{item}</li>)}
    	</ol>
    </div>
);
}

export default Content;