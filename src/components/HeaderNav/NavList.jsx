import React from 'react'

import styled from 'styled-components'

const NavList = () => {
    const NavMenuList = styled.nav`

        li{
            display:inline-block;
            margin-right:40px;

            &:last-child{
                margin-right:0;
            }

            a{
                font-size:.8rem;
                font-weight:500;
                color:#000;

                &.loginBtn{
                    color:#fff;
                    background:hsl(0, 94%, 66%);
                    box-shadow:0px 4px 6px rgba(0,0,0,.1);
                    padding:10px 25px;
                    border-radius:5px;
                }
            }
        }
    `

    return (
        <NavMenuList>
            <ul>
                <li><a href="#">FEATURES</a></li>
                <li><a href="#">PRICING</a></li>
                <li><a href="#">CONTACT</a></li>
                <li><a href="#" className="loginBtn">LOGIN</a></li>
            </ul>
        </NavMenuList>
    )
}

export default NavList
