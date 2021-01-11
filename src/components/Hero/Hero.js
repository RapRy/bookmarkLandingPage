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

    return (
        <div>
            <HeroImageCont>
                <img src={illustrationHero} alt="Illustraion Hero"/>
                <div className="heroImageBg"></div>
            </HeroImageCont>
        </div>
    )
}

export default Hero;
