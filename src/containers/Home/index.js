import React from 'react'
import HomeLogo from '../../assets/logo-home.svg'
import {Container,HomeImg} from './styles'
import {CategoryCarrosel, OffersCarrosel,Header} from '../../components'


export function Home(){
    return(
        <Container>
            <HomeImg src={HomeLogo} alt="logoda home"/>
            <CategoryCarrosel />
            <OffersCarrosel />
        </Container>
    )
}

