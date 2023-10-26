import { Button } from '../Button'
import './style.css'

export const GoBack = ({ onGoBack }) => {
  return (
    <div className='c-go-back'>
      <Button text="Regresar" className="btn" onClick={onGoBack} />
    </div>
  )
}
