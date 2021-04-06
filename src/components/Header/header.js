import React from 'react';
import styled, { css } from 'styled-components';

const MainHeaderContainer = styled.div`
    height: 8rem;
    min-height: calc(8vh - 8px);
    display: flex;   
    justify-content: center;
    align-items: center;
`;

const MainHeaderInnerContainer = styled.div`
    display: flex;
    flex-direction: row;
    max-width: 1200px;
    width: 100%;
    height: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
`;

const HeaderLeft = styled.div`
    font-size: 1.6rem;  
    font-weight: 400;
    display: flex;    
`;

const Button = styled.div`
    border: 1px solid black;
    padding: 8px 16px;
    margin-right: 5px;
    border-radius: 30px;
    text-align: center;
    background-color: ${props => props.dark ? 'grey' : 'white' };
    color: ${props => props.dark ? 'white' : 'black'};
    :after {
        font-size: 1.8rem;
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
    font-size: 1.2rem;  
`;

const NavMenu = () => {
    return (
        <MainHeaderContainer>
            <MainHeaderInnerContainer>
                <HeaderLeft>
                   <Button dark>favorite</Button>
                   <Button>github</Button> 
                </HeaderLeft>
                <HeaderRight>
                    <form className="nav-search">
                        <input className="serach" type="text" placeholder="search..."></input>
                    </form>
                </HeaderRight>
            </MainHeaderInnerContainer>           
        </MainHeaderContainer>
    )
}

export  default NavMenu;