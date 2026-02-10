import React from 'react'
import HomeLogo from '../../assets/logo-home.svg'
import {Container,HomeImg} from './styles'
import CategoryCarrosel from '../../components/CategoryCarrosel/index'
import OffersCarrosel from '../../components/OffersCarousel'

function Home(){
    return(
        <Container>
            <HomeImg src={HomeLogo} alt="logoda home"/>
            <CategoryCarrosel />
            <OffersCarrosel />
        </Container>
    )
}

export default Home