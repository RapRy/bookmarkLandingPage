import React, {useState, useRef} from 'react'

import styled from 'styled-components'

import InputField from './InputField'

const Newsletter = () => {
    const NewsletterCont = styled.div`
        margin:60px 0 0;
        background:hsl(231, 69%, 60%);
        padding:60px 20px;
        text-align:center;

        .heading{
            margin-bottom:20px;

            p{
                color:#fff;
                font-size:.7rem;
                letter-spacing:5px;
                margin-bottom:10px;
            }

            h1{
                font-size:1.3rem;
                color:#fff;
                font-weight:500;
            }
        }

        .newsForm{
            button{
                width:100%;
                border-radius:5px;
                padding:10px 20px;
                display:inline-block;
                font-size:.9rem;
                color:#fff;
                font-weight:500;
                border:none;
                background:hsl(0, 94%, 66%);
                cursor:pointer;
            }
        }
    `
    const [inputErr, setInputErr] = useState(0);
    const inputRef = useRef(null);

    const submitForm = (e) => {
        e.preventDefault();

        const reg = /\S+@\S+\.\S+/;

        if(inputRef.current.value === ""){
            setInputErr(2);
        }else if(!reg.test(inputRef.current.value)){
            setInputErr(1);
        }else{
            setInputErr(0);
            console.log("no error")
        }
    }

    return (
        <div>
            <NewsletterCont>
                <div className="heading">
                    <p>35,000+ ALREADY JOINED</p>
                    <h1>Stay up-to-date with what we're doing</h1>
                </div>
                <div className="newsForm">
                    <form id="emailForm" onSubmit={submitForm} noValidate>
                        <InputField inputErr={inputErr} ref={inputRef} />
                        <button type="submit" className="submitEmail">Contact Us</button>
                    </form>
                </div>
            </NewsletterCont>
        </div>
    )
}

export default Newsletter

