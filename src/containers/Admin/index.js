import React from 'react'
import Orders from './Orders'
import {Container,ItemContainer} from './styles'
import { SiteMenuAdmin } from '../../components/SiteMenuAdmin'

export function Admin(){
    return (
        <Container>
            <ItemContainer />
         <SiteMenuAdmin/>
        <Orders/>
        </Container>
    )
}