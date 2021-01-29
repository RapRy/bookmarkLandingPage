import React, { useState } from 'react'

import styled, {keyframes} from 'styled-components'

const Tab = ({ tabImage, tabDesc, tabHead, tabTitle }) => {
    
    const [imgHeight, setImgHeight] = useState(0)
    const transitionTime = 700;

    const imageAnim = keyframes`
        0%{
            opacity:0;
            transform:translate(-50%, -20px);
        }
        100%{
            opacity:1;
            transform:translate(-50%, 0);
        }
    `

    const imageBgAnim = keyframes`
        0%{
            opacity:0;
            transform:translateX(-999px)
        }
        100%{
            opacity:1;
            transform:translateX(0)
        }
    `

    const phraseAnim = keyframes`
        0%{
            opacity:0;
            transform:translateX(999px)
        }
        100%{
            opacity:1;
            transform:translateX(0)
        }
    `

    const TabCont = styled.div`
        margin-top:60px;
        position:relative;

        .tabWrap{



            @media all and (min-width:850px){
                max-width:1440px;
                margin:0 auto;
                display:grid;
                grid-template-columns:repeat(2, 1fr);
                grid-gap:30px;
                align-items:center;
            }

            .tabImageCont{
                padding:0 20px;

                @media all and (min-width:850px){
                    padding:0 0 0 20px;
                }

                img{
                    position:relative;
                    left:50%;
                    transform:translate(-50%, 0);
                    top:0;
                    opacity:0;

                    animation:${imageAnim} ${transitionTime}ms linear 200ms forwards;
                }

                .tabImageBg{
                    height:${props => props.imgHeight+"px"};
                    width:65%;
                    background:hsl(231, 69%, 60%);
                    position:absolute;
                    left:0;
                    top:40px;
                    z-index:-1;
                    border-radius:0 100px 100px 0;
                    opacity:0;
                    transform:translateX(-999px);

                    animation:${imageBgAnim} ${transitionTime}ms linear 300ms forwards;

                    @media all and (min-width:850px){
                        width:35%;
                    }
                }
            }

            .tabPhraseCont{
                margin:60px 0 0;
                padding:0 20px;
                text-align:center;
                opacity:0;
                transform:translateX(999px);

                animation:${phraseAnim} ${transitionTime}ms linear 300ms forwards;

                @media all and (min-width:850px){
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

                    @media all and (min-width:850px){
                        max-width:450px;
                    }
                }
            }
        }
    `

    const handleImageLoad = (e) => {setImgHeight(e.target.clientHeight)}

    return (
        <TabCont imgHeight={imgHeight}>
                <div className="tabWrap">
                    <div className="tabImageCont">
                        <img src={tabImage} alt={tabTitle} onLoad={handleImageLoad}/>
                        <div className="tabImageBg"></div>
                    </div>
                    <div className="tabPhraseCont">
                        <h1>{tabHead}</h1>
                        <p>{tabDesc}</p>
                    </div>
                </div>
        </TabCont>
    )
}


export default Tab