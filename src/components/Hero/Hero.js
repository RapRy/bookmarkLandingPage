import React, { useState, useEffect, useRef } from 'react'

import styled from 'styled-components'

import illustrationHero from '../../images/illustration-hero.svg';

const Hero = () => {

    const imgRef = useRef(null);
    const [imgHeight, setImgHeight] = useState(0);

    const HeroCont = styled.div`
        margin-top:60px;
        position:relative;

        .heroWrap{

            @media all and (min-width:850px){
                max-width:1440px;
                margin:0 auto;
                display:grid;
                grid-template-columns:repeat(2, 1fr);
                grid-gap:30px;
                align-items:center;
            }

            .heroImageCont{
                padding:0 20px;

                @media all and (min-width:850px){
                    grid-column:2 / 3;
                    padding:0;
                }
    
                .heroImageBg{
                    height:${props => props.imgHeight > 300 ? (props.imgHeight - 100)+"px" : (props.imgHeight - 60)+"px"};
                    width:75%;
                    background:hsl(231, 69%, 60%);
                    position:absolute;
                    right:0;
                    top:${props => props.imgHeight > 300 ? "100px" : "60px"};
                    z-index:-1;
                    border-radius:100px 0 0 100px;

                    @media all and (min-width:850px){
                        width:35%;
                    }
                }
            }
    
            .heroPhraseCont{
                margin:40px 0 0;
                padding:0 20px;
                text-align:center;

                @media all and (min-width:850px){
                    grid-column:1 / 2;
                    grid-row:1 / 2;
                    text-align:left;
                }
    
                h1{
                    font-weight:600;
                    font-size:1.5rem;
                    line-height:1.4;
                    margin-bottom:20px;
                }
    
                p{
                    font-size:.8rem;
                    color:hsl(229, 8%, 60%);
                    line-height:1.8;
                    margin-bottom:20px;
                }
    
                
                .HeroCtaCont{
                    display:grid;
                    grid-template-columns:repeat(2, 1fr);
                    grid-gap:20px;
    
                    button{
                        padding:20px;
                        border:none;
                        background:#F9F9F9;
                        box-shadow:0px 4px 6px rgba(0,0,0,.1);
                        border-radius:5px;
                        font-weight:500;
                        font-size:.8rem;
                        color:hsl(229, 31%, 21%);
                        cursor:pointer;
            
                        &.getChrome{
                            background:hsl(231, 69%, 60%);
                            color:#fff;
                        }
                    }
                }
            }
        }
    `

    useEffect(() => {
        setImgHeight(imgHeight !== 0 && imgRef.current.clientHeight)
    }, [imgHeight])

    return (
        <HeroCont imgHeight={imgHeight}>
            <div className="heroWrap">
                <div className="heroImageCont">
                    <img src={illustrationHero} alt="Illustraion Hero" ref={imgRef}/>
                    <div className="heroImageBg"></div>
                </div>
                <div className="heroPhraseCont">
                    <h1>A Simple Bookmark Manager</h1>
                    <p>A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.</p>
                    <div className="HeroCtaCont">
                        <button className="getChrome">Get it on Chrome</button>
                        <button className="getFirefox">Get it on Firefox</button>
                    </div>
                </div>
            </div>
        </HeroCont>
    )
}

export default Hero;
