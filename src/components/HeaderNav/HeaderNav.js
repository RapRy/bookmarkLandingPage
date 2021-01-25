import React, { useState, useEffect } from 'react'

import styled from 'styled-components'

import logoBookmark from '../../images/logo-bookmark.svg'
import iconHamburger from '../../images/icon-hamburger.svg'

import NavList from './NavList';

const HeaderNav = ({toggleNavigation}) => {

    const [ menu, setMenu ] = useState(false)

    const HeaderNavCont = styled.div`
        min-width:375px;
        padding:20px;
        margin:0 auto;
        display:grid;
        grid-template-columns: 1fr auto;
        align-items:center;

        .headerNavigation{
            cursor:pointer;
        }
    `

    const toggleEvent = () => {
        toggleNavigation(true)
    }

    useEffect(() => {
        const bodyWidth = document.body.clientWidth;

        if(bodyWidth > 750) setMenu(true)

        window.addEventListener('resize', () => {
            if(bodyWidth > 750){
                setMenu(true)
            }else{
                setMenu(false)
            }
        })
    })

    return (
        <HeaderNavCont>
            <img src={logoBookmark} alt="logo" className="bookmarkLogo" />
            {
                menu === false ? <img src={iconHamburger} alt="menu" className="headerNavigation" onClick={toggleEvent} /> : <NavList />
            }
        </HeaderNavCont>
    )
}

export default HeaderNav