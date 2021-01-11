import React from 'react'

import styled from 'styled-components'

import iconClose from '../../images/icon-close.svg'
import logoBookmark from '../../images/logo-bookmark-alt.svg'
import iconFacebook from '../../images/icon-facebook.svg'
import iconTwitter from '../../images/icon-twitter.svg'

const NavMenu = ({toggleNavigation}) => {
    const NavMenuCont = styled.div`
        min-width:375px;
        min-height:100vh;
        padding:20px;
        margin:0 auto;
        background:hsla(229, 31%, 21%, .9);

        .navMenuHeader{
            display:grid;
            grid-template-columns: 1fr auto;
            align-items:center;
            margin-bottom:40px;
        }

        .menuCont{
            .mainMenu{
                display:block;
                text-align:center;
                padding:15px 0;
                color:#fff;
                border-top:1px solid hsl(229, 8%, 60%);
                font-weight:400;

                &:nth-child(3){
                    border-bottom:1px solid hsl(229, 8%, 60%);
                }
            }

            .loginMenu{
                display:block;
                max-width:375px;
                text-align:center;
                padding:10px 0;
                margin:15px auto 0;
                color:#fff;
                font-weight:500;
                border:2px solid #fff;
                border-radius:5px;
            }
        }

        .socialMediaCont{
            position:absolute;
            bottom:50px;
            left:50%;
            transform:translateX(-50%);

            .sFacebook{
                margin-right:30px;
            }

        }
    `

    const toggleEvent = () => {
        
        toggleNavigation(false)
    }

    return (
        <NavMenuCont>
            <div className="navMenuHeader">
                <img src={logoBookmark} alt="Logo Alt" className="logoAlt" />
                <img src={iconClose} alt="Close Menu" className="closeNavigation" onClick={toggleEvent} />
            </div>
            <div className="menuCont">
                <a href="#" className="mainMenu">FEATURES</a>
                <a href="#" className="mainMenu">PRICING</a>
                <a href="#" className="mainMenu">CONTACT</a>
                <a href="#" className="loginMenu">LOGIN</a>
            </div>
            <div className="socialMediaCont">
                <a href="#" className="sFacebook"><img src={iconFacebook} alt="facebook icon" /></a>
                <a href="#" className="sTwitter"><img src={iconTwitter} alt="twitter icon" /></a>
            </div>
        </NavMenuCont>
    )
}

export default NavMenu;