import React,{useEffect, useState} from 'react'
import Offerss from '../../assets/offer.png'
import {Container,Offers,OffersImg,Button,ContainerItemss} from './styles'
import api from '../../services/api'
import Carousel from 'react-elastic-carousel';
import { ContainerItems } from '../../containers/Login/styles';
import formatCurrency from '../../utils/formatCurrency';

function OffersCarrosel(){
    const [offers, setOffers] = useState([])
    useEffect(()=>{
        async function loadOffers(){
            const {data} = await api.get('products')
            const onlyOffers = data.filter(product => product.offer)
            setOffers(onlyOffers)
        }
         loadOffers()
    },[])

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 500, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1024, itemsToShow: 4 }
];


    return(
        <Container>
            <OffersImg src={Offerss} alt="logo da oferta"/>
            <Offers>
            <Carousel itemsToShow={4} style={{width:'90%',marginLeft: '+70px' }} breakPoints={breakPoints}>{
                 offers.map(product =>(
                    <ContainerItemss  key={product.id}>
                        <img src={product.url} alt="foto do produto" />
                        <p>{product.name}</p>
                        <p>{formatCurrency(product.price)}</p>
                        <Button>Peça Agora</Button>
                    </ContainerItemss>
                ))}
            </Carousel>
            </Offers>
        </Container>
    )
}

export default OffersCarrosel