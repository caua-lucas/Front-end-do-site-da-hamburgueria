import React from 'react'
import {Container,ItemContainer,ListLink} from './styles'
import listLinks from './menu-list'
import LogoutIcon from '@mui/icons-material/Logout';
import {useUser} from '../../hooks/UserContext'
import PropTypes from 'prop-types';



export function SiteMenuAdmin({location}){
    const {logout} = useUser()

    return(
        <Container>
            <hr></hr>
            {listLinks.map(item =>(
            <ItemContainer key={item.id} isActive={location.pathname === item.link}>
                <item.icon  className='icon'/>
                <ListLink to={item.link}>{item.label}</ListLink>
            </ItemContainer>
            ))}
        <hr></hr>
        <ItemContainer style={{position: 'fixed', bottom:'30px'}}>
            <LogoutIcon style={{color:'#FFFFFF'}}/>
            <ListLink to="/login" onClick={logout}>Sair</ListLink>
        </ItemContainer>
        </Container>
    )
}

SiteMenuAdmin.propTypes = {

    location: PropTypes.object

}
