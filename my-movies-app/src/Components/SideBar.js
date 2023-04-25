import React from 'react'
import { useSelector } from 'react-redux'

const SideBar = () => {
  const isMenuOpen = useSelector(store => store.app.isMenuOpen);
  if(!isMenuOpen) return null;
  return (
    <div>
   <div className='border border-2  m-2 p-2 shadow-lg col-span-1 z-50' >
                  <ul className='pt-5'>
                    <li>Home</li>
                    <li>Videos</li>
                    <li>Shorts</li>
                  </ul>
                  
                  <ul className='pt-5'>
                  <h3 className='font-bold'>Subcriptions</h3>
                    <li>Music</li>
                    <li>Gaming</li>
                    <li>Sports</li>
                  </ul>
                 
                  <ul className='pt-5'>
                  <h3 className='font-bold'>Watch later</h3>
                    <li>Music</li>
                    <li>Gaming</li>
                    <li>Sports</li>
                  </ul>
     </div>
    </div>
  )
}

export default SideBar
