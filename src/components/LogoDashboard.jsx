import React from 'react'
import { ImgLogo } from '../styles/logoDashboard'

const LogoDashboard = ({imageUrl}) => {
  return (
    <div>
        <ImgLogo src={imageUrl} alt="logo" />
    </div>
  )
}

export default LogoDashboard