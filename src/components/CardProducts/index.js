import React from 'react'
import PropTypes from 'prop-types'
import { useCart } from '../../hooks/CartContext'
import { Button } from '../Button'
import {
    Container,
    Image,
    ProductName,
    ProductPrice
} from './styles'
import { useNavigate } from 'react-router-dom'

export function CardProducts({ product }) {
    const { putProductsInCart } = useCart()
    const navigate = useNavigate()

    return (
        <Container>
            <Image src={product.url} alt="imagem do produto" />

            <div>
                <ProductName>{product.name}</ProductName>
                <ProductPrice>{product.formatedPrice}</ProductPrice>

                <Button
                    onClick={() => {
                        putProductsInCart(product)
                        navigate('/carrinho')
                    }}
                >
                    Adicionar
                </Button>
            </div>
        </Container>
    )
}

CardProducts.propTypes = {
    product: PropTypes.object
}
