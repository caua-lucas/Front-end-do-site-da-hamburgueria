import React,{useState, useEffect} from 'react'
import {Container} from './styles'
import api from '../../../services/api'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


export function ListProducts(){
    const [products, setproducts] = useState([])

          useEffect(() => {
              async function loadOrders() {
                  const { data } = await api.get('products')
                  setproducts(data)
              }
            loadOrders()
            }, [])

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
          {products.map((product) => (
            <TableRow key={product.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {product.name}
              </TableCell>
              <TableCell>{product.price}</TableCell>
              <TableCell>{product.offer}</TableCell>
              <TableCell><img src={product.url} alt="imagem produto" /></TableCell>
              <TableCell></TableCell>
              <TableCell><button>Editar</button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </Container>
    )
}

export default ListProducts
