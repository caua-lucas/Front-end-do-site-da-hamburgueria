import styled from 'styled-components'
import Select from 'react-select'

export const Container = styled.div`
    background: #efefef;
    min-height: 100vh;
    padding:20px;
`

export const ProductsImg = styled.img`
    width: 60px;
    border-radius: 5px;
`

export const ReactSelectStyle = styled(Select)`
    width: 250px;
    .css-1ex1afd-MuiTableCell-root{
        cursor:pointer;
    }

`