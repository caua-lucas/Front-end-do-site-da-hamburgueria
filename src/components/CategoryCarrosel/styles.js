import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const Categories = styled.div`
    img {
    margin-top: 80px;
    width: 250px;
    height: 250px;
    object-fit: cover;
    border-radius: 10px;
    display: block;
  }

`
export const Container = styled.div`
  background: #EEEEEE;
.rec.rec-arrow{
  background-color:#9758a6 ;
  color:#FFFFFF;
  filter:drop-shadow(0px 4px 4px rgba(0,0,0,0.25));
  border:none;

}
.rec.rec-arrow:hover{
  border:2px solid #9758a6;
  background-color: #efefef;
  color:#9758a6;

}
.rec.rec-arrow:disabled{
  border:none;
  background-color: #bebebf;
  color:#efefef;
}
`
export const ContainerItemss = styled.div`
    display:flex;
    flex-direction: column;
`
export const Button = styled(Link)`
    margin-top: 16px;
    background: #9758a6;
    border-radius: 8px;
    height: 50px;
    border:none;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 100%;
    text-align: center;
    color:#FFFFFF;
    cursor:pointer;

    &:hover{
      opacity: 0.7;
    }

    &:active{
      opacity: 0.6;
    }

    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const CategoryImg = styled.img`
    display: block;
    margin: 0 auto;
`

