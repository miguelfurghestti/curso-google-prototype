import React from 'react'
import './searchpage.css'

import { Link } from 'react-router-dom'
import Search from '../../components/Search';

import {
    MdOutlineSearch,
    MdDescription,
    MdImage,
    MdLocalOffer,
    MdRoom,
    MdMoreVert
} from "react-icons/md";

function SearchPage() {
    return (
        <div className='searchpage'>
            <div className='searchpage__header'>
                <Link to="/">
                    <img className='searchpage__logo'
                        src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
                        alt="Logo Google"
                    />
                </Link>

                <div className='searchpage__headerBody'>

                    <Search hideButtons />

                    <div className='searchpage__options'>
                        <div className='searchpage__optionLeft'>
                            <div className='searchpage__option'>
                                <MdOutlineSearch />
                                <Link to="/todos">Todos</Link>
                            </div>
                            <div className='searchpage__option'>
                                <MdDescription />
                                <Link to="/descricao">Descrição</Link>
                            </div>
                            <div className='searchpage__option'>
                                <MdImage />
                                <Link to="/imagem">Imagem</Link>
                            </div>
                            <div className='searchpage__option'>
                                <MdLocalOffer />
                                <Link to="/shopping">Shopping</Link>
                            </div>
                            <div className='searchpage__option'>
                                <MdRoom />
                                <Link to="/mapa">Mapa</Link>
                            </div>
                            <div className='searchpage__option'>
                                <MdMoreVert />
                                <Link to="/mais">Mais</Link>
                            </div>
                        </div>

                        <div className='searchpage__optionRight'>
                            <div className='searchpage__option'>
                                <Link to="/configuracao">Configuração</Link>
                            </div>
                            <div className='searchpage__option'>
                                <Link to="/ferramentas">Ferramentas</Link>
                            </div>
                        </div>

                    </div>



                </div>
            </div>
        </div>
    )
}

export default SearchPage
