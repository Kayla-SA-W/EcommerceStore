import React from 'react';
import styled from 'styled-components';

const GridWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
    row-gap: 50px;
    column-gap: 30px;
    margin: 0 150px;
`;

const ButtonWrapper = styled.button`
    border: none;
    background-color: white; 
    height: inherit;
    width: inherit;
`;

const Image = styled.img`
    height: 150px;
    width: 150px;
`

const ProductLabel = styled.div`
    display: 'flex';
    justify-content: 'center';
`

export const ProductGrid = () => {
    return (
        <GridWrapper>
            <ButtonWrapper>
                <Image src={'camera.jpeg'} />
                <ProductLabel>Camera</ProductLabel>
            </ButtonWrapper>
            <ButtonWrapper>
                <Image src={'cream.jpeg'} />
                <ProductLabel>Face Cream</ProductLabel>
            </ButtonWrapper>
            <ButtonWrapper>
                <Image src={'googlehome.jpeg'} />
                <ProductLabel>Google Home</ProductLabel>
            </ButtonWrapper>
            <ButtonWrapper>
                <Image src={'lens.jpeg'} />
                <ProductLabel>Camera Lens'</ProductLabel>
            </ButtonWrapper>

            <ButtonWrapper>
                <Image src={'lipgloss.jpeg'} />
                <ProductLabel>Lip Gloss</ProductLabel>
            </ButtonWrapper>
            <ButtonWrapper>
                <Image src={'oil.jpeg'} />
                <ProductLabel>Face Oil</ProductLabel>
            </ButtonWrapper>
            <ButtonWrapper>
                <Image src={'perfume.jpeg'} />
                <ProductLabel>Perfume</ProductLabel>
            </ButtonWrapper>
            <ButtonWrapper></ButtonWrapper>

            <ButtonWrapper></ButtonWrapper>
            <ButtonWrapper></ButtonWrapper>
            <ButtonWrapper></ButtonWrapper>
            <ButtonWrapper></ButtonWrapper>

            <ButtonWrapper></ButtonWrapper>
            <ButtonWrapper></ButtonWrapper>
            <ButtonWrapper></ButtonWrapper>
            <ButtonWrapper></ButtonWrapper>

            <ButtonWrapper></ButtonWrapper>
            <ButtonWrapper></ButtonWrapper>
            <ButtonWrapper></ButtonWrapper>
            <ButtonWrapper></ButtonWrapper>
        </GridWrapper>
    )
}

export default ProductGrid