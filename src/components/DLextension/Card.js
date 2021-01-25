import React from 'react'

import styled from 'styled-components'

import bgDots from '../../images/bg-dots.svg'

const Card = ({ version, name, logo }) => {
    const CardContainer = styled.div`
        border-radius:10px;
        box-shadow:0px 6px 10px hsla(229, 8%, 60%, .2);
        padding:40px 0 20px;
        text-align:center;
        margin-bottom:20px;

        &:last-child{margin-bottom:0;}

        @media (min-width:800px){
            margin-bottom:0;

            &:nth-child(1){
                grid-row:1 / 2;
            }

            &:nth-child(2){
                margin-top:20px;
                grid-row:1 / 3;
            }

            &:nth-child(3){
                margin-top:40px;
                grid-row:1 / 4;
            }

        }

        .browserDetails{
            padding:0 0 40px;
            position:relative;

            img{
                margin-bottom:30px;
            }

            h1{
                font-weight:600;
                font-size:1.1rem;
                margin-bottom:10px;
            }
    
            p{
                font-size:.8rem;
                color:hsl(229, 8%, 60%);
            }

            &::after{
                content:"";
                width:100%;
                height:4px;
                display:block;
                position:absolute;
                left:0;
                bottom:0;
                background:url(${props => props.borderBg}) repeat-x;
            }
        }

        .ctaContainer{
            padding:20px 20px 0;

            .ctaBtn{
                width:100%;
                padding:15px;
                border:none;
                border-radius:5px;
                background:hsl(231, 69%, 60%);
                color:#fff;
                font-weight:500;
                font-size:.8rem;
                cursor:pointer;
            }
        }
    `

    return (
        <CardContainer borderBg={bgDots}>
            <div className="browserDetails">
                <img src={logo} alt={name} />
                <h1>Add to {name}</h1>
                <p>Minimum version {version}</p>
            </div>
            <div className="ctaContainer">
                <button className="ctaBtn">
                    Add & Install Extension
                </button>
            </div>
        </CardContainer>
    )
}

export default Card;