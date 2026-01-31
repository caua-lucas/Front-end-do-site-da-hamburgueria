import React,{useEffect} from 'react'
import Category from '../../assets/categories.png'
import {Container,CategoryImg} from './styles'
import api from '../../services/api'

function CategoryCarrosel(){
    useEffect(()=>{
        async function loadCategories(){
            const response = await api.get('categories')
            console.log(reponse)
        }
    },[])

    return(
        <Container>
            <CategoryImg src={Category} alt="carrosel"/>
        </Container>
    )
}

export default CategoryCarrosel