import React, { useRef, useState, useEffect } from 'react'

import styled from 'styled-components'

const Tab = React.forwardRef(({ tabImage, tabDesc, tabHead, imgHeight }, ref) => {
    
    // const [imgHeight, setImgHeight] = useState(0)

    const TabImageCont = styled.div`
        margin-top:60px;
        padding:0 20px;
        position:relative;

        img{
            position:relative;
            left:50%;
            transform:translateX(-50%);
            top:0;
        }

        .tabImageBg{
            height:${props => props.imgHeight+"px"};
            width:65%;
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

    // useEffect(() => {
    //     setImgHeight(imgHeight !== 0 && imgRef.current.clientHeight)
    //     window.addEventListener('resize', () => {
    //         setImgHeight(imgRef.current.clientHeight)
    //     })

    //     console.log(tabHead + " " + imgHeight)
    //     console.log(imgRef.current.alt)
    // }, [imgHeight])

    return (
        <div>
            <TabImageCont imgHeight={imgHeight}>
                <img src={tabImage} alt="Illustraion Hero" ref={ref}/>
                <div className="tabImageBg"></div>
            </TabImageCont>
            <TabPhraseCont>
                <h1>{tabHead}</h1>
                <p>{tabDesc}</p>
            </TabPhraseCont>
        </div>
    )
})


export default Tab