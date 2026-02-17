import CartLogo from '../../assets/logo-pedidos.svg'
import { Container, ContainerLeft, ContainerRight, ContainerText, PageLink, Line, PageLinkExit } from './styles'
import Person from '../../assets/profile-logo.svg'
import Cart from '../../assets/cart-logo.svg'
import { useNavigate, useLocation } from 'react-router-dom'
import { useUser } from '../../hooks/UserContext'

export function Header(){
    const {logout, userData} = useUser()
    const navigate = useNavigate()
    const { pathname } = useLocation()

    const logoutUser = () => {
        logout()
        navigate('/login')
    }

    return(
        <Container>

            <ContainerLeft>
                <PageLink 
                    onClick={() => navigate('/')} 
                    isActive={pathname === '/'}
                >
                    Home
                </PageLink>

                <PageLink 
                    onClick={() => navigate('/produtos')} 
                    isActive={pathname === '/produtos'}
                >
                    Ver produtos
                </PageLink>
            </ContainerLeft>

            <ContainerRight>
                <PageLink 
                    onClick={() => navigate('/carrinho')} 
                    isActive={pathname === '/carrinho'}
                >
                    <img src={Cart} alt='carrinho'/>
                </PageLink>

                <Line />

                <PageLink>
                    <img src={Person} alt='pessoa'/>
                </PageLink>

                <ContainerText>
                    <p>Olá, {userData.name}</p>
                    <PageLinkExit onClick={logoutUser}>
                        Sair
                    </PageLinkExit>
                </ContainerText>
            </ContainerRight>

        </Container>
    )
}
