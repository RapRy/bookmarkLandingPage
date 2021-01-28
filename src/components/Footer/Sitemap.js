import React from 'react'

import styled from 'styled-components'

import logoBookmark from '../../images/logo-bookmark-alt.svg'
import iconFacebook from '../../images/icon-facebook.svg'
import iconTwitter from '../../images/icon-twitter.svg'

const Sitemap = () => {

    const Footer = styled.div`
        background:hsl(229, 31%, 21%);
        padding:40px 0;

        @media all and (min-width:850px){ padding:20px 0;}

        .sitemapCont{
            padding:0 20px;
            text-align:center;

            @media all and (min-width:850px){
                max-width:1440px;
                display:grid;
                grid-template-columns:auto 1fr auto;
                grid-gap:30px;
                align-items:center;
                text-align:left;
            }

            .logoCont{
                margin-bottom:30px;
                @media all and (min-width:850px){margin-bottom:0;}
            }

            .navCont{
                margin-bottom:30px;

                @media all and (min-width:850px){margin-bottom:0;}

                .sitemapMenu{
                    display:block;
                    text-align:center;
                    padding:15px 0;
                    color:#fff;
                    font-weight:400;
                    font-size:.9rem;

                    @media all and (min-width:850px){
                        display:inline-block;
                        padding:15px 20px 15px 0px;
                        font-size:.8rem;
                    }
                }
            }

            .smFacebook{margin-right:30px;}
        }
    `

    return (
        <Footer>
            <div className="sitemapCont">
                <div className="logoCont">
                    <img src={logoBookmark} alt="Logo Alt" />
                </div>
                <div className="navCont">
                    <a href="#" className="sitemapMenu">FEATURES</a>
                    <a href="#" className="sitemapMenu">PRICING</a>
                    <a href="#" className="sitemapMenu">CONTACT</a>
                </div>
                <div className="sitemapSocialMediaCont">
                    <a href="#" className="smFacebook"><img src={iconFacebook} alt="facebook icon" /></a>
                    <a href="#" className="smTwitter"><img src={iconTwitter} alt="twitter icon" /></a>
                </div>
            </div>
        </Footer>
    )
}

export default Sitemap
