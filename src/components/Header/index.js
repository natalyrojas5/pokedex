import './styles.css';

export const Header = () => {
  return (
    <>
      <header className="c-header">
        <div className='circles'>
          <div className="circle-main circle">
            <div className='circle-b-cyan circle'></div>
          </div>
          <div className="circle-s-red circle"></div>
          <div className="circle-s-yellow circle"></div>
          <div className="circle-s-green circle"></div>
        </div>
        <h1 className='title'>Pokedex</h1>
      </header>
      <div className='c-header-line'></div>
    </>
  )
}
