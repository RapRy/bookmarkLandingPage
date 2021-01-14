import React from 'react'

import styled from 'styled-components'

import featureTab1 from '../../images/illustration-features-tab-1.svg'

const Tab = ({ tabImage, tabDesc, tabHead }) => {
    const TabImageCont = styled.div`
        margin-top:60px;
        padding:0 20px;
        position:relative;

        .tabImageBg{
            height:200px;
            width:75%;
            background:hsl(231, 69%, 60%);
            position:absolute;
            left:0;
            top:40px;
            z-index:-1;
            border-radius:0 100px 100px 0;
        }
    `

    const TabPhraseCont = styled.div`
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

    return (
        <div>
            <TabImageCont>
                <img src={tabImage} alt="Illustraion Hero"/>
                <div className="tabImageBg"></div>
            </TabImageCont>
            <TabPhraseCont>
                <h1>{tabHead}</h1>
                <p>{tabDesc}</p>
            </TabPhraseCont>
        </div>
    )
}

export default Tab