import React from 'react';
import { useDispatch } from 'react-redux'
import { updateProductActionCreator } from '../../redux/actions';
import styled from 'styled-components';

const GridWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
    row-gap: 50px;
    column-gap: 30px;
    margin: 0 150px;
`;

const ButtonWrapper = styled.a`
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
    const dispatch = useDispatch();
    const onClick = () => dispatch(updateProductActionCreator('cream.jpeg'));
    return (
        <GridWrapper>
            <ButtonWrapper>
                <Image src={'camera.jpeg'} onClick={() => {
                    console.log('image clicked')
                    onClick()
                }}/>
                <ProductLabel>Camera</ProductLabel>
            </ButtonWrapper>
            <ButtonWrapper
                href='/current-product'
            >
                <Image src={'cream.jpeg'} onClick={() => {
                    console.log('image clicked')
                    onClick()
                }}/>
                <ProductLabel>Face Cream</ProductLabel>
            </ButtonWrapper>
            <ButtonWrapper>
                <Image src={'googlehome.jpeg'} onClick={onClick}/>
                <ProductLabel>Google Home</ProductLabel>
            </ButtonWrapper>
            <ButtonWrapper>
                <Image src={'lens.jpeg'} onClick={onClick}/>
                <ProductLabel>Camera Lens'</ProductLabel>
            </ButtonWrapper>

            <ButtonWrapper>
                <Image src={'lipgloss.jpeg'} onClick={onClick}/>
                <ProductLabel>Lip Gloss</ProductLabel>
            </ButtonWrapper>
            <ButtonWrapper>
                <Image src={'oil.jpeg'} onClick={onClick}/>
                <ProductLabel>Face Oil</ProductLabel>
            </ButtonWrapper>
            <ButtonWrapper>
                <Image src={'perfume.jpeg'} onClick={onClick}/>
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