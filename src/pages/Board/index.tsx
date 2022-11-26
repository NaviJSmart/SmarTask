import React from 'react'
import NavTitle from '../../components/NavTitle'
import { useAppSelector } from '../../hooks/redux';
import './Board.scss'
interface BoardProps {
    selected: {id: string; name:string} | null;
  }
const Board = ({ selected} : BoardProps) => {
    const {isHide} = useAppSelector(state => state.menuToggle)
    const activeBoard = isHide ? "Board Board__full" : 'Board'
    
  return (
    <div className={activeBoard}>
        <NavTitle selected={selected}/>
    </div>
  )
}

export default Board