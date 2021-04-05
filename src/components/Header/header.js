import React from 'react';
import styled from 'styled-components';

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
`;

const HeaderRight = styled.div``;

const Logo = styled.div`
`;

const NavMenu = () => {
    return (
        <MainHeaderContainer>
            <MainHeaderInnerContainer>
                <HeaderLeft>
                    <Logo></Logo>
                    favorite,github
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