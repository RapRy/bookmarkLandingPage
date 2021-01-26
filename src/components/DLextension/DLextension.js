import React from 'react'

import styled from 'styled-components'

import Card from './Card';

import logoChrome from '../../images/logo-chrome.svg'
import logoFirefox from '../../images/logo-firefox.svg'
import logoOpera from '../../images/logo-opera.svg'

const DLextension = () => {
    const data = [
        {
            name:"Chrome",
            logo: logoChrome,
            version:62
        },
        {
            name:"Firefox",
            logo: logoFirefox,
            version:55
        },
        {
            name:"Opera",
            logo: logoOpera,
            version:46
        }
    ]

    const DlHead = styled.div`
        margin:60px 0 0;
        padding:0 20px;
        text-align:center;

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

    const CardsWrapper = styled.div`
        margin:40px 0 0;
        padding:0 20px;
        display:grid;
        grid-template-columns:1fr;
        grid-gap:10px;
    `

    return (
        <div>
            <DlHead>
                <h1>Download the extension</h1>
                <p>We've got more browsers in the pipeline. Please do let us know if you've got a favourite you'd like us to prioritize.</p>
            </DlHead>
            <CardsWrapper>
                {
                    data.map((dat, i) => <Card key={i} version={dat.version} name={dat.name} logo={dat.logo} />)
                }
            </CardsWrapper>
        </div>
    )
}

export default DLextension