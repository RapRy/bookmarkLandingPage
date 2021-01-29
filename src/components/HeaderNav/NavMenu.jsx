import React, { useState, useEffect } from 'react'

import styled, { keyframes } from 'styled-components'

import iconClose from '../../images/icon-close.svg'
import logoBookmark from '../../images/logo-bookmark-alt.svg'
import iconFacebook from '../../images/icon-facebook.svg'
import iconTwitter from '../../images/icon-twitter.svg'

const NavMenu = ({toggleNavigation}) => {

    const [trigger, setTrigger] = useState(true);

    const timer = 400;

    const animate = keyframes`
        0%{
            top:-999px;
        }
        100%{
            top:0;
        }
    `;

    const NavMenuCont = styled.div`
        width:100%;
        height:100vh;
        padding:20px;
        margin:0 auto;
        background:hsla(229, 31%, 21%, .95);
        position:absolute;
        left:0;
        z-index:3;

        animation:${animate} ${timer}ms ease-in-out ${({trigger}) => trigger === false ? "reverse forwards" : ""};

        .navMenuHeader{
            display:grid;
            grid-template-columns: 1fr auto;
            align-items:center;
            margin-bottom:40px;
            
            .closeNavigation{
                cursor:pointer;
            }
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
        setTrigger(false)

        setTimeout(() => {
            toggleNavigation(false)
        }, timer)
    }

    // useEffect(() => {
    //     if(toggleNavigation === true){
    //         setTrigger(true);
    //     }
    // }, [])

    return (
        <NavMenuCont trigger={trigger}>
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