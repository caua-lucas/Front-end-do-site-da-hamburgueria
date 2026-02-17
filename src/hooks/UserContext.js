
import { createContext, useContext, useEffect, useState } from 'react'
import PropTypes from "prop-types"


const UserContext = createContext({})

const UserProvider = ({ children }) => {
    const  [userData, setUserData] = useState({})
    const putUserData = async userInfo => {
        setUserData(userInfo)

        await localStorage.setItem('codeburger:userData', JSON.stringify(userInfo)) // gravando no Local Storage(somente pode guardar string)
    }
    const logout = async ()=> {
        await localStorage.removeItem('codeburger:userData')
    }
        useEffect( () => {
            const loadUserData = async () => {
                const clientInfo = await localStorage.getItem('codeburger:userData')

                if(clientInfo){
                    setUserData(JSON.parse(clientInfo))
                }
            }
             loadUserData()
        },[])


    return (
        <UserContext.Provider value={{putUserData, userData, logout}}>
            {children}
        </UserContext.Provider>
    )
}

export const useUser = () => {
    const context = useContext(UserContext)

    if (!context) {
        throw new Error("useUser must be used within UserProvider")
    }

    return context
}



export default UserProvider
