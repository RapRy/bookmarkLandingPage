import React from 'react'

import styled from 'styled-components'

import iconArrow from '../../images/icon-arrow.svg'

const Accord = ({ val }) => {
    const AccordWrap = styled.div`
        display:grid;
        grid-template-columns:1fr auto;
        grid-gap:20px;
        padding:15px 0;
        border-bottom:1px solid hsl(229, 8%, 60%);
        align-items:center;

        p{
            font-size:.8rem;
            font-weight:500;
        }
    `

    return (
        <AccordWrap>
            <p>{val}</p>
            <img src={iconArrow} alt="arrow" />
        </AccordWrap>
    )
}

export default Accord