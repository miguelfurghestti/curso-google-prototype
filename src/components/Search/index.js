import React from 'react'
import { useNavigate } from 'react-router-dom'
import './search.css'

import { MdOutlineSearch, MdMic, MdKeyboard } from "react-icons/md";

import { useStateValue } from '../../config/StateProvider'
import { actionTypes } from '../../config/reducer'

function Search({ hideButtons = false }) {
  const navigate = useNavigate()

  const [, dispatch] = useStateValue()
  const [input, setInput] = React.useState("")

  const search = (e) => {
    e.preventDefault()

    console.log('Pesquisa usando botão Procurar no Google >>>>', input)

    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: input
    })

    navigate('/search')
  }

  return (
    <div className='search'>
      <div className='search__input'>

        <MdOutlineSearch className='search__inputIcon' size={25} />
        <input
          className='search__inputSearch'
          value={input}
          onChange={e => setInput(e.target.value)}
        />
        <MdKeyboard className='keyboard__inputIcon' size={25} />
        <MdMic className='mic__inputIcon' size={25} />

      </div>

      {!hideButtons ? (
        <div className="search__buttons">
          <button
            type="submit"
            variant="outlined"
            onClick={search}
          >
            Procurar no Google
          </button>

          <button
            variant="outlined" S
          >
            Estou com sorte
          </button>
        </div>
      ) : (
        <div className="search__buttonsHidden">
          <button
            type="submit"
            variant="outlined"
          >
            Procurar no Google
          </button>

          <button
            variant="outlined" S
          >
            Estou com sorte
          </button>
        </div>
      )}

    </div>
  )
}

export default Search
