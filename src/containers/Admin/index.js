import React from 'react'
import Orders from './Orders'
import {Container} from './styles'
import { SiteMenuAdmin } from '../../components/SiteMenuAdmin'
import ListProducts from './ListProducts'

export function Admin(){
    return (
        <Container>
         <SiteMenuAdmin/>
        {/* <Orders/> */}
        <ListProducts/>
        </Container>
    )
}