import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {Login,Register,Home,Products,Cart} from '../containers'
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
                <Route path="/produtos" element={
                        <PrivateRoute>
                            <Products />
                        </PrivateRoute>
                    }
                    
                />
                <Route path="/carrinho" element={
                        <PrivateRoute>
                            <Cart />
                        </PrivateRoute>
                    }
                    
                />
            </Routes>
        </Router>
    )
}

export default AppRoutes
