import React from 'react'
import { Container, ContainerItems } from './styles'
import { SiteMenuAdmin } from '../../components/SiteMenuAdmin'
import Orders from './Orders'
import ListProducts from './ListProducts'
import { useLocation } from 'react-router-dom'
import paths from '../../constants/paths'
import NewProduct from './NewProducts'

export function Admin() {
    const location = useLocation()
    return (
        <Container>
            <SiteMenuAdmin location={location} />
            <ContainerItems>
                {location.pathname === paths.Order && (<Orders />)}
                {location.pathname === paths.Products && (<ListProducts />)}
                {location.pathname === paths.NewProduct && (<NewProduct />)}
                </ContainerItems></Container>
    )
}

export default Admin