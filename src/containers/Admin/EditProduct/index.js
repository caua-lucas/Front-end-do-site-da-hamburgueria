import React, { useState, useEffect } from 'react'
import { Container, Label, Input, ButtonStyles, LabelUpload } from './styles'
import api from '../../../services/api'
import Select from 'react-select'
import * as Yup from 'yup'
import { useForm, Controller } from "react-hook-form"
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import { yupResolver } from '@hookform/resolvers/yup'
import { ErrorMessage } from '../../../components/ErrorMensage'
import { toast } from 'react-toastify'
import { useNavigate, useLocation } from 'react-router-dom'

export function EditProduct() {
  const [fileName, setFileName] = useState(null)
  const [categories, setCategories] = useState([])
  const navigate = useNavigate()
  const { state } = useLocation()
  
  // Pegamos o produto do state da navegação
  const product = state?.product

  const schema = Yup.object().shape({
    name: Yup.string().required('Digite o nome do produto'),
    price: Yup.string().required('Digite o preço do produto'),
    category: Yup.object().required('Escolha uma categoria'),
    offer: Yup.boolean()
  })

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset
  } = useForm({
    resolver: yupResolver(schema),
    // 1. ADICIONADO DEFAULTVALUES AQUI (Valores iniciais ao carregar)
    defaultValues: {
      name: product?.name || '',
      price: product?.price || '',
      category: product?.category || null,
      offer: product?.offer || false
    }
  })

  // 2. Opcional: resetar caso o produto mude (boa prática para edição)
  useEffect(() => {
    if (product) {
      reset({
        name: product.name,
        price: product.price,
        category: product.category,
        offer: product.offer
      })
    }
  }, [product, reset])

  useEffect(() => {
    async function loadCategories() {
      try {
        const { data } = await api.get('categories')
        setCategories(data)
      } catch (err) {
        console.error(err)
      }
    }
    loadCategories()
  }, [])

  const onSubmit = async (data) => {
    const productDataFormData = new FormData()
    productDataFormData.append('name', data.name)
    productDataFormData.append('price', data.price)
    productDataFormData.append('category_id', data.category.id)
    productDataFormData.append('offer', data.offer)

    if (data.file && data.file[0]) {
      productDataFormData.append('file', data.file[0])
    }

    await toast.promise(api.put(`products/${product.id}`, productDataFormData), {
      pending: "Editando produto...",
      success: "Produto editado com sucesso!",
      error: "Falha ao editar o produto"
    })

    setTimeout(() => {
      navigate('/listar-produtos')
    }, 2000)
  }

  return (
    <Container>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Label>Nome</Label>
          <Input type='text' {...register("name")} />
          <ErrorMessage>{errors.name?.message}</ErrorMessage>
        </div>

        <div>
          <Label>Preço</Label>
          <Input type='number' {...register("price")} />
          <ErrorMessage>{errors.price?.message}</ErrorMessage>
        </div>

        <div>
          <LabelUpload>
            {fileName || (<><CloudUploadIcon /> Carregue a imagem do produto</>)}
            <input
              type='file'
              accept='image/png, image/jpeg'
              {...register("file")}
              onChange={e => setFileName(e.target.files[0]?.name)}
            />
          </LabelUpload>
          <ErrorMessage>{errors.file?.message}</ErrorMessage>
        </div>

        <div>
          <Label>Categoria</Label> {/* Adicionado label para clareza */}
          <Controller
            name='category'
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                options={categories}
                getOptionLabel={cat => cat.name}
                getOptionValue={cat => cat.id}
                placeholder="Categorias"
                // O defaultValue do Select é controlado pelo field.value do Controller
              />
            )}
          />
          <ErrorMessage>{errors.category?.message}</ErrorMessage>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '10px' }}>
          <input 
            type="checkbox" 
            {...register("offer")} 
            id="offer-checkbox" 
            defaultChecked={product?.offer} // Garante que o checkbox inicie correto
          />
          <Label htmlFor="offer-checkbox">Produto em oferta?</Label>
        </div>

        <ButtonStyles type="submit">Editar produto</ButtonStyles>
      </form>
    </Container>
  )
}

export default EditProduct