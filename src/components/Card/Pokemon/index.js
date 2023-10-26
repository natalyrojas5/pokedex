import './styles.css';

import { defaultImg } from '@/utils';
import { Button } from '@/components';

export const CardPokemon = ({
  id,
  img = defaultImg,
  name,
  onShowDetail,
  hasBtnDetail = true,
  hasDecoration = true,
}) => {
  return (
    <article className='c-card-pokemon square'>
      <header className='header'>
        <h2 className='name'>{name}</h2>
        {id && <p className='id'>({id})</p>}
      </header>
      <div className='pokemon'>
        <img className='square' src={img} />
        {
          hasBtnDetail &&
          <Button text="Ver detalle" className="btn-see-more" onClick={onShowDetail} />
        }
      </div>
      {
        hasDecoration &&
        <div className='decoration'>
          <div className='circle'></div>
          <div className='lines'>
            {Array.from(Array(3)).map((_, i) => <div key={i} className='line'></div>)}
          </div>
        </div>
      }
    </article>
  )
}
