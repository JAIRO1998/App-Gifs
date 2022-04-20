import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({setcategorias}) => {

  const [InputValue, setInputValue] = useState('');

  const inputChange = (e) => {
      setInputValue(e.target.value);
  }

  const inputSubmit = (e) => {
    e.preventDefault();

    if( InputValue.trim().length > 2){
      setcategorias(cats => [InputValue, ...cats]);
      setInputValue('');
    }
    
  }

  return (
     <form onSubmit={inputSubmit}>
        <input 
            type="text" 
            value={InputValue}
            onChange={inputChange}
        />
     </form>
  )
}

AddCategory.propTypes ={
  setcategorias: PropTypes.func.isRequired
}
