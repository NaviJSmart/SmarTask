import React from 'react'
import './NavTitle.scss'
interface NavProps  {
   selected:  {id: string; name:string} | null;
}
const NavTitle = ({selected} : NavProps) => {
    const contructTitle = selected && selected?.name.length > 20 ? selected?.name.slice(0, 15) + ' ...' : selected?.name
  return (
    <h2 className='NavTitle'>{contructTitle}</h2>
  )
}

export default NavTitle