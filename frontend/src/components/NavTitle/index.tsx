import { useAppSelector } from '../../hooks/redux'
import './NavTitle.scss'

const NavTitle = () => {
    const {selectedBoard} = useAppSelector(state => state.allBoards)
    const contructTitle = selectedBoard && selectedBoard?.title.length > 20 ? selectedBoard?.title.slice(0, 15) + ' ...' : selectedBoard?.title
  return (
    <h2 className='NavTitle'>{contructTitle}</h2>
  )
}

export default NavTitle