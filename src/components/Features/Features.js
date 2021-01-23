import React, { useState } from 'react'

import styled from 'styled-components'
import Tab from './Tab';

import featureTab1 from '../../images/illustration-features-tab-1.svg'
import featureTab2 from '../../images/illustration-features-tab-2.svg'
import featureTab3 from '../../images/illustration-features-tab-3.svg'

const Features = () => {

    const tabContent = [
        {
            tabTitle:"Simple Bookmarking",
            featImage: featureTab1,
            featHead:"Bookmark in one click",
            featDesc: "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites."
        },
        {
            tabTitle:"Speedy Searching",
            featImage: featureTab2,
            featHead:"Lorem Ipsum Elit",
            featDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed laoreet nulla."
        },
        {
            tabTitle:"Easy Sharing",
            featImage: featureTab3,
            featHead:"Consectetur Id Urna",
            featDesc: "Donec lacinia rutrum metus non placerat. Integer erat mauris, ultrices ut aliquam at, consectetur id urna."
        },
    ]

    const [curTab, setCurTab] = useState(tabContent[0])
    const [curClass, setCurClass] = useState(0);

    const FeaturesMain = styled.div`
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

    const FeaturesTabMenu = styled.div`
        padding:30px 20px 0;
        
        .tabLink{
            padding:20px 0;
            border-top:1px solid hsl(229, 8%, 60%);
            position:relative;
            cursor:pointer;

            p{
                text-align:center;
                font-size:.9rem;
                font-weight:500;
                color:hsl(229, 8%, 60%);
            }

            &.tabActive{
                &::after{
                    content:'';
                    width:45%;
                    height:4px;
                    background:hsl(0, 94%, 66%);
                    display:block;
                    position:absolute;
                    bottom:0;
                    left:50%;
                    transform:translateX(-50%);
                    z-index:2;
                }

                p{
                    color:hsl(229, 31%, 21%);
                }
            }

            &:last-child{
                border-bottom:1px solid hsl(229, 8%, 60%);  
            }
        }
    `

    const clickEvent = (curElem) => {
        setCurTab(tabContent[curElem])
        setCurClass(curElem)
    }

    return (
        <div>
            <FeaturesMain>
                <h1>Features</h1>
                <p>Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go.</p>
            </FeaturesMain>
            <FeaturesTabMenu>
                {
                    tabContent.map((tab, i) => {
                        return(
                            <div className={`tabLink ${i == curClass ? "tabActive" : ""}`} key={i} onClick={() => clickEvent(i)}>
                                <p>{tab.tabTitle}</p>
                            </div>
                        )
                    })
                }
            </FeaturesTabMenu>
            <Tab tabImage={curTab.featImage} tabDesc={curTab.featDesc} tabHead={curTab.featHead} tabTitle={curTab.tabTitle} />
        </div>
    )
}

export default Features;