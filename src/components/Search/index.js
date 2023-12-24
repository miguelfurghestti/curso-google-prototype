import React from 'react'
import './search.css'

import { MdOutlineSearch, MdMic, MdKeyboard  } from "react-icons/md";

function Search() {
  return (
    <div className='search'>
        <div className='search__input'>
        
        <MdOutlineSearch className='search__inputIcon' size={25}/>
        <input 
        className='search__inputSearch' 
        />
        <MdKeyboard  className='keyboard__inputIcon' size={25}/>
        <MdMic className='mic__inputIcon' size={25}/>

        </div>

        <div className="search__buttons">
            <button
                type="submit"
                variant="outlined"
            >
                Procurar no Google
            </button>

            <button
                variant="outlined"S
            >
                Estou com sorte
            </button>
        </div>
    </div>
  )
}

export default Search
