import { UserRoundPen, UserRoundPlus, Users, UserSearch } from 'lucide-react'
import './StatsOverview.css'

const StatsOverview = () => {
  return (
    <div className='overview'>
      <div className='overview-column'>
        <Users strokeWidth={1} size={50} color='#4464c5'/>
        <span>Contatos <br /> 567</span>
      </div>
      <div className='overview-column'>
        <UserRoundPen strokeWidth={1} size={50} color='#46af65'/>
        <span>Lideranças <br /> 51</span>
      </div>
      <div className='overview-column'>
        <UserRoundPlus strokeWidth={1} size={50} color='#46afa8'/>
        <span>Últimos 7 dias <br /> 1</span>
      </div>
      <div className='overview-column'>
        <UserSearch strokeWidth={1} size={50} color='#dc5050'/>
        <span>Sem Local <br /> 113</span>
      </div>
    </div>
  )
}

export default StatsOverview
