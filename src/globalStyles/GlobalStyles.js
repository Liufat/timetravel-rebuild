import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

:root{
    // color
    --color-primary:#59d8a1;
    --color-secondary:#63d2ff;
    --color-success:#59d8a1;
    --color-danger:#ea8a8a;
    --color-black:#4d4d4d ;
    --color-white:#fff;
    --color-grey:#d9d9d9;
    --color-dark-grey:#8a8a8a;

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
    margin:0;
    @media screen and (min-width: 1200px){
      font-size: var(--font-size-xl-h1);
    }
}
h2 {
    font-weight: 400 ;
    font-size:var(--font-size-h2);
    line-height: 2.5rem ;
    margin: 0;
    @media screen and (min-width: 1200px){
      font-size: var(--font-size-xl-h2) ;
    }
  }

p {
  
    font-weight: 300 ;
    font-size: var(--font-size-h2);
    line-height: 1.8rem ;
    margin:0;
    @media screen and (min-width: 1200px){
      font-size: var(--font-size-xl-p) ;
    }
  }

a {
    text-decoration: none;
    font-weight: 400 ;
    font-size: var(--font-size-h2);
    line-height: 1.8rem ;
    margin:0;
    @media screen and (min-width: 1200px){
      font-size:  var(--font-size-xl-p) ;
    }
    color: var(--color-black);

    &.active{
      color:var(--color-primary);
    }
    &:hover{
      color:var(--color-primary);
    }
  }

  span{
    font-weight: 300 ;
    font-size: var(--font-size-h2);
    line-height: 1.8rem ;
    @media screen and (min-width: 1200px){
      font-size: var(--font-size-xl-p) ;
    }
  }
  .box-shadow{
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
  .text-color-danger{
    color:var(--color-danger)
  }
  .text-color-grey{
    color:var(--color-grey)
  }

  .text-color-dark-grey{
    color:var(--color-dark-grey)
  }
  .pointer{
    cursor: pointer;
  }

  button{
    border: none;
    color: var(--color-white);
    &.btn-primary{
     background-color: var(--color-primary);
     &:hover,&:active,&:focus{
      background-color: var(--color-primary);
    }
    &.active{
      background-color: var(--color-secondary);
    }
    }
    &.btn-secondary{
     background-color: var(--color-secondary);
    }
    &.btn-transparent{
     background-color: transparent;
     border: 1px solid var(--color-white);
    }
    &.btn-transparent-primary{
     background-color: transparent;
     border: 1px solid var(--color-primary);
     color:var(--color-primary)
    }
    
  }

  .btn{
    border: none;
    color: var(--color-white);
    &.btn-primary{
     background-color: var(--color-primary);
     &:hover,&:active,&:focus{
      background-color: var(--color-primary);
    }
    &.active{
      background-color: var(--color-secondary);
    }
    }
    &.btn-secondary{
     background-color: var(--color-secondary);
    }
    &.btn-transparent{
     background-color: transparent;
     border: 1px solid var(--color-white);
    }
    &.btn-transparent-primary{
     background-color: transparent;
     border: 1px solid var(--color-primary);
     color:var(--color-primary)
    }
  }
  
  svg{
    &.fill-primary{
      fill:var(--color-primary)
    }
  }
  .slick-slider {
    margin:0 -15px;
  
  }
  .slick-slide {
    padding:10px;
    text-align:center;

   
  }

  .slick-arrow{
  color:var(--color-black);
  height:100%;
  display:flex;
  align-items:center;
  }
  .slick-next {
    &::before {
      display: none;
      text-align:center;
    }
    &:hover{
      color:var(--color-black)
    }
  }

.slick-prev {
    &::before {
     display: none;
    }
    &:hover{
      color:var(--color-black)
    }
  }

  .text-bold {
    font-weight:500;
  }

  .input-text {
  transition: all 0.2s;
  border: 1px solid var(--color-grey);
  color: var(--color-black);
  &::placeholder {
    color: var(--color-grey);
    font-size: var(--font-size-h2);
    @media screen and (min-width: 1200px) {
      font-size: var(--font-size-h1);
    }
  }
  &:focus {
    outline: none;
    border: 1px solid var(--color-primary);
  }
  }

`;

export default GlobalStyles;
