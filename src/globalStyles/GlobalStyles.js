import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

:root{
    // color
    --color-primary:#59d8a1;
    --color-secondary:#63d2ff;
    --color-success:#59d8a1;
    --color-dander:#ea8a8a;
    --color-black:#4d4d4d ;
    --color-white:#fff;
    --color-grey:#d9d9d9;

    



    
}
*,
*::before,
*::after{
    box-sizing:border-box;
    padding:0;
    margin:0;
   }

*::placeholder{
  font-family: 'Noto Sans TC', sans-serif ;
}

body{
    color: var(--color-black);
    font-family: 'Noto Sans TC', sans-serif ;
    letter-spacing: 1px;
}

h1 {
    font-weight: 500 ;
    font-size: 1.3rem;
    line-height: 3rem;
    @media screen and (min-width: 1200px){
      font-size: 2rem;
    }
}
h2 {
    font-weight: 400 ;
    font-size:0.8rem;
    line-height: 2.5rem ;
    @media screen and (min-width: 1200px){
      font-size: 1.5rem ;
    }
  }

p {
  
    font-weight: 300 ;
    font-size: 0.8rem;
    line-height: 1.8rem ;
    @media screen and (min-width: 1200px){
      font-size: 1.1rem ;
    }
  }

a {
    text-decoration: none;
    font-weight: 400 ;
    font-size: 0.8rem;
    line-height: 1.8rem ;
    @media screen and (min-width: 1200px){
      font-size: 1.1rem ;
    }
    color: var(--color-black);
  }

  span{
    font-weight: 300 ;
    font-size: 0.8rem;
    line-height: 1.8rem ;
    @media screen and (min-width: 1200px){
      font-size: 1.1rem ;
    }
  }
  .boxShadow{
    box-shadow: 0px 3px 10px 3px rgba(0, 0, 0, 0.2);
  }

  .text-color-white{
    color:var(--color-white);
  }
`;

export default GlobalStyles;
