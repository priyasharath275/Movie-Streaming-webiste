import React from 'react'
import Button from './Button'
const ButtonList = () => {
  return (
    <div className='flex'>
      <Button btn_name={"all"}></Button>
      <Button btn_name={"Gaming"}></Button>
      <Button btn_name={"Cricket"}></Button>
    </div>
  )
}

export default ButtonList
