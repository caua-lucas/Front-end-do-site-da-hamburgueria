import styled from 'styled-components'
import BackgroundImage from '../../assets/background.svg'



export const Container = styled.div `
    height: 100vh;
    width: 100vw;
    background: url('${BackgroundImage}');
    display:flex;
    justify-content: center;
    align-items:center;
`


export const Logo = styled.img `
    height:70%;

`
export const ContainerItems = styled.div `
    background:#373737;
    border-radius:0px 10px 10px 0;
    height: 70%;
    padding:25px 75px;
    display: flex;
    flex-direction: column;
    justify-content: center;


`


export const Title = styled.h1`
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    color:#ffffff;
    text-align: center;
    margin-top: 100px;
`


export const Label = styled.p`
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    color:#ffffff;
    margin-top: 28px;

`


export const Input = styled.input `
    height: 30px;
    width: 300px;
    background:#ffffff;
    box-shadow:3px 3px 10px rgba(74,144,226,0.19);
    border-radius: 5px;
    border:none;
    padding-left: 10px;

`


export const Button = styled.button `
    width:182.81px ;
    height: 36.13px;
    background: #9758A6;
    border-radius: 20px;
    cursor:pointer;
    margin-top: 20px;
    margin-left: 60px;
`


export const SignInLink = styled.p ``


