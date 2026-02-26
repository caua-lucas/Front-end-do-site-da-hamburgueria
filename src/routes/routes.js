import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {Login,Register,Home,Products,Cart,Admin} from '../containers'
import PrivateRoute from '../routes/private-route'
import paths from '../constants/paths'

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
                <Route
                    path={paths.Order}
                    element={
                        <PrivateRoute isAdmin>
                            <Admin />
                        </PrivateRoute>
                    }
                />

                <Route path={paths.Products} element={
                        <PrivateRoute isAdmin>
                            <Admin />
                        </PrivateRoute>
                    }
                    
                />

                                <Route path={paths.NewProduct} element={
                        <PrivateRoute isAdmin>
                            <Admin />
                        </PrivateRoute>
                    }
                    
                />
                                <Route path={paths.EditProduct} element={
                        <PrivateRoute isAdmin>
                            <Admin />
                        </PrivateRoute>
                    }
                    
                />
            </Routes>
        </Router>
    )
}

export default AppRoutes
