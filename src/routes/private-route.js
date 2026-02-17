import { Navigate } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Header } from '../components/Header'

function PrivateRoute({ children, isAdmin }) {

    const user = JSON.parse(localStorage.getItem('codeburger:userData'))

    // não logado
    if (!user) {
        return <Navigate to="/login" replace />
    }

    // rota admin mas usuário não é admin
    if (isAdmin && !user.admin) {
        return <Navigate to="/" replace />
    }

    return (
        <>
            {/* não mostra header no admin */}
            {!isAdmin && <Header />}

            {children}
        </>
    )
}

PrivateRoute.propTypes = {

    children: PropTypes.node.isRequired,

    isAdmin: PropTypes.bool

}

export default PrivateRoute
