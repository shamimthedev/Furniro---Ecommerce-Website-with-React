import React from 'react'

const Button = ({className, bText}) => {
  return (
    <button className={`${className}`}>{bText}</button>
  )
}

export default Button