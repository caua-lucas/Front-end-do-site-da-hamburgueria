import React,{useState, useEffect} from 'react'
import {Container,Img,Edit} from './styles'
import api from '../../../services/api'
import formatCurrency from '../../../utils/formatCurrency'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CancelIcon from '@mui/icons-material/Cancel';
import EditIcon from '@mui/icons-material/Edit';
import EditProduct from '../EditProduct';
import { useNavigate } from 'react-router-dom'
import paths from '../../../constants/paths'

export function ListProducts(){
    const [products, setproducts] = useState([])
    const navigate = useNavigate()
    

          useEffect(() => {
              async function loadOrders() {
                  const { data } = await api.get('products')
                  setproducts(data)
              }
            loadOrders()
            }, [])

    function isOffer(offerStatus){
      if(offerStatus){
       return <CheckBoxIcon style={{color:'#228B22'}}/>
      }
      return <CancelIcon style={{color:'#CC1717'}}/>
    }
    
    function editProduct(product){
      navigate(paths.EditProduct,{product})
    }

    return(
        <Container>
            <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Nome</TableCell>
            <TableCell>Preço</TableCell>
            <TableCell>Produto em oferta</TableCell>
            <TableCell>imagem</TableCell>
            <TableCell>Editar produto</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products && products.map((product) => (
            <TableRow key={product.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {product.name}
              </TableCell>
              <TableCell>{formatCurrency(product.price)}</TableCell>
              <TableCell align='center'>{isOffer(product.offer)}</TableCell>
              <TableCell align='center'><Img src={product.url} alt="imagem produto" /></TableCell>
              <TableCell></TableCell>
              <TableCell align="center"><Edit onClick={() => editProduct(product)}/></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </Container>
    )
}

export default ListProducts
