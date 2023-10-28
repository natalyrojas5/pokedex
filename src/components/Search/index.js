import './styles.css';
import { Button } from '../Button';

export const Search = ({ onChange, onSearch, value }) => {
  return (
    <article className='c-search square'>
      <input
        value={value}
        placeholder="Buscar"
        onChange={onChange}
      />
      <Button
        text="Buscar"
        className={value ? '' : 'disabled'}
        onClick={onSearch}
      />
    </article>
  )
}
