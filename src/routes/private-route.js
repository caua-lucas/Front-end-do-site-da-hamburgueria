import { Navigate } from 'react-router-dom'
import PropTypes from 'prop-types'

function PrivateRoute({ children }) {
    const user = localStorage.getItem('codeburger:userData')

    if (!user) {
        return <Navigate to="/login" replace />
    }

    return children
}

PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired
}

export default PrivateRoute
