import React,{useState, useEffect} from 'react'
import {Container,Label,Input,ButtonStyles,LabelUpload} from './styles'
import api from '../../../services/api'
import Select from 'react-select'
import * as Yup from 'yup'
import { useForm,handleSubmit,Controller } from "react-hook-form"
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import {yupResolver} from '@hookform/resolvers/yup'
import {ErrorMessage} from '../../../components/ErrorMensage'

export function NewProduct(){
    const [fileName, setFileName] = useState(null)
    const [categories, setCategories] = useState([])

                const schema = Yup.object().shape({
                name: Yup.string().required('Digite o nome do produto'),
                price: Yup.string().required('Digite o preço do produto'),
                category: Yup.object().required('Escolha uma categoria'),
                file: Yup.mixed().test('required', 'Carregue um arquivo', value =>{
                    return value && value.length > 0
                }).test('fileSize', 'Carregue arquivos de até 2MG', value=>{
                    return value && value[0].size <= 200000
                }).test('type', 'Carregue apenas arquivos JPEG', value =>{
                    return value && value[0].type === 'image/jpeg'
                })

            })

    const {
        register,
        handleSubmit,
        watch,
        control,
        formState: { errors },
    } = useForm({resolver: yupResolver(schema)})

    const onSubmit = (data) => console.log(data)

          useEffect(() => {
              async function loadCategories() {
                  const { data } = await api.get('categories')
                  setCategories(data)
              }
            loadCategories()
            }, [])


    return(
        <Container>
            <form noValidate onSubmit={handleSubmit(onSubmit)}>
            <Label>Nome</Label>
            <Input type='text' {...register("name")}/>
            <ErrorMessage>{errors.name?.message}</ErrorMessage>
             <Label>Preço</Label>
             <Input type='number'   {...register("price")}/>
             <ErrorMessage>{errors.price?.message}</ErrorMessage>
            <LabelUpload>
                {fileName ||( <>
                <CloudUploadIcon />   Carregue a imagem do produto</>)}
            <input type='file' accept='image/png, image/jpeg'  {...register("file")} onChange={value => {setFileName(value.target.files[0]?.name)}} />
            </LabelUpload>
             <ErrorMessage>{errors.file?.message}</ErrorMessage>

            <Controller name='category' control={control} render={({field}) => {
                return(
                    <Select {...field} options={categories} getOptionLabel={cat => cat.name} getOptionValue={cat => cat.id} placeholder="Categorias" />
                )
            }} >
            </Controller>
             <ErrorMessage>{errors.category?.message}</ErrorMessage>
            
            <ButtonStyles>Adicionar produto</ButtonStyles>
            </form>
        </Container>
    )
}

export default NewProduct
