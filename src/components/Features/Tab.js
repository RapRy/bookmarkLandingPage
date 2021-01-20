import React, { useRef, useState, useEffect } from 'react'

import styled from 'styled-components'

import featureTab1 from '../../images/illustration-features-tab-1.svg'

const Tab = ({ tabImage, tabDesc, tabHead }) => {
    const imgRef = useRef(null)
    const [imgHeight, setImgHeight] = useState(0)

    const TabImageCont = styled.div`
        margin-top:60px;
        padding:0 20px;
        position:relative;

        .tabImageBg{
            height:${props => props.imgHeight > 300 ? (props.imgHeight - 100)+"px" : (props.imgHeight - 60)+"px"};
            width:75%;
            background:hsl(231, 69%, 60%);
            position:absolute;
            left:0;
            top:${props => props.imgHeight > 300 ? "100px" : "60px"};
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

    useEffect(() => {
        setImgHeight(imgHeight !== 0 && imgRef.current.clientHeight)
        window.addEventListener('resize', () => {
            setImgHeight(imgRef.current.clientHeight)
        })
    }, [imgHeight])

    return (
        <div>
            <TabImageCont imgHeight={imgHeight}>
                <img src={tabImage} alt="Illustraion Hero" ref={imgRef}/>
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