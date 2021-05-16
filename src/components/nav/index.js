import React from 'react';
import styled from 'styled-components'

const NavWrapper = styled.div`
    display: grid;
    grid-template-columns: 9fr .5fr .5fr;
`;

const ButtonWrapper = styled.button`
    border: none;
    background-color: white; 
    width: 64px;
    height: 64px;
`;

export const Nav = () => {

    return(
        <NavWrapper>
            <h2>Logo Goes Here</h2>
            <ButtonWrapper>
                <img src={'shopping-cart.png'} />
            </ButtonWrapper>
            <ButtonWrapper>
                <img src={'menu-hamburger.png'} />
            </ButtonWrapper>
        </NavWrapper>
    )
}

export default Nav;