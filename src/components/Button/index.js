import React from 'react'
import PropTypes from 'prop-types'
import {ContainerButton} from './styles'
import propTypes from 'prop-types'


export function Button({ children, ...rest }) {
    console.log(rest)
    return <ContainerButton{...rest}>{children}</ContainerButton>
}




Button.PropTypes= {
    children: PropTypes.string
}