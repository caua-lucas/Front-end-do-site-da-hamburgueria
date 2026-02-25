import styled from 'styled-components'
import MuiEditIcon from '@mui/icons-material/Edit'; // renomeie
import {Button} from '../../../components/Button'

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;

    form{
        background: #565656;
        border-radius: 10px;
        padding: 30px;

    }
`
export const Input= styled.input`
    height: 40px;
    color:#FFFFFF;
    box-shadow: 0px 4px 14px rgba(0,0,0,0.1);
    border:none;
    border-radius: 8px;
    margin-bottom: 25px;
    width: 100%;
    min-width: 280px;
    color:#000000;
`
export const Label = styled.div`
    font-size: 14px;
    color:#FFFFFF;
    margin-bottom: 3px;
`

export const ButtonStyles = styled(Button)`
    width: 100%;
    margin-top: 10px;
    margin-left: 0px;


`

export const LabelUpload = styled.label`
    cursor:pointer;
    display: flex;
    align-items: center;
    border: 1px dashed #FFFFFF;
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 25px;
    gap:10px;

    input{
        opacity: 0;
        width: 1px;
    }
`

