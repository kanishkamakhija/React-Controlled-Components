import React from 'react';
import './App.css';
import Content from './Content.js';

class App extends React.Component {
 
  state = {
  		value : '',
     	items: [],
  	} 
  
 handleChange = event => {
      this.setState({ value: event.target.value });
    }; 

  addItem = event => {
      event.preventDefault();
      this.setState(oldState => ({
        items: [...oldState.items, this.state.value],
      }));
    };

  deleteLastItem = event => {
    this.setState(prevState => ({ items: this.state.items.slice(0, -1) }));
  };

   inputIsEmpty = () => {
     console.log("inputIsEmpty");
    return this.state.value === '';
  };
  
   noItemsFound = () => {
     console.log("noItemsFound");
    return this.state.items.length === 0;
  };
  
 

 

  render() {
    return (
      <Content 
		value={this.state.value}
       	items={this.state.items}
		addItem={this.addItem}
        handleChange={this.handleChange}
		deleteLastItem={this.deleteLastItem} 
		inputIsEmpty={this.inputIsEmpty}
		noItemsFound={this.noItemsFound} />
    );
  }
}

export default App;
