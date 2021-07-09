import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { currentProductSelector } from '../redux/selectors';

const Image = styled.img`
    height: 150px;
    width: 150px;
`;

const ProductName = styled.div`
    font-family: Helvetica Neue,Helvetica,Arial,sans-serif;
    font-size: 24px
`

const Description = styled.div`
font-family: Helvetica Neue,Helvetica,Arial,sans-serif;
    font-size: 15px 
`

const ColorBubblesWrapper = styled.div`
    display: grid;
    grid-template-columns: 25px 25px 25px 25px 25px 25px 25px 25px;
    border-radius: 6px;
    column-gap: 4px;
`

const ColorBubble = styled.div`
    height: 25px;
    border-radius: 50%;
    background-color: ${props => props.color};
`

export const DefenseBundle = () => {
    const [selectedColor, setSelectedColor] = useState('White');
    const currentProduct = useSelector(currentProductSelector);
    return(
        <>
            <Image src={`${currentProduct}`} alt={currentProduct} />
            <div>
                <ProductName>Face Cream - {selectedColor}</ProductName>
                <Description> Face Cream </Description>
                <ColorBubblesWrapper>
                    <ColorBubble color={'Blue'} onClick={() => () => setSelectedColor('Blue')}/>
                    <ColorBubble color={'Black'} onClick={() => setSelectedColor('Black')}/>
                    <ColorBubble color={'Red'} onClick={() => setSelectedColor('Red')}/>
                    <ColorBubble color={'Yellow'} onClick={() => setSelectedColor('Yellow')}/>
                    <ColorBubble color={'Pink'} onClick={() => setSelectedColor('Pink')}/>
                    <ColorBubble color={'Grey'} onClick={() => setSelectedColor('Grey')}/>
                    <ColorBubble color={'Green'} onClick={() => setSelectedColor('Green')}/>
                    <ColorBubble color={'Purple'} onClick={() => setSelectedColor('Purple')}/>
                </ColorBubblesWrapper>
            </div>
        </>
    )
}

export default DefenseBundle