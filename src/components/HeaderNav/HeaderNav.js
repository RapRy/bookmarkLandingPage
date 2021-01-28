import React, {useState, useEffect} from 'react'

import styled from 'styled-components'

import logoBookmark from '../../images/logo-bookmark.svg'
import iconHamburger from '../../images/icon-hamburger.svg'

import NavList from './NavList'

const HeaderNav = ({toggleNavigation}) => {

    const [navToggle, setNavToggle] = useState(false)

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

        @media all and (min-width:850px){
            max-width:1440px;
            margin:0 auto;
        }
    `

    const toggleEvent = () => {
        toggleNavigation(true)
    }

    useEffect(() => {
        const bodyWidth = document.body.clientWidth;

        if(bodyWidth > 850){
            setNavToggle(true)
        }else{
            setNavToggle(false)
        }
        
    }, [])

    return (
        <HeaderNavCont>
            <img src={logoBookmark} alt="logo" className="bookmarkLogo" />
            {navToggle === true ? <NavList /> : <img src={iconHamburger} alt="menu" className="headerNavigation" onClick={toggleEvent} />}
        </HeaderNavCont>
    )
}

export default HeaderNav