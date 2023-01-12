import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import "./ButtonCustom.scss"

const ButtonCustom = ({children, to}) => {
  return (
    <Link to={to} className="ButtonCustom">
        {children}
    </Link>
  )
}

ButtonCustom.propTypes = {
    children: PropTypes.node,
    to: PropTypes.string
}

ButtonCustom.defaultProps = {
    children: null,
    to: '/'
}

export default ButtonCustom