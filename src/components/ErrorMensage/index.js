import React from 'react'
import { ErrorMessageStyle } from './styles'
import PropTypes from 'prop-types'

export function ErrorMessage({ children }) {
    return (
        <ErrorMessageStyle>{children}</ErrorMessageStyle>
    )
}

ErrorMessage.propTypes = {
    children: PropTypes.string
}