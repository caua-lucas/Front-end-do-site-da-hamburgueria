import React from 'react'
import { Container,RegisterImage,ContainerItems,Input,Label,SignInLink,Title,Error } from './styles';
import LogoImg from '../../assets/logo.svg'
import Button from '../../components/Button'
import { useForm, } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import api from '../../services/api'
import * as Yup from "yup"
import RegisterImg from '../../assets/fire-burger.svg'
import { toast, Bounce } from 'react-toastify'
import { ToastContainer } from 'react-toastify';



function Register() {
        const schema = Yup.object().shape({
            name: Yup.string('O seu nome é obrigátorio').required('O seu nome é obrigátorio'),
            email: Yup.string().email("Digite um email válido").required("O e-mail é obrigatório"),
            password: Yup.string().required("A senha é obrigatória").min(6,"A senha deve ter pelo menos 6 digitos"),
            confirmPassword: Yup.string().required("A senha é obrigatória").oneOf([Yup.ref('password')],'As senhas devem ser iguais'),
        })
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    })

const onSubmit = async (clientData) => {
  try {
    const {status} = await api.post('users', {
      name: clientData.name,
      email: clientData.email,
      password: clientData.password,
    },{validateStatus:() => true}
)

    if (status === 201 || status === 200){
    toast.success('Cadastro criado com sucesso')
    }else if(status === 409){
        toast.error('E-mail já cadastrado! Faça login para continuar')
    }else{
        throw new Error()
    }
  } catch (err) {
    toast.error("Falha no sistema! Tente novamente")
  }
}


    return (
        <Container>
            <RegisterImage src = {RegisterImg} alt='login-image'/>
            <ContainerItems>
                <img src={LogoImg} alt='logo-code-burguer' />
                <Title >Cadastre-se</Title>
                <form  onSubmit={handleSubmit(onSubmit)}>
                <Label error={errors.name}>Nome</Label>
                <Input type="text" {...register("name")} error={errors.name} />
                <Error>{errors.name?.message}</Error>

                <Label error={errors.email}>Email</Label>
                <Input type="email" {...register("email")} error={errors.email} />
                <Error>{errors.email?.message}</Error>

                <Label error={errors.password}>Senha</Label>
                <Input type="password" {...register("password")} error={errors.password} />
                <Error>{errors.password?.message}</Error>

                <Label error={errors.confirmPassword}>Confirmar Senha</Label>
                <Input
                type="password"
                {...register("confirmPassword")}
                error={errors.confirmPassword}
                />
                <Error>{errors.confirmPassword?.message}</Error>


                <Button  type="submit" style={{marginTop:15, marginBottom:18}} >Sign Up</Button> 
                </form>
                <SignInLink>Já possui conta? <a>Sign In</a></SignInLink>
            </ContainerItems>

        </Container>
    );
}


export default Register