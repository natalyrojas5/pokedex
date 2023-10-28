import { defaultImg } from '@/utils';

export const Photo = ({ img = defaultImg }) => {
  return (
    <article className='c-photo square'>
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
