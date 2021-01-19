import React from 'react'

import styled from 'styled-components'

import iconError from '../../images/icon-error.svg'

const InputField = React.forwardRef(({ inputErr }, ref) => {
    const InputCont = styled.div`
        position:relative;
        background:${props => props.inputErr !== 0 && "hsl(0, 94%, 66%)"};
        border-radius:${props => props.inputErr !== 0 && "5px"};
        margin-bottom:10px;

        input{
            width:100%;
            border-radius:5px;
            padding:10px 20px;
            display:inline-block;
            border:none;
            font-size:.9rem;
            border:${props => props.inputErr !== 0 && "2px solid hsl(0, 94%, 66%)"};
            
            &::placeholder{
                font-size:.9rem;
                color:hsl(229, 8%, 60%);
            }
        }

        img{
            position:absolute;
            right:15px;
            top:11px;
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
