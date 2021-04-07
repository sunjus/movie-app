import React from 'react';
import { SEARCH_URL, Popular } from "../Views/Config";
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
    max-width: 1280px;
    width: 100%;
    height: 100%;
    justify-content: space-between;
    align-items: center;
    text-transform: uppercase;
    font-size: 21px;    
    vertical-align: middle;
`;

const Logo = styled.h2`   
    color: pink;
    font-weight: 900;
    margin-right: 20px;

    @media (max-width: 1020px) {
        font-size: 20px;
    }
    @media (max-width: 860px) {
        font-size: 18px;
    }
`;

const Link = styled.a`
    font-size: 22px;
    padding: 13px;
    border-radius: 10px;
    text-align: center;   
    text-decoration: none;
    background-color: ${props => props.dark ? 'grey' : 'white' };
    color: ${props => props.dark ? 'white' : 'black'};
    :after {
        font-size: 23px;
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

    @media (max-width: 1020px) {
        font-size: 18px;
        padding: 10px;
    }
    @media (max-width: 860px) {
        font-size: 16px;
        padding: 8px;
    }
`;

const HeaderRight = styled.div`
    height: 45px;
    width: 600px;
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
                    <Logo>BDMovie</Logo>
                    <Link>latest</Link>
                    <Link dark>popular</Link>
                    <Link href="https://github.com/sunjus/movie_list_app/" target="_blank" >github</Link> 
                    <HeaderRight>
                        <input placeholder="search for movie" type="text"  />
                    </HeaderRight>                               
                                            
               
            </MainHeaderInnerContainer>           
        </MainHeaderContainer>
    )
}

export  default NavMenu;