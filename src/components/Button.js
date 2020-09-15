import styled from 'styled-components';


export const ButtonContainer=styled.button`
 text-transform:capitalize;
 background: transparent;
 border-radius: 3px;
 border: 2px solid palevioletred;
 border-color:${props=>props.cart? "var(--mainBlue)":"var(--mainYellow)"};
 color: ${prop=>prop.cart? "var(--mainYellow)":"var(--mainBlue)"};
 margin: 0 1em;
 padding: 0.25em 1em;
 cursor:pointer;
 transition:all 0.5 ease-in-out;
 &:hover{
     background:${props=>props.cart? "var(--mainBlue)":"var(--mainYellow)"};
     border:2px solid var(--mainYellow);
     color:var(--mainWhite)
 } 

`