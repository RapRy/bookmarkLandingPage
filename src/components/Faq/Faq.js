import React from 'react'

import styled from 'styled-components'

import Accord from './Accord'

const Faq = () => {
    const FaqHeader = styled.div`
        margin:60px 0 0;
        padding:0 20px;
        text-align:center;

        @media (min-width:500px){
            width:500px;
            margin:60px auto 0;
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
    `

    const AccordCont = styled.div`
        margin:40px 0 0;
        padding:0 20px;

        @media (min-width:500px){
            width:500px;
            margin:40px auto 0;
        }
    `
    
    const CtaBtn = styled.button`
        margin-top:40px;
        max-width:40%;
        padding:20px 30px;
        border:none;
        background:hsl(231, 69%, 60%);
        color:#fff;
        box-shadow:0px 4px 6px rgba(0,0,0,.1);
        border-radius:5px;
        font-weight:500;
        font-size:.8rem;
        cursor:pointer;
        position:relative;
        left:50%;
        transform:translateX(-50%);
    `
    const data = [
        {
            question:"What is Bookmark",
            answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum condimentum tellus eget justo laoreet porttitor. Sed vel nunc urna. Morbi urna purus, dictum quis sollicitudin a, tempus vitae diam."
        },
        {
            question:"How can I request a new browser?",
            answer:"Donec egestas ipsum elit, sed ornare lorem tincidunt id. Ut velit tortor, rhoncus a pretium at, imperdiet ac nisi."
        },
        {
            question:"Is there a mobile app?",
            answer:"Nulla laoreet, purus ac commodo euismod, ligula libero viverra tortor, viverra euismod sem dolor et est. Fusce blandit venenatis metus, at cursus lectus consectetur sit amet. Etiam congue euismod elit, ac ornare risus mollis id."
        },
        {
            question:"What about other Chromium browsers?",
            answer:"Mauris et sem eleifend, pharetra tortor sit amet, facilisis odio. Nulla ex enim, dignissim condimentum nunc at, interdum euismod turpis. Ut ut accumsan tortor. Cras sit amet varius nisl."
        }
    ]

    return (
        <div>
            <FaqHeader>
                <h1>Frequently Asked Questions</h1>
                <p>Here are some of our FAQs. If you have any other questions you'd like answered please feel free to email us.</p>    
            </FaqHeader>
            <AccordCont>
                {
                    data.map((val, i) => <Accord val={val} key={i} />)
                }
            </AccordCont>     
            <CtaBtn>More Info</CtaBtn>   
        </div>
    )
}

export default Faq;