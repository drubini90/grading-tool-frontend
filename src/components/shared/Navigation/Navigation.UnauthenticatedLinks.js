import React from 'react'
import { Link } from 'react-router-dom'

export default () => (
  <ul className='nav justify-content-end'>
    <li className='nav-item'>
      <Link className='nav-link' to='/login'>Login</Link>
    </li>
    <li className='nav-item'>
      <Link className='nav-link' to='/signup'>Signup</Link>
    </li>
  </ul>
)
