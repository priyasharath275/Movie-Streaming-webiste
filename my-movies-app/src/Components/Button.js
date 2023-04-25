import React from 'react'

const Button = ({btn_name}) => {
  return (
    <div>
      <button className='m-2 px-5 py-2 rounded-md bg-gray-200' >{btn_name}</button>
    </div>
  )
}

export default Button
