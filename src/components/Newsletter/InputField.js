import React from 'react'

import styled, {keyframes} from 'styled-components'

import iconError from '../../images/icon-error.svg'

const InputField = React.forwardRef(({ inputErr }, ref) => {

    const animate = keyframes`
        0%{opacity:0;}
        100%{opacity:1;}
    `

    const animateBg = keyframes`
        0%{background:#fff}
        100%{background:hsl(0, 94%, 66%)}
    `

    const animateBorder = keyframes`
        0%{border:none}
        100%{border:2px solid hsl(0, 94%, 66%)}
    `

    const InputCont = styled.div`
        position:relative;
        background:${({inputErr}) => inputErr !== 0 ? "hsl(0, 94%, 66%)" : "#fff"};
        // border-radius:${({inputErr}) => inputErr !== 0 && "5px"};
        border-radius:5px;
        margin-bottom:10px;
        animation:${animateBg} 400ms ease-in-out forwards;

        input{
            width:100%;
            border-radius:5px;
            padding:10px 20px;
            display:inline-block;
            border:none;
            font-size:.9rem;
            border:${({inputErr}) => inputErr !== 0 ? "2px solid hsl(0, 94%, 66%)" : "none"};
            animation:${animateBorder} 100ms ease-in-out ${({inputErr}) => inputErr > 0 && "forwards"};
            
            &::placeholder{
                font-size:.9rem;
                color:hsl(229, 8%, 60%);
            }
        }

        img{
            position:absolute;
            right:15px;
            top:11px;
            opacity:0;

            animation:${animate} 400ms ease-in-out forwards;
        }

        span{
            padding:8px 15px;
            background:hsl(0, 94%, 66%);
            color:#fff;
            display:inline-block;
            width:100%;
            border-radius:0 0 5px 5px;
            text-align:left;
            font-size:.7rem;
            font-style:italic;
            opacity:0;

            animation:${animate} 400ms ease-in-out forwards;
        }
    `

    return (
        <InputCont inputErr={inputErr}>
            <input ref={ref} type="email" name="email" placeholder="Enter your email address" />
            {inputErr !== 0 && <img src={iconError} alt="error" />}
            {inputErr !== 0 && <span className="error">{inputErr === 1 ? "Whoops, make sure it's an email" : "Whoops, make sure field is not empty"}</span>}
        </InputCont>
    )
})

export default InputField
