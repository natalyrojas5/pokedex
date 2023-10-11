import './styles.css';

import { defaultImg } from '@/utils';

export const CardPokemon = ({ id, img = defaultImg, name }) => {
  return (
    <article className='c-card-pokemon square'>
      <header className='header'>
        <h2 className='name'>{name}</h2>
        <p className='id'>({id})</p>
      </header>
      <img className='square' src={img} />
      <div className='decoration'>
        <div className='circle'></div>
        <div className='lines'>
          {Array.from(Array(3)).map((_, i) => <div key={i} className='line'></div>)}
        </div>
      </div>
    </article>
  )
}
