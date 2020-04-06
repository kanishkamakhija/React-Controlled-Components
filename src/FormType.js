import React from 'react';

function FormType(props) {
  const { value, addItem, handleChange, inputIsEmpty } = props
  	return( 
    <form onSubmit={addItem}>
          <input
            type="text"
            placeholder="Enter New Item"
            value={value}
            onChange={handleChange}
          />
          <button disabled={inputIsEmpty()}>Add</button>
        </form>
    )
}

export default FormType;