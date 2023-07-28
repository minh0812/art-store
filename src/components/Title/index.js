import React from 'react'
import './title.scss'

const Title = () => {
  return (
    <div className='title'>
        <h4>Products</h4>
        <ul>
            <li className='title__item'>Home</li>
            <li>|</li>  
            <li className='title__item'>Products</li>
            <li>|</li>
            <li className='title__item'>Product Details</li>
        </ul>
    </div>
  )
}
export default Title