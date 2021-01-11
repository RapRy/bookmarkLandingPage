import React from 'react'

import styled from 'styled-components'

import logoBookmark from '../../images/logo-bookmark.svg'
import iconHamburger from '../../images/icon-hamburger.svg'

const HeaderNav = ({toggleNavigation}) => {

    const HeaderNavCont = styled.div`
        min-width:375px;
        padding:20px;
        margin:0 auto;
        display:grid;
        grid-template-columns: 1fr auto;
        align-items:center;
    `

    const toggleEvent = () => {
        toggleNavigation(true)
    }

    return (
        <HeaderNavCont>
            <img src={logoBookmark} alt="logo" className="bookmarkLogo" />
            <img src={iconHamburger} alt="menu" className="headerNavigation" onClick={toggleEvent} />
        </HeaderNavCont>
    )
}

export default HeaderNav