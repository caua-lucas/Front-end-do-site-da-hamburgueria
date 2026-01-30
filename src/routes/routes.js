import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from '../containers/Login'
import Register from '../containers/Register'
import Home from '../containers/Home'
import PrivateRoute from '../routes/private-route'

function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/cadastro" element={<Register />} />

                <Route path="/" element={
                        <PrivateRoute>
                            <Home />
                        </PrivateRoute>
                    }
                />
            </Routes>
        </Router>
    )
}

export default AppRoutes
