import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        font-family:'Rubik', sans-serif;
        font-size:18px;
        box-sizing:border-box;
    }

    img{
        max-width:100%;
    }

    a{
        text-decoration:none;
    }
`

export default GlobalStyle