import React, { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import {Link} from 'gatsby'
import { Product } from '../../context/types'

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

interface ProductGrid {
    setProduct: Dispatch<SetStateAction<Product>>;
}

export const ProductGrid = ({setProduct}: ProductGrid) => {

    const setCurrentProduct = (currentProduct: string) => {
            setProduct((prevState: Product) => ({
            ...prevState,
            currentProduct
        }))
    }
    
    return (
        <GridWrapper>
            <ButtonWrapper>
                <Image src={'camera.jpeg'} onClick={() => {
                    setCurrentProduct('camera');
                }}/>
                <ProductLabel>Camera</ProductLabel>
            </ButtonWrapper>
            <Link to='/current-product'>
                <Image src={'cream.jpeg'} onClick={() => {
                    setCurrentProduct('cream');
                }}/>
                <ProductLabel>Face Cream</ProductLabel>
            </Link>
            <ButtonWrapper>
                <Image src={'googlehome.jpeg'} onClick={() => {
                    setCurrentProduct('googlehome');
                }}/>
                <ProductLabel>Google Home</ProductLabel>
            </ButtonWrapper>
            <ButtonWrapper>
                <Image src={'lens.jpeg'} onClick={() => {
                    setCurrentProduct('lens');
                }}/>
                <ProductLabel>Camera Lens'</ProductLabel>
            </ButtonWrapper>

            <ButtonWrapper>
                <Image src={'lipgloss.jpeg'} onClick={() => {
                    setCurrentProduct('lipgloss');
                }}/>
                <ProductLabel>Lip Gloss</ProductLabel>
            </ButtonWrapper>
            <ButtonWrapper>
                <Image src={'oil.jpeg'} onClick={() => {
                   setCurrentProduct('oil');
                }}/>
                <ProductLabel>Face Oil</ProductLabel>
            </ButtonWrapper>
            <ButtonWrapper>
                <Image src={'perfume.jpeg'} onClick={() => {
                    setCurrentProduct('perfume');
                }}/>
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

ProductGrid.displayName = 'ProductGrid';