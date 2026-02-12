import React from 'react'
import PropTypes from 'prop-types'
import { useCart as useCard } from '../../hooks/CartContext'
import {Button} from '../Button'
import {Container,Image,ProductName,ProductPrice,ProductsContainers} from './styles'


export function CardProducts({product}){
    const {putProductsInCart} = useCard()
    return (
        <Container>
            <Image src={product.url} alt='imagem do produto'/>
            <div>
            <ProductName>{product.name}</ProductName>
            <ProductPrice>{product.formatedPrice}</ProductPrice>
            <Button onClick={ () => putProductsInCart(product)} >Adicionar</Button>
            </div>
        </Container>

    )
}



CardProducts.propTypes ={
    product:PropTypes.object
}