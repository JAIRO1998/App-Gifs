import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import {GifGrid} from './components/GifGrid';

export default function GifExpertApp() {
    
    const [categorias, setcategorias] = useState(['Pokemon']);

  return (
      <>
        <h2 className="tittle-app">App para buscar Gifs</h2>
        <AddCategory setcategorias = { setcategorias}/>
        <hr />

        <button>Buscar</button>
        
        <ol>
            {
                categorias.map( categoria => (
                        <GifGrid 
                        key={categoria}
                        categoria = {categoria} 
                        />
                ))
            }
        </ol>
      </>
  )
} 
