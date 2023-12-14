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

    //border
    --border-redius:3px

    //font-size
    --font-size-h1:1.3rem;
    --font-size-xl-h1:2rem;

    --font-size-h2:0.8rem;
    --font-size-xl-h2:1.5rem;

    --font-size-xl-p:1.1rem;


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
    font-size: var(--font-size-h1);
    line-height: 3rem;
    @media screen and (min-width: 1200px){
      font-size: var(--font-size-xl-h1);
    }
}
h2 {
    font-weight: 400 ;
    font-size:var(--font-size-h2);
    line-height: 2.5rem ;
    @media screen and (min-width: 1200px){
      font-size: var(--font-size-xl-h2) ;
    }
  }

p {
  
    font-weight: 300 ;
    font-size: var(--font-size-h2);
    line-height: 1.8rem ;
    @media screen and (min-width: 1200px){
      font-size: var(--font-size-xl-p) ;
    }
  }

a {
    text-decoration: none;
    font-weight: 400 ;
    font-size: var(--font-size-h2);
    line-height: 1.8rem ;
    @media screen and (min-width: 1200px){
      font-size:  var(--font-size-xl-p) ;
    }
    color: var(--color-black);
  }

  span{
    font-weight: 300 ;
    font-size: var(--font-size-h2);
    line-height: 1.8rem ;
    @media screen and (min-width: 1200px){
      font-size: var(--font-size-xl-p) ;
    }
  }
  .boxShadow{
    box-shadow: 0px 3px 10px 3px rgba(0, 0, 0, 0.2);
  }

  .text-color-white{
    color:var(--color-white);
  }

  .text-color-black{
    color:var(--color-black);
  }
  .text-color-primary{
    color:var(--color-primary);
  }

`;

export default GlobalStyles;
