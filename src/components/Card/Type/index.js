import '../styles.css';

export const CardType = ({ type, slot }) => {
  return (
    <article className="c-card square">
      <div className="texts">
        <p className='title'>{type.name}</p>
      </div>
      <div className="texts">
        <strong>
          <p>Slot:</p>
        </strong>
        <p>{slot}</p>
      </div>
    </article>
  )
}
