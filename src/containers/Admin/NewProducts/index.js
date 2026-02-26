import React,{useState, useEffect} from 'react'
import {Container,Label,Input,ButtonStyles,LabelUpload} from './styles'
import api from '../../../services/api'
import Select from 'react-select'
import * as Yup from 'yup'
import { useForm,handleSubmit,Controller } from "react-hook-form"
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import {yupResolver} from '@hookform/resolvers/yup'
import {ErrorMessage} from '../../../components/ErrorMensage'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

export function NewProduct(){
    const [fileName, setFileName] = useState(null)
    const [categories, setCategories] = useState([])
    const navigate = useNavigate()

                const schema = Yup.object().shape({
                name: Yup.string().required('Digite o nome do produto'),
                price: Yup.string().required('Digite o preço do produto'),
                category: Yup.object().required('Escolha uma categoria'),
                file: Yup.mixed().test('required', 'Carregue um arquivo', value =>{
                    return value?.length > 0
                }).test('fileSize', 'Carregue arquivos de até 2MG', value=>{
                    return value[0]?.size <=  2000000
                }).test('type', 'Carregue apenas arquivos JPEG', value =>{
                    return value[0]?.type === 'image/jpeg'
                }),
                offer: Yup.boolean()
            })

    const {
        register,
        handleSubmit,
        watch,
        control,
        formState: { errors },
    } = useForm({resolver: yupResolver(schema),defaultValues: {

            offer: false

}})

    const onSubmit = async (data) => {
        const productDataFormData = new FormData()
        productDataFormData.append('name',data.name)
        productDataFormData.append('price',data.price)
        productDataFormData.append('category_id',data.category.id)
        productDataFormData.append('file',data.file[0])
        await toast.promise(api.post('/products',productDataFormData),{
            pending:"Criando novo produto...",
            success:"Produto criado com sucesso",
            error:"Falha ao criar o produto"
        })
        setTimeout(() => {
            navigate('/listar-produtos')
        },2000);
    }

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
            <div>
            <Label>Nome</Label>
            <Input type='text' {...register("name")}/>
            <ErrorMessage>{errors.name?.message}</ErrorMessage>
            </div>
            <div>
             <Label>Preço</Label>
             <Input type='number'   {...register("price")}/>
             <ErrorMessage>{errors.price?.message}</ErrorMessage>
             </div>
             <div>
            <LabelUpload>
                {fileName ||( <>
                <CloudUploadIcon />   Carregue a imagem do produto</>)}
            <input type='file' accept='image/png, image/jpeg'  {...register("file")} onChange={value => {setFileName(value.target.files[0]?.name)}} />
            </LabelUpload>
             <ErrorMessage>{errors.file?.message}</ErrorMessage>
             </div>
            <div>
            <Controller name='category' control={control} render={({field}) => {
                return(
                    <Select {...field} options={categories} getOptionLabel={cat => cat.name} getOptionValue={cat => cat.id} placeholder="Categorias" />
                )
            }} >
            </Controller>
             <ErrorMessage>{errors.category?.message}</ErrorMessage>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>

    <Label>Produto em oferta?</Label>

            <input
                type="checkbox"
                {...register("offer")}
            />

        </div>
            <ButtonStyles>Adicionar produto</ButtonStyles>
            </form>
        </Container>
    )
}

export default NewProduct
