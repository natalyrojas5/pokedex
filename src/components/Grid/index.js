import './styles.css';
import { CARD_ITEMS } from '@/types';

export const Grid = ({ title, itemName, items = [], showLine = true }) => {
  const Component = CARD_ITEMS[itemName];
  return (
    <section className='c-grid scroll'>
      <h3 className='title'>{title}</h3>
      <div className='items'>
        {items.map((item, index) => <Component key={index} {...item} />)}
      </div>
      {showLine && <div className='line'></div>}
    </section>
  )
}
