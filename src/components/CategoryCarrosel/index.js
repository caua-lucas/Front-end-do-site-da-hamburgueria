import React,{useEffect, useState} from 'react'
import Category from '../../assets/categories.png'
import {Container,CategoryImg,Categories,Button,ContainerItemss} from './styles'
import api from '../../services/api'
import Carousel from 'react-elastic-carousel';
import { ContainerItems } from '../../containers/Login/styles';

function CategoryCarrosel(){
    const [categories, setCategories] = useState([])
    useEffect(()=>{
        async function loadCategories(){
            const {data} = await api.get('categories')
            setCategories(data)
        }
         loadCategories()
    },[])

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 500, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1024, itemsToShow: 4 }
];


    return(
        <Container>
            <CategoryImg src={Category} alt="carrosel"/>
            <Categories>
            <Carousel itemsToShow={4} style={{width:'90%',marginLeft: '+70px' }} breakPoints={breakPoints}>{
                 categories.map(category =>(
                    <ContainerItemss  key={category.id}>
                        <img src={category.url} alt="foto da categoria" />
                        <Button>{category.name}</Button>
                    </ContainerItemss>
                ))}
            </Carousel>
            </Categories>
        </Container>
    )
}

export default CategoryCarrosel