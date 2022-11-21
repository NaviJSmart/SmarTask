import React from 'react'
import './InputSearch.scss'
import {ReactComponent as Search} from '../../assets/search.svg'
const InputSearch = () => {
  return (
    <div className='InputSearch'>
        <Search width="22" height="22"/>
        <input type="text" placeholder='Search task...'/>
    </div>
  )
}

export default InputSearch