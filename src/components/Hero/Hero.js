import React from 'react'

import styled from 'styled-components'

import illustrationHero from '../../images/illustration-hero.svg';

const Hero = () => {

    const HeroImageCont = styled.div`
        margin-top:60px;
        padding:0 20px;
        position:relative;

        .heroImageBg{
            height:200px;
            width:75%;
            background:hsl(231, 69%, 60%);
            position:absolute;
            right:0;
            top:60px;
            z-index:-1;
            border-radius:100px 0 0 100px;
        }
    `

    const HeroPhraseCont = styled.div`
        margin:40px 0;
        padding:0 20px;
        text-align:center;

        h1{
            font-weight:600;
            font-size:1.8rem;
            line-height:1.4;
            margin-bottom:20px;
        }

        p{
            font-size:.9rem;
            color:hsl(229, 8%, 60%);
            line-height:1.8;
            margin-bottom:20px;
        }

        button{
            max-width:50%;
            padding:20px 30px;
            border:none;
            background:#F9F9F9;
            box-shadow:0px 4px 6px rgba(0,0,0,.1);
            border-radius:5px;
            font-weight:500;
            color:hsl(229, 31%, 21%);
            cursor:pointer;

            &.getChrome{
                margin-right:20px;
                background:hsl(231, 69%, 60%);
                color:#fff;
            }
        }
    `

    return (
        <div>
            <HeroImageCont>
                <img src={illustrationHero} alt="Illustraion Hero"/>
                <div className="heroImageBg"></div>
            </HeroImageCont>
            <HeroPhraseCont>
                <h1>A Simple Bookmark Manager</h1>
                <p>A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.</p>
                <div className="HeroCtaCont">
                    <button className="getChrome">Get it on Chrome</button>
                    <button className="getFirefox">Get it on Firefox</button>
                </div>
            </HeroPhraseCont>
        </div>
    )
}

export default Hero;
