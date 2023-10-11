import './styles.css'

export const Button = ({ text, bg, onClick, className }) => {
  return (
    <button style={{ backgroundColor: bg }} className={'c-button square ' + className} onClick={onClick}>
      {text}
    </button>
  )
}
