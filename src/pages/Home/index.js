import React from 'react'
import './home.css'

import { Link } from 'react-router-dom'

import { IoMdApps } from "react-icons/io";
import { Avatar } from '@material-ui/core'

import Search from '../../components/Search';

function Home() {
  return (
    <div className='home'>
        <div className='home__header'>

            <div className='home__left'>
                <Link to="/sobre">Sobre</Link>
                <Link to="/loja">Loja</Link>
            </div>

            <div className='home__right'>
                <Link to="/email">E-mail</Link>
                <Link to="/images">Images</Link>
                <IoMdApps size={25} />
                <Avatar 
                className='home__avatar'
                src='https://avatars.githubusercontent.com/u/85628259?v=4'
                alt='Miguel Furghestti' />
            </div>
        </div>

        <div className='home__body'>
            <img 
            src="https://logosmarcas.net/wp-content/uploads/2020/09/Google-Logo.png"
            alt="Logo Google"
            />

            <div className='home__input'>
                <Search />
            </div>


        </div>
    </div>
  )
}

export default Home
