import styled from 'styled-components'
import MuiEditIcon from '@mui/icons-material/Edit'; // renomeie

export const Container = styled.div``

export const Img = styled.img`
   width: 70px;
   height: 70px;
   border-radius: 5px;
   object-fit: cover;
   display: block;
   margin: auto;
`

export const Edit = styled(MuiEditIcon)`
   cursor: pointer;
   color: #323d5d;;
`