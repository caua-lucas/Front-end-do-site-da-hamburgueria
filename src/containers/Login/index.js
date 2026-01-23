import React from 'react'
import { Container,Logo,ContainerItems,Input,Label,Button,SignInLink,Title } from './styles';

import LoginImg from '../../assets/login-burger.svg'

function Login() {
    return (
        <Container>
            <Logo src = {LoginImg} alt='login-image'/>
            <ContainerItems>
                <img/>
                <Title>Login</Title>
                <Label>Email</Label>
                <Input/>
                <Label>Senha</Label>
                <Input/>
                <Button>SignIn</Button>
                <SignInLink>Não possui conta? <a>SignUp</a></SignInLink>
            </ContainerItems>

        </Container>
    );
}


export default Login