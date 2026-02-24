import React,{useState, useEffect} from 'react'
import {Container,Label,Input,ButtonStyles,LabelUpload} from './styles'
import api from '../../../services/api'
import Select from 'react-select'
import { useForm, SubmitHandler } from "react-hook-form"
import CloudUploadIcon from '@mui/icons-material/CloudUpload';


export function NewProduct(){
    const [fileName, setFileName] = useState(null)
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => console.log(data)

          useEffect(() => {
              async function loadOrders() {
                  const { data } = await api.get('products')
              }
            loadOrders()
            }, [])


    return(
        <Container>
            <form noValidate >
            <Label>Nome</Label>
            <Input type='text' {...register("name")}/>
             <Label>Preço</Label>
             <Input type='number'   {...register("price")}/>
            <LabelUpload>
                {fileName ||( <>
                <CloudUploadIcon />   Carregue a imagem do produto</>)}
            <input type='file' accept='image/png, image/jpeg'  {...register("file")} onChange={value => {setFileName(value.target.files[0]?.name)}} />
            </LabelUpload>
            <Select />
            <ButtonStyles>Adicionar produto</ButtonStyles>
            </form>
        </Container>
    )
}

export default NewProduct
