import React, {useEffect, useState} from 'react'

import styled from 'styled-components'

import iconArrow from '../../images/icon-arrow.svg'

const Accord = ({ val }) => {

    const [status, setStatus] = useState(false);

    const AccordWrap = styled.div`
        padding:15px 0;
        border-bottom:1px solid hsl(229, 8%, 60%);

        .accordHead{
            display:grid;
            grid-template-columns:1fr auto;
            grid-gap:20px;
            align-items:center;
            cursor:pointer;

            p{
                font-size:.8rem;
                font-weight:500;
            }

            img{
                transform:${props => props.status ? "rotate(-180deg)" : "rotate(0deg)"};
                transform-origin:center;
            }
        }

        .accordBody{
            padding-top:20px;
            display:${props => props.status ? "block" : "none"};

            p{
                font-size:.8rem;
                color:hsl(229, 8%, 60%);
                line-height:1.8;
            }
        }
    `
    const toggleStatus = () => status === false ? setStatus(true) : setStatus(false);

    return (
        <AccordWrap status={status}>
            <div className="accordHead" onClick={toggleStatus}>
                <p>{val.question}</p>
                <img src={iconArrow} alt="arrow" />
            </div>
            <div className="accordBody">
                <p>{val.answer}</p>
            </div>
        </AccordWrap>
    )
}

export default Accord