import { createContext, useContext, useEffect, useState } from 'react'
import PropTypes from "prop-types"

const CartContext = createContext({})

const CartProvider = ({ children }) => {
    const [cartProducts, setCartProducts] = useState([])
    const updateStorage = async (products) => {
        localStorage.setItem(
            'codeburger:cartInfo',
            JSON.stringify(products)
        )
    }


    const putProductsInCart = async (product) => {
        const cartIndex = cartProducts.findIndex(prd => prd.id === product.id)

        let newCartProducts = []

        if (cartIndex >= 0) {
            newCartProducts = cartProducts.map(prd =>
                prd.id === product.id
                    ? { ...prd, quantity: prd.quantity + 1 }
                    : prd
            )
        } else {
            newCartProducts = [...cartProducts, { ...product, quantity: 1 }]
        }

        setCartProducts(newCartProducts)
        await updateStorage(newCartProducts)
    }

    const deleteProducts = async productId => {
        const newCart = cartProducts.filter(product => product.id !== productId)
        setCartProducts(newCart)

    }

    const increaseProducts = async (productId) => {
        const newCart = cartProducts.map(product =>
            product.id === productId
                ? { ...product, quantity: product.quantity + 1 }
                : product
        )

        setCartProducts(newCart)
       await updateStorage(newCart)
    }

    const decreaseProducts = async (productId) => {
        const cartIndex = cartProducts.findIndex(pd => pd.id === productId)
        if (cartProducts[cartIndex].quantity > 1) {
            const newCart = cartProducts.map(product =>
                product.id === productId
                    ? { ...product, quantity: product.quantity - 1 }
                    : product
            )

            setCartProducts(newCart)
          await updateStorage(newCart)
        } else{
            deleteProducts(productId)
        }
    }

    useEffect(() => {
        const cartData = localStorage.getItem('codeburger:cartInfo')

        if (cartData) {
            setCartProducts(JSON.parse(cartData))
        }
    }, [])

    return (
        <CartContext.Provider
            value={{
                putProductsInCart,
                cartProducts,
                increaseProducts,
                decreaseProducts
            }}
        >
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => {
    const context = useContext(CartContext)

    if (!context) {
        throw new Error("useCart must be used within CartProvider")
    }

    return context
}

CartProvider.propTypes = {
    children: PropTypes.node.isRequired
}

export default CartProvider
