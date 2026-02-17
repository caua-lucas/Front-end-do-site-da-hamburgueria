import React from 'react'
import { Container,Logo,ContainerItems,Input,Label,SignInLink,Title,Error } from './styles';
import LoginImg from '../../assets/login-burger.svg'
import {Button} from '../../components'
import LogoImg from '../../assets/logo.svg'
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import api from '../../services/api'
import * as Yup from "yup"
import {useUser} from '../../hooks/UserContext'
import { toast, Bounce } from 'react-toastify'
import { ToastContainer } from 'react-toastify';
import {Link, useNavigate} from 'react-router-dom'


export function Login() {
    const navigate = useNavigate()
    const {putUserData, userData} = useUser()
        const schema = Yup.object().shape({
            email: Yup.string().email("Digite um email válido").required("O e-mail é obrigatório"),
            password: Yup.string().required("A senha é obrigatória").min(6,"A senha deve ter pelo menos 6 digitos"),
        })
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    })



const onSubmit = async (clientData) => {
  const {data} = await toast.promise(
    api.post('sessions', {
      email: clientData.email,
      password: clientData.password,
    }),
    {
      pending: 'Promise is pending',
      success: 'Seja bem vindo(a)!',
      error: 'Verifique seu e-mail e senha',
    }
  )

  putUserData(data)
setTimeout(() => {
  if (data.admin) {
    navigate('/pedidos')
  } else {
    navigate('/')
  }
}, 1000)}



    return (
        <Container>
            <Logo src = {LoginImg} alt='login-image'/>
            <ContainerItems>
                <img src={LogoImg} alt='logo-code-burguer' />
                <Title>Login</Title>
                <form  onSubmit={handleSubmit(onSubmit)}>
                <Label>Email</Label>
                <Input type= "email "{...register("email")} error={errors.email?.message}/>
                 <Error>{errors.email?.message}</Error>
                <Label>Senha</Label>
                <Input type="password"  {...register("password")}  error={errors.password?.message} />
                <Error>{errors.password?.message}</Error>
                <Button   type="submit" style={{marginTop:20, marginBottom:25}} >Sign In</Button> 
                </form>
                <SignInLink>Não possui conta?{''} <Link style={{color:'white'}} to="/cadastro">Sign Up</Link></SignInLink>
            </ContainerItems>

        </Container>
    );
}


