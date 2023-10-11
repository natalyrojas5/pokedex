import './styles.css';
import { Button } from '../Button'

export const Pagination = ({ next, previous, onClick }) => {
  const colorBg = "#41ff8d";

  return (
    <article className='c-pagination'>
      <Button
        text="Anterior"
        bg={colorBg}
        onClick={() => onClick(previous)}
        className={previous ? '' : 'disabled'}
      />

      <Button
        text="Siguiente"
        bg={colorBg}
        onClick={() => onClick(next)}
        className={next ? '' : 'disabled'}
      />
    </article>
  )
}
