import React, {useState} from 'react'

import styled, {keyframes} from 'styled-components'

import iconArrow from '../../images/icon-arrow.svg'

const Accord = ({ val }) => {

    const [status, setStatus] = useState(false);

    const animateAccord = keyframes`
        0%{
            max-height:0;
            padding-top:0;
        }
        100%{
            padding-top:20px;
            max-height:300px;
        }
    `

    const animateImage = keyframes`
        0%{
            transform:rotate(0deg);
        }
        100%{
            transform:rotate(-180deg);
        }
    `

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
                transform:${({status}) => status === true ? "rotate(-180deg)" : "rotate(0deg)"};
                transform-origin:center;
                animation:${animateImage} 200ms ease-in-out ${({status}) => status === true ? "forwards" : "reverse"};
            }
        }

        .accordBody{
            padding-top:0;
            overflow:hidden;
            max-height:0;
            animation:${animateAccord} 200ms ease-in-out ${({status}) => status === true ? "forwards" : "reverse"};

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