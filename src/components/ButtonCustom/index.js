import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import "./ButtonCustom.scss"

const ButtonCustom = ({children, to, className}) => {
  return (
    <Link to={to} className={`ButtonCustom ${className}`} >
        {children}
    </Link>
  )
}

ButtonCustom.propTypes = {
    children: PropTypes.node,
    to: PropTypes.string,
    className: PropTypes.string
}

ButtonCustom.defaultProps = {
    children: null,
    to: '/',
    className: ''
}

export default ButtonCustom