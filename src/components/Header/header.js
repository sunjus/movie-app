import React from 'react';
import styled, { css } from 'styled-components';

const MainHeaderContainer = styled.div`
    height: 100px;
    min-height: calc(8vh - 8px);
    display: flex;   
    justify-content: center;
    align-items: center;
`;

const MainHeaderInnerContainer = styled.div`
    display: flex;
    felx-direction: row;
    max-width: 1280px;
    width: 100%;
    height: 100%;
    justify-content: space-between;
    align-items: center;
`;

const HeaderLeft = styled.div`
    font-size: 24px;  
    font-weight: 400;
    display: flex;
    text-transform: uppercase;
    
`;

const Button = styled.a`
    border: 1px solid black;
    padding: 8px 16px;
    margin-right: 10px;
    border-radius: 30px;
    text-align: center;
    text-decoration: none;
    background-color: ${props => props.dark ? 'grey' : 'white' };
    color: ${props => props.dark ? 'white' : 'black'};
    :after {
        font-size: 25px;
    }
    :hover {
        ${props => props.dark ? css`
          background-color: white;
          color: grey;
        ` : css`
          background-color: grey;
        `}
    }
    cursor: pointer;
`;

const HeaderRight = styled.div`
    height: 48px;
    width: 700px;
    text-decoration: none;
    display: flex;
    margin: 0;
    padding: 0;
    
    > input {
        height: 43px;
        width: 100%;
        padding: 0 24px;
        border: none;
        border-radius: 30px; 
        font-size: 21px;
        outline: none;
        color: black;
        &::placeholder {
            color: grey;
        }
    }
    
   
    
`;




const NavMenu = () => {
    return (
        <MainHeaderContainer>
            <MainHeaderInnerContainer>
                <HeaderLeft>
                   <Button dark>popular</Button>
                   <Button href="https://github.com/sunjus/movie_list_app/" target="_blank" >github</Button> 
                </HeaderLeft>
                <HeaderRight>                                      
                    <input placeholder="search for movie" type="text"  />                         
                </HeaderRight>
            </MainHeaderInnerContainer>           
        </MainHeaderContainer>
    )
}

export  default NavMenu;